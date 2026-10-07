// Garmin duomenys. Du šaltiniai:
// 1. garmin/duomenys.enc – kelis kartus per dieną parsiunčia GitHub Actions (tools/garmin_sync.py),
//    užšifruota raktu, kurį telefone įvedi vieną kartą; iššifruojama tik naršyklėje.
// 2. iPhone „Shortcuts“ nuoroda …/#zingsniai=8400&miegas=7.2&pulsas=58 (Apple Health).
//    Naudojama # dalis, nes ji nesiunčiama į serverį.
// Abu saugomi tik telefone (localStorage karolina-garmin ir karolina-health); Garmin svarbesnis.
// Instrukcija – README.md, skiltis „Garmin duomenys“.
const HEALTH = (() => {
  const KEY = "karolina-health", KEEP_DAYS = 120;
  const RHR_UP = 5;          // ramybės pulsas tiek ar daugiau virš įprasto – patariama lengviau
  const SLEEP_LOW = 6;       // valandos
  const WALK_STEPS = 7000;   // lengvą dieną: tiek žingsnių – pasivaikščiojimas laikomas atliktu
  const BB_LOW = 35;         // Body Battery ryte mažiau – patariama lengviau
  const GARMIN_URL = "garmin/duomenys.enc", G_KEY = "karolina-garmin", G_PASS = "karolina-garmin-raktas";
  const pad = n => String(n).padStart(2, "0");
  const dayKey = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  // „8 400“, „7,2 hr“, „58 count/min“ -> skaičius
  const num = v => {
    if (v == null || v === "") return null;
    const n = parseFloat(String(v).replace(",", ".").replace(/[^\d.]/g, ""));
    return isFinite(n) ? n : null;
  };
  // Miegas gali ateiti valandomis, minutėmis arba sekundėmis – atpažįstama pagal dydį
  const hours = v => v == null ? null : v > 1440 ? v / 3600 : v > 24 ? v / 60 : v;
  function load() {
    try { const a = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(a) ? a.filter(x => x && x.d) : []; }
    catch (e) { return []; }
  }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }

  // --- Garmin per GitHub Actions ---
  let garmin = [], gState = "off", gUpdated = null;
  try { const c = JSON.parse(localStorage.getItem(G_KEY) || "null"); if (c && Array.isArray(c.days)) { garmin = c.days; gUpdated = c.updated; gState = "ok"; } } catch (e) {}
  const listeners = [];
  const notify = () => listeners.forEach(f => f());
  const b64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
  // Formatas: { salt, iv, iter, data } – PBKDF2-SHA256 + AES-256-GCM (žr. tools/garmin_sync.py)
  async function decrypt(blob, pass) {
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, ["deriveKey"]);
    const key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt: b64(blob.salt), iterations: blob.iter, hash: "SHA-256" },
      base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
    const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64(blob.iv) }, key, b64(blob.data));
    return JSON.parse(new TextDecoder().decode(pt));
  }
  async function syncGarmin() {
    let blob;
    try {
      const r = await fetch(GARMIN_URL + "?t=" + Date.now(), { cache: "no-store" });
      if (!r.ok) return;              // Garmin dar neprijungtas – lieka tai, kas jau buvo
      blob = await r.json();
    } catch (e) { return; }
    let pass = null;
    try { pass = localStorage.getItem(G_PASS); } catch (e) {}
    if (!pass) { gState = "need-key"; return notify(); }
    try {
      const data = await decrypt(blob, pass);
      garmin = Array.isArray(data.days) ? data.days : []; gUpdated = data.updated || null; gState = "ok";
      try { localStorage.setItem(G_KEY, JSON.stringify({ days: garmin, updated: gUpdated })); } catch (e) {}
    } catch (e) { gState = "bad-key"; }
    notify();
  }
  // Abu šaltiniai vienoje lentelėje pagal dieną: Garmin reikšmės svarbesnės, žingsnių – didesnė
  function merged() {
    const m = new Map();
    load().forEach(x => m.set(x.d, Object.assign({}, x)));
    garmin.forEach(g => {
      const e = m.get(g.d) || { d: g.d };
      for (const k in g) if (g[k] != null) e[k] = k === "steps" ? Math.max(g[k], e.steps || 0) : g[k];
      m.set(g.d, e);
    });
    return [...m.values()].sort((a, b) => a.d < b.d ? -1 : 1);
  }

  let received = null, badSleep = null;
  // Grąžina true, jei nuorodoje buvo Garmin duomenų (ir juos išsaugo)
  function readLink() {
    const raw = (location.hash || "").replace(/^#/, "");
    if (!/(zingsniai|miegas|pulsas)=/.test(raw)) return false;
    const q = new URLSearchParams(raw);
    const steps = num(q.get("zingsniai")), rhr = num(q.get("pulsas"));
    let sleep = hours(num(q.get("miegas")));
    // Daugiau nei 16 val. – greičiausiai „Shortcut“ sudėjo persidengiančius įrašus; nesaugom
    badSleep = sleep != null && sleep > 16 ? Math.round(sleep * 10) / 10 : null;
    if (badSleep != null) sleep = null;
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    if (steps == null && sleep == null && rhr == null) { received = {}; return true; }
    const today = dayKey(new Date()), now = new Date();
    const oldest = dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - KEEP_DAYS));
    const all = load().filter(x => x.d >= oldest);
    let e = all.find(x => x.d === today);
    if (!e) { e = { d: today }; all.push(e); }
    // Žingsniai per dieną tik daugėja – paliekam didžiausią reikšmę
    if (steps != null) e.steps = Math.max(Math.round(steps), e.steps || 0);
    if (sleep != null) e.sleep = Math.round(sleep * 10) / 10;
    if (rhr != null) e.rhr = Math.round(rhr);
    all.sort((a, b) => a.d < b.d ? -1 : 1);
    save(all);
    received = e;
    return true;
  }
  readLink();

  const fmtNum = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const fmtH = h => String(h).replace(".", ",");
  return {
    WALK_STEPS,
    get received() { return received; },
    get badSleep() { return badSleep; },
    readLink,
    all: merged,
    get(d) { return merged().find(x => x.d === d) || null; },
    // Garmin būsena: off (neprijungta), need-key, bad-key, ok
    get garminState() { return gState; },
    get garminUpdated() { return gUpdated; },
    setGarminKey(p) { try { localStorage.setItem(G_PASS, String(p || "").trim()); } catch (e) {} return syncGarmin(); },
    syncGarmin,
    onChange(f) { listeners.push(f); },
    today() { return this.get(dayKey(new Date())); },
    // Įprastas ramybės pulsas – ankstesnių 14 dienų mediana (reikia bent 3 dienų)
    baseline(d = dayKey(new Date())) {
      const v = merged().filter(x => x.d < d && x.rhr).slice(-14).map(x => x.rhr).sort((a, b) => a - b);
      return v.length >= 3 ? v[Math.floor(v.length / 2)] : null;
    },
    text(x) {
      if (!x) return "";
      const p = [];
      if (x.sleep != null) p.push(`miegas ${fmtH(x.sleep)} val.${x.sleepScore != null ? ` (įvertis ${x.sleepScore})` : ""}`);
      if (x.bb != null) p.push(`Body Battery ${x.bb}`);
      if (x.rhr != null) p.push(`ramybės pulsas ${x.rhr}`);
      if (x.hrv != null) p.push(`HRV ${x.hrv}`);
      if (x.stress != null) p.push(`stresas ${x.stress}`);
      if (x.steps != null) p.push(`žingsniai ${fmtNum(x.steps)}`);
      return p.join(", ");
    },
    // { tired: bool, why: "..." } – ar šiandien patarti lengviau
    advice() {
      const t = this.today();
      if (!t) return null;
      const why = [], base = this.baseline();
      if (t.sleep != null && t.sleep < SLEEP_LOW) why.push(`miegojai tik ${fmtH(t.sleep)} val.`);
      if (t.rhr != null && base != null && t.rhr >= base + RHR_UP) why.push(`ramybės pulsas ${t.rhr}, o įprastai apie ${base}`);
      if (t.bb != null && t.bb < BB_LOW) why.push(`Body Battery tik ${t.bb}`);
      if (t.hrvStatus === "LOW" || t.hrvStatus === "POOR") why.push("HRV žemesnis nei įprastai");
      return { tired: why.length > 0, why: why.join(", "), base };
    },
    walkDone() { const t = this.today(); return !!t && (t.steps || 0) >= WALK_STEPS; },
    fmtNum
  };
})();
