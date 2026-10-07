// Lietuviškas balsas ir pratimų ritmo tekstai. Pirmiausia grojami iš anksto įrašyti frazių failai
// (audio/*.mp3, sugeneruoti tools/garsas.py); frazės, kurios įrašo neturi, sakomos naršyklės
// kalbos sinteze (Web Speech API), jei įrenginyje yra lietuviškas balsas.
// iPhone tyliuoju režimu užtildo puslapio garsus (balsą, pypsėjimus). Jei puslapis groja tikrą
// garso įrašą, telefonas persijungia į medijos atkūrimo režimą, kurio tylusis jungiklis netildo.
// Todėl treniruotės metu ciklu grojamas tylus įrašas; naujesnėse Safari – dar ir audioSession.
const MEDIA = (() => {
  let el = null, url = null;
  function silentWav() {
    const rate = 8000, n = rate / 2, buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
    const str = (o, t) => { for (let i = 0; i < t.length; i++) v.setUint8(o + i, t.charCodeAt(i)); };
    str(0, "RIFF"); v.setUint32(4, 36 + n * 2, true); str(8, "WAVEfmt "); v.setUint32(16, 16, true);
    v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true);
    v.setUint16(32, 2, true); v.setUint16(34, 16, true); str(36, "data"); v.setUint32(40, n * 2, true);
    return URL.createObjectURL(new Blob([buf], { type: "audio/wav" }));
  }
  return {
    // Kviesti paspaudimo metu (naršyklės leidžia paleisti garsą tik po naudotojos veiksmo)
    start() {
      try { if (navigator.audioSession) navigator.audioSession.type = "playback"; } catch (e) {}
      try {
        if (!el) {
          url = silentWav();
          el = document.createElement("audio");
          el.src = url; el.loop = true; el.setAttribute("playsinline", ""); el.preload = "auto";
        }
        const p = el.play(); if (p && p.catch) p.catch(() => {});
      } catch (e) {}
      REC.unlock();
    },
    stop() { try { if (el) el.pause(); } catch (e) {} }
  };
})();

// Frazės failo pavadinimas – teksto FNV-1a maiša (tą pačią naudoja tools/frazes.js)
function phraseId(t) {
  let h = 0x811c9dc5;
  for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, "0");
}
// Įrašytų frazių grotuvas (Web Audio). AUDIO_FILES – iš audio/frazes.js: { id: trukmė s }.
// Trumpos frazės (ritmo nurodymai) parsiunčiamos iš anksto, ilgos (įžangos, aprašymai) –
// tik prireikus. Suspausti failai laikomi atmintyje, dekoduojami tik grojant.
const PREFETCH_MAX_S = 12;
const REC = (() => {
  const A = typeof AUDIO_FILES !== "undefined" ? AUDIO_FILES : null;
  const files = A ? new Set(Array.isArray(A) ? A : Object.keys(A)) : null;
  const bytes = new Map();
  let ctx = null, src = null, busy = false, token = 0, queue = [], fetched = false;
  function load(id) {
    if (!bytes.has(id)) {
      const p = fetch(`audio/${id}.mp3`).then(r => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); });
      p.catch(() => bytes.delete(id));
      bytes.set(id, p);
    }
    return bytes.get(id);
  }
  // decodeAudioData atjungia buferį, todėl dekoduojama kopija; senesnė Safari moka tik callback formą
  const decode = buf => new Promise((res, rej) => ctx.decodeAudioData(buf.slice(0), res, rej));
  function run(text, onend) {
    const my = ++token;
    busy = true;
    let over = false;
    const done = () => {
      if (my !== token || over) return;
      over = true; src = null; busy = false;
      if (onend) onend();
      const n = queue.shift();
      if (n) run(n[0], n[1]);
    };
    load(phraseId(text)).then(decode).then(buf => {
      if (my !== token) return;
      if (ctx.state === "suspended") ctx.resume();
      src = ctx.createBufferSource();
      src.buffer = buf; src.connect(ctx.destination);
      src.onended = done;
      src.start();
      // Jei onended neateina (pvz., AudioContext sustabdytas fone), neužstrigti „kalbant“
      setTimeout(done, buf.duration * 1000 + 1500);
    }).catch(done);
  }
  return {
    get ready() { return !!files && files.size > 0; },
    has(text) { return !!files && !!text && files.has(phraseId(text)); },
    // Kviesti paspaudimo metu: tik tada naršyklės leidžia AudioContext groti
    unlock() {
      if (!this.ready) return;
      try {
        ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
        if (ctx.state === "suspended") ctx.resume();
        const b = ctx.createBufferSource(); b.buffer = ctx.createBuffer(1, 1, 22050); b.connect(ctx.destination); b.start();
      } catch (e) { ctx = null; }
      if (ctx && !fetched) {
        fetched = true;
        files.forEach(id => { if (Array.isArray(A) || A[id] <= PREFETCH_MAX_S) load(id).catch(() => {}); });
      }
    },
    get usable() { return !!ctx; },
    get busy() { return busy; },
    play(text, interrupt, onend) {
      if (interrupt) this.stop();
      if (busy) queue.push([text, onend]);
      else run(text, onend);
    },
    stop() {
      token++; queue = []; busy = false;
      const s = src; src = null;
      try { if (s) { s.onended = null; s.stop(); } } catch (e) {}
    }
  };
})();

const SAY = (() => {
  const synth = window.speechSynthesis || null;
  let voice = null, on = true, force = false, count = 0;
  try { on = localStorage.getItem("karolina-voice") !== "0"; force = localStorage.getItem("karolina-voice-force") === "1"; } catch (e) {}
  const listeners = [];
  const notify = () => listeners.forEach(f => f());
  function pick() {
    if (!synth) return false;
    const vs = synth.getVoices() || [];
    count = vs.length;
    // Pirmenybė natūraliau skambantiems balsams (iPhone „Enhanced“/„Premium“, Edge „Natural“)
    const lt = vs.filter(v => /^lt([-_]|$)/i.test(v.lang || ""));
    const found = lt.find(v => /premium|enhanced|natural|neural/i.test(v.name)) || lt[0] || null;
    if (found !== voice) { voice = found; notify(); }
    return !!voice;
  }
  if (synth) {
    pick();
    if (synth.addEventListener) synth.addEventListener("voiceschanged", pick);
    else synth.onvoiceschanged = pick;
    // iPhone Safari balsų sąrašą užpildo vėliau ir dažnai apie tai nepraneša – tikrinam kelis kartus
    let tries = 0;
    const poll = setInterval(() => { if (pick() || ++tries > 30) { clearInterval(poll); notify(); } }, 300);
  }
  function speak(text, interrupt, onend) {
    if (REC.has(text) && REC.usable) {
      if (interrupt && synth) synth.cancel();
      return REC.play(text, interrupt, onend);
    }
    if (interrupt) REC.stop();
    if (!synth || !(voice || force)) { if (onend) onend(); return; }
    if (interrupt) synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (onend) { u.onend = onend; u.onerror = onend; }
    // Be konkretaus balso naršyklė parenka lietuvišką pagal kalbą (taip veikia ir kai sąrašas tuščias)
    if (voice) u.voice = voice;
    u.lang = voice ? voice.lang : "lt-LT"; u.rate = 0.95; u.pitch = 1;
    synth.speak(u);
  }
  return {
    get supported() { return REC.ready || !!synth; },
    get found() { return !!voice; },
    get available() { return REC.ready || !!voice || (force && !!synth); },
    get count() { return count; },
    // Ar dar skamba įrašyta frazė (naršyklės sintezės „speaking“ nepatikimas, todėl jos netikrinam)
    get busy() { return REC.busy; },
    get on() { return on; },
    get active() { return on && this.available; },
    set on(v) { on = v; try { localStorage.setItem("karolina-voice", v ? "1" : "0"); } catch (e) {} if (!v) this.stop(); },
    // Naudotoja patvirtino, kad lietuvišką balsą girdi, nors sąraše jo nematome
    set force(v) { force = v; try { localStorage.setItem("karolina-voice-force", v ? "1" : "0"); } catch (e) {} notify(); },
    recheck: pick,
    onChange(f) { listeners.push(f); },
    test() { if (!this.supported) return; MEDIA.start(); try { speak("Labas, Karolina! Ar girdi mane lietuviškai?", true); } catch (e) {} },
    // interrupt: nutraukti tai, kas dar kalbama (kad balsas neatsiliktų nuo laikmačio)
    // onend – iškviečiama, kai sakinys pasakytas (arba nutrauktas)
    say(text, interrupt = true, onend) {
      if (!this.active || !text) return;
      try { speak(text, interrupt, onend); } catch (e) { if (onend) onend(); }
    },
    stop() { REC.stop(); try { if (synth) synth.cancel(); } catch (e) {} }
  };
})();

// Pratimų ritmas pagal animacijos pavadinimą (EX[i].anim). Funkcija gauna lygį (0/1) ir
// vienos serijos trukmę sekundėmis, grąžina:
//   { beat: [[tekstas, sekundės, trumpas tekstas?], ...] } – kartojamas ciklas (trumpas tekstas
//     sakomas nuo antro ciklo, kad nekartotų ilgų sakinių);
//   { start, remind: [...], every } – išlaikymas: pradžioje start, toliau priminimai kas `every` s.
const fit = (secs, n, parts) => {
  const w = parts.reduce((a, p) => a + p[1], 0), k = secs / n / w;
  return parts.map(([t, x, short]) => [t, x * k, short]);
};
const VOICE = {
  breath: () => ({ beat: [["Įkvėpk pro nosį, pilvas kyla", 4, "Įkvėpk"], ["Iškvėpk pro lūpas, lėtai", 6, "Iškvėpk"]] }),
  tilt: (l, s) => ({ beat: fit(s, [10, 12][l], [["Iškvėpk ir prispausk juosmenį prie kilimėlio. Laikyk", [3, 4.5][l], "Prispausk, laikyk"], ["Atleisk", 1.4]]) }),
  catcow: (l, s) => ({ beat: fit(s, [8, 10][l], [["Iškvėpk ir apvalink nugarą", 1, "Katė, iškvėpk"], ["Įkvėpk ir švelniai išlenk", 1, "Karvė, įkvėpk"]]) }),
  deadbug: (l, s) => ({ beat: l
    ? fit(s, 8, [["Lėtai nuleisk dešinę koją ir kairę ranką", 3, "Dešinė koja, kairė ranka"], ["Grįžk", 2], ["Dabar kairė koja ir dešinė ranka", 3, "Kairė koja, dešinė ranka"], ["Grįžk", 2]])
    : fit(s, 6, [["Lėtai nuleisk dešinę koją", 3, "Dešinė žemyn"], ["Grįžk", 2], ["Dabar kairė koja žemyn", 3, "Kairė žemyn"], ["Grįžk", 2]]) }),
  bridge: (l, s) => ({ beat: fit(s, [10, 12][l], [["Prispausk juosmenį ir kelk dubenį", 1.5, "Kelk"], ["Suspausk sėdmenis", [2, 3][l], "Suspausk"], ["Lėtai žemyn", 1.5, "Žemyn"]]) }),
  birddog: (l, s) => ({ beat: fit(s, [6, 8][l], [["Ištiesk dešinę koją ir kairę ranką", 1.5, "Dešinė koja, kairė ranka"], ["Laikyk", [3, 5][l]], ["Grįžk", 1],
    ["Dabar kairė koja ir dešinė ranka", 1.5, "Kairė koja, dešinė ranka"], ["Laikyk", [3, 5][l]], ["Grįžk", 1]]) }),
  clam: (l, s) => ({ beat: fit(s, [12, 15][l], [["Pėdos kartu, kelk kelį", 1, "Kelk"], ["Lėtai nuleisk", 1.2, "Žemyn"]]) }),
  sideplank: () => ({ start: "Kelk klubus, kūnas tiesia linija nuo galvos iki kelių", remind: ["Kvėpuok ramiai", "Klubai aukštai", "Stumk grindis dilbiu"], every: 5 }),
  hipflex: () => ({ start: "Uodegikaulis po savimi, suspausk sėdmenį ir švelniai pasislink į priekį", remind: ["Kvėpuok ramiai", "Liemuo tiesus, juosmens neįlenk", "Laikyk, atsipalaiduok"], every: 8 }),
  child: () => ({ beat: [["Įkvėpk į nugarą", 4], ["Iškvėpk ir atsipalaiduok", 6]] }),
  // Pratimai iš korekcinės programos
  kneelpush: (l, s) => ({ beat: fit(s, [10, 12][l], [["Stumk dubenį pirmyn ir aukštyn. Laikyk", 3.5, "Pirmyn, laikyk"], ["Grįžk ant kulnų", 1.5, "Grįžk"]]) }),
  childcobra: (l, s) => ({ beat: fit(s, [10, 12][l], [["Slink pirmyn, krūtinė aukštyn", 2.2, "Pirmyn"], ["Atgal ant kulnų", 2.2, "Atgal"]]) }),
  squat: () => ({ start: "Pritūpk kuo giliau, kulnai prie grindų", remind: ["Rankos aukštyn", "Rankos žemyn", "Kvėpuok ramiai", "Krūtinė aukštyn"], every: 5 }),
  crabreach: (l, s) => ({ beat: fit(s, [6, 8][l], [["Kelk dubenį ir siek ranka už galvos. Laikyk", 3.5, "Kelk ir siek"], ["Lėtai žemyn", 2, "Žemyn"]]) }),
  plank: () => ({ start: "Kūnas tiesia linija, alkūnės po pečiais", remind: ["Stumk grindis dilbiais", "Pilvas įtemptas, juosmens neįlenk", "Kvėpuok"], every: 6 }),
  slbridge: (l, s) => ({ beat: fit(s, [8, 12][l], [["Spausk kulnu ir kelk dubenį. Laikyk", 3.5, "Kelk, laikyk"], ["Lėtai žemyn", 1.5, "Žemyn"]]) }),
  heelwalk: (l, s) => ({ beat: fit(s, [3, 4][l], [["Kelk dubenį", 2, "Dubuo aukštyn"], ["Mažais žingsneliais kulnais tolyn", 4, "Tolyn"], ["Ir atgal", 4, "Atgal"], ["Nusileisk", 2, "Žemyn"]]) }),
  camel: () => ({ start: "Kelk dubenį, krūtinė atverta", remind: ["Kvėpuok ramiai", "Dubuo aukštai", "Laikyk"], every: 7 }),
  bow: () => ({ start: "Suimk pėdas ir švelniai kilstelk krūtinę", remind: ["Kvėpuok", "Tik tiek, kiek patogu", "Pėdas trauk prie sėdmenų"], every: 8 }),
  puppy: () => ({ start: "Rankos toli pirmyn, krūtinė žemyn", remind: ["Dubuo virš kelių", "Kvėpuok į nugarą", "Atpalaiduok pečius"], every: 8 }),
  kneelquad: () => ({ start: "Suimk pėdą, suspausk sėdmenį ir stumk dubenį pirmyn", remind: ["Liemuo tiesus", "Kvėpuok ramiai", "Uodegikaulis po savimi"], every: 8 })
};
// Pusės keitimo tekstas
const VOICE_SWITCH = { clam: "Keisk pusę. Atsigulk ant kito šono.", sideplank: "Keisk pusę. Atsigulk ant kito šono.", hipflex: "Keisk koją. Kita koja priekyje.",
  crabreach: "Keisk ranką.", slbridge: "Keisk koją.", kneelquad: "Keisk koją. Kita koja priekyje." };
const ORD = ["Pirma", "Antra", "Trečia", "Ketvirta"];
