// Lietuviškas balsas (naršyklės kalbos sintezė, Web Speech API) ir pratimų ritmo tekstai.
// Balsas veikia tik jei įrenginyje yra lietuviškas balsas; kitaip instrukcijos lieka ekrane.
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
    },
    stop() { try { if (el) el.pause(); } catch (e) {} }
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
    if (interrupt) synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (onend) { u.onend = onend; u.onerror = onend; }
    // Be konkretaus balso naršyklė parenka lietuvišką pagal kalbą (taip veikia ir kai sąrašas tuščias)
    if (voice) u.voice = voice;
    u.lang = voice ? voice.lang : "lt-LT"; u.rate = 0.95; u.pitch = 1;
    synth.speak(u);
  }
  return {
    get supported() { return !!synth; },
    get found() { return !!voice; },
    get available() { return !!voice || (force && !!synth); },
    get count() { return count; },
    get on() { return on; },
    get active() { return on && this.available; },
    set on(v) { on = v; try { localStorage.setItem("karolina-voice", v ? "1" : "0"); } catch (e) {} if (!v) this.stop(); },
    // Naudotoja patvirtino, kad lietuvišką balsą girdi, nors sąraše jo nematome
    set force(v) { force = v; try { localStorage.setItem("karolina-voice-force", v ? "1" : "0"); } catch (e) {} notify(); },
    recheck: pick,
    onChange(f) { listeners.push(f); },
    test() { if (!synth) return; MEDIA.start(); try { speak("Labas, Karolina! Ar girdi mane lietuviškai?", true); } catch (e) {} },
    // interrupt: nutraukti tai, kas dar kalbama (kad balsas neatsiliktų nuo laikmačio)
    // onend – iškviečiama, kai sakinys pasakytas (arba nutrauktas)
    say(text, interrupt = true, onend) {
      if (!this.active || !text) return;
      try { speak(text, interrupt, onend); } catch (e) { if (onend) onend(); }
    },
    stop() { try { if (synth) synth.cancel(); } catch (e) {} }
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
  child: () => ({ beat: [["Įkvėpk į nugarą", 4], ["Iškvėpk ir atsipalaiduok", 6]] })
};
// Pusės keitimo tekstas
const VOICE_SWITCH = { clam: "Keisk pusę. Atsigulk ant kito šono.", sideplank: "Keisk pusę. Atsigulk ant kito šono.", hipflex: "Keisk koją. Kita koja priekyje." };
const ORD = ["Pirma", "Antra", "Trečia", "Ketvirta"];
