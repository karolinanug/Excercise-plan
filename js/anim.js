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
  const SUP = { hip: [112, 97], sh: [74, 97], hd: [56, 94], a1: [104, 98, -1], l1: [140, 98, -1, 0] };
  // Keturpėsčia, veidu į dešinę
  const QUAD = { hip: [70, 71], sh: [108, 66], hd: [124, 63], a1: [109, 100, 1], l1: [44, 98, -1, 180] };
  const k = (o, more) => Object.assign({}, o, more);
  const DEF = {
    breath: () => {
      const base = k(SUP, { a1: [98, 90, -1], a2: [84, 89, -1] });
      return [
        [k(base, { b: 6, a1: [98, 85, -1] }), 4000, 0, "Įkvėpk pro nosį · 4 s"],
        [base, 6000, 0, "Iškvėpk pro lūpas · 6 s"]
      ];
    },
    tilt: () => [
      [k(SUP, { b: 5 }), 900, 1200, "Neutrali padėtis"],
      [k(SUP, { b: -2, hip: [112, 98] }), 1000, 3000, "Prispausk juosmenį · laikyk 3 s"]
    ],
    catcow: () => [
      [k(QUAD, { b: -6, hd: [117, 81] }), 2000, 2000, "Katė · iškvėpk, apvalink nugarą"],
      [k(QUAD, { b: 6, hip: [70, 70], hd: [123, 56] }), 2000, 2000, "Karvė · įkvėpk, švelniai išlenk"]
    ],
    deadbug: lvl => {
      const top = k(SUP, { a1: [76, 63, 1], l1: [138, 70, -1, -10] });
      const down = { l: [161, 90, -1, -70], a: lvl ? [42, 90, 1] : [76, 63, 1] };
      return [
        [top, 1500, 800, "Juosmuo prispaustas prie kilimėlio"],
        [k(top, { l1: down.l, a2: down.a }), 3000, 500, lvl ? "Lėtai nuleisk koją ir priešingą ranką" : "Lėtai nuleisk koją"],
        [top, 2000, 500, "Grįžk"],
        [k(top, { l2: down.l, a2: top.a1, a1: down.a }), 3000, 500, "Kita koja"]
      ];
    },
    bridge: () => {
      const down = k(SUP, { l1: [140, 98, -1, 0], a1: [106, 99, -1] });
      const up = k(down, { hip: [108, 80] });
      return [
        [down, 2200, 800, "Pakreipk dubenį"],
        [up, 2000, 0, "Kelk spausdama kulnais"],
        [up, 0, 2000, "Viršuje suspausk sėdmenis · 2 s"]
      ];
    },
    birddog: () => [
      [QUAD, 1500, 800, "Nugara tiesi kaip stalas"],
      [k(QUAD, { l1: [17, 69, -1, 180], a2: [142, 61, 1] }), 2000, 3000, "Koja atgal, priešinga ranka į priekį · 3 s"],
      [QUAD, 1500, 800, "Grįžk"],
      [k(QUAD, { l2: [17, 69, -1, 180], a1: [142, 61, 1] }), 2000, 3000, "Kita pusė · 3 s"]
    ],
    clam: () => {
      // Žiūrint iš priekio: guli ant šono, galva kairėje
      const closed = { hip: [112, 94], sh: [74, 94], hd: [57, 92],
        a1: { e: [90, 84], w: [108, 87] }, a2: { e: [58, 99], w: [42, 99] },
        l1: { k: [131, 89], a: [146, 92], t: [154, 92] }, l2: { k: [131, 97], a: [146, 98], t: [154, 98] } };
      return [
        [closed, 1500, 600, "Pėdos kartu"],
        [k(closed, { l1: { k: [125, 70], a: [146, 92], t: [154, 92] }, a1: { e: [90, 80], w: [106, 82] } }), 1500, 1000, "Kelk kelį, dubuo nejuda"]
      ];
    },
    sideplank: () => {
      // Žiūrint iš priekio: atsirėmus į dilbį, keliai sulenkti už nugaros
      const legs = { l1: { k: [140, 94], a: [148, 91], t: [154, 89] }, l2: { k: [140, 98], a: [148, 97], t: [154, 96] } };
      const arm2 = { e: [72, 99], w: [62, 100] };
      return [
        [k(legs, { hip: [112, 96], sh: [72, 79], hd: [56, 73], a2: arm2, a1: { e: [90, 84], w: [106, 89] } }), 1500, 1000, "Alkūnė po petimi"],
        [k(legs, { hip: [110, 86], sh: [72, 79], hd: [56, 73], a2: arm2, a1: { e: [90, 79], w: [106, 82] } }), 1500, 3000, "Klubai aukštyn · tiesi linija"]
      ];
    },
    hipflex: () => {
      const p1 = { hip: [91, 74], sh: [92, 36], hd: [93, 19], a1: [96, 68, 1], l1: [118, 98, -1, 0], l2: { k: [80, 98], a: [54, 98], t: [46, 96] } };
      return [
        [p1, 1800, 1500, "Uodegikaulis po savimi, suspausk sėdmenį"],
        [k(p1, { hip: [99, 77], sh: [100, 39], hd: [101, 22], a1: [104, 71, 1] }), 2500, 4000, "Pasislink į priekį · laikyk"]
      ];
    },
    child: () => {
      const base = { hip: [87, 88], sh: [121, 84], hd: [134, 93], a1: [158, 97, -1],
        l1: { k: [110, 97], a: [84, 98], t: [75, 98] } };
      return [
        [k(base, { b: -5 }), 4000, 500, "Įkvėpk į nugarą"],
        [base, 5000, 500, "Atsipalaiduok"]
      ];
    }
  };

  // ---- Piešimas ----
  const NS = "http://www.w3.org/2000/svg";
  const el = (tag, attrs) => { const e = document.createElementNS(NS, tag); for (const a in attrs) e.setAttribute(a, attrs[a]); return e; };
  const pts = (...p) => p.map(q => q[0].toFixed(1) + "," + q[1].toFixed(1)).join(" ");
  const reduced = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ease = u => u * u * (3 - 2 * u);

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
    const kf = DEF[name](lvl).map(([p, d, h, say]) => ({ P: polar(pose(p)), d, h, say }));
    const total = kf.reduce((a, f) => a + f.d + f.h, 0);
    box.innerHTML = "";
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "anim-btn";
    // Kadras parenkamas pagal visų pozų ribas, kad figūra užpildytų plotą (santykis 16:9)
    let x0 = 1e9, x1 = -1e9, y0 = 1e9;
    kf.forEach(f => { const j = joints(f.P); for (const key in j) if (Array.isArray(j[key])) { x0 = Math.min(x0, j[key][0]); x1 = Math.max(x1, j[key][0]); y0 = Math.min(y0, j[key][1]); } });
    x0 -= 9; x1 += 5; y0 -= 9;
    const W = Math.max(x1 - x0 + 16, (107 - y0 + 6) * 16 / 9), H = W * 9 / 16, X = (x0 + x1) / 2 - W / 2;
    const svg = el("svg", { viewBox: `${X.toFixed(1)} ${(107 - H).toFixed(1)} ${W.toFixed(1)} ${H.toFixed(1)}`, "aria-hidden": "true" });
    svg.append(el("rect", { class: "anim-mat", x: X + 3, y: 101.5, width: W - 6, height: 4, rx: 2 }));
    const far = el("g", { class: "anim-far" }), near = el("g", { class: "anim-near" });
    const leg2 = el("polyline", {}), arm2 = el("polyline", {}), leg1 = el("polyline", {}), arm1 = el("polyline", {});
    const torso = el("path", { class: "anim-torso" }), neck = el("line", {}), head = el("circle", { r: 6.5, class: "anim-head" });
    far.append(leg2, arm2); near.append(torso, neck, head, leg1, arm1);
    svg.append(far, near);
    const say = document.createElement("span"); say.className = "anim-say";
    const state = document.createElement("i"); state.className = "anim-state"; state.setAttribute("aria-hidden", "true");
    btn.append(svg, state); box.append(btn, say);

    function draw(P, label) {
      const j = joints(P);
      leg2.setAttribute("points", pts(j.hip, j.k2, j.f2, j.t2));
      arm2.setAttribute("points", pts(j.sh, j.e2, j.w2));
      leg1.setAttribute("points", pts(j.hip, j.k1, j.f1, j.t1));
      arm1.setAttribute("points", pts(j.sh, j.e1, j.w1));
      const t = ang(j.hip, j.sh), m = [(j.hip[0] + j.sh[0]) / 2 - Math.sin(t) * j.b * 2, (j.hip[1] + j.sh[1]) / 2 + Math.cos(t) * j.b * 2];
      torso.setAttribute("d", `M${pts(j.hip)} Q${pts(m)} ${pts(j.sh)}`);
      const n = at(j.sh, ang(j.sh, j.hd), Math.max(0, Math.hypot(j.hd[0] - j.sh[0], j.hd[1] - j.sh[1]) - 6));
      neck.setAttribute("x1", j.sh[0]); neck.setAttribute("y1", j.sh[1]); neck.setAttribute("x2", n[0]); neck.setAttribute("y2", n[1]);
      head.setAttribute("cx", j.hd[0]); head.setAttribute("cy", j.hd[1]);
      if (say.textContent !== label) say.textContent = label;
    }
    let t0 = 0, pausedAt = 0;
    const c = {
      playing: false, visible: !io,
      frame(now) {
        let t = (now - t0) % total;
        for (let i = 0; i < kf.length; i++) {
          const f = kf[i], prev = kf[(i + kf.length - 1) % kf.length];
          if (t < f.d) { draw(mix(prev.P, f.P, ease(t / f.d)), f.say); return; }
          t -= f.d;
          if (t < f.h) { draw(f.P, f.say); return; }
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
    draw(show.P, show.say);
    pausedAt = kf[0].d + kf[0].h + show.d;
    box._anim = c; live.add(c);
    if (io) io.observe(box);
    btn.setAttribute("aria-pressed", "true"); btn.setAttribute("aria-label", "Paleisti animaciją"); box.classList.add("paused");
    if (!reduced()) c.play();
    return c;
  }
  return { mount, has: name => name in DEF };
})();
