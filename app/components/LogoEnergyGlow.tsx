'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/** Logo brand spectrum — matches HeroBackground palette */
const BRAND = {
  cyan: [46, 230, 214] as const,
  blue: [0, 191, 255] as const,
  purple: [108, 59, 255] as const,
  orange: [255, 157, 0] as const,
};

const PALETTE: readonly (readonly [number, number, number])[] = [
  BRAND.cyan,
  BRAND.blue,
  BRAND.purple,
  BRAND.orange,
];

function rgba(rgb: readonly [number, number, number], a: number): string {
  return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;
}

const LOGO_ENERGY_STYLES = `
  .logo-energy-field {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 200%;
    height: 200%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .logo-energy-field > * {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .logo-energy-rays {
    width: 100%;
    height: 100%;
    background: conic-gradient(
      from 0deg at 50% 50%,
      transparent 0deg,
      ${rgba(BRAND.cyan, 0.06)} 12deg,
      transparent 24deg,
      ${rgba(BRAND.blue, 0.05)} 48deg,
      transparent 60deg,
      ${rgba(BRAND.purple, 0.055)} 96deg,
      transparent 108deg,
      ${rgba(BRAND.orange, 0.05)} 156deg,
      transparent 168deg,
      ${rgba(BRAND.cyan, 0.04)} 200deg,
      transparent 220deg,
      ${rgba(BRAND.blue, 0.045)} 260deg,
      transparent 280deg,
      ${rgba(BRAND.purple, 0.04)} 310deg,
      transparent 330deg,
      ${rgba(BRAND.orange, 0.04)} 350deg,
      transparent 360deg
    );
    mask-image: radial-gradient(circle at 50% 50%, black 0%, black 18%, transparent 62%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, black 0%, black 18%, transparent 62%);
    animation: logo-rays-breathe 5s ease-in-out infinite;
    opacity: 0.85;
    transform-origin: center center;
  }

  .logo-energy-aura {
    border-radius: 50%;
    filter: blur(18px);
    will-change: transform, opacity;
    transform-origin: center center;
  }

  .logo-energy-aura--outer {
    width: 82%;
    height: 82%;
    background: radial-gradient(
      circle at 50% 50%,
      ${rgba(BRAND.cyan, 0.28)} 0%,
      ${rgba(BRAND.blue, 0.14)} 22%,
      ${rgba(BRAND.purple, 0.1)} 42%,
      ${rgba(BRAND.orange, 0.07)} 58%,
      transparent 72%
    );
    animation: logo-aura-breathe 5.2s ease-in-out infinite;
  }

  .logo-energy-aura--mid {
    width: 62%;
    height: 62%;
    background: radial-gradient(
      circle at 48% 46%,
      ${rgba(BRAND.cyan, 0.35)} 0%,
      ${rgba(BRAND.blue, 0.18)} 18%,
      ${rgba(BRAND.purple, 0.12)} 35%,
      ${rgba(BRAND.orange, 0.08)} 50%,
      transparent 68%
    );
    filter: blur(12px);
    animation: logo-aura-breathe 5.2s ease-in-out infinite;
    animation-delay: -1.1s;
  }

  .logo-energy-core {
    width: 36%;
    height: 36%;
    transform-origin: center center;
    border-radius: 50%;
    background: radial-gradient(
      circle at 50% 50%,
      ${rgba(BRAND.cyan, 0.42)} 0%,
      ${rgba(BRAND.blue, 0.2)} 28%,
      ${rgba(BRAND.purple, 0.12)} 48%,
      transparent 70%
    );
    filter: blur(8px);
    animation: logo-core-pulse 5s ease-in-out infinite;
  }

  .logo-energy-ring-wrap {
    width: 88%;
    height: 88%;
    transform-origin: center center;
  }

  .logo-energy-ring-wrap--outer {
    animation: logo-ring-spin 48s linear infinite;
  }

  .logo-energy-ring-wrap--mid {
    animation: logo-ring-spin 32s linear infinite reverse;
  }

  .logo-energy-ring-wrap--inner {
    width: 72%;
    height: 72%;
    animation: logo-ring-spin 22s linear infinite;
  }

  .logo-energy-ring {
    width: 100%;
    height: 100%;
    overflow: visible;
    display: block;
  }

  .logo-energy-particles {
    width: 100%;
    height: 100%;
  }

  .logo-energy-shimmer {
    mix-blend-mode: soft-light;
    border-radius: 50%;
    background: linear-gradient(
      115deg,
      transparent 38%,
      ${rgba(BRAND.cyan, 0.14)} 44%,
      rgba(255, 255, 255, 0.1) 48%,
      ${rgba(BRAND.purple, 0.12)} 52%,
      ${rgba(BRAND.orange, 0.08)} 56%,
      transparent 62%
    );
    background-size: 220% 100%;
    animation: logo-holo-shimmer 7s ease-in-out infinite;
    opacity: 0.7;
    mask-image: radial-gradient(circle at 50% 50%, black 55%, transparent 78%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, black 55%, transparent 78%);
  }

  @keyframes logo-aura-breathe {
    0%, 100% {
      opacity: 0.55;
      transform: translate(-50%, -50%) scale(0.94);
    }
    50% {
      opacity: 0.92;
      transform: translate(-50%, -50%) scale(1.04);
    }
  }

  @keyframes logo-core-pulse {
    0%, 100% {
      opacity: 0.5;
      transform: translate(-50%, -50%) scale(0.88);
    }
    50% {
      opacity: 0.95;
      transform: translate(-50%, -50%) scale(1.06);
    }
  }

  @keyframes logo-rays-breathe {
    0%, 100% {
      opacity: 0.65;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.96);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(8deg) scale(1.02);
    }
  }

  @keyframes logo-ring-spin {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes logo-holo-shimmer {
    0%, 100% { background-position: 180% 0; }
    50% { background-position: -80% 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .logo-energy-rays,
    .logo-energy-aura,
    .logo-energy-core,
    .logo-energy-ring-wrap,
    .logo-energy-shimmer {
      animation: none !important;
    }
    .logo-energy-particles {
      display: none;
    }
    .logo-energy-aura--outer {
      opacity: 0.65;
    }
  }
`;

interface DetachParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  colorIdx: number;
}

interface LogoEnergyGlowProps {
  className?: string;
}

export default function LogoEnergyGlow({
  className = 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40',
}: LogoEnergyGlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<DetachParticle[]>([]);
  const spawnTimerRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let running = true;
    let last = performance.now();

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const size = Math.max(rect.width, rect.height) * 2;
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const spawnBurst = (cx: number, cy: number) => {
      const count = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.35 + Math.random() * 0.55;
        particlesRef.current.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 1.8 + Math.random() * 1.4,
          size: 1 + Math.random() * 1.8,
          colorIdx: Math.floor(Math.random() * PALETTE.length),
        });
      }
      if (particlesRef.current.length > 24) {
        particlesRef.current.splice(0, particlesRef.current.length - 24);
      }
    };

    const tick = (now: number) => {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const scale = w / (container.getBoundingClientRect().width * 2);

      ctx.clearRect(0, 0, w, h);

      spawnTimerRef.current += dt;
      if (spawnTimerRef.current > 2.2 + Math.random() * 1.6) {
        spawnTimerRef.current = 0;
        spawnBurst(cx, cy);
      }

      const next: DetachParticle[] = [];
      for (const p of particlesRef.current) {
        p.life += dt;
        if (p.life >= p.maxLife) continue;

        p.x += p.vx * scale * 28 * dt;
        p.y += p.vy * scale * 28 * dt;
        p.vx *= 0.992;
        p.vy *= 0.992;

        const t = p.life / p.maxLife;
        const alpha = (1 - t) * (1 - t) * 0.55;
        const [r, g, b] = PALETTE[p.colorIdx];
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * scale * 3);
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * scale * 3, 0, Math.PI * 2);
        ctx.fill();

        next.push(p);
      }
      particlesRef.current = next;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      particlesRef.current = [];
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: LOGO_ENERGY_STYLES }} />
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full w-full"
      >
        {/* Glow stack — centered on logo; sizing is % of this box */}
        <div className="logo-energy-field pointer-events-none" aria-hidden>
          <div className="logo-energy-rays" />

          <div className="logo-energy-aura logo-energy-aura--outer" />
          <div className="logo-energy-aura logo-energy-aura--mid" />

          <div className="logo-energy-core" />

          {/* Rotating energy rings — spin wrappers keep position separate from rotation */}
          <div className="logo-energy-ring-wrap logo-energy-ring-wrap--outer">
          <svg
            className="logo-energy-ring"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <defs>
              <linearGradient id="logo-ring-grad-outer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={rgba(BRAND.cyan, 0.65)} />
                <stop offset="28%" stopColor={rgba(BRAND.blue, 0.5)} />
                <stop offset="55%" stopColor={rgba(BRAND.purple, 0.55)} />
                <stop offset="82%" stopColor={rgba(BRAND.orange, 0.5)} />
                <stop offset="100%" stopColor={rgba(BRAND.cyan, 0.4)} />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="88"
              fill="none"
              stroke="url(#logo-ring-grad-outer)"
              strokeWidth="0.6"
              strokeDasharray="4 14 2 18 6 12"
              strokeLinecap="round"
              opacity="0.45"
            />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <circle
                key={deg}
                cx={100 + 88 * Math.cos((deg * Math.PI) / 180)}
                cy={100 + 88 * Math.sin((deg * Math.PI) / 180)}
                r="1.2"
                fill={rgba(PALETTE[i % PALETTE.length], 0.7)}
              />
            ))}
          </svg>
          </div>

          <div className="logo-energy-ring-wrap logo-energy-ring-wrap--mid">
          <svg
            className="logo-energy-ring"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <defs>
              <linearGradient id="logo-ring-grad-mid" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={rgba(BRAND.purple, 0.55)} />
                <stop offset="40%" stopColor={rgba(BRAND.cyan, 0.45)} />
                <stop offset="70%" stopColor={rgba(BRAND.orange, 0.4)} />
                <stop offset="100%" stopColor={rgba(BRAND.blue, 0.5)} />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="72"
              fill="none"
              stroke="url(#logo-ring-grad-mid)"
              strokeWidth="0.45"
              strokeDasharray="8 22 3 16"
              strokeLinecap="round"
              opacity="0.38"
            />
            <circle
              cx="100"
              cy="28"
              r="1"
              fill={rgba(BRAND.cyan, 0.85)}
            />
            <circle cx="172" cy="100" r="0.9" fill={rgba(BRAND.blue, 0.75)} />
            <circle cx="100" cy="172" r="1" fill={rgba(BRAND.orange, 0.8)} />
            <circle cx="28" cy="100" r="0.9" fill={rgba(BRAND.purple, 0.8)} />
          </svg>
          </div>

          <div className="logo-energy-ring-wrap logo-energy-ring-wrap--inner">
          <svg
            className="logo-energy-ring"
            viewBox="0 0 200 200"
            aria-hidden
          >
            <circle
              cx="100"
              cy="100"
              r="58"
              fill="none"
              stroke={rgba(BRAND.cyan, 0.22)}
              strokeWidth="0.35"
              strokeDasharray="2 10 1 8"
              opacity="0.5"
            />
            {Array.from({ length: 16 }, (_, i) => {
              const a = (i / 16) * Math.PI * 2;
              const col = PALETTE[i % 4];
              return (
                <circle
                  key={i}
                  cx={100 + 58 * Math.cos(a)}
                  cy={100 + 58 * Math.sin(a)}
                  r={i % 3 === 0 ? 0.85 : 0.45}
                  fill={rgba(col, i % 3 === 0 ? 0.65 : 0.35)}
                />
              );
            })}
          </svg>
          </div>

          <canvas ref={canvasRef} className="logo-energy-particles pointer-events-none" aria-hidden />
        </div>

        {/* Logo + holographic shimmer */}
        <div className="relative z-10 w-full h-full">
          <Image
            src="/Logo.png"
            alt="Roboticela"
            fill
            sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 160px"
            className="object-contain pointer-events-none"
            priority
            fetchPriority="high"
          />
          <div className="logo-energy-shimmer pointer-events-none absolute inset-0" aria-hidden />
        </div>
      </motion.div>
    </div>
  );
}
