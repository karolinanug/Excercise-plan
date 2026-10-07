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
  // Įžanga: kiekvienas dienos tipas, ilga ir trumpa, su lengvesnės versijos ar atsigavimo priežastimi
  for (const type of Object.keys(DAYTYPE)) for (const ez of [false, true]) for (const why of ["", "garmin", "rotation"])
    for (const full of [true, false]) add(introStep(full, type, ez, why).cue);
  // Kiekvienas pratimas atskirai, abiem lygiais, įprasta ir lengvesnė versija
  for (let l = 0; l < 2; l++) for (const ez of [false, true]) EX.forEach((e, i) => {
    level = l;
    for (const st of buildSteps(l, [i], ez)) {
      if (st.type === "prep") add(st.say);
      if (st.type === "rest") add(\`Poilsis. Paskui \${ORD[st.nextSet] ? ORD[st.nextSet].toLowerCase() : ""} serija.\`);
      if (st.type === "work") {
        const v = VOICE[e.anim](l, st.secs);
        if (v.start) { add(v.start); v.remind.forEach(add); }
        else v.beat.forEach(b => { add(b[0]); add(b[2]); });
      }
    }
    add(\`Poilsis. Atsikvėpk. Toliau – \${e.name}.\`);
  });
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
