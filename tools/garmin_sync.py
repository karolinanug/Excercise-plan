"""Parsiunčia Karolinos Garmin duomenis ir įrašo juos užšifruotus į garmin/duomenys.enc.

Paleidžia GitHub Actions (.github/workflows/garmin.yml) kelis kartus per dieną. Naudoja
neoficialią biblioteką python-garminconnect (Garmin oficialaus API asmeniniam naudojimui neduoda).

Aplinkos kintamieji (GitHub Secrets):
  GARMIN_EMAIL, GARMIN_PASSWORD – Garmin Connect prisijungimas
  DUOMENU_RAKTAS                – atsitiktinis raktas; juo šifruojami duomenys ir prisijungimo
                                  žetonas, tą patį raktą svetainėje įvedi telefone

Jei Garmin prisijungiant paprašo kodo iš el. pašto, skriptas parašo komentarą GitHub issue
„Garmin kodas“ ir iki 10 min. laukia, kol savininkė atsakys komentaru su kodu. Kodas panaudojamas
ir komentaras ištrinamas. Vėliau jungiamasi išsaugotu žetonu, todėl kodo nebereikia.

Repozitorija vieša, todėl:
  * duomenys ir žetonas saugomi tik užšifruoti (PBKDF2-SHA256 + AES-256-GCM, iššifruoja js/health.js);
  * į žurnalą (Actions log, irgi viešas) nerašomi jokie sveikatos skaičiai.
"""
import base64
import json
import os
import re
import sys
import time
import urllib.request
from datetime import datetime, timezone
from datetime import date, timedelta
from pathlib import Path

from cryptography.hazmat.primitives.ciphers.aead import AESGCM
from cryptography.hazmat.primitives.hashes import SHA256
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from garminconnect import Garmin

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "garmin" / "duomenys.enc"
TOKEN = ROOT / "garmin" / "zetonas.enc"
ITER = 310_000
FIRST_DAYS = 30   # pirmą kartą parsiunčiama tiek dienų atgal
DAYS = 4          # vėliau – tik paskutinės dienos (vakar dar gali pasikeisti)
# Paleista iš svetainės (GREITAI=true): tik šiandien ir vakar, failas įrašomas visada, kad
# svetainė pagal „updated“ matytų, jog atnaujinta
QUICK = os.environ.get("GREITAI", "").lower() == "true"
KEEP_DAYS = 180


def _key(password: str, salt: bytes) -> bytes:
    return PBKDF2HMAC(algorithm=SHA256(), length=32, salt=salt, iterations=ITER).derive(password.encode())


def encrypt(obj, password: str) -> str:
    salt, iv = os.urandom(16), os.urandom(12)
    data = AESGCM(_key(password, salt)).encrypt(iv, json.dumps(obj, ensure_ascii=False).encode(), None)
    b = lambda x: base64.b64encode(x).decode()
    return json.dumps({"v": 1, "iter": ITER, "salt": b(salt), "iv": b(iv), "data": b(data)}) + "\n"


def decrypt(path: Path, password: str):
    blob = json.loads(path.read_text())
    d = lambda k: base64.b64decode(blob[k])
    pt = AESGCM(_key(password, d("salt"))).decrypt(d("iv"), d("data"), None)
    return json.loads(pt)


ISSUE_TITLE = "Garmin kodas"
MFA_WAIT = 600


def gh(method, path, body=None):
    req = urllib.request.Request(
        f"https://api.github.com/repos/{os.environ['GITHUB_REPOSITORY']}{path}", method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={"Authorization": f"Bearer {os.environ['GITHUB_TOKEN']}", "Accept": "application/vnd.github+json"})
    with urllib.request.urlopen(req) as r:
        raw = r.read()
    return json.loads(raw) if raw else None


def prompt_mfa() -> str:
    """Garmin el. pašto kodas per GitHub issue komentarą (Actions neturi kur jo įvesti)."""
    if not os.environ.get("GITHUB_TOKEN"):
        return input("Garmin kodas iš el. pašto: ").strip()
    owner = os.environ.get("GITHUB_REPOSITORY_OWNER", "")
    issues = gh("GET", "/issues?state=all&per_page=100") or []
    issue = next((i for i in issues if i.get("title") == ISSUE_TITLE and "pull_request" not in i), None)
    if issue is None:
        issue = gh("POST", "/issues", {"title": ISSUE_TITLE, "body":
                   "Čia Garmin duomenų parsisiuntimas prašo prisijungimo kodo, kai Garmin jį atsiunčia el. paštu."})
    elif issue.get("state") != "open":
        gh("PATCH", f"/issues/{issue['number']}", {"state": "open"})
    n = issue["number"]
    asked = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    gh("POST", f"/issues/{n}/comments", {"body":
       f"@{owner} Garmin atsiuntė prisijungimo kodą į tavo el. paštą. Parašyk čia komentarą, kuriame būtų tik tas kodas. "
       f"Laukiu {MFA_WAIT // 60} min. Kodą panaudosiu ir komentarą ištrinsiu."})
    print(f"Laukiamas Garmin kodas issue #{n}")
    end = time.time() + MFA_WAIT
    while time.time() < end:
        time.sleep(10)
        for c in gh("GET", f"/issues/{n}/comments?since={asked}&per_page=100") or []:
            m = re.search(r"\b(\d{4,8})\b", c.get("body") or "")
            if m and c["user"]["login"].lower() == owner.lower() and c["created_at"] >= asked:
                try:
                    gh("DELETE", f"/issues/comments/{c['id']}")
                except Exception:
                    pass
                gh("PATCH", f"/issues/{n}", {"state": "closed"})
                print("Kodas gautas")
                return m.group(1)
    sys.exit(f"Garmin kodo negavau per {MFA_WAIT // 60} min. Paleisk iš naujo.")


def dig(obj, *keys):
    for k in keys:
        if not isinstance(obj, dict):
            return None
        obj = obj.get(k)
    return obj


def call(name, fn, *args):
    try:
        return fn(*args)
    except Exception as e:  # vienos dienos ar vieno rodiklio klaida neturi sustabdyti visko
        print(f"  {name}: nepavyko ({type(e).__name__})")
        return None


def day_entry(api: Garmin, d: str) -> dict:
    stats = call("suvestinė", api.get_stats, d) or {}
    sleep = call("miegas", api.get_sleep_data, d) or {}
    hrv = call("HRV", api.get_hrv_data, d) or {}
    dto = sleep.get("dailySleepDTO") or {}
    sleep_s = dto.get("sleepTimeSeconds")
    bb = stats.get("bodyBatteryAtWakeTime") or stats.get("bodyBatteryHighestValue")
    e = {
        "d": d,
        "steps": stats.get("totalSteps"),
        "rhr": stats.get("restingHeartRate"),
        "stress": stats.get("averageStressLevel") if (stats.get("averageStressLevel") or -1) >= 0 else None,
        "bb": bb,
        "bbLow": stats.get("bodyBatteryLowestValue"),
        "sleep": round(sleep_s / 3600, 1) if sleep_s else None,
        "sleepScore": dig(dto, "sleepScores", "overall", "value") or dig(sleep, "sleepScores", "overall", "value"),
        "hrv": dig(hrv, "hrvSummary", "lastNightAvg"),
        "hrvStatus": dig(hrv, "hrvSummary", "status"),
    }
    return {k: v for k, v in e.items() if v is not None}


def main():
    email, password, key = (os.environ.get(k, "").strip() for k in ("GARMIN_EMAIL", "GARMIN_PASSWORD", "DUOMENU_RAKTAS"))
    if not (email and password and key):
        sys.exit("Trūksta GitHub Secrets: GARMIN_EMAIL, GARMIN_PASSWORD, DUOMENU_RAKTAS")
    if len(key) < 20:
        sys.exit("DUOMENU_RAKTAS per trumpas – sugeneruok jį: openssl rand -base64 24")

    old_token = None
    if TOKEN.exists():
        try:
            old_token = decrypt(TOKEN, key)["tokens"]
        except Exception:
            print("Išsaugotas žetonas neiššifruojamas – jungiamasi slaptažodžiu")

    def why(e):  # tik klaidos tipas ir HTTP kodas – pranešimuose gali būti asmeninių duomenų
        status = getattr(getattr(e, "response", None), "status_code", None)
        return type(e).__name__ + (f", HTTP {status}" if status else "")

    api = Garmin(email, password, prompt_mfa=prompt_mfa)
    try:
        api.login(old_token) if old_token else api.login()
    except Exception as e:
        if not old_token:
            sys.exit(f"Prisijungti prie Garmin nepavyko ({why(e)})")
        print(f"Žetonas nebetinka ({why(e)}) – jungiamasi slaptažodžiu")
        api = Garmin(email, password, prompt_mfa=prompt_mfa)
        try:
            api.login()
        except Exception as e2:
            sys.exit(f"Prisijungti prie Garmin nepavyko ({why(e2)})")
    print("Prisijungta prie Garmin Connect")

    days = []
    if DATA.exists():
        try:
            days = decrypt(DATA, key).get("days", [])
        except Exception:
            print("Ankstesni duomenys neiššifruojami (pasikeitė raktas?) – pradedama iš naujo")
    n = (2 if QUICK else DAYS) if days else FIRST_DAYS
    today = date.today()
    by_day = {x["d"]: x for x in days}
    got = 0
    for i in range(n - 1, -1, -1):
        d = (today - timedelta(days=i)).isoformat()
        e = day_entry(api, d)
        if len(e) > 1:
            by_day[d] = {**by_day.get(d, {}), **e}
            got += 1
        time.sleep(1)
    oldest = (today - timedelta(days=KEEP_DAYS)).isoformat()
    days = sorted((x for x in by_day.values() if x["d"] >= oldest), key=lambda x: x["d"])
    # Kokie laukai gauti šiandien – tik pavadinimai, be reikšmių
    print(f"Dienų su duomenimis: {got}/{n}; šiandien gauta: {sorted(k for k in by_day.get(today.isoformat(), {}) if k != 'd')}")

    DATA.parent.mkdir(exist_ok=True)
    old = None
    if DATA.exists():
        try:
            old = decrypt(DATA, key).get("days")
        except Exception:
            pass
    if old != days or QUICK:
        DATA.write_text(encrypt({"updated": int(time.time()), "days": days}, key))
        print("garmin/duomenys.enc atnaujintas")
    new_token = api.client.dumps()
    if new_token != old_token:
        TOKEN.write_text(encrypt({"tokens": new_token}, key))
        print("garmin/zetonas.enc atnaujintas")


if __name__ == "__main__":
    main()
