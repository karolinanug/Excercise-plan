// Garmin duomenys. Du šaltiniai:
// 1. garmin/duomenys.enc – kartą per dieną ryte parsiunčia GitHub Actions (tools/garmin_sync.py),
//    užšifruota raktu, kurį telefone įvedi vieną kartą; iššifruojama tik naršyklėje.
//    Iš jo – praeitos paros apžvalga (vakar diena + naktis, Body Battery kreivė) ir pasiruošimas.
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
  const stored = k => { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } };
  // Iššifruoja ir pritaiko duomenis; senesnių už jau turimus nepritaiko
  async function apply(blob) {
    const pass = stored(G_PASS);
    if (!pass) { gState = "need-key"; return; }
    try {
      const data = await decrypt(blob, pass);
      if (gUpdated && (data.updated || 0) < gUpdated) return;
      garmin = Array.isArray(data.days) ? data.days : []; gUpdated = data.updated || null; gState = "ok";
      try { localStorage.setItem(G_KEY, JSON.stringify({ days: garmin, updated: gUpdated })); } catch (e) {}
    } catch (e) { gState = "bad-key"; }
  }
  async function syncGarmin() {
    let blob;
    try {
      const r = await fetch(GARMIN_URL + "?t=" + Date.now(), { cache: "no-store" });
      if (!r.ok) return;              // Garmin dar neprijungtas – lieka tai, kas jau buvo
      blob = await r.json();
    } catch (e) { return; }
    await apply(blob);
    notify();
  }
  // Atnaujinimo atidarius nebėra – pamirštam anksčiau įvestą GitHub raktą
  try { localStorage.removeItem("karolina-garmin-gh"); } catch (e) {}
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
    get key() { return stored(G_PASS); },
    setGarminKey(p) { try { localStorage.setItem(G_PASS, String(p || "").trim()); } catch (e) {} gState = "off"; return syncGarmin(); },
    syncGarmin,
    // Praeitos paros apžvalga: vakar diena, naktis (miegas, Body Battery prieš miegą ir pabudus),
    // Body Battery kreivė ir įvertinimai. null, jei nėra nei vakar, nei šiandienos duomenų.
    overview() {
      const now = new Date(), t = this.today(), y = this.get(dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)));
      if (!t && !y) return null;
      const curve = (t && t.bbc) || [];
      // Kreivės reikšmė arčiausiai nurodyto laiko (ms)
      const at = ms => {
        if (!ms || !curve.length) return null;
        let best = null, dist = Infinity;
        for (const [m, v] of curve) { const d = Math.abs(m * 60000 - ms); if (d < dist) { dist = d; best = v; } }
        return dist <= 60 * 60000 ? best : null;
      };
      const night = t ? { sleep: t.sleep, score: t.sleepScore, start: t.sleepStart, end: t.sleepEnd, hrv: t.hrv, rhr: t.rhr } : {};
      night.bbStart = at(night.start); night.bbWake = at(night.end) ?? (t ? t.bb : null);
      night.charged = night.bbStart != null && night.bbWake != null ? night.bbWake - night.bbStart : null;
      // Poilsio įvertinimas: miego įvertis (arba trukmė) ir kiek pasikrovė Body Battery
      const sq = night.score != null ? night.score : night.sleep != null ? Math.max(0, Math.min(100, (night.sleep - 4) / 3.5 * 100)) : null;
      let rest = null;
      if (sq != null || night.charged != null) {
        if ((sq != null && sq < 60) || (night.charged != null && night.charged < 30)) rest = "low";
        else if ((sq == null || sq >= 75) && (night.charged == null || night.charged >= 45)) rest = "good";
        else rest = "ok";
      }
      // Vakar dienos krūvis
      let load = null;
      if (y) {
        if ((y.stress != null && y.stress >= 40) || (y.stressHighMin || 0) >= 60) load = "stress";
        else if ((y.intensity || 0) >= 30 || (y.steps || 0) >= 10000) load = "active";
        else if (y.steps != null || y.stress != null) load = "calm";
      }
      return { y, t, night, curve, rest, load };
    },
    onChange(f) { listeners.push(f); },
    today() { return this.get(dayKey(new Date())); },
    // Įprasta reikšmė – ankstesnių 14 dienų mediana (reikia bent 3 dienų)
    baseline(d = dayKey(new Date()), key = "rhr") {
      const v = merged().filter(x => x.d < d && x[key] != null).slice(-14).map(x => x[key]).sort((a, b) => a - b);
      return v.length >= 3 ? v[Math.floor(v.length / 2)] : null;
    },
    // Paskutinių n dienų reikšmės grafikui: [{ d, v }]
    series(key, n = 14) {
      const now = new Date(), m = new Map(merged().map(x => [x.d, x[key]]));
      return Array.from({ length: n }, (_, i) => {
        const d = dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - (n - 1 - i)));
        return { d, v: m.has(d) && m.get(d) != null ? m.get(d) : null };
      });
    },
    // Pasiruošimo balas 0–100 iš miego, Body Battery, HRV ir ramybės pulso, lyginant su
    // pačios įprastomis reikšmėmis. Reikia bent 2 rodiklių. { score, parts: [...] } arba null
    readiness(d = dayKey(new Date())) {
      const x = this.get(d);
      if (!x) return null;
      const clamp = v => Math.max(0, Math.min(100, Math.round(v)));
      const parts = [];
      if (x.sleepScore != null || x.sleep != null)
        parts.push({ key: "sleep", label: "Miegas", w: 0.3, s: x.sleepScore != null ? x.sleepScore : clamp((x.sleep - 4) / 3.5 * 100),
          value: x.sleep != null ? `${fmtH(x.sleep)} val.` : `${x.sleepScore}/100`, base: this.baseline(d, "sleep"), cur: x.sleep, unit: " val." });
      if (x.bb != null)
        parts.push({ key: "bb", label: "Body Battery", w: 0.3, s: x.bb, value: String(x.bb), base: this.baseline(d, "bb"), cur: x.bb, unit: "" });
      if (x.hrv != null || x.hrvStatus) {
        const base = this.baseline(d, "hrv"), st = x.hrvStatus;
        let sc = base && x.hrv != null ? clamp(75 + (x.hrv / base - 1) * 250) : st === "BALANCED" ? 75 : st === "UNBALANCED" ? 50 : st ? 30 : null;
        if (sc != null && (st === "LOW" || st === "POOR")) sc = Math.min(sc, 40);
        if (sc != null) parts.push({ key: "hrv", label: "HRV", w: 0.2, s: sc, value: x.hrv != null ? `${x.hrv} ms` : st, base, cur: x.hrv, unit: " ms" });
      }
      if (x.rhr != null) {
        const base = this.baseline(d, "rhr");
        if (base != null) parts.push({ key: "rhr", label: "Ramybės pulsas", w: 0.2, s: clamp(75 - (x.rhr - base) * 8), value: `${x.rhr}`, base, cur: x.rhr, unit: "", lowerBetter: true });
      }
      if (parts.length < 2) return null;
      const w = parts.reduce((a, p) => a + p.w, 0);
      return { score: Math.round(parts.reduce((a, p) => a + p.s * p.w, 0) / w), parts, stress: x.stress };
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
