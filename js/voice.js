// Lietuviškas balsas (naršyklės kalbos sintezė, Web Speech API) ir pratimų ritmo tekstai.
// Balsas veikia tik jei įrenginyje yra lietuviškas balsas; kitaip instrukcijos lieka ekrane.
const SAY = (() => {
  const synth = window.speechSynthesis || null;
  let voice = null, on = true;
  try { on = localStorage.getItem("karolina-voice") !== "0"; } catch (e) {}
  const listeners = [];
  function pick() {
    if (!synth) return;
    const vs = synth.getVoices();
    voice = vs.find(v => /^lt([-_]|$)/i.test(v.lang)) || null;
    listeners.forEach(f => f());
  }
  if (synth) {
    pick();
    if (synth.addEventListener) synth.addEventListener("voiceschanged", pick);
    else synth.onvoiceschanged = pick;
  }
  return {
    get supported() { return !!synth; },
    get available() { return !!voice; },
    get on() { return on; },
    get active() { return on && !!voice; },
    set on(v) { on = v; try { localStorage.setItem("karolina-voice", v ? "1" : "0"); } catch (e) {} if (!v) this.stop(); },
    onChange(f) { listeners.push(f); },
    // interrupt: nutraukti tai, kas dar kalbama (kad balsas neatsiliktų nuo laikmačio)
    say(text, interrupt = true) {
      if (!this.active || !text) return;
      try {
        if (interrupt) synth.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.voice = voice; u.lang = voice.lang; u.rate = 0.95; u.pitch = 1;
        synth.speak(u);
      } catch (e) {}
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
