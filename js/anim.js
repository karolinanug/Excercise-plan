// Schematinės pratimų animacijos (SVG, be išorinių failų).
// Kiekviena poza aprašoma sąnarių taškais (SVG vienetais, grindys ties y≈101). Tarp pozų
// interpoliuojami segmentų kampai ir ilgiai, todėl galūnės sukasi, o ne „susitraukia“.
// „1“ – artimesnė kūno pusė (ryški), „2“ – tolimesnė (blankesnė).
const ANIM = (() => {
  const L = { up: 18, fore: 16, thigh: 27, shin: 26, foot: 9 };
  const deg = d => d * Math.PI / 180;
  const at = (p, a, len) => [p[0] + Math.cos(a) * len, p[1] + Math.sin(a) * len];
  const ang = (a, b) => Math.atan2(b[1] - a[1], b[0] - a[0]);

  // Dviejų segmentų atvirkštinė kinematika: iš pradžios taško ir tikslo randa vidurinį
  // sąnarį (kelį ar alkūnę). bend ±1 nusako, į kurią pusę sąnarys lenkiasi.
  function limb(a, c, l1, l2, bend) {
    const d = Math.min(Math.hypot(c[0] - a[0], c[1] - a[1]), l1 + l2 - 0.01);
    const cos = (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d);
    const mid = at(a, ang(a, c) + bend * Math.acos(Math.max(-1, Math.min(1, cos))), l1);
    return [mid, at(mid, ang(mid, c), l2)];
  }

  // o: hip, sh, hd – taškai; b – liemens išlinkimas (+ į pilvo pusę, – į nugaros);
  // a1/a2: [x, y, bend] arba { e, w }; l1/l2: [x, y, bend, pėdos kampas °] arba { k, a, t }
  function pose(o) {
    const j = { hip: o.hip, sh: o.sh, hd: o.hd, b: o.b || 0 };
    [1, 2].forEach(i => {
      const a = o["a" + i] || o.a1, l = o["l" + i] || o.l1;
      if (Array.isArray(a)) [j["e" + i], j["w" + i]] = limb(o.sh, a, L.up, L.fore, a[2]);
      else { j["e" + i] = a.e; j["w" + i] = a.w; }
      if (Array.isArray(l)) {
        [j["k" + i], j["f" + i]] = limb(o.hip, l, L.thigh, L.shin, l[2]);
        j["t" + i] = at(j["f" + i], deg(l[3]), L.foot);
      } else { j["k" + i] = l.k; j["f" + i] = l.a; j["t" + i] = l.t; }
    });
    return j;
  }
  // Segmentų medis: [tėvas, vaikas]
  const SEG = [["hip", "sh"], ["sh", "hd"], ["sh", "e1"], ["e1", "w1"], ["sh", "e2"], ["e2", "w2"],
    ["hip", "k1"], ["k1", "f1"], ["f1", "t1"], ["hip", "k2"], ["k2", "f2"], ["f2", "t2"]];
  function polar(j) {
    return { root: j.hip, b: j.b, seg: SEG.map(([p, c]) => [ang(j[p], j[c]), Math.hypot(j[c][0] - j[p][0], j[c][1] - j[p][1])]) };
  }
  function mix(A, B, u) {
    const lerp = (x, y) => x + (y - x) * u;
    return {
      root: [lerp(A.root[0], B.root[0]), lerp(A.root[1], B.root[1])], b: lerp(A.b, B.b),
      seg: A.seg.map((s, i) => {
        let d = B.seg[i][0] - s[0];
        d = Math.atan2(Math.sin(d), Math.cos(d)); // trumpiausias kelias
        return [s[0] + d * u, lerp(s[1], B.seg[i][1])];
      })
    };
  }
  function joints(P) {
    const j = { hip: P.root };
    SEG.forEach(([p, c], i) => { j[c] = at(j[p], P.seg[i][0], P.seg[i][1]); });
    j.b = P.b;
    return j;
  }

  // ---- Bazinės pozos ----
  // Gulint ant nugaros, galva kairėje
  const SUP = { hip: [112, 97], sh: [74, 97], hd: [56, 94], a1: [104, 98, -1], a2: [104, 98, -1], l1: [140, 98, -1, 0], l2: [140, 98, -1, 0] };
  // Keturpėsčia, veidu į dešinę
  const QUAD = { hip: [70, 71], sh: [108, 66], hd: [124, 63], a1: [109, 100, 1], a2: [109, 100, 1], l1: [44, 98, -1, 180], l2: [44, 98, -1, 180] };
  const k = (o, more) => Object.assign({}, o, more);
  const DEF = {
    breath: () => {
      const base = k(SUP, { a1: [98, 90, -1], a2: [84, 89, -1] });
      return [
        [k(base, { b: 3.5, a1: [98, 87, -1] }), 4000, 0, "Įkvėpk pro nosį · 4 s", 1],
        [base, 6000, 0, "Iškvėpk pro lūpas · 6 s", 0]
      ];
    },
    tilt: () => [
      [k(SUP, { b: 2.5 }), 900, 1200, "Neutrali padėtis", 0],
      [k(SUP, { b: -1, hip: [112, 98] }), 1000, 3000, "Prispausk juosmenį · laikyk 3 s", 1]
    ],
    catcow: () => [
      [k(QUAD, { b: -6, hd: [117, 81] }), 2000, 2000, "Katė · iškvėpk, apvalink nugarą", 1],
      [k(QUAD, { b: 6, hip: [70, 70], hd: [123, 56] }), 2000, 2000, "Karvė · įkvėpk, švelniai išlenk", 0.4]
    ],
    deadbug: lvl => {
      const top = k(SUP, { a1: [76, 63, 1], a2: [76, 63, 1], l1: [138, 70, -1, -10], l2: [138, 70, -1, -10] });
      const down = { l: [161, 90, -1, -70], a: lvl ? [42, 90, 1] : [76, 63, 1] };
      return [
        [top, 1500, 800, "Juosmuo prispaustas prie kilimėlio", 0.4],
        [k(top, { l1: down.l, a2: down.a }), 3000, 500, lvl ? "Lėtai nuleisk koją ir priešingą ranką" : "Lėtai nuleisk koją", 1],
        [top, 2000, 500, "Grįžk", 0.4],
        [k(top, { l2: down.l, a2: top.a1, a1: down.a }), 3000, 500, "Kita koja", 1]
      ];
    },
    bridge: () => {
      const down = k(SUP, { l1: [140, 98, -1, 0], a1: [106, 99, -1] });
      const up = k(down, { hip: [108, 80] });
      return [
        [down, 2200, 800, "Pakreipk dubenį", 0.2],
        [up, 2000, 0, "Kelk spausdama kulnais", 0.8],
        [up, 0, 2000, "Viršuje suspausk sėdmenis · 2 s", 1]
      ];
    },
    birddog: () => [
      [QUAD, 1500, 800, "Nugara tiesi kaip stalas", 0.3],
      [k(QUAD, { l1: [17, 69, -1, 180], a2: [142, 61, 1] }), 2000, 3000, "Koja atgal, priešinga ranka į priekį · 3 s", 1],
      [QUAD, 1500, 800, "Grįžk", 0.4],
      [k(QUAD, { l2: [17, 69, -1, 180], a1: [142, 61, 1] }), 2000, 3000, "Kita pusė · 3 s", 1]
    ],
    clam: () => {
      // Žiūrint iš priekio: guli ant šono, galva kairėje
      const closed = { hip: [112, 94], sh: [74, 94], hd: [57, 92],
        a1: { e: [90, 84], w: [108, 87] }, a2: { e: [58, 99], w: [42, 99] },
        l1: { k: [131, 89], a: [146, 92], t: [154, 92] }, l2: { k: [131, 97], a: [146, 98], t: [154, 98] } };
      return [
        [closed, 1500, 600, "Pėdos kartu", 0.2],
        [k(closed, { l1: { k: [125, 70], a: [146, 92], t: [154, 92] }, a1: { e: [90, 80], w: [106, 82] } }), 1500, 1000, "Kelk kelį, dubuo nejuda", 1]
      ];
    },
    sideplank: () => {
      // Žiūrint iš priekio: guli ant šono, atsirėmus dilbiu, keliai sulenkti, blauzdos už nugaros.
      // Viršuje kūnas tiesia linija nuo galvos iki kelių, petys tiesiai virš alkūnės.
      const sh = [70, 81];
      // Blauzdos sulenktos atgal (nuo žiūrinčiojo), todėl matomos sutrumpėjusios, pėdos – už kelių
      const legs = { l1: { k: [132, 93], a: [143, 92], t: [149, 90] }, l2: { k: [132, 98], a: [143, 98], t: [150, 97] } };
      const arm2 = { e: [70, 99], w: [61, 100] };
      return [
        [k(legs, { hip: [107, 97], sh, hd: [55, 75], a2: arm2, a1: { e: [88, 82], w: [104, 90] } }), 1500, 1000, "Alkūnė po petimi", 0.2],
        [k(legs, { hip: [107, 90], sh, hd: [55, 77], a2: arm2, a1: { e: [88, 79], w: [104, 84] } }), 1500, 3000, "Klubai aukštyn · tiesi linija", 1]
      ];
    },
    hipflex: () => {
      const p1 = { hip: [91, 74], sh: [92, 36], hd: [93, 19], a1: [96, 68, 1], l1: [118, 98, -1, 0], l2: { k: [80, 98], a: [54, 98], t: [46, 96] } };
      return [
        [p1, 1800, 1500, "Uodegikaulis po savimi, suspausk sėdmenį", 0.4],
        [k(p1, { hip: [99, 77], sh: [100, 39], hd: [101, 22], a1: [104, 71, 1] }), 2500, 4000, "Pasislink į priekį · laikyk", 1]
      ];
    },
    child: () => {
      const base = { hip: [87, 88], sh: [121, 84], hd: [134, 93], a1: [158, 97, -1],
        l1: { k: [110, 97], a: [84, 98], t: [75, 98] } };
      return [
        [k(base, { b: -5 }), 4000, 500, "Įkvėpk į nugarą", 1],
        [base, 5000, 500, "Atsipalaiduok", 0.3]
      ];
    }
  };

  // Kuri kūno vieta paryškinama ir kaip ji pavadinama po animacija
  const FOCUS = {
    breath: ["core", "Dirba: diafragma ir gilieji pilvo raumenys"],
    tilt: ["core", "Dirba: gilieji pilvo raumenys"],
    catcow: ["back", "Juda: visas stuburas"],
    deadbug: ["core", "Dirba: gilieji pilvo raumenys"],
    bridge: ["glute", "Dirba: sėdmenys"],
    birddog: ["back", "Dirba: nugara, sėdmenys ir pilvas"],
    clam: ["glute", "Dirba: šoniniai sėdmenų raumenys"],
    sideplank: ["side", "Dirba: šoniniai liemens raumenys"],
    hipflex: ["hipfront", "Tempiasi: klubo priekis (užpakalinė koja)"],
    child: ["back", "Atsipalaiduoja: nugara ir juosmuo"]
  };

  // ---- Piešimas ----
  const NS = "http://www.w3.org/2000/svg";
  const el = (tag, attrs) => { const e = document.createElementNS(NS, tag); for (const a in attrs) e.setAttribute(a, attrs[a]); return e; };
  const f1 = v => v.toFixed(2); // 0,1 apvalinimas didelėje animacijoje sukelia drebėjimą
  const reduced = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ease = u => u * u * (3 - 2 * u);
  let uid = 0;

  // Galūnė – smailėjanti „kapsulė“: storis ra ties a, rb ties b
  function capsule(a, b, ra, rb) {
    const t = ang(a, b), nx = -Math.sin(t), ny = Math.cos(t);
    const p = (q, r, s) => f1(q[0] + nx * r * s) + "," + f1(q[1] + ny * r * s);
    return `M${p(a, ra, 1)}L${p(b, rb, 1)}A${rb} ${rb} 0 0 0 ${p(b, rb, -1)}L${p(a, ra, -1)}A${ra} ${ra} 0 0 0 ${p(a, ra, 1)}Z`;
  }
  // Liemuo: stuburo kreivė (išlinkimas b) ir pločio profilis [vieta 0..1 nuo klubų, pilvo pusė, nugaros pusė]
  const PROF = [[0, 6.8, 7.2], [0.2, 6.4, 6.8], [0.45, 5.6, 5.8], [0.7, 6.9, 6.2], [0.88, 6.5, 6.2], [1, 5.4, 5.4]];
  function spine(j) {
    const t = ang(j.hip, j.sh), m = [(j.hip[0] + j.sh[0]) / 2 - Math.sin(t) * j.b * 2, (j.hip[1] + j.sh[1]) / 2 + Math.cos(t) * j.b * 2];
    return s => {
      const u = 1 - s, c = [u * u * j.hip[0] + 2 * u * s * m[0] + s * s * j.sh[0], u * u * j.hip[1] + 2 * u * s * m[1] + s * s * j.sh[1]];
      const d = [2 * u * (m[0] - j.hip[0]) + 2 * s * (j.sh[0] - m[0]), 2 * u * (m[1] - j.hip[1]) + 2 * s * (j.sh[1] - m[1])];
      const L = Math.hypot(d[0], d[1]) || 1;
      return { c, n: [-d[1] / L, d[0] / L], a: Math.atan2(d[1], d[0]) }; // n – į pilvo pusę
    };
  }
  function width(s, side) {
    for (let i = 1; i < PROF.length; i++) if (s <= PROF[i][0]) {
      const A = PROF[i - 1], B = PROF[i], u = (s - A[0]) / (B[0] - A[0]);
      return A[side] + (B[side] - A[side]) * u;
    }
    return PROF[PROF.length - 1][side];
  }
  function torsoPath(sp) {
    const front = [], back = [], N = 12;
    for (let i = 0; i <= N; i++) {
      const s = i / N, q = sp(s);
      front.push([q.c[0] + q.n[0] * width(s, 1), q.c[1] + q.n[1] * width(s, 1)]);
      back.push([q.c[0] - q.n[0] * width(s, 2), q.c[1] - q.n[1] * width(s, 2)]);
    }
    const P = q => f1(q[0]) + "," + f1(q[1]);
    const r1 = width(1, 1), r0 = width(0, 1);
    return `M${front.map(P).join("L")}A${f1(r1)} ${f1(r1)} 0 0 0 ${P(back[N])}L${back.reverse().map(P).join("L")}A${f1(r0)} ${f1(r0)} 0 0 0 ${P(front[0])}Z`;
  }
  // Glotni uždara kreivė per taškus (Catmull–Rom → kubinės Bezjė kreivės)
  function smooth(P) {
    const n = P.length, g = i => P[(i + n) % n];
    let d = `M${f1(P[0][0])},${f1(P[0][1])}`;
    for (let i = 0; i < n; i++) {
      const p0 = g(i - 1), p1 = g(i), p2 = g(i + 1), p3 = g(i + 2);
      d += `C${f1(p1[0] + (p2[0] - p0[0]) / 6)},${f1(p1[1] + (p2[1] - p0[1]) / 6)} ${f1(p2[0] - (p3[0] - p1[0]) / 6)},${f1(p2[1] - (p3[1] - p1[1]) / 6)} ${f1(p2[0])},${f1(p2[1])}`;
    }
    return d + "Z";
  }
  // Vietinės koordinatės (x – pirmyn, y – „aukštyn“) → pasaulio; k – mastelis
  const place = (o, x, y, k = 1) => P => P.map(([a, b]) => [o[0] + (x[0] * a + y[0] * b) * k, o[1] + (x[1] * a + y[1] * b) * k]);
  // Galva iš profilio (centras – galvos centras, x – veido kryptis, y – viršugalvio kryptis)
  const HEAD = [[1.8, -5], [4.6, -4.6], [5.6, -3.4], [5.5, -2.5], [6.1, -1.8], [5.9, -1.15], [7.05, -0.35], [6.1, 0.9],
    [6, 2.4], [5, 4.6], [2.4, 6.4], [-1.2, 6.6], [-4.8, 4.8], [-6.3, 1.6], [-5.8, -1.6], [-3.6, -4.2], [-0.6, -5.2]];
  const HAIR = [[5.5, 4.1], [3.3, 6.5], [-1, 7.2], [-5.1, 5.5], [-7, 1.8], [-6.5, -1.9], [-4.6, -4], [-3.1, -2.1],
    [-2.2, 1.4], [0.6, 3.5], [3.6, 3.7]];
  const circle = (c, r, N = 10) => Array.from({ length: N }, (_, i) => [c[0] + r * Math.cos(i * 2 * Math.PI / N), c[1] + r * Math.sin(i * 2 * Math.PI / N)]);
  // Plaštaka (nuo riešo, x – pirštų kryptis) ir nykštys
  const HAND = [[-0.3, 1.4], [1.8, 1.75], [4, 1.55], [5.7, 0.95], [6.15, 0], [5.7, -0.9], [3.8, -1.4], [1.6, -1.6], [-0.3, -1.3]];
  const THUMB = [[1, 1.1], [2.6, 2.6], [3.7, 3], [4, 2.4], [3, 1.4]];
  // Pėda (nuo kulkšnies, x – pirštų kryptis, y – į blauzdos pusę)
  const FOOT = [[-1.6, 2.4], [-2.6, 0.2], [-1.9, -1.8], [2.5, -1.7], [7.6, -1.9], [9.8, -1.1], [10.2, 0], [8.6, 0.8], [4.5, 1.8], [1.6, 2.8]];

  // Paryškinama raumenų sritis: centras, spinduliai, pasukimas
  function focusArea(kind, j, sp) {
    if (kind === "core") { const q = sp(0.36); return [[q.c[0] + q.n[0] * 2.5, q.c[1] + q.n[1] * 2.5], 8, 4, q.a]; }
    if (kind === "back") { const q = sp(0.42); return [[q.c[0] - q.n[0] * 3, q.c[1] - q.n[1] * 3], 10, 3.6, q.a]; }
    if (kind === "side") { const q = sp(0.45); return [q.c, 10, 4.2, q.a]; }
    if (kind === "glute") { const q = sp(0.04); return [[q.c[0] - q.n[0] * 3.5, q.c[1] - q.n[1] * 3.5], 6, 5, q.a]; }
    const t = ang(j.hip, j.k2), q = sp(0.05); // hipfront: užpakalinės kojos šlaunies priekis
    return [[j.hip[0] + Math.cos(t) * 8 + q.n[0] * 3, j.hip[1] + Math.sin(t) * 8 + q.n[1] * 3], 7, 3.6, t];
  }

  const live = new Set();
  let raf = 0;
  function loop(now) {
    raf = 0;
    live.forEach(c => { if (c.playing && c.visible) c.frame(now); });
    if ([...live].some(c => c.playing && c.visible)) raf = requestAnimationFrame(loop);
  }
  const wake = () => { if (!raf) raf = requestAnimationFrame(loop); };
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => {
    const c = e.target._anim; if (c) { c.visible = e.isIntersecting; wake(); }
  })) : null;

  // Įdeda animaciją į elementą. Paspaudus figūrą animacija sustoja / tęsiasi.
  function mount(box, name, lvl = 0) {
    const kf = DEF[name](lvl).map(([p, d, h, say, e = 0]) => ({ P: polar(pose(p)), d, h, say, e }));
    const total = kf.reduce((a, f) => a + f.d + f.h, 0);
    box.innerHTML = "";
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "anim-btn";
    // Kadras parenkamas pagal visų pozų ribas, kad figūra užpildytų plotą (santykis 16:9)
    let x0 = 1e9, x1 = -1e9, y0 = 1e9;
    kf.forEach(f => {
      const j = joints(f.P), pts = Object.values(j).filter(Array.isArray);
      pts.push(spine(j)(0.5).c); // išlenkta nugara gali būti aukščiau už sąnarius
      pts.forEach(q => { x0 = Math.min(x0, q[0]); x1 = Math.max(x1, q[0]); y0 = Math.min(y0, q[1]); });
    });
    x0 -= 13; x1 += 9; y0 -= 15; // galvos, kuodo ir galūnių storis
    const W = Math.max(x1 - x0 + 16, (107 - y0 + 6) * 16 / 9), H = W * 9 / 16, X = (x0 + x1) / 2 - W / 2;
    const svg = el("svg", { viewBox: `${f1(X)} ${f1(107 - H)} ${f1(W)} ${f1(H)}`, "aria-hidden": "true" });
    const id = "anim" + (++uid);
    const defs = el("defs", {});
    const blur = el("filter", { id: id + "b", x: "-50%", y: "-50%", width: "200%", height: "200%" });
    blur.append(el("feGaussianBlur", { stdDeviation: 1.6 }));
    defs.append(blur);
    svg.append(defs);
    svg.append(el("rect", { class: "anim-mat", x: f1(X + 3), y: 101, width: f1(W - 6), height: 4.5, rx: 2.2 }));
    const shadow = el("ellipse", { class: "anim-shadow", cy: 101.5, ry: 2.2, filter: `url(#${id}b)` });
    const mk = (cls, g) => { const e = el("path", { class: cls }); g.append(e); return e; };
    const far = el("g", { class: "anim-far" }), body = el("g", {}), near = el("g", {});
    // Galūnė: šlaunis, blauzda, pėda; žastas, dilbis, plaštaka, nykštys
    // Galūnė: kulkšnis (oda), pėda, blauzda ir šlaunis (tamprės); žastas (oda) ir trumpa rankovė,
    // dilbis, plaštaka, nykštys. Sąnariai (alkūnė, kulkšnis) – vienos spalvos, todėl nesimato siūlės.
    const side = g => ({ leg: [mk("anim-skin", g), mk("anim-skin", g), mk("anim-legs", g), mk("anim-legs", g)],
      arm: [mk("anim-skin", g), mk("anim-top", g), mk("anim-skin", g), mk("anim-skin", g), mk("anim-skin anim-thumb", g)],
      footSide: 1, thumbSide: 1 });
    const F = side(far);
    const neck = mk("anim-skin", body), torso = mk("anim-top", body);
    const bun = mk("anim-hair", body), face = mk("anim-skin", body), cheek = mk("anim-cheek", body),
      hair = mk("anim-hair", body), ear = mk("anim-ear", body), eye = mk("anim-eye", body), brow = mk("anim-brow", body);
    const focus = el("ellipse", { class: "anim-focus", filter: `url(#${id}b)` });
    const Nr = side(near);
    svg.append(shadow, far, body, focus, near);
    const [fKind, fLabel] = FOCUS[name];
    const say = document.createElement("span"); say.className = "anim-say";
    const muscle = document.createElement("span"); muscle.className = "anim-muscle"; muscle.textContent = fLabel;
    const state = document.createElement("i"); state.className = "anim-state"; state.setAttribute("aria-hidden", "true");
    btn.append(svg, state); box.append(btn, say, muscle);

    const lerpP = (a, b, u) => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
    const clamp01 = v => Math.max(0, Math.min(1, v));
    function limbs(parts, j, i, facing) {
      const k = j["k" + i], a = j["f" + i], t = j["t" + i], e = j["e" + i], w = j["w" + i];
      // Koja: tamprės iki ~80 % blauzdos, žemiau – oda iki kulkšnies
      const cuff = lerpP(k, a, 0.8);
      parts.leg[0].setAttribute("d", capsule(lerpP(k, a, 0.7), a, 3.1, 2.4));
      parts.leg[2].setAttribute("d", capsule(k, cuff, 4.2, 3.1));
      parts.leg[3].setAttribute("d", capsule(j.hip, k, 6, 4.2));
      // Pėda: padas į priešingą nuo kelio pusę. Kai pėda beveik vienoje linijoje su blauzda,
      // pusė nebekeičiama (histerezė), kad pėda nesivartytų kas kadrą.
      const fa = ang(a, t), fx = [Math.cos(fa), Math.sin(fa)], perp = [-fx[1], fx[0]];
      const sk = [k[0] - a[0], k[1] - a[1]], dot = (perp[0] * sk[0] + perp[1] * sk[1]) / (Math.hypot(sk[0], sk[1]) || 1);
      if (Math.abs(dot) > 0.25) parts.footSide = Math.sign(dot);
      const fy = [perp[0] * parts.footSide, perp[1] * parts.footSide];
      parts.leg[1].setAttribute("d", smooth(place(a, fx, fy, Math.hypot(t[0] - a[0], t[1] - a[1]) / 10)(FOOT)));
      // Ranka: oda per visą žastą ir dilbį (vienodas storis ties alkūne), rankovė – viršutinė žasto dalis
      parts.arm[0].setAttribute("d", capsule(lerpP(j.sh, e, 0.4), e, 3.1, 2.7));
      parts.arm[1].setAttribute("d", capsule(j.sh, lerpP(j.sh, e, 0.55), 3.7, 3.3));
      parts.arm[2].setAttribute("d", capsule(e, w, 2.7, 1.8));
      // Plaštaka tęsia dilbį; artėdama prie grindų tolygiai pasisuka ir atsigula plokščiai
      const fa2 = ang(e, w), c = Math.cos(fa2);
      const flat = Math.abs(c) < 0.35 ? (facing > 0 ? 0 : Math.PI) : (c > 0 ? 0 : Math.PI);
      let dd = flat - fa2; dd = Math.atan2(Math.sin(dd), Math.cos(dd));
      const ha = fa2 + dd * clamp01((w[1] - 90) / 7);
      const hx = [Math.cos(ha), Math.sin(ha)], hperp = [-hx[1], hx[0]];
      // Nykštys – galvos pusėje (kaip natūraliai laikomos rankos), su ta pačia histereze
      const td = [j.hd[0] - j.hip[0], j.hd[1] - j.hip[1]], tdot = (hperp[0] * td[0] + hperp[1] * td[1]) / (Math.hypot(td[0], td[1]) || 1);
      if (Math.abs(tdot) > 0.25) parts.thumbSide = Math.sign(tdot);
      if (w[1] > 95 && hperp[1] * parts.thumbSide > 0.5) parts.thumbSide = -parts.thumbSide; // ant grindų – ne į grindis
      const hp = place(w, hx, [hperp[0] * parts.thumbSide, hperp[1] * parts.thumbSide], 1.25);
      parts.arm[3].setAttribute("d", smooth(hp(HAND)));
      parts.arm[4].setAttribute("d", smooth(hp(THUMB)));
    }
    function draw(P, label, effort) {
      const j = joints(P), sp = spine(j), facing = Math.sign(j.hd[0] - j.hip[0]) || 1;
      limbs(F, j, 2, facing);
      limbs(Nr, j, 1, facing);
      torso.setAttribute("d", torsoPath(sp));
      // Galva: veidas į pilvo pusę, plaukai ir kuodas – pakaušyje ir viršugalvyje
      const u = ang(j.sh, j.hd), fx = -Math.sin(u), fy = Math.cos(u), ux = Math.cos(u), uy = Math.sin(u);
      neck.setAttribute("d", capsule(j.sh, at(j.sh, u, Math.hypot(j.hd[0] - j.sh[0], j.hd[1] - j.sh[1]) - 3), 2.8, 2.4));
      const hp = place(j.hd, [fx, fy], [ux, uy], 1.02), pt = q => hp([q])[0];
      face.setAttribute("d", smooth(hp(HEAD)));
      hair.setAttribute("d", smooth(hp(HAIR)));
      bun.setAttribute("d", smooth(hp(circle([-6.1, 4.9], 2.9))));
      ear.setAttribute("d", smooth(hp([[-1.2, 0.9], [0.1, 0.8], [0.4, -0.6], [-0.3, -1.7], [-1.3, -1.2]])));
      cheek.setAttribute("d", smooth(hp(circle([3.3, -1.7], 1.1, 8))));
      eye.setAttribute("d", smooth(hp([[3.4, 1.05], [4.2, 1.35], [4.7, 0.9], [4.1, 0.55]])));
      const b0 = pt([2.9, 2.4]), b1 = pt([4.1, 2.85]), b2 = pt([5.1, 2.5]);
      brow.setAttribute("d", `M${f1(b0[0])},${f1(b0[1])}Q${f1(b1[0])},${f1(b1[1])} ${f1(b2[0])},${f1(b2[1])}`);
      // Šešėlis ant kilimėlio pagal žemiausius taškus
      let lo = 1e9, hi = -1e9;
      ["hip", "sh", "hd", "k1", "k2", "f1", "f2", "w1", "w2"].forEach(k => { if (j[k][1] > 80) { lo = Math.min(lo, j[k][0]); hi = Math.max(hi, j[k][0]); } });
      if (lo > hi) { lo = j.hip[0] - 10; hi = j.hip[0] + 10; }
      shadow.setAttribute("cx", f1((lo + hi) / 2)); shadow.setAttribute("rx", f1((hi - lo) / 2 + 6));
      const [c, rx, ry, a] = focusArea(fKind, j, sp);
      focus.setAttribute("cx", f1(c[0])); focus.setAttribute("cy", f1(c[1])); focus.setAttribute("rx", rx); focus.setAttribute("ry", ry);
      focus.setAttribute("transform", `rotate(${f1(a * 180 / Math.PI)} ${f1(c[0])} ${f1(c[1])})`);
      focus.style.opacity = (0.2 + 0.6 * effort).toFixed(2);
      if (say.textContent !== label) say.textContent = label;
    }
    let t0 = 0, pausedAt = 0;
    const c = {
      playing: false, visible: !io,
      frame(now) {
        let t = (now - t0) % total;
        for (let i = 0; i < kf.length; i++) {
          const f = kf[i], prev = kf[(i + kf.length - 1) % kf.length];
          if (t < f.d) { const u = ease(t / f.d); draw(mix(prev.P, f.P, u), f.say, prev.e + (f.e - prev.e) * u); return; }
          t -= f.d;
          // Laikant pozą figūra lengvai kvėpuoja, kad neatrodytų sustingusi
          if (t < f.h) {
            const n = Math.round(f.h / 2500), b = n ? f.P.b + 0.6 * Math.sin(2 * Math.PI * n * t / f.h) : f.P.b;
            draw(Object.assign({}, f.P, { b }), f.say, f.e); return;
          }
          t -= f.h;
        }
      },
      play() { if (c.playing) return; c.playing = true; t0 = performance.now() - pausedAt; btn.setAttribute("aria-pressed", "false"); btn.setAttribute("aria-label", "Sustabdyti animaciją"); box.classList.remove("paused"); wake(); },
      pause() { if (!c.playing) return; c.playing = false; pausedAt = (performance.now() - t0) % total; btn.setAttribute("aria-pressed", "true"); btn.setAttribute("aria-label", "Paleisti animaciją"); box.classList.add("paused"); },
      seekKf(i) { i = i % kf.length; let ms = 0; for (let n = 0; n <= i; n++) ms += kf[n].d + (n < i ? kf[n].h : 0); c.seek(ms - 1); },
      seek(ms) { pausedAt = ms % total; t0 = performance.now() - pausedAt; c.frame(performance.now()); },
      destroy() { c.pause(); live.delete(c); if (io) io.unobserve(box); }
    };
    btn.onclick = () => (c.playing ? c.pause() : c.play());
    // Pradinis kadras: pagrindinis judesio momentas (antra poza), kad ir sustabdžius būtų aišku
    const show = kf[1] || kf[0];
    draw(show.P, show.say, show.e);
    pausedAt = kf[0].d + kf[0].h + show.d;
    box._anim = c; live.add(c);
    if (io) io.observe(box);
    btn.setAttribute("aria-pressed", "true"); btn.setAttribute("aria-label", "Paleisti animaciją"); box.classList.add("paused");
    if (!reduced()) c.play();
    return c;
  }
  return { mount, has: name => name in DEF };
})();
