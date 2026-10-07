const EX = [
  { name: "Diafragminis kvėpavimas", en: "Diaphragmatic breathing", why: "Išmoko pilvo raumenis dirbti kartu su kvėpavimu ir atpalaiduoja įsitempusią nugarą. Tai pagrindas visiems kitiems pratimams.",
    steps: ["Atsigulk ant nugaros, kelius sulenk, pėdos ant grindų klubų plotyje.", "Vieną delną padėk ant krūtinės, kitą ant pilvo.", "Įkvėpk pro nosį per 4 sekundes, kad kiltų delnas ant pilvo ir šonai, o krūtinė liktų beveik rami.", "Iškvėpk pro šiek tiek pravertas lūpas per 6 sekundes. Pabaigoje švelniai įtrauk bambą link stuburo."],
    mistakes: ["Kilnoji pečius ir krūtinę vietoj pilvo.", "Išpuši pilvą per jėgą ir išriesti juosmenį.", "Kvėpuoji per greitai."],
    dose: ["8–10 lėtų įkvėpimų", "8–10 lėtų įkvėpimų"], sets: [1,1], secs: [90,90], sides: false, cue: "Įkvėpk 4 s pro nosį, iškvėpk 6 s pro lūpas. Krūtinė rami, kyla pilvas.",
    rest: true, anim: "breath", video: { id: "9jpchJcKivk", title: "How to do Diaphragmatic Breathing Exercises for Beginners", by: "Michelle Kenway, kineziterapeutė" } },
  { name: "Dubens pakreipimas gulint", en: "Posterior pelvic tilt", why: "Tiesiogiai treniruoja priešingą judesį tavo dubens pasvirimui į priekį (anterior pelvic tilt): išmoksti valdyti dubenį pilvo ir sėdmenų raumenimis.",
    steps: ["Gulėk ant nugaros, keliai sulenkti, pėdos ant grindų.", "Iškvėpdama švelniai įtrauk pilvo apačią ir prispausk juosmenį prie kilimėlio, tarsi „pastumtum“ bambą link stuburo. Dubuo truputį pasisuka link tavęs.", "Išlaikyk 3 sekundes ir kvėpuok.", "Atpalaiduok į neutralią padėtį."],
    mistakes: ["Keli sėdmenis nuo grindų. Tai jau tiltelis, ne šis pratimas.", "Spaudi kojomis ar kaklu vietoj pilvo.", "Sulaikai kvapą."],
    dose: ["2 serijos × 10 kartų, laikyti 3 s", "2 serijos × 12 kartų, laikyti 5 s"], sets: [2,2], secs: [45,70], sides: false, cue: "Iškvėpk ir prispausk juosmenį prie kilimėlio, laikyk 3 s, atleisk.",
    anim: "tilt", video: { id: "n8DU1desCy8", title: "How to do a Pelvic Tilt Lying Down", by: "Rehab My Patient" } },
  { name: "Katė–karvė", en: "Cat-cow stretch", why: "Švelniai judina visą stuburą slankstelis po slankstelio ir padeda pajausti dubens padėtį.",
    steps: ["Atsistok keturpėsčia: delnai po pečiais, keliai po klubais.", "Iškvėpdama apvalink nugarą į viršų, smakrą prie krūtinės, uodegikaulį pakišk po savimi (katė).", "Įkvėpdama lėtai išlenk nugarą žemyn, žvilgsnis į priekį (karvė).", "Judėk lėtai, kiekvieną padėtį palaikyk 2 sekundes."],
    mistakes: ["Karvės padėtyje per stipriai įlenki juosmenį. Su tavo dubens pasvirimu riesk tik tiek, kiek patogu, daugiau dėmesio katei.", "Judi greitai ir „metiesi“ į padėtis.", "Lenki alkūnes."],
    dose: ["8 lėti kartai", "10 lėtų kartų"], sets: [1,1], secs: [60,75], sides: false, cue: "Iškvėpk ir apvalink nugarą, įkvėpk ir švelniai išlenk. Lėtai.",
    rest: true, anim: "catcow", video: { id: "1Y0YjXS9sKI", title: "How to Do a Cat Cow Stretch: A Guide from Physical Therapists", by: "Hinge Health" } },
  { name: "Negyvas vabalas", en: "Dead bug", why: "Vienas geriausių giliųjų pilvo raumenų pratimų: stiprina liemenį, kai juosmuo laikomas stabilus. Labai tinka dubens pasvirimui į priekį.",
    steps: ["Gulėk ant nugaros, rankas ištiesk į lubas, kelius sulenk 90° kampu virš klubų.", "Prispausk juosmenį prie kilimėlio (kaip 2 pratime). Jis turi likti prispaustas visą laiką.", "Iškvėpdama lėtai nuleisk dešinę koją žemyn, kad kulnas beveik paliestų grindis. Pradžioje gali leisti tik pėdą, kelią palikus sulenktą.", "Grįžk ir pakartok kita koja. Kai įvaldysi, kartu su koja nuleisk priešingą ranką už galvos."],
    mistakes: ["Juosmuo atsikelia nuo grindų. Tada leisk koją mažiau žemyn.", "Skubi. Kiekvienas judesys bent 3 s žemyn.", "Įtempi kaklą ir keli galvą."],
    dose: ["2 serijos × 6 kartai kiekviena koja, pakaitomis", "3 serijos × 8 kartai kiekviena koja, su ranka"], sets: [2,3], secs: [50,65], sides: false, cue: "Juosmuo prispaustas. Lėtai nuleisk vieną koją, grįžk, keisk koją.",
    anim: "deadbug", video: { id: "psOZS-sVDww", title: "Dead Bug Exercise Beginner - Strengthen and Stabilize Your Core", by: "Brian Abelson" } },
  { name: "Sėdmenų tiltelis", en: "Glute bridge", why: "Stiprina sėdmenis, kurie esant dubens pasvirimui į priekį dažnai būna silpni ir „išsijungę“. Stiprūs sėdmenys padeda laikyti dubenį tiesiau.",
    steps: ["Gulėk ant nugaros, keliai sulenkti, pėdos klubų plotyje, kulnai apie 20–25 cm nuo sėdmenų.", "Pirmiausia padaryk dubens pakreipimą (prispausk juosmenį), tada spausdama kulnais kelk dubenį.", "Kilk, kol keliai, klubai ir pečiai bus vienoje linijoje. Viršuje stipriai suspausk sėdmenis 2 sekundes.", "Lėtai nusileisk, slankstelis po slankstelio."],
    mistakes: ["Keli per aukštai ir išrieti juosmenį. Viršuje turi jaustis sėdmenys, ne nugara.", "Daugiausia dirba šlaunų užpakalis (traukia mėšlungis). Pastumk pėdas arčiau.", "Keliai krenta į vidų. Laikyk juos klubų plotyje."],
    dose: ["2 serijos × 10 kartų, viršuje 2 s", "3 serijos × 12 kartų, viršuje 3 s"], sets: [2,3], secs: [45,60], sides: false, cue: "Pakreipk dubenį, kelk spausdama kulnais, viršuje suspausk sėdmenis 2 s.",
    anim: "bridge", video: { id: "WtilA9IJX1c", title: "Glute Bridges Exercise for Hips & Butt", by: "Release Physical Therapy" } },
  { name: "Paukštis–šuo", en: "Bird dog", why: "Moko išlaikyti stuburą stabilų, kai juda rankos ir kojos. Stiprina nugaros tiesiamuosius, sėdmenis ir pilvo raumenis simetriškai.",
    steps: ["Keturpėsčia: delnai po pečiais, keliai po klubais, nugara tiesi kaip stalas.", "Švelniai įtempk pilvą. Pradžioje tik slysk viena koja atgal, neatkeldama nuo grindų.", "Kai jauti stabilumą, ištiesk koją atgal klubo aukštyje ir kartu priešingą ranką į priekį.", "Palaikyk 3 sekundes, grįžk ir keisk puses."],
    mistakes: ["Keli koją per aukštai ir įlenki juosmenį.", "Dubuo pasisuka į šoną. Įsivaizduok stiklinę vandens ant juosmens.", "Galva nusvyra arba atsilošia. Žiūrėk į grindis."],
    dose: ["2 serijos × 6 kartai kiekviena pusė, pakaitomis, laikyti 3 s", "3 serijos × 8 kartai, laikyti 5 s"], sets: [2,3], secs: [60,90], sides: false, cue: "Ištiesk koją ir priešingą ranką, laikyk 3 s, keisk pusę. Juosmuo neįlinksta.",
    anim: "birddog", video: { id: "LaLKNS7mxrk", title: "Bird Dog Exercise for Beginners", by: "Margaret Martin, kineziterapeutė" } },
  { name: "Kriauklė", en: "Clamshell", why: "Stiprina šoninius sėdmenų raumenis, kurie stabilizuoja dubenį. Daroma abiem pusėm vienodai.",
    steps: ["Gulėk ant šono, galvą pasidėk ant ištiestos rankos, kelius sulenk apie 45°, pėdos kartu.", "Klubai vienas virš kito, dubuo statmenas grindims. Viršutinę ranką padėk ant klubo.", "Pėdas laikydama kartu, kelk viršutinį kelį, kiek gali nepasukant dubens atgal.", "Viršuje 1 s pauzė, lėtai nuleisk."],
    mistakes: ["Dubuo rieda atgal kartu su keliu. Kelk mažiau.", "Pėdos atsiskiria.", "Judi greitai ir „mėtai“ kelį."],
    dose: ["2 serijos × 12 kartų kiekviena pusė", "3 serijos × 15 kartų kiekviena pusė"], sets: [2,3], secs: [40,45], sides: true, cue: "Pėdos kartu, kelk kelį nepasukdama dubens, lėtai nuleisk.",
    anim: "clam", video: { id: "2c5xiz4q7ow", title: "Clam Shell Exercise: Strengthen Your Hip & Knees", by: "Margaret Martin, kineziterapeutė" } },
  { name: "Šoninė lenta ant kelių", en: "Modified side plank", why: "Stiprina šoninius liemens raumenis (įstrižinius ir keturkampį juosmens raumenį), kurie palaiko stuburą iš šonų. Abi pusės vienodu laiku.",
    steps: ["Gulėk ant šono, atsiremk į dilbį: alkūnė tiksliai po petimi. Keliai sulenkti, pėdos už nugaros.", "Kelk klubus, kol nuo galvos iki kelių bus tiesi linija.", "Laikyk, kvėpuok ramiai.", "Nusileisk ir pakartok kita puse tiek pat laiko."],
    mistakes: ["Klubai nusvyra žemyn arba išsikiša atgal.", "Petys „kabo“: stumk grindis dilbiu.", "Vienai pusei duodi daugiau laiko, nes ji lengvesnė. Abi pusės vienodai."],
    dose: ["2 serijos × 15 s kiekviena pusė", "2 serijos × 25 s kiekviena pusė"], sets: [2,2], secs: [15,25], sides: true, cue: "Alkūnė po petimi, klubai aukštyn, tiesi linija nuo galvos iki kelių.",
    anim: "sideplank", video: { id: "lvpPNjRQONQ", title: "How to Do a Modified Side Plank", by: "NASM" } },
  { name: "Klubo lenkiamųjų tempimas klūpant", en: "Half-kneeling hip flexor stretch", why: "Esant dubens pasvirimui į priekį, klubo priekio raumenys dažniausiai sutrumpėję ir tempia dubenį žemyn. Šis tempimas juos ilgina.",
    steps: ["Atsiklaupk ant vieno kelio (po keliu sulankstyk kilimėlį), kita pėda priekyje, kelias 90°.", "Pirmiausia pakreipk dubenį (uodegikaulis po savimi) ir suspausk užpakalinės kojos sėdmenį.", "Tik tada švelniai pasislink kūnu į priekį, kol pajusi tempimą klubo priekyje.", "Liemuo tiesus, kvėpuok ramiai, laikyk."],
    mistakes: ["Pasislenki į priekį įlenkdama juosmenį. Tada tempiasi nugara, ne klubas.", "Priekinis kelias išeina gerokai už pėdos pirštų.", "Spyruokliuoji. Laikyk ramiai."],
    dose: ["2 kartai × 30 s kiekviena pusė", "2 kartai × 45 s kiekviena pusė"], sets: [2,2], secs: [30,45], sides: true, cue: "Uodegikaulis po savimi, suspausk sėdmenį, tik tada pasislink į priekį.",
    rest: true, anim: "hipflex", video: { id: "F55tzqJggAY", title: "Half Kneeling Hip Flexor Stretch", by: "Cara Giusti, PT, DPT (B3 Physical Therapy)" } },
  { name: "Vaiko poza", en: "Child's pose", why: "Atpalaiduoja nugarą ir juosmenį po treniruotės, ramina kvėpavimą.",
    steps: ["Atsiklaupk, kelius šiek tiek praskėsk, sėdmenis nuleisk ant kulnų.", "Ištiesk rankas į priekį ir padėk kaktą ant kilimėlio.", "Kvėpuok į nugarą ir šonus, leisk jai atsipalaiduoti.", "Atsikeldama pirmiausia remkis rankomis."],
    mistakes: ["Prievarta spaudi sėdmenis prie kulnų. Jei nepatogu, pasidėk pagalvėlę.", "Įtempi pečius prie ausų."],
    dose: ["45–60 s", "60 s"], sets: [1,1], secs: [50,60], sides: false, cue: "Sėdmenys link kulnų, kakta ant kilimėlio, ramiai kvėpuok į nugarą.",
    rest: true, anim: "child", video: { id: "HBdNHrt0A7Y", title: "Child's Pose Stretch for Lower Back Pain Relief", by: "Anand Physical Therapy Academy" } }
];

// Sekundės: poilsis tarp serijų, pusės keitimas, pirmo pratimo apžiūra, poilsis tarp pratimų,
// pasiruošimas po poilsio, poilsio pratęsimas mygtuku
const REST_SETS = 20, SIDE_SWITCH = 8, PREP = 30, REST_BETWEEN = 30, PREP_NEXT = 10, REST_PLUS = 15;
let level = 0;
try { const s = localStorage.getItem("karolina-level"); if (s === "1") level = 1; } catch (e) {}

// Visi įterpti video rodomi per youtube-nocookie.com (privatumo režimas: slapukai
// nesaugomi, kol video nepaleistas). Nuoroda „atidaryti YouTube“ veda į įprastą youtube.com.
const YT_HOST = "https://www.youtube-nocookie.com";
function ytEmbed(id, params, title) {
  return `<iframe src="${YT_HOST}/embed/${id}?${params}" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
}
let cardAnims = [];
function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
function renderCards() {
  const box = document.getElementById("cards");
  box.innerHTML = EX.map((e, i) => `
    <article class="ex" id="ex${i}">
      <div class="ex-head"><span class="num">${i + 1}.</span><div><h3>${esc(e.name)}</h3><span class="alias">${esc(e.en)}</span></div></div>
      <div class="dose"><span class="chip">${esc(e.dose[level])}</span>${e.sides ? '<span class="chip">pradėk kaire, po to dešine</span>' : ""}</div>
      <p class="why">${esc(e.why)}</p>
      <figure class="anim" data-anim="${e.anim}" aria-label="Animacija: ${esc(e.name)}"></figure>
      <h4>Kaip daryti</h4>
      <ol>${e.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
      <h4>Dažnos klaidos</h4>
      <ul class="mist">${e.mistakes.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
      <a class="video" href="#vid${i}" data-play="${i}"><i class="play" aria-hidden="true"></i><span>Žiūrėti video<small>${esc(e.video.by)} · skiltyje „Video“</small></span></a>
    </article>`).join("");
  cardAnims.forEach(c => c.destroy());
  cardAnims = [...box.querySelectorAll(".anim")].map(f => ANIM.mount(f, f.dataset.anim, level));
}

// Atskira video skiltis: miniatiūra, paspaudus – įterptas YouTube (nocookie) grotuvas
function renderVideos() {
  $("videolist").innerHTML = EX.map((e, i) => `
    <article class="vcard" id="vid${i}">
      <h3><span class="num">${i + 1}.</span> ${esc(e.name)}</h3>
      <div class="embed" data-id="${e.video.id}" data-title="${esc(e.video.title)}">
        <button class="embed-btn" type="button" aria-label="Paleisti video: ${esc(e.video.title)}">
          <img src="https://i.ytimg.com/vi/${e.video.id}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360">
          <i class="play big" aria-hidden="true"></i>
        </button>
      </div>
      <p class="vmeta">${esc(e.video.title)} · ${esc(e.video.by)} · <a href="https://www.youtube.com/watch?v=${e.video.id}" target="_blank" rel="noopener">atidaryti YouTube</a></p>
    </article>`).join("");
}
function playVideo(box) {
  if (!box || box.querySelector("iframe")) return;
  box.innerHTML = ytEmbed(box.dataset.id, "autoplay=1&rel=0&playsinline=1", box.dataset.title);
}

// Savaitės planas (0 = pirmadienis). „full“ – visi pratimai, „light“ – poilsio dienos
// pratimai (rest: true) ir pasivaikščiojimas.
const WEEK = [
  ["Pirmadienis", "Pr", "full"], ["Antradienis", "An", "light"], ["Trečiadienis", "Tr", "full"],
  ["Ketvirtadienis", "Kt", "light"], ["Penktadienis", "Pn", "full"], ["Šeštadienis", "Št", "light"],
  ["Sekmadienis", "Sk", "full"]
].map(([name, short, type]) => ({ name, short, type }));
const DAYTYPE = {
  full: { name: "Visa treniruotė", list: () => EX.map((e, i) => i), extra: "" },
  light: { name: "Lengva diena (kvėpavimas ir tempimai)", list: () => EX.map((e, i) => (e.rest ? i : -1)).filter(i => i >= 0), extra: "Plius 30 min. pasivaikščiojimas sparčiu žingsniu." },
  // Vakare po įtemptos dienos (Garmin stresas) siūlomas trumpas atsipalaidavimas
  relax: { name: "Atsipalaidavimas (kvėpavimas ir vaiko poza)", list: () => EX.map((e, i) => (["breath", "child"].includes(e.anim) ? i : -1)).filter(i => i >= 0), extra: "" }
};
// Lietuviškas daugiskaitos linksnis: 1 minutė, 2 minutės, 10 minučių, 21 minutė...
function plural(n, one, few, many) {
  const t = n % 100, u = n % 10;
  return n + " " + (u === 0 || (t >= 11 && t <= 19) ? many : u === 1 ? one : few);
}
const weekday = d => (d.getDay() + 6) % 7;
let selDay = weekday(new Date()), lastToday = selDay;
// override – kitas treniruotės tipas nei pagal savaitės planą (pvz., „relax“);
// easy – lengvesnė versija pavargus: viena serija mažiau, ilgesnis poilsis
let override = null, easy = false;
const EASY_REST = 10;
const dayType = () => override || WEEK[selDay].type;

function buildSteps(lvl = level, list = DAYTYPE[dayType()].list(), ez = easy) {
  const steps = [], REST = ez ? REST_SETS + EASY_REST : REST_SETS;
  list.forEach((i, pos) => {
    const e = EX[i];
    const sets = ez ? Math.max(1, e.sets[lvl] - 1) : e.sets[lvl], secs = e.secs[lvl];
    // Tarp pratimų – poilsis (jau rodoma kito pratimo animacija), po jo trumpas pasiruošimas
    if (pos > 0) steps.push({ type: "rest", between: true, ex: i, title: "Poilsis", sub: "", cue: `Atsikvėpk ir atsigerk vandens. Toliau: ${i + 1}. ${e.name}. ${e.cue}`, secs: REST_BETWEEN });
    steps.push({ type: "prep", pos, ex: i, title: pos ? "Pasiruošk" : "Žiūrėk ir pasiruošk", sub: "", cue: `${i + 1}. ${e.name}. ${pos ? "Užimk pradinę padėtį." : "Pažiūrėk, kaip daroma, ir užimk pradinę padėtį."} ${e.cue}`, secs: pos ? PREP_NEXT : PREP });
    const sides = e.sides ? ["kairė pusė", "dešinė pusė"] : [null];
    for (let s = 0; s < sets; s++) {
      sides.forEach((side, k) => {
        let label = `${i + 1}. ${e.name}`;
        const parts = [];
        if (sets > 1) parts.push(`${s + 1}/${sets} serija`);
        if (side) parts.push(side);
        steps.push({ type: "work", ex: i, set: s, sets, side: side ? k : -1, title: label, sub: parts.join(" · "), cue: e.cue + " " + e.dose[lvl] + ".", secs });
        const lastSide = k === sides.length - 1, lastSet = s === sets - 1;
        if (!lastSide) steps.push({ type: "rest", sw: true, ex: i, title: "Keisk pusę", sub: "", cue: `Atsigulk ant kito šono / pakeisk koją. Toliau: ${e.name}, dešinė pusė.`, secs: SIDE_SWITCH });
        else if (!lastSet) steps.push({ type: "rest", nextSet: s + 1, ex: i, title: "Poilsis", sub: "", cue: `Toliau: ${e.name}, ${s + 2} serija.`, secs: REST });
      });
    }
  });
  return steps;
}

// Atliktos treniruotės saugomos localStorage žurnale: { d: "2026-10-06", t: "full" | "light", ... }.
// Viena įskaita dienai ir tipui. Savaitė prasideda pirmadienį; „Šią savaitę X/4“ skaičiuoja visas
// treniruotes. Įskaitoma, jei realiai treniruotasi bent pusę numatyto laiko (kad keli
// „Praleisti žingsnį“ paspaudimai nepažymėtų treniruotės atlikta).
const LOG_KEY = "karolina-log", OLD_KEY = "karolina-done", WEEK_GOAL = 4, KEEP_DAYS = 180;
function dayKey(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function loadLog() {
  try {
    let a = JSON.parse(localStorage.getItem(LOG_KEY) || "null");
    if (!Array.isArray(a)) {
      // senas formatas: tik dienų sąrašas
      const old = JSON.parse(localStorage.getItem(OLD_KEY) || "[]");
      a = Array.isArray(old) ? old.filter(x => typeof x === "string").map(d => ({ d, t: "full" })) : [];
    }
    return a.filter(x => x && typeof x.d === "string");
  } catch (e) { return []; }
}
function saveLog(log) {
  try { localStorage.setItem(LOG_KEY, JSON.stringify(log)); localStorage.removeItem(OLD_KEY); } catch (e) {}
}
function markDone(type, extra = {}) {
  const now = new Date(), today = dayKey(now);
  const oldest = dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - KEEP_DAYS));
  const log = loadLog().filter(x => x.d >= oldest && !(x.d === today && x.t === type));
  log.push(Object.assign({ d: today, t: type, lvl: level + 1 }, extra));
  saveLog(log);
}
function weekDates() {
  const now = new Date(), mon = new Date(now.getFullYear(), now.getMonth(), now.getDate() - weekday(now));
  return WEEK.map((w, i) => dayKey(new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + i)));
}
function renderWeek() {
  const log = loadLog(), dates = weekDates(), today = weekday(new Date());
  const full = new Set(log.filter(x => x.t === "full" && x.d >= dates[0]).map(x => x.d)).size;
  $("week").textContent = `Šią savaitę: ${full}/${WEEK_GOAL}`;
  $("days").innerHTML = WEEK.map((w, i) => {
    const done = log.some(x => x.d === dates[i]);
    return `<button class="day ${w.type}${i === today ? " today" : ""}${done ? " done" : ""}" data-day="${i}" aria-pressed="${i === selDay}" title="${w.name}: ${DAYTYPE[w.type].name}${done ? " · atlikta" : ""}">
      <b>${w.short}</b><i aria-hidden="true">${done ? "✓" : w.type === "full" ? "●" : "○"}</i></button>`;
  }).join("");
  const w = WEEK[selDay], min = Math.round(buildSteps(level).reduce((a, s) => a + s.secs, 0) / 60), n = DAYTYPE[w.type].list().length;
  $("dayinfo").innerHTML = `<b>${selDay === today ? "Šiandien" : w.name}${selDay === today ? ` (${w.name.toLowerCase()})` : ""}:</b> ${DAYTYPE[w.type].name.toLowerCase()} – ${plural(n, "pratimas", "pratimai", "pratimų")}, apie ${min} min. ${DAYTYPE[w.type].extra}`;
}
function selectDay(i) {
  if (i === selDay) return;
  if (idx >= 0 && idx < steps.length && !confirm("Nutraukti dabartinę treniruotę ir pereiti prie kitos dienos?")) return;
  selDay = i;
  renderWeek(); reset();
}

// Bendra trukmė ir poilsio dienų pratimai skaičiuojami iš EX, kad pakeitus pratimus
// tekstas puslapyje neatsiliktų.
function renderSummary() {
  [0, 1].forEach(l => {
    const min = Math.round(buildSteps(l, DAYTYPE.full.list()).reduce((a, s) => a + s.secs, 0) / 60);
    document.querySelectorAll(`[data-dur="${l}"]`).forEach(el => { el.textContent = min; });
  });
  $("restlist").innerHTML = EX.map((e, i) => e.rest ? `<a href="#ex${i}">${i + 1}. ${esc(e.name)}</a>` : "").filter(Boolean).join(", ");
}

let steps = buildSteps(), idx = -1, left = 0, timer = null, running = false, audio = null, wake = null;
// Laikas skaičiuojamas nuo žingsnio pabaigos momento (Date.now()), ne mažinant skaitiklį kas
// sekundę: foniniame skirtuke setInterval lėtėja, bet laikas vis tiek lieka tikslus.
let endAt = 0, remainMs = 0, trainedMs = 0, lastTick = 0;
function countTrained() { const now = Date.now(); if (running) trainedMs += now - lastTick; lastTick = now; }
const $ = id => document.getElementById(id);

function fmt(t) { const m = Math.floor(t / 60), s = t % 60; return m + ":" + String(s).padStart(2, "0"); }
function totalSecs() { return steps.reduce((a, s) => a + s.secs, 0); }
// Garsai generuojami Web Audio API, be garso failų. AudioContext sukuriamas paspaudus
// „Pradėti“, nes kitaip naršyklės (ypač iOS Safari) neleidžia jam groti.
function initAudio() {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === "suspended") audio.resume();
  } catch (e) {}
}
function beep(f, d, at = 0) {
  try {
    if (!audio) return;
    if (audio.state === "suspended") audio.resume();
    const t = audio.currentTime + at, o = audio.createOscillator(), g = audio.createGain();
    o.type = "sine"; o.frequency.value = f; o.connect(g); g.connect(audio.destination);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.25, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.start(t); o.stop(t + d + 0.02);
  } catch (e) {}
}
function buzz(pattern) { try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (e) {} }
// Paskutinės 3 sekundės: trumpas pyptelėjimas kas sekundę
function countBeep() { beep(660, 0.09); buzz(40); }
// Perėjimas: darbui – du aukšti tonai, poilsiui / pasiruošimui – vienas žemesnis
function stepBeep(type) {
  if (type === "work") { beep(880, 0.18); beep(1175, 0.25, 0.2); buzz([180, 80, 180]); }
  else { beep(520, 0.3); buzz(250); }
}
function highlight(ex) {
  document.querySelectorAll(".ex").forEach((el, i) => el.classList.toggle("active", i === ex));
}
function show() {
  const st = steps[idx];
  if (idx !== spokenIdx) { spokenIdx = idx; announce(st); }
  $("kind").textContent = holding ? (st.type === "intro" ? "Įžanga · klausyk" : "Klausyk ir pasiruošk")
    : st.type === "work" ? "Daryk" + (st.sub ? " · " + st.sub : "") : st.title;
  $("now").textContent = st.type === "intro" ? "Labas, Karolina!" : st.type === "work" ? st.title : st.type === "prep" ? `${st.ex + 1}. ${EX[st.ex].name}`
    : st.between ? `Toliau: ${st.ex + 1}. ${EX[st.ex].name}` : (st.title === "Keisk pusę" ? "Keisk pusę" : "Atsikvėpk");
  $("cue").textContent = holding && st.type === "prep" ? EX[st.ex].steps.join(" ") : st.cue;
  $("clock").textContent = holding ? "Klausyk…" : fmt(left);
  $("player").classList.toggle("is-listen", holding);
  $("bar").style.width = holding ? "0" : (100 * (st.secs - left) / st.secs) + "%";
  const remaining = steps.slice(idx + 1).reduce((a, s) => a + s.secs, 0) + left;
  const list = DAYTYPE[dayType()].list();
  $("meta").textContent = `Pratimas ${list.indexOf(st.ex) + 1} iš ${list.length} · liko apie ${Math.ceil(remaining / 60)} min.`;
  highlight(steps[idx].ex);
  $("restctl").hidden = st.type !== "rest";
  $("player").classList.toggle("is-rest", st.type === "rest");
  try { showAnim(st.ex); } catch (e) {}
}
// Treniruotės metu rodoma dabartinio pratimo animacija
let pAnim = null, animEx = -1;
function showAnim(ex) {
  const box = $("panim");
  if (ex < 0) { box.hidden = true; animEx = -1; if (pAnim) { pAnim.destroy(); pAnim = null; } return; }
  box.hidden = false;
  if (ex === animEx && pAnim) return;
  if (pAnim) pAnim.destroy();
  animEx = ex; pAnim = ANIM.mount(box, EX[ex].anim, level);
}
// ---- Balsas: pranešimai žingsnio pradžioje ir ritmo nurodymai jo metu ----
const INTRO_SECS = 28;
// Ilgi aprašymai (įžanga ir pratimų žingsniai) sakomi, kol bus išklausyti iki galo; vėliau –
// trumpai: pavadinimas ir pagrindinis nurodymas. „Atgal“ pasiruošimo metu vėl paskaito visą.
// Išklausyti aprašymai saugomi localStorage (karolina-heard).
const HEARD_KEY = "karolina-heard";
let heard = new Set(), fullIdx = -1;
try { heard = new Set(JSON.parse(localStorage.getItem(HEARD_KEY) || "[]")); } catch (e) {}
function markHeard(k) {
  if (heard.has(k)) return;
  heard.add(k);
  try { localStorage.setItem(HEARD_KEY, JSON.stringify([...heard])); } catch (e) {}
}
function introStep(full = !heard.has("intro")) {
  const w = WEEK[selDay], type = dayType(), list = DAYTYPE[type].list(), min = Math.round(buildSteps(level).reduce((a, s) => a + s.secs, 0) / 60);
  const mins = plural(min, "minutė", "minutės", "minučių");
  if (type === "relax")
    return { type: "intro", ex: list[0], title: "Įžanga", sub: "", secs: INTRO_SECS,
      cue: `Labas, Karolina. Diena buvo įtempta, todėl dabar – trumpas atsipalaidavimas: kvėpavimas ir vaiko poza, apie ${mins}. Atsigulk patogiai. Pradedam.` };
  const what = type === "full" ? `visa treniruotė: ${plural(list.length, "pratimas", "pratimai", "pratimų")}, apie ${mins}` : `lengva diena: kvėpavimas ir tempimai, apie ${mins}, o paskui pusvalandis pasivaikščiojimo`;
  const why = easy ? "Šiandien tavo kūnas pavargęs, todėl darysim lengvesnę versiją: mažiau serijų ir ilgesnis poilsis. " : "";
  const text = !full ? `Labas, Karolina. Šiandien ${w.name.toLowerCase()}, ${what}. ${why}Patiesk kilimėlį. Pradedam.`
    : `Labas, Karolina. Šiandien ${w.name.toLowerCase()}, ${what}. ${why}` +
    "Šios mankštos tikslas – sustiprinti giliuosius pilvo ir sėdmenų raumenis ir išmokti valdyti dubens padėtį. " +
    "Judėk lėtai, visą laiką kvėpuok ir niekada nedaryk per aštrų skausmą. Aš pasakysiu, kada ir ką daryti, tau nereikės skaičiuoti. " +
    "Patiesk kilimėlį. Pradedam.";
  return { type: "intro", ex: list[0], title: "Įžanga", sub: "", cue: text, secs: INTRO_SECS };
}
let spokenIdx = -1, vKey = null, vFlags = {};
// Kol balsas skaito įžangą ar pratimo aprašymą, laikmatis stovi („holding“). Kai baigia –
// pypsi ir prasideda pratimas. Jei naršyklė nepraneša apie kalbos pabaigą, po apskaičiuoto
// laiko tęsiama vis tiek.
let holding = false, gateId = 0, gateTimer = null;
const isGated = st => SAY.active && (st.type === "intro" || st.type === "prep");
const heardKey = st => st.type === "intro" ? "intro" : EX[st.ex].anim;
function descText(st, full = !heard.has(heardKey(st))) {
  const e = EX[st.ex];
  return `${st.pos ? "Kitas pratimas" : "Pirmas pratimas"}: ${e.name}. ${full ? e.steps.join(" ") : e.cue}${e.sides ? " Pradėk kaire puse." : ""} Pasiruošk.`;
}
// key – kurį aprašymą pažymėti išklausytu, kai jis pasakomas iki galo (ne praleistas)
function gate(text, key) {
  const id = ++gateId;
  holding = true; clearTimeout(gateTimer);
  const done = () => { if (id === gateId && holding && running) markHeard(key); gateEnd(id); };
  SAY.say(text, true, done);
  gateTimer = setTimeout(done, Math.max(5000, text.length * 110 + 4000));
}
function gateEnd(id) {
  if (id !== gateId || !holding || !running) return;
  clearTimeout(gateTimer);
  setTimeout(() => { if (id === gateId && running && holding) { holding = false; next(); } }, 500);
}
function announce(st) {
  vKey = null; vFlags = {};
  const e = EX[st.ex];
  if (isGated(st)) {
    const full = fullIdx === idx || !heard.has(heardKey(st));
    return gate(st.type === "intro" ? introStep(full).cue : descText(st, full), heardKey(st));
  }
  if (st.type === "rest") {
    if (st.between) return SAY.say(`Poilsis. Atsikvėpk. Toliau – ${e.name}.`);
    if (st.sw) return SAY.say(VOICE_SWITCH[e.anim] || "Keisk pusę.");
    return SAY.say(`Poilsis. Paskui ${ORD[st.nextSet] ? ORD[st.nextSet].toLowerCase() : ""} serija.`);
  }
  if (st.type === "work") {
    const pre = (st.sets > 1 ? `${ORD[st.set] || ""} serija. ` : "") + (st.side === 0 ? "Kairė pusė. " : st.side === 1 ? "Dešinė pusė. " : "");
    const v = VOICE[e.anim](level, st.secs);
    vFlags.pre = pre || "Pradėk. ";
    if (v.start) { SAY.say(vFlags.pre + v.start); vKey = "start"; }
    else SAY.stop(); // pirmą ritmo frazę pasakys voiceTick; ankstesnio žingsnio kalba nutraukiama
  }
}
// Kviečiama kas 250 ms: pagal praėjusį žingsnio laiką pasako einamą ritmo nurodymą
function voiceTick() {
  if (!running || idx < 0 || idx >= steps.length || !SAY.active) return;
  const st = steps[idx], rem = (endAt - Date.now()) / 1000, t = st.secs - rem;
  if (st.type !== "work") return;
  const v = VOICE[EX[st.ex].anim](level, st.secs);
  if (v.beat) {
    const C = v.beat.reduce((a, b) => a + b[1], 0), k = Math.floor(t / C);
    let x = t - k * C, i = 0;
    while (i < v.beat.length - 1 && x >= v.beat[i][1]) { x -= v.beat[i][1]; i++; }
    const key = k + ":" + i;
    // Kol dar skamba ankstesnė frazė, naujos nepradedam (kad nenukirstų sakinio vidury) –
    // ji pasakoma, vos ankstesnė baigiasi, jei dar nepasibaigė jos laikas
    if (key === vKey || rem < 1 || SAY.busy) return;
    vKey = key;
    const b = v.beat[i], text = k > 0 && b[2] ? b[2] : b[0];
    if (vFlags.pre) { SAY.say(vFlags.pre + text); vFlags.pre = ""; } else SAY.say(text);
  } else {
    const n = Math.floor(t / v.every);
    if (n < 1 || rem < 3) return;
    const key = "r" + n;
    if (key === vKey || SAY.busy) return;
    vKey = key; SAY.say(v.remind[(n - 1) % v.remind.length]);
  }
}

function setStep(i) {
  gateId++; holding = false; clearTimeout(gateTimer);
  idx = i;
  left = steps[idx].secs; remainMs = left * 1000; endAt = Date.now() + remainMs;
}
function next() {
  fullIdx = -1;
  if (idx + 1 >= steps.length) { finish(); return; }
  setStep(idx + 1);
  stepBeep(steps[idx].type);
  show();
}
// „Atgal“: jei žingsnis jau eina ilgiau nei 3 s, pradeda jį iš naujo, kitaip grįžta į ankstesnį.
// Veikia ir per pauzę (laikmatis lieka sustabdytas).
function back() {
  if (idx < 0 || idx >= steps.length) return;
  // Klausantis trumpo aprašymo – pirmas „Atgal“ perskaito visą aprašymą
  if (holding && isGated(steps[idx]) && fullIdx !== idx) { fullIdx = idx; setStep(idx); spokenIdx = -1; show(); return; }
  const elapsed = steps[idx].secs * 1000 - (running ? endAt - Date.now() : remainMs);
  setStep(elapsed > 3000 || idx === 0 ? idx : idx - 1);
  spokenIdx = -1;
  show();
}
// Poilsį galima pratęsti arba baigti anksčiau
function extendRest() {
  if (idx < 0 || idx >= steps.length || steps[idx].type !== "rest") return;
  steps[idx] = Object.assign({}, steps[idx], { secs: steps[idx].secs + REST_PLUS });
  if (running) endAt += REST_PLUS * 1000; else remainMs += REST_PLUS * 1000;
  left += REST_PLUS;
  SAY.say("Dar penkiolika sekundžių poilsio.");
  show();
}
function endRest() { if (idx >= 0 && idx < steps.length && steps[idx].type === "rest") next(); }
function tick() {
  countTrained();
  if (holding) { endAt = Date.now() + steps[idx].secs * 1000; return; }
  voiceTick();
  const now = Date.now();
  let moved = false;
  // Jei skirtukas ilgai buvo fone, praleidžiami visi jau pasibaigę žingsniai
  while (endAt <= now) {
    if (idx + 1 >= steps.length) { finish(); return; }
    idx++; endAt += steps[idx].secs * 1000; moved = true;
  }
  const l = Math.ceil((endAt - now) / 1000);
  if (!moved && l === left) return;
  left = l;
  if (moved) stepBeep(steps[idx].type);
  else if (left <= 3) countBeep();
  show();
}
// Ekranas neužgęsta, kol vyksta treniruotė. Naršyklė užraktą atleidžia paslėpus skirtuką,
// todėl grįžus jis paprašomas iš naujo (žr. visibilitychange apačioje).
async function lockScreen() {
  if (!("wakeLock" in navigator) || wake || !running || document.visibilityState !== "visible") return;
  try {
    const w = await navigator.wakeLock.request("screen");
    if (!running) { w.release().catch(() => {}); return; }
    wake = w;
    w.addEventListener("release", () => { if (wake === w) wake = null; });
  } catch (e) { wake = null; }
}
function unlockScreen() {
  const w = wake; wake = null;
  if (w) w.release().catch(() => {});
}
function start() {
  if (running) { pause(); return; }
  running = true; $("start").textContent = "Pauzė";
  MEDIA.start(); initAudio();
  lastTick = Date.now();
  if (idx < 0 || idx >= steps.length) trainedMs = 0;
  lockScreen();
  if (idx < 0 || idx >= steps.length) { idx = -1; spokenIdx = -1; $("home").hidden = true; setMode("workout"); next(); }
  else { endAt = Date.now() + remainMs; if (isGated(steps[idx])) spokenIdx = -1; show(); }
  clearInterval(timer);
  timer = setInterval(tick, 250);
}
function pause() {
  countTrained();
  if (running) remainMs = Math.max(0, endAt - Date.now());
  running = false; clearInterval(timer); $("start").textContent = "Tęsti";
  clearTimeout(gateTimer); SAY.stop(); vKey = null;
  unlockScreen();
}
// Pabaigus treniruotę atsiveria įsivertinimo forma; treniruotė pažymima atlikta tik ją išsaugojus
let pending = null;
function finish() {
  countTrained();
  const counted = trainedMs >= totalSecs() * 1000 / 2;
  clearInterval(timer); running = false; idx = steps.length; unlockScreen();
  setTimeout(() => MEDIA.stop(), 8000); // leidžiam pabaigti pasakyti pabaigos sakinį
  beep(880, 0.2); beep(1175, 0.2, 0.22); beep(1568, 0.45, 0.44); buzz([200, 100, 200, 100, 400]);
  $("kind").textContent = "Baigta";
  $("now").textContent = dayType() === "full" ? "Puiku, šiandienos mankšta baigta!" : dayType() === "relax" ? "Puiku! Gero vakaro." : "Puiku! Dabar dar 30 min. pasivaikščiok.";
  $("cue").textContent = "Išgerk vandens ir trumpai įsivertink, kaip sekėsi: taip matysi pažangą, o kineziterapeutui bus ką parodyti.";
  $("clock").textContent = "0:00"; $("bar").style.width = "100%";
  $("restctl").hidden = true; $("player").classList.remove("is-rest");
  $("start").textContent = "Pradėti iš naujo"; highlight(-1); showAnim(-1);
  $("home").hidden = false; $("player").classList.remove("is-listen");
  SAY.say(dayType() === "full" ? "Puiku, Karolina! Mankšta baigta. Išgerk vandens ir trumpai įsivertink, kaip sekėsi."
    : dayType() === "relax" ? "Puiku, Karolina! Gero vakaro ir ramaus miego." : "Puiku, Karolina! Dabar dar pusvalandį pasivaikščiok.");
  if (counted) {
    pending = { type: dayType(), min: Math.round(trainedMs / 60000), easy };
    $("meta").textContent = "Užpildyk trumpą įsivertinimą, kad treniruotė būtų pažymėta kaip atlikta.";
    $("rate").hidden = false;
    openRate();
  } else {
    pending = null; $("rate").hidden = true;
    $("meta").textContent = "Daugiau nei pusė treniruotės praleista, todėl ji neįskaityta.";
  }
}
function openRate() {
  if (!pending) return;
  const f = $("rateform");
  f.reset(); $("wherebox").hidden = true;
  $("ratesub").textContent = `${DAYTYPE[pending.type].name}, ${level + 1} lygis${pending.easy ? ", lengvesnė versija" : ""}, apie ${pending.min} min.`;
  const box = $("ratebox");
  if (box.showModal) box.showModal(); else box.setAttribute("open", "");
}
function closeRate() { const box = $("ratebox"); if (box.close) box.close(); else box.removeAttribute("open"); }
function saveRate(ev) {
  ev.preventDefault();
  const f = $("rateform");
  if (!f.reportValidity() || !pending) return;
  const d = new FormData(f), pain = d.get("pain");
  const h = HEALTH.today(), r = HEALTH.readiness();
  markDone(pending.type, { min: pending.min, rpe: +d.get("rpe"), feel: d.get("feel"), pain, easy: pending.easy || undefined,
    h: h ? { steps: h.steps, sleep: h.sleep, rhr: h.rhr, bb: h.bb, hrv: h.hrv, ready: r ? r.score : undefined } : undefined,
    where: pain !== "ne" ? String(d.get("where") || "").trim() : "", note: String(d.get("note") || "").trim() });
  pending = null; closeRate();
  $("rate").hidden = true;
  $("meta").textContent = "Treniruotė pažymėta kaip atlikta.";
  if (pain === "taip" || d.get("feel") === "blogiau")
    $("cue").textContent = "Pasižymėjai skausmą ar blogesnę savijautą. Kitą kartą tą pratimą daryk švelniau arba praleisk ir būtinai pasakyk kineziterapeutui. Jei skausmas aštrus ar plinta į koją, mankštą sustabdyk ir kreipkis į gydytoją.";
  renderWeek(); renderHistory(); renderHello();
}
// Įrašų istorija (naujausi viršuje) ir kopijavimas tekstu
const FEEL = { 1: "labai lengva", 2: "lengva", 3: "vidutiniškai", 4: "sunku", 5: "labai sunku" };
function entryText(x) {
  const parts = [`${x.d} · ${x.t === "full" ? "visa treniruotė" : x.t === "relax" ? "atsipalaidavimas" : "lengva diena"}${x.lvl ? `, ${x.lvl} lygis` : ""}${x.easy ? ", lengvesnė" : ""}${x.min ? `, ${x.min} min.` : ""}`];
  if (x.rpe) parts.push(`sunkumas ${x.rpe}/5 (${FEEL[x.rpe]})`);
  if (x.feel) parts.push(`savijauta: ${x.feel}`);
  if (x.pain) parts.push(`skausmas: ${x.pain}${x.where ? ` (${x.where})` : ""}`);
  if (x.note) parts.push(`pastabos: ${x.note}`);
  if (x.h) parts.push(`Garmin: ${HEALTH.text(x.h)}${x.h.ready != null ? `, pasiruošimas ${x.h.ready}/100` : ""}`);
  return parts.join(" · ");
}
function renderHistory() {
  const log = loadLog().slice().reverse().slice(0, 30);
  $("histlist").innerHTML = log.length
    ? `<ul>${log.map(x => `<li class="${x.pain && x.pain !== "ne" ? "pain" : ""}">${esc(entryText(x))}</li>`).join("")}</ul>`
    : "<p>Įrašų dar nėra. Jie atsiras pabaigus treniruotę ir užpildžius įsivertinimą.</p>";
  $("histcopy").hidden = !log.length;
}
async function copyHistory() {
  const days = HEALTH.all().slice().reverse().slice(0, 60);
  const text = "Karolinos mankštos įrašai\n" + loadLog().slice().reverse().map(entryText).join("\n") +
    (days.length ? "\n\nGarmin duomenys pagal dienas\n" + days.map(x => `${x.d} · ${HEALTH.text(x)}`).join("\n") : "");
  try { await navigator.clipboard.writeText(text); $("histcopy").textContent = "Nukopijuota ✓"; }
  catch (e) { prompt("Nukopijuok įrašus:", text); }
  setTimeout(() => { $("histcopy").textContent = "Kopijuoti įrašus (kineziterapeutui)"; }, 2000);
}
function reset() {
  pause(); idx = -1; spokenIdx = -1; pending = null; $("rate").hidden = true; steps = buildSteps();
  if (SAY.active) steps.unshift(introStep());
  $("start").textContent = "Pradėti"; $("kind").textContent = "Pasiruošk";
  $("now").textContent = "Patiesk kilimėlį ir paspausk „Pradėti“";
  $("cue").textContent = "Prieš kiekvieną pratimą rodoma animacija, kaip jis daromas. Tada laikmatis skaičiuoja serijas, o animacija lieka rodoma. Viskas persijungia automatiškai.";
  $("clock").textContent = fmt(totalSecs()); $("bar").style.width = "0";
  $("meta").textContent = `Visa treniruotė: apie ${Math.round(totalSecs() / 60)} min.`; highlight(-1); showAnim(-1);
  $("restctl").hidden = true; $("player").classList.remove("is-rest", "is-listen"); $("home").hidden = true;
}
function setLevel(l) {
  level = l;
  try { localStorage.setItem("karolina-level", String(l)); } catch (e) {}
  ["lvl1", "hl1"].forEach(b => $(b).setAttribute("aria-pressed", l === 0));
  ["lvl2", "hl2"].forEach(b => $(b).setAttribute("aria-pressed", l === 1));
  renderCards(); reset(); renderWeek();
}
$("videolist").addEventListener("click", ev => {
  const btn = ev.target.closest(".embed-btn");
  if (btn) playVideo(btn.parentElement);
});
// Nuoroda „Žiūrėti video“ kortelėje nuveda į video skiltį ir iškart paleidžia video
$("cards").addEventListener("click", ev => {
  const a = ev.target.closest("[data-play]");
  if (a) playVideo(document.querySelector(`#vid${a.dataset.play} .embed`));
});
$("days").addEventListener("click", ev => {
  const b = ev.target.closest("[data-day]");
  if (b) selectDay(+b.dataset.day);
});
$("rate").onclick = openRate;
$("rateform").addEventListener("submit", saveRate);
$("ratelater").onclick = closeRate;
$("rateform").addEventListener("change", ev => {
  if (ev.target.name === "pain") $("wherebox").hidden = ev.target.value === "ne";
});
$("histcopy").onclick = copyHistory;
// Pasisveikinimas: šiandienos planas ir mygtukas „Pradėkime“ (paleidžia balsą ir treniruotę)
function renderHello() {
  // Lengvesnė versija įjungiama automatiškai, kai pasiruošimas žemas, nebent šiandien perjungta ranka
  if (!(idx >= 0 && idx < steps.length) && easyTouched !== dayKey(new Date())) {
    const r = HEALTH.readiness(), e = !!r && r.score < 45;
    if (e !== easy) { easy = e; reset(); }
  }
  const w = WEEK[weekday(new Date())], log = loadLog(), dates = weekDates();
  const full = new Set(log.filter(x => x.t === "full" && x.d >= dates[0]).map(x => x.d)).size;
  const doneToday = log.some(x => x.d === dayKey(new Date()));
  const steps0 = buildSteps(level, DAYTYPE[w.type].list()), min = Math.round(steps0.reduce((a, s) => a + s.secs, 0) / 60);
  $("hellotext").textContent = (doneToday ? "Šiandienos mankšta jau atlikta, šaunuolė! Jei nori, gali pakartoti. " : "") +
    [`Šiandien ${w.name.toLowerCase()}: ${DAYTYPE[w.type].name.toLowerCase()}, apie ${min} min.`, DAYTYPE[w.type].extra,
      `Šią savaitę jau atlikai ${full} iš ${WEEK_GOAL} treniruočių.`].filter(Boolean).join(" ");
  renderHealth(w.type);
  $("voicenote").textContent = !SAY.supported ? "Ši naršyklė nemoka kalbėti, todėl instrukcijos bus rodomos ekrane."
    : voiceRefused ? "Lietuviško balso nėra, instrukcijos bus rodomos ekrane. iPhone: Nustatymai → Prieinamumas → Šnekamas turinys → Balsai → Lietuvių → atsisiųsk balsą ir atnaujink puslapį. Android: Nustatymai → Sistema → Kalbos ir įvestis → Teksto į kalbą išvestis → lietuvių kalba."
    : !SAY.available ? `Puslapis nerado lietuviško balso sąraše (naršyklė mato balsų: ${SAY.count}). Paspausk „Išbandyti balsą“ – jei išgirsi lietuviškai, balsą įjungsiu.`
    : SAY.on ? "Įsijunk garsą: vesiu tave balsu per visą mankštą, nereikės nei skaičiuoti, nei žiūrėti į ekraną."
    : "Balsas išjungtas – instrukcijos bus rodomos ekrane. Įjungti galima laikmatyje.";
  document.body.classList.toggle("voice-on", SAY.active);
  $("vtestbox").hidden = !SAY.supported || SAY.available || voiceRefused;
  $("voice").hidden = !SAY.available;
  $("voice").textContent = SAY.on ? "Balsas: įjungtas" : "Balsas: išjungtas";
  $("voice").setAttribute("aria-pressed", SAY.on);
}
// Garmin duomenys (js/health.js): pasiruošimo kortelė (žiedas su balu, rodiklių plytelės su
// 14 dienų grafiku, pasiūlymas) ir prisitaikanti treniruotė. Būsenos žinutės – #healthnote.
let easyTouched = null, sparkKey = null;
const C_RING = 2 * Math.PI * 52;
const fmt1 = v => String(Math.round(v * 10) / 10).replace(".", ",");
function renderHealth(type) {
  const t = HEALTH.today(), r = HEALTH.readiness(), p = [], gs = HEALTH.garminState;
  if (gs === "need-key") p.push("Garmin duomenys paruošti. Įvesk raktą, kad galėčiau juos parodyti.");
  if (gs === "bad-key") p.push("Garmin raktas netinka. Įvesk jį iš naujo.");
  if (HEALTH.received && !t) p.push("Nuoroda iš telefono atėjo, bet joje nebuvo skaičių. Patikrink „Shortcut“ nustatymus.");
  if (HEALTH.badSleep != null) p.push(`Miego trukmė atėjo neteisinga (${String(HEALTH.badSleep).replace(".", ",")} val.), todėl jos neišsaugojau.`);
  if (HEALTH.refreshing) p.push("Garmin duomenys atnaujinami, palauk 1–2 min.");
  if (HEALTH.refreshErr) p.push(HEALTH.refreshErr + ".");
  if (t && !r) p.push(`Iš Garmin: ${HEALTH.text(t)}.`);
  $("healthnote").textContent = p.join(" ");
  $("healthnote").hidden = !p.length;
  $("garminkey").hidden = gs !== "need-key" && gs !== "bad-key";
  $("ghkey").hidden = gs !== "ok" || (HEALTH.hasGitHubKey && !/raktas/.test(HEALTH.refreshErr || ""));
  renderReady(t, r, type);
  $("letsgo").textContent = easy ? "Pradėkime · lengvesnė versija" : "Pradėkime";
}
function renderReady(t, r, type) {
  const box = $("ready");
  box.hidden = !r;
  if (!r) return;
  const sc = r.score, fg = $("ringfg");
  $("readyscore").textContent = sc;
  box.dataset.zone = sc >= 70 ? "good" : sc >= 45 ? "mid" : "low";
  // Žiedas užsipildo animuotai (CSS transition)
  fg.style.strokeDasharray = C_RING;
  if (!fg.dataset.drawn) { fg.style.strokeDashoffset = C_RING; fg.getBoundingClientRect(); fg.dataset.drawn = "1"; }
  fg.style.strokeDashoffset = C_RING * (1 - sc / 100);
  $("readytitle").textContent = sc >= 70 ? "Gerai pailsėjusi" : sc >= 45 ? "Vidutiniškai pailsėjusi" : "Kūnas pavargęs";
  const up = HEALTH.garminUpdated ? new Date(HEALTH.garminUpdated * 1000) : null;
  $("readywhen").textContent = up ? `Garmin duomenys ${dayKey(up) === dayKey(new Date()) ? "šiandien" : dayKey(up)} ${String(up.getHours()).padStart(2, "0")}:${String(up.getMinutes()).padStart(2, "0")}` : "";
  // Plytelės: rodiklis, reikšmė ir pokytis nuo įprasto; paspaudus – 14 dienų grafikas
  const tiles = r.parts.map(p => {
    let delta = "", cls = "";
    if (p.base != null && p.cur != null && Math.abs(p.cur - p.base) >= (p.key === "sleep" ? 0.2 : 1)) {
      const diff = p.cur - p.base, good = p.lowerBetter ? diff < 0 : diff > 0;
      cls = good ? "up" : "down";
      delta = `${diff > 0 ? "↑" : "↓"} ${fmt1(Math.abs(diff))}${p.unit}`;
    } else if (p.base != null && p.cur != null) delta = "kaip įprastai";
    return { key: p.key, label: p.label, value: p.value, delta, cls };
  });
  if (t.steps != null) {
    const left = HEALTH.WALK_STEPS - t.steps;
    tiles.push({ key: "steps", label: "Žingsniai", value: HEALTH.fmtNum(t.steps),
      delta: type === "light" ? (left > 0 ? `iki tikslo ${HEALTH.fmtNum(left)}` : "pasivaikščiota ✓") : "", cls: type === "light" && left <= 0 ? "up" : "" });
  }
  if (sparkKey && !tiles.some(x => x.key === sparkKey)) sparkKey = null;
  $("tiles").innerHTML = tiles.map(x => `<button class="tile ${x.cls}" type="button" data-key="${x.key}" aria-pressed="${x.key === sparkKey}">
    <span class="tl">${esc(x.label)}</span><b>${esc(x.value)}</b><span class="td">${esc(x.delta)}</span></button>`).join("");
  renderSpark();
  // Pasiūlymas ir mygtukai
  const tip = [], acts = [];
  const weak = r.parts.filter(p => p.s < 45).map(p => `${{ sleep: "miegas", rhr: "ramybės pulsas" }[p.key] || p.label} ${p.value}`);
  if (sc < 45) tip.push(`${weak.length ? weak.join(", ") + ". " : ""}Siūlau lengvesnę versiją: viena serija mažiau ir ilgesnis poilsis.`);
  else if (sc < 70) tip.push(level ? "Šiandien geriau 1 lygis ir neskubėk." : "Daryk įprastai, tik neskubėk.");
  else tip.push("Puiki diena treniruotei.");
  if (sc < 70 && level) acts.push(`<button class="btn ghost" type="button" data-act="lvl1">Rinktis 1 lygį</button>`);
  if (sc >= 70 && !level) {
    const good = [1, 2].every(i => { const x = HEALTH.readiness(dayKey(new Date(Date.now() - i * 864e5))); return x && x.score >= 70; });
    if (good) { tip.push("Jau kelias dienas gerai pailsėjusi, gal pabandyk 2 lygį?"); acts.push(`<button class="btn ghost" type="button" data-act="lvl2">Pabandyti 2 lygį</button>`); }
  }
  if (new Date().getHours() >= 17 && r.stress != null && r.stress >= 40) {
    const min = Math.max(1, Math.round(buildSteps(level, DAYTYPE.relax.list(), false).reduce((a, s) => a + s.secs, 0) / 60));
    tip.push(`Šiandien stresas buvo aukštas (${r.stress}), vakare tiks trumpas atsipalaidavimas.`);
    acts.push(`<button class="btn ghost" type="button" data-act="relax">Atsipalaidavimas · ${min} min.</button>`);
  }
  acts.push(`<button class="seg" type="button" data-act="easy" aria-pressed="${easy}">Lengvesnė versija</button>`);
  $("readytip").textContent = tip.join(" ");
  $("readyactions").innerHTML = acts.join("");
}
// Paskutinių 14 dienų grafikas su įprasta reikšme (punktyrinė linija)
function renderSpark() {
  const box = $("spark");
  box.hidden = !sparkKey;
  if (!sparkKey) return;
  const data = HEALTH.series(sparkKey, 14), vals = data.filter(x => x.v != null).map(x => x.v);
  if (vals.length < 2) { box.innerHTML = "<p>Kol kas per mažai duomenų grafikui.</p>"; return; }
  const W = 280, H = 84, pad = 10, base = sparkKey === "steps" ? null : HEALTH.baseline(undefined, sparkKey);
  let lo = Math.min(...vals, base ?? Infinity), hi = Math.max(...vals, base ?? -Infinity);
  if (hi === lo) { hi += 1; lo -= 1; }
  const X = i => pad + i * (W - 2 * pad) / (data.length - 1), Y = v => H - pad - (v - lo) * (H - 2 * pad) / (hi - lo);
  const pts = data.map((x, i) => x.v == null ? null : [X(i), Y(x.v)]).filter(Boolean);
  const last = data[data.length - 1].v != null ? pts[pts.length - 1] : null;
  const show = v => sparkKey === "steps" ? HEALTH.fmtNum(Math.round(v)) : fmt1(v);
  box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Paskutinių 14 dienų grafikas">
    ${base != null ? `<line class="sp-base" x1="${pad}" x2="${W - pad}" y1="${Y(base)}" y2="${Y(base)}"/>` : ""}
    <polyline class="sp-line" points="${pts.map(p => p.join(",")).join(" ")}"/>
    ${pts.map(p => `<circle class="sp-dot" cx="${p[0]}" cy="${p[1]}" r="2.5"/>`).join("")}
    ${last ? `<circle class="sp-now" cx="${last[0]}" cy="${last[1]}" r="5"/>` : ""}
  </svg><p class="sp-legend"><span>prieš 2 sav.</span><span>šiandien</span></p>
  <p class="sp-info">${base != null ? `Punktyras – įprastai (${show(base)}). ` : ""}Mažiausia ${show(Math.min(...vals))}, didžiausia ${show(Math.max(...vals))}.</p>`;
}
$("tiles").addEventListener("click", ev => {
  const b = ev.target.closest(".tile");
  if (!b) return;
  sparkKey = sparkKey === b.dataset.key ? null : b.dataset.key;
  $("tiles").querySelectorAll(".tile").forEach(x => x.setAttribute("aria-pressed", x.dataset.key === sparkKey));
  renderSpark();
});
$("readyactions").addEventListener("click", ev => {
  const b = ev.target.closest("[data-act]");
  if (!b) return;
  const act = b.dataset.act;
  if (act === "easy") { easy = !easy; easyTouched = dayKey(new Date()); reset(); renderHello(); }
  else if (act === "lvl1" || act === "lvl2") { setLevel(act === "lvl1" ? 0 : 1); renderHello(); }
  else if (act === "relax") startWorkout("relax");
});
$("garminkey").onclick = () => {
  const k = prompt("Įklijuok Garmin duomenų raktą (DUOMENU_RAKTAS):");
  if (k && k.trim()) HEALTH.setGarminKey(k);
};
HEALTH.onChange(() => renderHello());
let voiceRefused = false;
$("vtest").onclick = () => { SAY.test(); $("vask").hidden = false; };
$("vyes").onclick = () => { SAY.force = true; SAY.on = true; $("vask").hidden = true; renderHello(); if (!(idx >= 0 && idx < steps.length)) reset(); };
$("vno").onclick = () => { voiceRefused = true; $("vask").hidden = true; renderHello(); };
// Režimai: „hello“ – tik pasisveikinimas, „workout“ – vienas pratimas, „browse“ – visas puslapis
function setMode(m) { document.body.dataset.mode = m; window.scrollTo(0, 0); }
function goHome() { closeRate(); override = null; reset(); MEDIA.stop(); renderHello(); renderWeek(); setMode("hello"); }
// type – „relax“ arba null (pagal savaitės planą)
function startWorkout(type = null) {
  if (running) return;
  SAY.recheck();
  if (selDay !== weekday(new Date())) { selDay = weekday(new Date()); renderWeek(); }
  override = type;
  reset(); setMode("workout"); start();
}
$("letsgo").onclick = () => startWorkout(null);
$("browse").onclick = () => setMode("browse");
$("quit").onclick = () => {
  if (idx >= 0 && idx < steps.length && !confirm("Nutraukti treniruotę? Ji nebus įskaityta.")) return;
  goHome();
};
$("home").onclick = goHome;
$("hl1").onclick = () => { setLevel(0); renderHello(); };
$("hl2").onclick = () => { setLevel(1); renderHello(); };
$("voice").onclick = () => {
  SAY.on = !SAY.on;
  renderHello();
  if (idx < 0 || idx >= steps.length) reset();
};
SAY.onChange(() => { renderHello(); if (!(idx >= 0 && idx < steps.length)) reset(); });
$("start").onclick = start;
$("back").onclick = back;
$("skip").onclick = () => { if (idx >= 0 && idx < steps.length) next(); };
$("reset").onclick = reset;
$("restplus").onclick = extendRest;
$("restend").onclick = endRest;
$("lvl1").onclick = () => setLevel(0);
$("lvl2").onclick = () => setLevel(1);
// Jei svetainė jau atidaryta, „Shortcut“ nuoroda gali pakeisti tik # dalį – puslapis neperkraunamas
window.addEventListener("hashchange", () => { if (HEALTH.readLink()) renderHello(); });
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  const today = weekday(new Date());
  if (today !== selDay && !(idx >= 0 && idx < steps.length) && lastToday !== today) { selDay = today; reset(); }
  lastToday = today;
  renderWeek();
  if (running) { tick(); lockScreen(); }
  else HEALTH.syncGarmin().then(HEALTH.refreshGarmin);
});
renderSummary();
renderVideos();
renderWeek();
renderHistory();
renderHello();
setLevel(level);
HEALTH.syncGarmin().then(HEALTH.refreshGarmin);
