'use client';

import { useEffect, useRef, useCallback } from 'react';

/* ─────────────────────── palette ─────────────────────── */

const PAL: [number, number, number][] = [
  [46, 230, 214],   // 0 cyan        #2EE6D6
  [0, 191, 255],    // 1 blue        #00BFFF
  [108, 59, 255],   // 2 purple      #6C3BFF
  [255, 157, 0],    // 3 orange      #FF9D00
  [255, 174, 28],   // 4 amber       #FFAE1C  (logo)
  [89, 22, 235],    // 5 violet      #5916EB  (logo)
  [0, 185, 150],    // 6 teal-green  #00B996  (logo)
  [151, 1, 154],    // 7 magenta     #97019A  (logo)
];

function c(idx: number, a: number): string {
  const [r, g, b] = PAL[idx % PAL.length];
  return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

/* ─────────────────────── tiny utils ─────────────────────── */

const rnd = (lo: number, hi: number) => lo + Math.random() * (hi - lo);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

function smooth(e0: number, e1: number, x: number): number {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
}

/* Reading-zone mask: returns 0 inside the protected central area (≈ middle 40%
   horizontally + the headline band) and ramps toward 1 at the edges & corners.
   Used to keep structures away from text while letting corners stay strong. */
function centerClear(x: number, y: number, W: number, H: number): number {
  const nx = (x / W - 0.5) / 0.46;
  const ny = (y / H - 0.5) / 0.52;
  const d = Math.sqrt(nx * nx + ny * ny);
  return smooth(0.5, 1.0, d);
}

function cubic(t: number, p0: number, p1: number, p2: number, p3: number): number {
  const u = 1 - t;
  return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
}

/* ─────────────────────── types ─────────────────────── */

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  baseAlpha: number;
  depth: number;        // 0 = far (slow parallax), 1 = near (fast parallax)
  colorIdx: number;
  phase: number;
  phaseSpeed: number;
  onPath: boolean;
  pathT: number;
  pathSpd: number;
  bx0: number; by0: number;
  bx1: number; by1: number;
  bx2: number; by2: number;
  bx3: number; by3: number;
}

interface NetNode {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  depth: number;
  colorIdx: number;
  phase: number;
  phaseSpeed: number;
  minX: number; maxX: number;   // horizontal band this node is confined to (edge origin)
}

/* expanding energy wave that sweeps out from a corner */
interface CornerWave {
  cx: number; cy: number;       // corner origin
  a0: number; a1: number;       // arc angle span (radians)
  t: number;                    // 0..1 life
  speed: number;
  maxR: number;
  colorIdx: number;
}

/* concentric ring rippling outward from the logo centre */
interface Ripple {
  t: number;                    // 0..1 life
  speed: number;
  colorIdx: number;
}

interface Pulse {
  a: number; b: number;
  t: number;
  speed: number;
  colorIdx: number;
}

interface HexCell {
  cx: number; cy: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  lerpSpeed: number;
}

/* A single normalised control point of an energy ribbon. */
interface RibbonPt {
  bx: number; by: number;   // base position (normalised 0..1)
  ax: number; ay: number;   // wiggle amplitude (normalised)
  freq: number;             // oscillation frequency
  phase: number;            // oscillation phase
}

interface Ribbon {
  pts: RibbonPt[];
  colorIdx: number;
  width: number;            // core line width (px)
  alpha: number;            // overall intensity
  depth: number;            // parallax factor
  flowPhase: number;        // travelling highlight position
  flowSpeed: number;
}

/* ─────────────────────── draw helpers ─────────────────────── */

function drawHex(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, alpha: number): void {
  if (alpha < 0.004) return;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const ang = (Math.PI / 3) * i;
    const px = cx + r * Math.cos(ang);
    const py = cy + r * Math.sin(ang);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = c(0, alpha);
  ctx.lineWidth = 0.5;
  ctx.stroke();
}

/* pre-render a radial glow sprite per palette color */
function buildGlowSprites(): HTMLCanvasElement[] {
  return PAL.map(([r, g, b]) => {
    const sz = 100;
    const gc = document.createElement('canvas');
    gc.width = gc.height = sz;
    const gctx = gc.getContext('2d')!;
    const grd = gctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, sz / 2);
    grd.addColorStop(0,   `rgba(${r},${g},${b},0.85)`);
    grd.addColorStop(0.18, `rgba(${r},${g},${b},0.4)`);
    grd.addColorStop(0.5,  `rgba(${r},${g},${b},0.1)`);
    grd.addColorStop(1,   'transparent');
    gctx.fillStyle = grd;
    gctx.fillRect(0, 0, sz, sz);
    return gc;
  });
}

/* pre-render a static grid onto an offscreen canvas */
function buildGridCanvas(W: number, H: number): HTMLCanvasElement {
  const gc = document.createElement('canvas');
  gc.width = W; gc.height = H;
  const gctx = gc.getContext('2d')!;
  gctx.strokeStyle = 'rgba(0,191,255,0.022)';
  gctx.lineWidth = 0.4;
  gctx.beginPath();
  for (let x = 0; x <= W; x += 90) { gctx.moveTo(x, 0); gctx.lineTo(x, H); }
  for (let y = 0; y <= H; y += 90) { gctx.moveTo(0, y); gctx.lineTo(W, y); }
  gctx.stroke();
  return gc;
}

/* smooth curve through a list of points (quadratic midpoint technique) */
function tracePath(ctx: CanvasRenderingContext2D, pts: { x: number; y: number }[]): void {
  if (pts.length < 2) return;
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i + 1].x) / 2;
    const my = (pts[i].y + pts[i + 1].y) / 2;
    ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
  }
  const last = pts[pts.length - 1];
  ctx.quadraticCurveTo(
    pts[pts.length - 2].x, pts[pts.length - 2].y,
    last.x, last.y,
  );
}

/* ─────────────────────── scene builders ─────────────────────── */

function mkParticles(W: number, H: number): Particle[] {
  const count = clamp(Math.floor((W * H) / 2800), 260, 760);
  return Array.from({ length: count }, () => {
    const onPath = Math.random() < 0.1;
    const bx0 = rnd(0, W), by0 = rnd(0, H);
    const bx3 = rnd(0, W), by3 = rnd(0, H);
    return {
      x: rnd(0, W), y: rnd(0, H),
      vx: rnd(-0.09, 0.09),
      vy: rnd(-0.065, 0.05),
      size: rnd(0.3, 1.7),
      baseAlpha: rnd(0.05, 0.36),
      depth: Math.random(),
      colorIdx: Math.floor(Math.random() * 4),
      phase: rnd(0, Math.PI * 2),
      phaseSpeed: rnd(0.003, 0.013),
      onPath, pathT: Math.random(),
      pathSpd: rnd(0.0009, 0.0035) * (Math.random() < 0.5 ? 1 : -1),
      bx0, by0,
      bx1: lerp(bx0, bx3, 0.38) + rnd(-W * 0.28, W * 0.28),
      by1: lerp(by0, by3, 0.38) + rnd(-H * 0.28, H * 0.28),
      bx2: lerp(bx0, bx3, 0.62) + rnd(-W * 0.22, W * 0.22),
      by2: lerp(by0, by3, 0.62) + rnd(-H * 0.22, H * 0.22),
      bx3, by3,
    };
  });
}

/* Nodes originate from the far-left & far-right edges only, confined to the
   outer ~30% of each side so the central reading area stays clean.  Density is
   biased toward the very edge (corners/sides strongest). */
function mkNodes(W: number, H: number): NetNode[] {
  const band = W * 0.3;
  const perSide = clamp(Math.floor(W / 70), 8, 22);

  const make = (left: boolean): NetNode => {
    const minX = left ? -W * 0.03 : W - band;
    const maxX = left ? band : W * 1.03;
    const edgeBias = Math.pow(Math.random(), 1.6); // skew toward the edge
    const x = left
      ? lerp(minX, maxX, edgeBias)
      : lerp(maxX, minX, edgeBias);
    return {
      x, y: rnd(H * 0.02, H * 0.98),
      vx: rnd(-0.1, 0.1),
      vy: rnd(-0.085, 0.085),
      size: rnd(1.3, 3.4),
      depth: Math.random(),
      colorIdx: Math.floor(Math.random() * 3), // cyan / blue / purple only
      phase: rnd(0, Math.PI * 2),
      phaseSpeed: rnd(0.011, 0.03),
      minX, maxX,
    };
  };

  return [
    ...Array.from({ length: perSide }, () => make(true)),
    ...Array.from({ length: perSide }, () => make(false)),
  ];
}

/* Hex outlines biased toward the outer edges / corners (center stays clear,
   reinforced by the centerClear mask applied at draw time). */
function mkHexCells(W: number, H: number): HexCell[] {
  return Array.from({ length: 22 }, () => {
    const edge = Math.random();
    let cx: number, cy: number;
    if (edge < 0.5) {            // hug left / right sides
      cx = Math.random() < 0.5 ? rnd(0, W * 0.24) : rnd(W * 0.76, W);
      cy = rnd(0, H);
    } else {                     // hug top / bottom
      cx = rnd(0, W);
      cy = Math.random() < 0.5 ? rnd(0, H * 0.22) : rnd(H * 0.78, H);
    }
    return {
      cx, cy,
      size: rnd(34, 105),
      alpha: 0,
      targetAlpha: rnd(0.02, 0.058),
      lerpSpeed: rnd(0.003, 0.009),
    };
  });
}

/* Flowing energy ribbons — the signature silk-light streaks.
   Defined in normalised space so they scale with any viewport.
   Waypoints trace a graceful arc; each gets a slow independent wiggle. */
function mkRibbons(): Ribbon[] {
  const defs: { way: [number, number][]; colorIdx: number; width: number; alpha: number; depth: number }[] = [
    // cyan sweep — bottom-left rising
    { way: [[-0.06, 0.98], [0.12, 0.82], [0.28, 0.62], [0.22, 0.46], [0.06, 0.34]], colorIdx: 0, width: 1.6, alpha: 0.5, depth: 0.55 },
    // teal lower streak — bottom-left foreground
    { way: [[-0.04, 0.84], [0.16, 0.74], [0.34, 0.7], [0.46, 0.78]], colorIdx: 0, width: 1.1, alpha: 0.34, depth: 0.85 },
    // purple arc — top-right
    { way: [[1.06, 0.04], [0.86, 0.16], [0.72, 0.32], [0.78, 0.5], [0.9, 0.6]], colorIdx: 2, width: 1.7, alpha: 0.5, depth: 0.5 },
    // blue filament — top-right inner
    { way: [[1.04, 0.2], [0.84, 0.28], [0.66, 0.4], [0.7, 0.54]], colorIdx: 1, width: 1.0, alpha: 0.32, depth: 0.75 },
    // orange ember sweep — bottom-right
    { way: [[1.06, 0.96], [0.86, 0.84], [0.7, 0.74], [0.78, 0.6], [0.94, 0.52]], colorIdx: 3, width: 1.4, alpha: 0.4, depth: 0.6 },
    // faint blue filament — top-left
    { way: [[-0.04, 0.18], [0.16, 0.24], [0.34, 0.36], [0.3, 0.5]], colorIdx: 1, width: 0.9, alpha: 0.24, depth: 0.7 },

    /* ── logo-matched accent ribbons ── */
    // amber #FFAE1C — top-left edge
    { way: [[-0.05, 0.06], [0.14, 0.15], [0.3, 0.28], [0.25, 0.42]], colorIdx: 4, width: 1.2, alpha: 0.34, depth: 0.62 },
    // violet #5916EB — left-mid sweep
    { way: [[-0.05, 0.62], [0.13, 0.56], [0.27, 0.5], [0.2, 0.38]], colorIdx: 5, width: 1.3, alpha: 0.36, depth: 0.5 },
    // teal-green #00B996 — bottom-right rising
    { way: [[1.05, 0.82], [0.86, 0.72], [0.72, 0.62], [0.8, 0.5]], colorIdx: 6, width: 1.2, alpha: 0.34, depth: 0.68 },
    // magenta #97019A — top-right outer
    { way: [[1.06, 0.36], [0.9, 0.44], [0.76, 0.54], [0.82, 0.66]], colorIdx: 7, width: 1.25, alpha: 0.32, depth: 0.56 },
  ];

  return defs.map((d) => ({
    colorIdx: d.colorIdx,
    width: d.width,
    alpha: d.alpha,
    depth: d.depth,
    flowPhase: Math.random(),
    flowSpeed: rnd(0.05, 0.11),
    pts: d.way.map(([bx, by]) => ({
      bx, by,
      ax: rnd(0.012, 0.03),
      ay: rnd(0.012, 0.03),
      freq: rnd(0.00012, 0.00032),
      phase: rnd(0, Math.PI * 2),
    })),
  }));
}

/* ─────────────────────── static circuit segments (normalised) ─── */

const CIRCUIT_SEGS: number[][] = [
  [0.07, 0.18, 0.37, 0.18, 0.37, 0.48],
  [0.63, 0.11, 0.9,  0.11, 0.9,  0.4 ],
  [0.04, 0.68, 0.28, 0.68, 0.28, 0.9 ],
  [0.56, 0.63, 0.93, 0.63],
  [0.43, 0.04, 0.43, 0.32, 0.66, 0.32],
  [0.17, 0.43, 0.17, 0.59, 0.37, 0.59],
  [0.73, 0.73, 0.73, 0.94, 0.52, 0.94],
  [0.82, 0.52, 0.82, 0.68, 0.6,  0.68],
  [0.22, 0.26, 0.08, 0.26, 0.08, 0.52],
];

/* ─────────────────────── component ─────────────────────── */

export default function HeroBackground() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);
  const rafRef     = useRef(0);
  const mouse      = useRef({ x: 0.5, y: 0.62 });
  const tgtMouse   = useRef({ x: 0.5, y: 0.62 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReduced = typeof window !== 'undefined'
      && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    let W = 0, H = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let nodes: NetNode[]      = [];
    let pulses: Pulse[]       = [];
    let hexes: HexCell[]      = [];
    let ribbons: Ribbon[]     = [];
    let waves: CornerWave[]   = [];
    let ripples: Ripple[]     = [];
    let glowSprites: HTMLCanvasElement[] = [];
    let gridCanvas: HTMLCanvasElement | null = null;
    let prevTime = 0;
    let pulseTimer = 0;
    let waveTimer = 2200;       // first corner wave fires shortly after load
    let rippleTimer = 1400;     // first logo ripple fires shortly after load
    let hoverGlow = 0;          // smoothed center-glow boost driven by cursor
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;

    function init() {
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      if (W < 1 || H < 1) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width  = Math.floor(W * dpr);
      canvas!.height = Math.floor(H * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      glowSprites = buildGlowSprites();
      gridCanvas  = buildGridCanvas(W, H);
      particles   = mkParticles(W, H);
      nodes       = mkNodes(W, H);
      hexes       = mkHexCells(W, H);
      ribbons     = mkRibbons();
      pulses      = [];
      waves       = [];
      ripples     = [];
    }

    function spawnPulse() {
      if (nodes.length < 2 || pulses.length >= 20) return;
      const a = Math.floor(Math.random() * nodes.length);
      let b = a;
      while (b === a) b = Math.floor(Math.random() * nodes.length);
      const dist = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
      if (dist < Math.min(W, H) * 0.3) {
        pulses.push({ a, b, t: 0, speed: rnd(0.004, 0.013), colorIdx: Math.floor(Math.random() * 4) });
      }
    }

    /* a slow soft arc that sweeps outward from one of the four corners */
    function spawnWave() {
      if (waves.length >= 3) return;
      const corners: [number, number, number][] = [
        [0, 0, 0],                 // top-left   → sweep into 0..90°
        [W, 0, Math.PI / 2],       // top-right  → 90..180°
        [W, H, Math.PI],           // bot-right  → 180..270°
        [0, H, Math.PI * 1.5],     // bot-left   → 270..360°
      ];
      const [cx, cy, base] = corners[Math.floor(Math.random() * corners.length)];
      waves.push({
        cx, cy,
        a0: base, a1: base + Math.PI / 2,
        t: 0,
        speed: rnd(0.0024, 0.0038),
        maxR: Math.hypot(W, H) * rnd(0.5, 0.72),
        colorIdx: Math.floor(Math.random() * 4),
      });
    }

    /* draw one ribbon with additive multi-pass glow + travelling highlight */
    function drawRibbon(r: Ribbon, time: number, mx: number, my: number) {
      const px = mx * 60 * r.depth;
      const py = my * 60 * r.depth;
      const pts = r.pts.map((p) => ({
        x: (p.bx + p.ax * Math.sin(time * p.freq + p.phase)) * W + px,
        y: (p.by + p.ay * Math.cos(time * p.freq * 1.3 + p.phase)) * H + py,
      }));

      ctx!.save();
      ctx!.globalCompositeOperation = 'lighter';
      ctx!.lineCap = 'round';
      ctx!.lineJoin = 'round';

      const breathe = 0.78 + 0.22 * Math.sin(time * 0.0004 + r.flowPhase * 6.28);
      const passes: [number, number][] = [
        [r.width * 9, r.alpha * 0.05],
        [r.width * 4.5, r.alpha * 0.1],
        [r.width * 2, r.alpha * 0.22],
        [r.width * 0.85, r.alpha * 0.5],
      ];
      for (const [w, a] of passes) {
        tracePath(ctx!, pts);
        ctx!.lineWidth = w;
        ctx!.strokeStyle = c(r.colorIdx, a * breathe);
        ctx!.stroke();
      }

      /* travelling light node gliding along the ribbon */
      r.flowPhase = (r.flowPhase + r.flowSpeed * 0.01) % 1;
      const seg = r.flowPhase * (pts.length - 1);
      const si = Math.floor(seg);
      const sf = seg - si;
      const a0 = pts[si];
      const a1 = pts[Math.min(si + 1, pts.length - 1)];
      const fx = lerp(a0.x, a1.x, sf);
      const fy = lerp(a0.y, a1.y, sf);
      ctx!.globalAlpha = 0.5 * breathe;
      ctx!.drawImage(glowSprites[r.colorIdx], fx - 26, fy - 26, 52, 52);
      ctx!.globalAlpha = 1;

      ctx!.restore();
    }

    function tick(time: number) {
      rafRef.current = requestAnimationFrame(tick);
      const dt = clamp(time - prevTime, 0, 33);
      prevTime = time;
      if (W < 1 || H < 1) return;

      /* smooth mouse */
      mouse.current.x = lerp(mouse.current.x, tgtMouse.current.x, 0.045);
      mouse.current.y = lerp(mouse.current.y, tgtMouse.current.y, 0.045);
      const mx = mouse.current.x - 0.5; // –0.5 … +0.5
      const my = mouse.current.y - 0.5;
      const mpx = mouse.current.x * W;  // cursor in pixels (for proximity)
      const mpy = mouse.current.y * H;

      const spd = dt / 16; // speed scalar (1 at 60 fps)

      /* center glow gently swells as the cursor nears the logo area (50%,42%) */
      {
        const gd = Math.hypot(mouse.current.x - 0.5, (mouse.current.y - 0.42) * 0.92);
        const target = smooth(0.36, 0.04, gd); // 1 when close, 0 when far
        hoverGlow = lerp(hoverGlow, target, 0.06 * spd);
        if (glowRef.current) glowRef.current.style.opacity = (hoverGlow * 0.6).toFixed(3);
      }

      ctx!.clearRect(0, 0, W, H);

      /* ── faint grid (pre-rendered bitmap) ── */
      if (gridCanvas) ctx!.drawImage(gridCanvas, 0, 0, W, H);

      /* ── flowing energy ribbons (signature silk light) ── */
      for (const r of ribbons) drawRibbon(r, time, mx, my);

      /* ── soft energy waves sweeping out of the corners ── */
      waveTimer += dt;
      if (waveTimer > 4200) { spawnWave(); waveTimer = rnd(-1400, 0); }
      ctx!.save();
      ctx!.globalCompositeOperation = 'lighter';
      ctx!.lineCap = 'round';
      for (let i = waves.length - 1; i >= 0; i--) {
        const wv = waves[i];
        wv.t += wv.speed * spd;
        if (wv.t >= 1) { waves.splice(i, 1); continue; }
        const r = wv.t * wv.maxR;
        const env = Math.sin(wv.t * Math.PI);     // fade in then out
        const a = env * 0.05;
        if (a < 0.004) continue;
        ctx!.beginPath();
        ctx!.arc(wv.cx, wv.cy, r, wv.a0, wv.a1);
        ctx!.strokeStyle = c(wv.colorIdx, a);
        ctx!.lineWidth = 26;
        ctx!.stroke();
        ctx!.beginPath();
        ctx!.arc(wv.cx, wv.cy, r, wv.a0, wv.a1);
        ctx!.strokeStyle = c(wv.colorIdx, a * 1.8);
        ctx!.lineWidth = 4;
        ctx!.stroke();
      }
      ctx!.restore();

      /* ── concentric ripples radiating from the logo centre ── */
      rippleTimer += dt;
      if (rippleTimer > 2700) {
        if (ripples.length < 5) {
          ripples.push({ t: 0, speed: rnd(0.0044, 0.0062), colorIdx: Math.random() < 0.62 ? 0 : 1 });
        }
        rippleTimer = 0;
      }
      {
        const lcx = W * 0.5 + mx * 14;   // gentle parallax sync with mesh
        const lcy = H * 0.42 + my * 14;
        const baseR = Math.min(W, H) * 0.05;
        const maxR  = Math.min(W, H) * 0.66;
        ctx!.save();
        ctx!.globalCompositeOperation = 'lighter';
        for (let i = ripples.length - 1; i >= 0; i--) {
          const rp = ripples[i];
          rp.t += rp.speed * spd;
          if (rp.t >= 1) { ripples.splice(i, 1); continue; }
          const ease = 1 - Math.pow(1 - rp.t, 3);          // decelerate outward
          const r = baseR + ease * (maxR - baseR);
          const env = Math.sin(rp.t * Math.PI) * (1 - rp.t * 0.35); // fade as it grows
          const a = env * 0.085;
          if (a < 0.004) continue;
          /* soft halo ring */
          ctx!.beginPath();
          ctx!.arc(lcx, lcy, r, 0, Math.PI * 2);
          ctx!.strokeStyle = c(rp.colorIdx, a * 0.45);
          ctx!.lineWidth = 9;
          ctx!.stroke();
          /* crisp ring */
          ctx!.beginPath();
          ctx!.arc(lcx, lcy, r, 0, Math.PI * 2);
          ctx!.strokeStyle = c(rp.colorIdx, a);
          ctx!.lineWidth = 1.3;
          ctx!.stroke();
        }
        ctx!.restore();
      }

      /* ── hex cells (fade in/out, masked away from the reading zone) ── */
      for (const h of hexes) {
        h.alpha = lerp(h.alpha, h.targetAlpha, h.lerpSpeed * spd);
        if (Math.abs(h.alpha - h.targetAlpha) < 0.002) {
          h.targetAlpha = h.targetAlpha > 0.01
            ? (Math.random() < 0.28 ? 0 : rnd(0.02, 0.058))
            : rnd(0.02, 0.058);
        }
        drawHex(ctx!, h.cx, h.cy, h.size, h.alpha * centerClear(h.cx, h.cy, W, H));
      }

      /* ── circuit board lines (masked away from reading zone) ── */
      {
        const alpha = 0.03 + 0.013 * Math.sin(time * 0.00045);
        ctx!.save();
        ctx!.lineWidth = 0.5;
        for (const seg of CIRCUIT_SEGS) {
          const mxn = (seg[0] + seg[seg.length - 2]) * 0.5 * W;
          const myn = (seg[1] + seg[seg.length - 1]) * 0.5 * H;
          const m = centerClear(mxn, myn, W, H);
          if (m < 0.04) continue;
          ctx!.beginPath();
          for (let i = 0; i < seg.length - 1; i += 2) {
            const sx = seg[i] * W, sy = seg[i + 1] * H;
            i === 0 ? ctx!.moveTo(sx, sy) : ctx!.lineTo(sx, sy);
          }
          ctx!.strokeStyle = `rgba(108,59,255,${alpha * m})`;
          ctx!.stroke();
          /* junction dot at end */
          const ex = seg[seg.length - 2] * W;
          const ey = seg[seg.length - 1] * H;
          ctx!.beginPath();
          ctx!.arc(ex, ey, 1.8, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(108,59,255,${alpha * 2.5 * m})`;
          ctx!.fill();
        }
        ctx!.restore();
      }

      /* ── pre-compute node draw positions (physics + parallax) ── */
      const nDraw = nodes.map(n => ({
        x: n.x + mx * 48 * n.depth,
        y: n.y + my * 48 * n.depth,
      }));

      /* ── neural connections (faded out across the central reading zone) ── */
      {
        const maxDist = Math.min(W, H) * 0.29;
        ctx!.save();
        ctx!.lineWidth = 0.45;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const da = nDraw[i], db = nDraw[j];
            const dist = Math.hypot(da.x - db.x, da.y - db.y);
            if (dist >= maxDist) continue;
            const midM = centerClear((da.x + db.x) * 0.5, (da.y + db.y) * 0.5, W, H);
            if (midM < 0.05) continue; // never draw across the headline
            const fade = 1 - dist / maxDist;
            const flicker = 0.55 + 0.45 * Math.sin(time * 0.00055 + i * 0.73 + j * 0.41);
            const alpha = fade * fade * 0.16 * flicker * midM;
            if (alpha < 0.007) continue;
            ctx!.beginPath();
            ctx!.moveTo(da.x, da.y);
            ctx!.lineTo(db.x, db.y);
            ctx!.strokeStyle = c(nodes[i].colorIdx, alpha);
            ctx!.stroke();
          }
        }
        ctx!.restore();
      }

      /* ── energy pulses along connections ── */
      pulseTimer += dt;
      if (pulseTimer > 750) { spawnPulse(); pulseTimer = 0; }
      ctx!.save();
      ctx!.globalCompositeOperation = 'lighter';
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed * spd;
        if (p.t > 1) { pulses.splice(i, 1); continue; }
        const da = nDraw[p.a], db = nDraw[p.b];
        const px = lerp(da.x, db.x, p.t);
        const py = lerp(da.y, db.y, p.t);
        /* outer glow */
        ctx!.globalAlpha = 0.65;
        ctx!.drawImage(glowSprites[p.colorIdx], px - 18, py - 18, 36, 36);
        ctx!.globalAlpha = 1;
        /* bright core */
        ctx!.beginPath();
        ctx!.arc(px, py, 2.8, 0, Math.PI * 2);
        ctx!.fillStyle = c(p.colorIdx, 0.95);
        ctx!.fill();
      }
      ctx!.restore();

      /* ── network nodes (physics confined to edge band + draw) ── */
      ctx!.save();
      ctx!.globalCompositeOperation = 'lighter';
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.phase += n.phaseSpeed * spd;
        n.x += n.vx * spd;
        n.y += n.vy * spd;
        if (n.x < n.minX || n.x > n.maxX) { n.vx *= -1; n.x = clamp(n.x, n.minX, n.maxX); }
        if (n.y < 0 || n.y > H) { n.vy *= -1; n.y = clamp(n.y, 0, H); }

        const dp = nDraw[i];
        const clearM = centerClear(dp.x, dp.y, W, H);
        if (clearM < 0.04) continue;

        const pulse = 0.5 + 0.5 * Math.sin(n.phase);
        /* subtle reaction to cursor proximity */
        const prox = smooth(150, 18, Math.hypot(dp.x - mpx, dp.y - mpy));
        const alpha = (0.42 + 0.42 * pulse + 0.28 * prox) * clearM;
        const size = n.size * (1 + 0.35 * prox);

        /* glow halo (sprite) */
        const sz = 92 * (1 + 0.4 * prox);
        ctx!.globalAlpha = alpha * (0.5 + 0.35 * prox);
        ctx!.drawImage(glowSprites[n.colorIdx], dp.x - sz / 2, dp.y - sz / 2, sz, sz);
        ctx!.globalAlpha = 1;

        /* crisp core dot */
        ctx!.beginPath();
        ctx!.arc(dp.x, dp.y, size, 0, Math.PI * 2);
        ctx!.fillStyle = c(n.colorIdx, alpha);
        ctx!.fill();
      }
      ctx!.restore();

      /* ── particles ── */
      ctx!.save();
      ctx!.globalCompositeOperation = 'lighter';
      for (const p of particles) {
        p.phase += p.phaseSpeed * spd;

        if (p.onPath) {
          p.pathT = ((p.pathT + p.pathSpd * spd) % 1 + 1) % 1;
          p.x = cubic(p.pathT, p.bx0, p.bx1, p.bx2, p.bx3);
          p.y = cubic(p.pathT, p.by0, p.by1, p.by2, p.by3);
        } else {
          p.x += p.vx * spd;
          p.y += p.vy * spd;
          if (p.x < -3) p.x = W + 3;
          else if (p.x > W + 3) p.x = -3;
          if (p.y < -3) p.y = H + 3;
          else if (p.y > H + 3) p.y = -3;
        }

        const dx = p.x + mx * 30 * p.depth;
        const dy = p.y + my * 30 * p.depth;
        const flicker = 0.62 + 0.38 * Math.sin(p.phase);
        /* keep a soft scatter centrally, full strength toward the edges */
        const alpha = p.baseAlpha * flicker * (0.22 + 0.78 * centerClear(dx, dy, W, H));

        ctx!.beginPath();
        ctx!.arc(dx, dy, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = c(p.colorIdx, alpha);
        ctx!.fill();
      }
      ctx!.restore();
    }

    init();
    if (prefersReduced) {
      /* render a single calm frame, no continuous animation */
      tick(0);
      cancelAnimationFrame(rafRef.current);
    } else {
      rafRef.current = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(() => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        init();
        if (prefersReduced) tick(0);
      }, 120);
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const r = canvasRef.current?.getBoundingClientRect();
    if (!r) return;
    tgtMouse.current.x = (e.clientX - r.left) / r.width;
    tgtMouse.current.y = (e.clientY - r.top) / r.height;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
      {/* ─── CSS keyframe animations injected inline ─── */}
      <style>{`
        @keyframes rb-blob1 {
          0%,100% { transform: translate(0px,0px) scale(1); }
          33%      { transform: translate(45px,-35px) scale(1.18); }
          66%      { transform: translate(-22px,22px) scale(0.9); }
        }
        @keyframes rb-blob2 {
          0%,100% { transform: translate(0px,0px) scale(1); }
          40%      { transform: translate(-55px,28px) scale(1.12); }
          72%      { transform: translate(28px,-18px) scale(0.93); }
        }
        @keyframes rb-blob3 {
          0%,100% { transform: translate(0px,0px) scale(1); }
          28%      { transform: translate(28px,48px) scale(1.22); }
          62%      { transform: translate(-38px,-22px) scale(0.88); }
        }
        @keyframes rb-blob4 {
          0%,100% { transform: translate(0px,0px) scale(1); }
          45%      { transform: translate(38px,-50px) scale(1.14); }
          78%      { transform: translate(-16px,32px) scale(0.92); }
        }
        @keyframes rb-blob5 {
          0%,100% { transform: translate(0px,0px) scale(1); }
          50%      { transform: translate(-30px,-30px) scale(1.08); }
        }
        @keyframes rb-rays {
          from { transform: rotate(0deg); opacity: 0.028; }
          50%  { opacity: 0.042; }
          to   { transform: rotate(360deg); opacity: 0.028; }
        }
        @keyframes rb-fog {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.65; }
        }
        @keyframes rb-glow {
          0%,100% { opacity: 0.85; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .rb-anim { animation: none !important; }
        }
      `}</style>

      {/* 1. Deep black base */}
      <div style={{ position: 'absolute', inset: 0, background: '#000' }} />

      {/* 2. Animated gradient mesh blobs (CSS – GPU accelerated) */}
      <div style={{ position: 'absolute', inset: 0, filter: 'blur(90px)', opacity: 0.7 }}>

        {/* Purple cloud – top-left */}
        <div className="rb-anim" style={{
          position: 'absolute', top: '3%', left: '8%',
          width: '52%', height: '48%',
          background: 'radial-gradient(ellipse, rgba(108,59,255,0.26) 0%, transparent 68%)',
          animation: 'rb-blob1 20s ease-in-out infinite',
        }} />

        {/* Blue cloud – top-right */}
        <div className="rb-anim" style={{
          position: 'absolute', top: '10%', right: '4%',
          width: '48%', height: '52%',
          background: 'radial-gradient(ellipse, rgba(0,191,255,0.2) 0%, transparent 68%)',
          animation: 'rb-blob2 25s ease-in-out infinite',
        }} />

        {/* Cyan cloud – bottom-left */}
        <div className="rb-anim" style={{
          position: 'absolute', bottom: '8%', left: '4%',
          width: '44%', height: '44%',
          background: 'radial-gradient(ellipse, rgba(46,230,214,0.18) 0%, transparent 68%)',
          animation: 'rb-blob3 28s ease-in-out infinite',
        }} />

        {/* Orange ember – bottom-right (subtle) */}
        <div className="rb-anim" style={{
          position: 'absolute', bottom: '14%', right: '8%',
          width: '40%', height: '40%',
          background: 'radial-gradient(ellipse, rgba(255,157,0,0.12) 0%, transparent 65%)',
          animation: 'rb-blob4 22s ease-in-out infinite',
        }} />

        {/* Cyan pulse – centre */}
        <div className="rb-anim" style={{
          position: 'absolute', top: '28%', left: '30%',
          width: '40%', height: '40%',
          background: 'radial-gradient(ellipse, rgba(46,230,214,0.1) 0%, transparent 60%)',
          animation: 'rb-blob5 16s ease-in-out infinite',
        }} />
      </div>

      {/* 3. Centre focal glow – radiates behind logo / headline */}
      <div className="rb-anim" style={{
        position: 'absolute', inset: 0, transformOrigin: '50% 42%',
        background: 'radial-gradient(ellipse 58% 46% at 50% 42%, rgba(46,230,214,0.09) 0%, rgba(0,191,255,0.05) 38%, transparent 68%)',
        animation: 'rb-glow 9s ease-in-out infinite',
      }} />

      {/* 3b. Interactive focal glow – swells as cursor nears the logo (JS-driven) */}
      <div ref={glowRef} style={{
        position: 'absolute', inset: 0, opacity: 0, pointerEvents: 'none',
        willChange: 'opacity',
        background: 'radial-gradient(ellipse 40% 34% at 50% 42%, rgba(46,230,214,0.16) 0%, rgba(0,191,255,0.08) 42%, transparent 70%)',
      }} />

      {/* 4. Volumetric ambient fog patches */}
      <div className="rb-anim" style={{
        position: 'absolute', inset: 0,
        background: [
          'radial-gradient(ellipse 75% 65% at 22% 68%, rgba(108,59,255,0.055) 0%, transparent 52%)',
          'radial-gradient(ellipse 65% 55% at 78% 22%, rgba(0,191,255,0.045) 0%, transparent 48%)',
        ].join(', '),
        animation: 'rb-fog 12s ease-in-out infinite',
      }} />

      {/* 5. Holographic conic light rays (slow rotation) */}
      <div className="rb-anim" style={{
        position: 'absolute', inset: 0, transformOrigin: '50% 42%',
        background: [
          'conic-gradient(from 0deg at 50% 42%,',
          '  transparent 0deg,',
          '  rgba(46,230,214,0.028) 18deg,',
          '  transparent 36deg,',
          '  rgba(0,191,255,0.022) 72deg,',
          '  transparent 108deg,',
          '  rgba(108,59,255,0.022) 162deg,',
          '  transparent 200deg,',
          '  rgba(46,230,214,0.025) 230deg,',
          '  transparent 260deg,',
          '  rgba(255,157,0,0.018) 300deg,',
          '  transparent 340deg',
          ')',
        ].join(''),
        animation: 'rb-rays 40s linear infinite',
      }} />

      {/* 6. Canvas – ribbons · particles · neural net · hex · circuit · pulses */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
      />

      {/* 7. Edge vignette – keeps content area clean */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 88% 85% at 50% 50%, transparent 42%, rgba(0,0,0,0.52) 100%)',
      }} />

      {/* 8. Top-edge fade to black (navbar region) */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '18%', pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
      }} />

      {/* 9. Bottom-edge fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '15%', pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)',
      }} />
    </div>
  );
}
