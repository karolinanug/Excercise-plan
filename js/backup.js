// Įrašų atsarginė kopija GitHub'e, kad išvalius naršyklę nedingtų treniruotės ir serijos.
// Žurnalas užšifruojamas tuo pačiu Garmin raktu (PBKDF2-SHA256 + AES-256-GCM, kaip garmin/duomenys.enc)
// ir saugomas faile irasai/irasai.enc (šaka main).
// Skaitymui ir rašymui reikia GitHub rakto (fine-grained, tik ši repozitorija, Contents: Read and write).
// GitHub raktas laikomas tik telefone (niekur nekeliamas). Išvalius naršyklę įvedi Garmin ir GitHub
// raktus iš naujo, ir įrašai atsistato iš kopijos. Instrukcija – README.md.
const BACKUP = (() => {
  const REPO = "karolinanug/Excercise-plan", BRANCH = "main", FILE = "irasai/irasai.enc";
  const T_KEY = "karolina-gh-zetonas", ITER = 310000;
  const API = `https://api.github.com/repos/${REPO}/contents/`;
  // Būsena: off (nėra Garmin rakto), need-token, bad-token, ok, error
  let state = "off", lastSync = null;

  const b64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  const toB64 = u8 => { let s = ""; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode(...u8.subarray(i, i + 0x8000)); return btoa(s); };
  async function aesKey(pass, salt, iter, use) {
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: iter, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, [use]);
  }
  async function encrypt(obj, pass) {
    const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await aesKey(pass, salt, ITER, "encrypt"), new TextEncoder().encode(JSON.stringify(obj)));
    return JSON.stringify({ v: 1, iter: ITER, salt: toB64(salt), iv: toB64(iv), data: toB64(new Uint8Array(ct)) }) + "\n";
  }
  async function decrypt(blob, pass) {
    const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64(blob.iv) }, await aesKey(pass, b64(blob.salt), blob.iter, "decrypt"), b64(blob.data));
    return JSON.parse(new TextDecoder().decode(pt));
  }

  const token = () => { try { return localStorage.getItem(T_KEY) || ""; } catch (e) { return ""; } };
  const setTok = t => { try { localStorage.setItem(T_KEY, t); } catch (e) {} };
  const headers = tok => ({ Authorization: "Bearer " + tok, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" });
  const fail = (r) => { const e = new Error("http " + r.status); e.token = r.status === 401 || r.status === 403; e.conflict = r.status === 409 || r.status === 422; return e; };
  // Grąžina { sha, blob } arba null, jei kopijos dar nėra
  async function getFile() {
    const r = await fetch(`${API}${FILE}?ref=${BRANCH}&t=${Date.now()}`, { cache: "no-store", headers: headers(token()) });
    if (r.status === 404) return null;
    if (!r.ok) throw fail(r);
    const j = await r.json();
    return { sha: j.sha, blob: JSON.parse(atob(j.content.replace(/\s/g, ""))) };
  }
  async function putFile(text, sha) {
    const r = await fetch(API + FILE, { method: "PUT", headers: headers(token()),
      body: JSON.stringify({ message: "Įrašų kopija", content: btoa(text), branch: BRANCH, sha: sha || undefined }) });
    if (!r.ok) throw fail(r);
  }

  return {
    get state() { return state; },
    get lastSync() { return lastSync; },
    // Nuskaito kopiją: { sha, data } (data null, jei kopijos dar nėra) arba null, jei kopija neprijungta ar nepavyko
    async read(pass) {
      if (!pass) { state = "off"; return null; }
      if (!token()) { state = "need-token"; return null; }
      try {
        const f = await getFile();
        return { sha: f && f.sha, data: f ? await decrypt(f.blob, pass) : null };
      } catch (e) { state = e.token ? "bad-token" : "error"; return null; }
    },
    // Įrašo kopiją; jei kitas įrenginys spėjo įrašyti anksčiau, grąžina "conflict"
    async write(pass, data, sha) {
      try {
        await putFile(await encrypt(data, pass), sha);
        state = "ok"; lastSync = Date.now(); return "ok";
      } catch (e) {
        if (e.conflict) return "conflict";
        state = e.token ? "bad-token" : "error"; return "error";
      }
    },
    // Kopija jau sutampa su telefono įrašais
    synced() { state = "ok"; lastSync = Date.now(); },
    // Naujas GitHub raktas: patikrinama, ar juo galima rašyti į šią repozitoriją; saugomas tik telefone
    async setToken(tok) {
      tok = String(tok || "").trim();
      if (!tok) return false;
      try {
        const r = await fetch(`https://api.github.com/repos/${REPO}`, { cache: "no-store", headers: headers(tok) });
        if (!r.ok || !((await r.json()).permissions || {}).push) return false;
        setTok(tok); return true;
      } catch (e) { return false; }
    }
  };
})();
