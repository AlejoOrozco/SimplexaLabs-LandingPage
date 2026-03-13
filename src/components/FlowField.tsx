/**
 * FlowField — Canvas particle flow field background.
 * Organic noise-driven streams of glowing particles.
 * Adapted from Kokonut UI (MIT) for SimpLexaLabs palette.
 */
import { useEffect, useRef, memo, type ReactNode } from 'react';

interface Particle {
  x: number;
  y: number;
  speed: number;
  hue: number;
  life: number;
  maxLife: number;
}

interface FlowFieldProps {
  className?: string;
  children?: ReactNode;
  /** Particle count */
  count?: number;
  /** HSL hue range start */
  hueStart?: number;
  /** HSL hue range width */
  hueRange?: number;
  /** Background RGB string e.g. "5, 5, 8" */
  bg?: string;
}

function fieldAngle(x: number, y: number, t: number): number {
  const s = 0.0025;
  return (
    Math.sin(x * s + t * 0.0007) * Math.PI +
    Math.cos(y * s + t * 0.0005) * Math.PI +
    Math.sin((x + y) * s * 0.6 + t * 0.0009) * Math.PI * 0.6 +
    Math.cos((x - y) * s * 0.4 + t * 0.0006) * Math.PI * 0.4
  );
}

export const FlowField = memo(function FlowField({
  className,
  children,
  count = 1200,
  hueStart = 210,
  hueRange = 160,
  bg = '8, 12, 28',
}: FlowFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio ?? 1;
    let width = 0;
    let height = 0;
    let animId = 0;
    let time = 0;
    let particles: Particle[] = [];

    const spawnParticle = (): Particle => {
      const maxLife = 200 + Math.floor(Math.random() * 300);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 1.1 + Math.random() * 1.8,
        hue: hueStart + Math.random() * hueRange,
        life: Math.floor(Math.random() * maxLife),
        maxLife,
      };
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = `rgb(${bg})`;
      ctx.fillRect(0, 0, width, height);
      particles = Array.from({ length: count }, spawnParticle);
    };

    const render = () => {
      time++;
      ctx.fillStyle = `rgba(${bg}, 0.06)`;
      ctx.fillRect(0, 0, width, height);

      for (const p of particles) {
        const angle = fieldAngle(p.x, p.y, time);
        p.x += Math.cos(angle) * p.speed;
        p.y += Math.sin(angle) * p.speed;
        p.life++;

        if (p.life > p.maxLife) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
          p.life = 0;
          p.hue = hueStart + Math.random() * hueRange;
          continue;
        }

        if (p.x < 0) p.x += width;
        else if (p.x > width) p.x -= width;
        if (p.y < 0) p.y += height;
        else if (p.y > height) p.y -= height;

        const progress = p.life / p.maxLife;
        const fadeIn = Math.min(progress * 8, 1);
        const fadeOut = Math.min((1 - progress) * 6, 1);
        const alpha = fadeIn * fadeOut * 0.9;
        const hueMod = (p.hue + (angle / (Math.PI * 2)) * 70 + 360) % 360;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hueMod}, 90%, 62%, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [count, hueStart, hueRange, bg]);

  return (
    <div
      ref={containerRef}
      className={`flow-field ${className ?? ''}`.trim()}
      style={{ background: `rgb(${bg})` }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="flow-field__canvas"
      />
      <div className="flow-field__vignette" aria-hidden="true" />
      <div className="flow-field__fade-top" aria-hidden="true" />
      <div className="flow-field__fade-bottom" aria-hidden="true" />
      <div className="flow-field__content">{children}</div>
    </div>
  );
});
