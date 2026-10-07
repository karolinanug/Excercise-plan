// Surenka visas frazes, kurias svetainė gali pasakyti balsu, ir išveda JSON { failo id: tekstas }.
// Paleidžia tikrus js/voice.js ir js/app.js (su netikru DOM), todėl pakeitus pratimus ar
// tekstus užtenka iš naujo paleisti tools/garsas.py.
//   node tools/frazes.js > frazes.json
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(root, f), "utf8");

// Netikras DOM: bet koks objektas, kurį galima skaityti, kviesti ir iteruoti
const stub = new Proxy(function () {}, {
  get: (t, k) => k === Symbol.iterator ? function* () {} : k === Symbol.toPrimitive ? () => "" : k === "then" ? undefined : stub,
  set: () => true, apply: () => stub, construct: () => stub
});
const ctx = vm.createContext({
  console, Math, Date, JSON, Set, Map, Promise, URL: { createObjectURL: () => "" }, Blob: function () {},
  setTimeout: () => 0, clearTimeout() {}, setInterval: () => 0, clearInterval() {},
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  navigator: {}, document: stub, location: stub, alert() {}, confirm: () => false, matchMedia: () => stub
});
ctx.window = ctx; ctx.addEventListener = () => {};
for (const f of ["js/anim.js", "js/voice.js", "js/health.js", "js/app.js"]) vm.runInContext(read(f), ctx, { filename: f });

const out = vm.runInContext(`(() => {
  const all = new Set(), add = t => { if (t) all.add(t); };
  // Įžanga (ilga ir trumpa): kiekviena savaitės diena, abu lygiai
  // (ir lengvesnė versija, ir vakarinis atsipalaidavimas)
  for (const ov of [null, "relax"]) for (const ez of [false, true]) for (let l = 0; l < 2; l++) for (let d = 0; d < 7; d++) {
    override = ov; easy = ez; level = l; selDay = d; add(introStep(true).cue); add(introStep(false).cue);
  }
  override = null; easy = false;
  for (let l = 0; l < 2; l++) for (const ez of [false, true]) {
    level = l;
    for (const type of Object.keys(DAYTYPE)) {
      for (const st of buildSteps(l, DAYTYPE[type].list(), ez)) {
        const e = EX[st.ex];
        if (st.type === "prep" && !st.pos) add(\`Pirmas pratimas: \${e.name}.\`);
        if (st.type === "rest") {
          if (st.between) add(\`Poilsis. Atsikvėpk. Toliau – \${e.name}.\`);
          else if (st.sw) add(VOICE_SWITCH[e.anim] || "Keisk pusę.");
          else add(\`Poilsis. Paskui \${ORD[st.nextSet] ? ORD[st.nextSet].toLowerCase() : ""} serija.\`);
        }
        if (st.type === "work") {
          const pre = (st.sets > 1 ? \`\${ORD[st.set] || ""} serija. \` : "") + (st.side === 0 ? "Kairė pusė. " : st.side === 1 ? "Dešinė pusė. " : "");
          const v = VOICE[e.anim](l, st.secs);
          if (v.start) { add(pre + v.start); v.remind.forEach(add); }
          else { add(pre + v.beat[0][0]); v.beat.forEach(b => { add(b[0]); add(b[2]); }); }
        }
      }
    }
  }
  return [...all];
})()`, ctx);

// Pastovios frazės, perduodamos SAY.say("...") ir speak("...") tiesiogiai
// (kvietimas gali būti per kelias eilutes)
for (const f of ["js/app.js", "js/voice.js"])
  for (const call of read(f).matchAll(/(?:SAY\.say|speak)\(([\s\S]*?)\);/g))
    for (const m of call[1].matchAll(/"([^"$\\]{8,})"/g)) if (/[A-ZĄČĘĖĮŠŲŪŽ]/.test(m[1][0]) && /[.!?]$/.test(m[1])) out.push(m[1]);

const res = {};
for (const t of out) res[ctx.phraseId(t)] = t;
process.stdout.write(JSON.stringify(res, null, 1) + "\n");
