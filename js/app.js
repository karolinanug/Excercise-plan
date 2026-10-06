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
const REST = 20, SIDE_SWITCH = 8, PREP = 30, REST_BETWEEN = 30, PREP_NEXT = 10, REST_PLUS = 15;
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

function buildSteps(lvl = level) {
  const steps = [];
  EX.forEach((e, i) => {
    const sets = e.sets[lvl], secs = e.secs[lvl];
    // Tarp pratimų – poilsis (jau rodoma kito pratimo animacija), po jo trumpas pasiruošimas
    if (i > 0) steps.push({ type: "rest", between: true, ex: i, title: "Poilsis", sub: "", cue: `Atsikvėpk ir atsigerk vandens. Toliau: ${i + 1}. ${e.name}. ${e.cue}`, secs: REST_BETWEEN });
    steps.push({ type: "prep", ex: i, title: i ? "Pasiruošk" : "Žiūrėk ir pasiruošk", sub: "", cue: `${i + 1}. ${e.name}. ${i ? "Užimk pradinę padėtį." : "Pažiūrėk, kaip daroma, ir užimk pradinę padėtį."} ${e.cue}`, secs: i ? PREP_NEXT : PREP });
    const sides = e.sides ? ["kairė pusė", "dešinė pusė"] : [null];
    for (let s = 0; s < sets; s++) {
      sides.forEach((side, k) => {
        let label = `${i + 1}. ${e.name}`;
        const parts = [];
        if (sets > 1) parts.push(`${s + 1}/${sets} serija`);
        if (side) parts.push(side);
        steps.push({ type: "work", ex: i, title: label, sub: parts.join(" · "), cue: e.cue + " " + e.dose[lvl] + ".", secs });
        const lastSide = k === sides.length - 1, lastSet = s === sets - 1;
        if (!lastSide) steps.push({ type: "rest", ex: i, title: "Keisk pusę", sub: "", cue: `Atsigulk ant kito šono / pakeisk koją. Toliau: ${e.name}, dešinė pusė.`, secs: SIDE_SWITCH });
        else if (!lastSet) steps.push({ type: "rest", ex: i, title: "Poilsis", sub: "", cue: `Toliau: ${e.name}, ${s + 2} serija.`, secs: REST });
      });
    }
  });
  return steps;
}

// Atliktos treniruotės saugomos localStorage kaip dienų sąrašas („2026-10-06“), viena įskaita
// per dieną. Savaitė prasideda pirmadienį. Įskaitoma, jei realiai treniruotasi bent pusę
// numatyto laiko (kad keli „Praleisti žingsnį“ paspaudimai nepažymėtų treniruotės atlikta).
const DONE_KEY = "karolina-done", WEEK_GOAL = 4, KEEP_DAYS = 120;
function dayKey(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
function loadDone() {
  try {
    const a = JSON.parse(localStorage.getItem(DONE_KEY) || "[]");
    return Array.isArray(a) ? a.filter(x => typeof x === "string") : [];
  } catch (e) { return []; }
}
function markDone() {
  const now = new Date(), today = dayKey(now);
  const oldest = dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - KEEP_DAYS));
  const done = loadDone().filter(k => k >= oldest && k !== today);
  done.push(today);
  try { localStorage.setItem(DONE_KEY, JSON.stringify(done)); } catch (e) {}
}
function renderWeek() {
  const now = new Date(), done = loadDone();
  const monday = dayKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - (now.getDay() + 6) % 7));
  const n = done.filter(k => k >= monday).length;
  $("week").textContent = `Šią savaitę: ${n}/${WEEK_GOAL}` + (done.includes(dayKey(now)) ? " · šiandien ✓" : "");
}

// Bendra trukmė ir poilsio dienų pratimai skaičiuojami iš EX, kad pakeitus pratimus
// tekstas puslapyje neatsiliktų.
function renderSummary() {
  [0, 1].forEach(l => {
    const min = Math.round(buildSteps(l).reduce((a, s) => a + s.secs, 0) / 60);
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
  $("kind").textContent = st.type === "work" ? "Daryk" + (st.sub ? " · " + st.sub : "") : st.title;
  $("now").textContent = st.type === "work" ? st.title : st.type === "prep" ? `${st.ex + 1}. ${EX[st.ex].name}`
    : st.between ? `Toliau: ${st.ex + 1}. ${EX[st.ex].name}` : (st.title === "Keisk pusę" ? "Keisk pusę" : "Atsikvėpk");
  $("cue").textContent = st.cue;
  $("clock").textContent = fmt(left);
  $("bar").style.width = (100 * (st.secs - left) / st.secs) + "%";
  const remaining = steps.slice(idx + 1).reduce((a, s) => a + s.secs, 0) + left;
  $("meta").textContent = `Žingsnis ${idx + 1} iš ${steps.length} · liko apie ${Math.ceil(remaining / 60)} min.`;
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
function setStep(i) {
  idx = i;
  left = steps[idx].secs; remainMs = left * 1000; endAt = Date.now() + remainMs;
}
function next() {
  if (idx + 1 >= steps.length) { finish(); return; }
  setStep(idx + 1);
  stepBeep(steps[idx].type);
  show();
}
// „Atgal“: jei žingsnis jau eina ilgiau nei 3 s, pradeda jį iš naujo, kitaip grįžta į ankstesnį.
// Veikia ir per pauzę (laikmatis lieka sustabdytas).
function back() {
  if (idx < 0 || idx >= steps.length) return;
  const elapsed = steps[idx].secs * 1000 - (running ? endAt - Date.now() : remainMs);
  setStep(elapsed > 3000 || idx === 0 ? idx : idx - 1);
  show();
}
// Poilsį galima pratęsti arba baigti anksčiau
function extendRest() {
  if (idx < 0 || idx >= steps.length || steps[idx].type !== "rest") return;
  steps[idx] = Object.assign({}, steps[idx], { secs: steps[idx].secs + REST_PLUS });
  if (running) endAt += REST_PLUS * 1000; else remainMs += REST_PLUS * 1000;
  left += REST_PLUS;
  show();
}
function endRest() { if (idx >= 0 && idx < steps.length && steps[idx].type === "rest") next(); }
function tick() {
  countTrained();
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
  initAudio();
  lastTick = Date.now();
  if (idx < 0 || idx >= steps.length) trainedMs = 0;
  lockScreen();
  if (idx < 0 || idx >= steps.length) { idx = -1; next(); }
  else { endAt = Date.now() + remainMs; show(); }
  clearInterval(timer);
  timer = setInterval(tick, 250);
}
function pause() {
  countTrained();
  if (running) remainMs = Math.max(0, endAt - Date.now());
  running = false; clearInterval(timer); $("start").textContent = "Tęsti";
  unlockScreen();
}
function finish() {
  countTrained();
  const counted = trainedMs >= totalSecs() * 1000 / 2;
  if (counted) markDone();
  clearInterval(timer); running = false; idx = steps.length; unlockScreen();
  beep(880, 0.2); beep(1175, 0.2, 0.22); beep(1568, 0.45, 0.44); buzz([200, 100, 200, 100, 400]);
  $("kind").textContent = "Baigta";
  $("now").textContent = "Puiku, šiandienos mankšta atlikta!";
  $("cue").textContent = "Išgerk vandens. Jei kas nors skaudėjo (ne raumenų nuovargis), pasižymėk ir papasakok kineziterapeutui.";
  $("clock").textContent = "0:00"; $("bar").style.width = "100%";
  $("meta").textContent = counted ? "Treniruotė pažymėta kaip atlikta." : "Daugiau nei pusė treniruotės praleista, todėl ji neįskaityta.";
  renderWeek();
  $("start").textContent = "Pradėti iš naujo"; highlight(-1); showAnim(-1);
  $("restctl").hidden = true; $("player").classList.remove("is-rest");
}
function reset() {
  pause(); idx = -1; steps = buildSteps();
  $("start").textContent = "Pradėti"; $("kind").textContent = "Pasiruošk";
  $("now").textContent = "Patiesk kilimėlį ir paspausk „Pradėti“";
  $("cue").textContent = "Prieš kiekvieną pratimą rodoma animacija, kaip jis daromas. Tada laikmatis skaičiuoja serijas, o animacija lieka rodoma. Viskas persijungia automatiškai.";
  $("clock").textContent = fmt(totalSecs()); $("bar").style.width = "0";
  $("meta").textContent = `Visa treniruotė: apie ${Math.round(totalSecs() / 60)} min.`; highlight(-1); showAnim(-1);
  $("restctl").hidden = true; $("player").classList.remove("is-rest");
}
function setLevel(l) {
  level = l;
  try { localStorage.setItem("karolina-level", String(l)); } catch (e) {}
  $("lvl1").setAttribute("aria-pressed", l === 0); $("lvl2").setAttribute("aria-pressed", l === 1);
  renderCards(); reset();
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
$("start").onclick = start;
$("back").onclick = back;
$("skip").onclick = () => { if (idx >= 0 && idx < steps.length) next(); };
$("reset").onclick = reset;
$("restplus").onclick = extendRest;
$("restend").onclick = endRest;
$("lvl1").onclick = () => setLevel(0);
$("lvl2").onclick = () => setLevel(1);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  renderWeek();
  if (running) { tick(); lockScreen(); }
});
renderSummary();
renderVideos();
renderWeek();
setLevel(level);
