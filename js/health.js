// Garmin duomenys per Apple Health. Garmin Connect programėlė perduoda duomenis į Apple Health,
// iPhone „Shortcuts“ juos perskaito ir atidaro svetainę su nuoroda:
//   …/Excercise-plan/#zingsniai=8400&miegas=7.2&pulsas=58
// Naudojama # dalis, nes ji nesiunčiama į serverį: duomenys lieka tik telefone (localStorage
// raktas karolina-health). Instrukcija – README.md, skiltis „Garmin duomenys“.
const HEALTH = (() => {
  const KEY = "karolina-health", KEEP_DAYS = 120;
  const RHR_UP = 5;          // ramybės pulsas tiek ar daugiau virš įprasto – patariama lengviau
  const SLEEP_LOW = 6;       // valandos
  const WALK_STEPS = 7000;   // lengvą dieną: tiek žingsnių – pasivaikščiojimas laikomas atliktu
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

  let received = null;
  // Grąžina true, jei nuorodoje buvo Garmin duomenų (ir juos išsaugo)
  function readLink() {
    const raw = (location.hash || "").replace(/^#/, "");
    if (!/(zingsniai|miegas|pulsas)=/.test(raw)) return false;
    const q = new URLSearchParams(raw);
    const steps = num(q.get("zingsniai")), sleep = hours(num(q.get("miegas"))), rhr = num(q.get("pulsas"));
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
    readLink,
    all: load,
    get(d) { return load().find(x => x.d === d) || null; },
    today() { return this.get(dayKey(new Date())); },
    // Įprastas ramybės pulsas – ankstesnių 14 dienų mediana (reikia bent 3 dienų)
    baseline(d = dayKey(new Date())) {
      const v = load().filter(x => x.d < d && x.rhr).slice(-14).map(x => x.rhr).sort((a, b) => a - b);
      return v.length >= 3 ? v[Math.floor(v.length / 2)] : null;
    },
    text(x) {
      if (!x) return "";
      const p = [];
      if (x.sleep != null) p.push(`miegas ${fmtH(x.sleep)} val.`);
      if (x.rhr != null) p.push(`ramybės pulsas ${x.rhr}`);
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
      return { tired: why.length > 0, why: why.join(", "), base };
    },
    walkDone() { const t = this.today(); return !!t && (t.steps || 0) >= WALK_STEPS; },
    fmtNum
  };
})();
