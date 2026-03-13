/**
 * BlurBlobs — animated canvas background with soft moving color blobs.
 * Adapts the radial-gradient blob animation to React with palette-matched colors.
 */
import { useEffect, useRef, memo } from 'react';

interface Blob {
  color: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  t: number;
}

interface BlurBlobsProps {
  className?: string;
  /** Blob colors — defaults to SimpLexaLabs palette */
  colors?: [string, string, string, string];
  /** CSS blur radius in px */
  blur?: number;
  /** Animation speed multiplier (1 = default) */
  speed?: number;
  /** Canvas opacity */
  opacity?: number;
}

export const BlurBlobs = memo(function BlurBlobs({
  className,
  colors = ['#bae6fd', '#7c3aed', '#2563eb', '#e0f2fe'],
  blur = 100,
  speed = 1,
  opacity = 0.55,
}: BlurBlobsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rate = speed * 0.002;
    let time = 0;

    const blobs: Blob[] = [
      { color: colors[0], x: 0, y: 0, vx: 1, vy: 1, t: 0 },
      { color: colors[1], x: 0, y: 0, vx: -1, vy: 1, t: 2 },
      { color: colors[2], x: 0, y: 0, vx: -1, vy: -1, t: 4 },
      { color: colors[3], x: 0, y: 0, vx: 1, vy: -1, t: 6 },
    ];

    function resize() {
      canvas!.width = 128;
      canvas!.height = 128;
    }

    resize();
    window.addEventListener('resize', resize);

    function animate() {
      time += rate;
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.globalCompositeOperation = 'source-over';

      blobs.forEach((b) => {
        const mx =
          Math.sin(time + b.t) * 0.5 +
          Math.sin(time * 0.5 + b.t * 2) * 0.5;
        const my =
          Math.cos(time + b.t) * 0.5 +
          Math.cos(time * 0.6 + b.t * 2) * 0.5;

        const x = canvas!.width / 2 + mx * (canvas!.width * 0.3);
        const y = canvas!.height / 2 + my * (canvas!.height * 0.3);
        const radius = canvas!.width * 0.5;

        const g = ctx!.createRadialGradient(x, y, 0, x, y, radius);
        g.addColorStop(0, b.color);
        g.addColorStop(1, 'rgba(255,255,255,0)');

        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(x, y, radius, 0, Math.PI * 2);
        ctx!.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [colors, speed]);

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          filter: `blur(${blur}px)`,
          opacity,
          mixBlendMode: 'normal',
        }}
      />
    </div>
  );
});
