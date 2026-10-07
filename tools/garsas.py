"""Sugeneruoja balso įrašus svetainei: audio/<id>.mp3 ir audio/frazes.js.

Balsas – lt_LT-reginute1-medium (Piper, VITS; RobertasTa, CC-BY-4.0, apmokytas LIEPA
korpusu). Meta MMS lietuvių TTS modelio neturi, todėl naudojamas šis.

Reikia: python3 su numpy ir onnxruntime, espeak-ng, ffmpeg, node.
Jei įdiegtas piper-tts, naudojamas jis; jei ne – mažas pakaitalas tools/piper_lite.
Modelio failai (~70 MB) parsiunčiami į tools/modelis/ pirmą kartą paleidus.

  python3 tools/garsas.py          # sugeneruoja trūkstamas frazes, ištrina nebereikalingas
  python3 tools/garsas.py --visi   # perrašo visas
"""
import hashlib
import json
import re
import subprocess
import sys
import urllib.request
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MODEL_DIR = ROOT / "tools" / "modelis"
AUDIO_DIR = ROOT / "audio"
REPO = "https://huggingface.co/RobertasTa/lt_LT-reginute1-medium/resolve/main/"
FILES = ["lt_LT-reginute1-medium.onnx", "lt_LT-reginute1-medium.onnx.json", "phonemize_lithuanian.py",
         "skaiciu_pletiklis.py", "synth_reginute.py", "lt_kirciai.tsv", "lt_raides.tsv",
         "lt_kreipiniai.tsv", "zodziai_trumpi.txt", "SHA256SUMS"]

# Svetainės tekstai, kuriuos skaičių plėtiklis perskaitytų netaisyklingai (laipsniai,
# intervalai, „apie N minutės“). Keičiama tik tai, kas sakoma, ne tai, kas rodoma ekrane.
TARIMAS = [
    (r"apie (\d+) minutės", r"apie \1 minutes"),
    (r"sulenk 90° kampu", "sulenk devyniasdešimties laipsnių kampu"),
    (r"kelias 90°", "kelias sulenktas devyniasdešimties laipsnių kampu"),
    (r"apie 45°", "apie keturiasdešimt penkis laipsnius"),
    (r"apie 20–25 cm", "per dvidešimt ar dvidešimt penkis centimetrus"),
    (r"\(kaip 2 pratime\)", "(kaip antrame pratime)"),
    (r"\b1 s pauzė", "sekundės pauzė"),
    (r"\b(\d+) s\b", r"\1 sekundes"),
    (r"Katė–karvė", "Katė karvė"),
    (r"Paukštis–šuo", "Paukštis šuo"),
]


def parsiusk_modeli():
    MODEL_DIR.mkdir(parents=True, exist_ok=True)
    for f in FILES:
        if not (MODEL_DIR / f).exists():
            print("parsiunčiu", f, file=sys.stderr)
            urllib.request.urlretrieve(REPO + f, MODEL_DIR / f)
    for line in (MODEL_DIR / "SHA256SUMS").read_text().splitlines():
        h, name = line.split()
        p = MODEL_DIR / name.lstrip("*")
        if p.exists() and hashlib.sha256(p.read_bytes()).hexdigest() != h:
            sys.exit(f"{name}: kontrolinė suma nesutampa")


def main():
    visi = "--visi" in sys.argv
    parsiusk_modeli()
    sys.path.insert(0, str(MODEL_DIR))
    try:
        import piper  # noqa: F401
    except ImportError:
        sys.path.insert(0, str(ROOT / "tools" / "piper_lite"))
    from piper import PiperVoice
    from phonemize_lithuanian import LithuanianPhonemizer
    from skaiciu_pletiklis import isplesk
    from synth_reginute import ReginuteSynth, i_int16

    frazes = json.loads(subprocess.run(["node", str(ROOT / "tools" / "frazes.js")], capture_output=True,
                                       text=True, check=True).stdout)
    voice = PiperVoice.load(str(MODEL_DIR / "lt_LT-reginute1-medium.onnx"))
    synth = ReginuteSynth(voice, LithuanianPhonemizer(expand_text=None), expand_text=isplesk, taskas=0.35)
    sr = voice.config.sample_rate

    AUDIO_DIR.mkdir(exist_ok=True)
    for i, (fid, text) in enumerate(sorted(frazes.items(), key=lambda x: x[1])):
        mp3 = AUDIO_DIR / f"{fid}.mp3"
        if mp3.exists() and not visi:
            continue
        sakoma = text
        for a, b in TARIMAS:
            sakoma = re.sub(a, b, sakoma)
        if re.search(r"\d", isplesk(sakoma)):
            print("ĮSPĖJIMAS: liko skaitmenų:", isplesk(sakoma), file=sys.stderr)
        audio = synth.synthesize(sakoma)
        # Tyla gale nereikalinga: balsas turi baigti kuo greičiau, kad spėtų iki kito ritmo nurodymo
        audio = audio[: len(audio) - int(sr * 0.75)]
        tmp = AUDIO_DIR / f"{fid}.wav"
        with wave.open(str(tmp), "wb") as w:
            w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr); w.writeframes(i_int16(audio))
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", str(tmp), "-ac", "1", "-b:a", "48k", str(mp3)], check=True)
        tmp.unlink()
        print(f"{i + 1}/{len(frazes)} {fid} {len(audio) / sr:.1f} s  {text[:70]}", file=sys.stderr)

    for f in AUDIO_DIR.glob("*.mp3"):
        if f.stem not in frazes:
            f.unlink()
            print("ištrinta", f.name, file=sys.stderr)
    # Failų id ir trukmė sekundėmis (svetainė iš anksto parsiunčia tik trumpas frazes)
    durs = {}
    for fid in sorted(frazes):
        out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0",
                              str(AUDIO_DIR / f"{fid}.mp3")], capture_output=True, text=True, check=True).stdout
        durs[fid] = round(float(out), 1)
    (AUDIO_DIR / "frazes.js").write_text(
        "// Sugeneruota tools/garsas.py – nekeisti ranka. Įrašytos frazės: failo id -> trukmė (s).\n"
        "const AUDIO_FILES = " + json.dumps(durs, separators=(",", ":")) + ";\n", encoding="utf-8")


if __name__ == "__main__":
    main()
