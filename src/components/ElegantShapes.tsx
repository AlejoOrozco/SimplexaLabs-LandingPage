/**
 * ElegantShapes — floating translucent shapes background.
 * Adapted from Kokonut UI ShapeHero (MIT) for SimpLexaLabs palette.
 */
import { motion } from 'motion/react';
import { memo } from 'react';

interface ShapeConfig {
  className: string;
  delay: number;
  width: number;
  height: number;
  rotate: number;
  gradient: string;
  borderRadius: number;
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient,
  borderRadius = 16,
}: ShapeConfig) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, rotate }}
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      style={{ position: 'absolute' }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
        style={{ position: 'relative', width, height }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius,
            background: gradient,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            boxShadow:
              '0 4px 32px -4px rgba(30, 27, 75, 0.35), 0 0 0 1px rgba(165, 180, 252, 0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              background:
                'radial-gradient(circle at 50% 50%, rgba(165, 180, 252, 0.08), transparent 65%)',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* Palette aligned with page gradient: #0f172a, #1e1b4b, #1e3a5f + soft indigo glow #a5b4fc */
const SHAPES: ShapeConfig[] = [
  {
    className: 'elegant-shape--tl',
    delay: 0.3,
    width: 300,
    height: 500,
    rotate: -8,
    gradient: 'linear-gradient(135deg, rgba(30, 27, 75, 0.32), rgba(30, 58, 95, 0.12), transparent 70%)',
    borderRadius: 24,
  },
  {
    className: 'elegant-shape--br',
    delay: 0.5,
    width: 600,
    height: 200,
    rotate: 15,
    gradient: 'linear-gradient(to left, rgba(30, 27, 75, 0.28), rgba(165, 180, 252, 0.1), transparent 65%)',
    borderRadius: 20,
  },
  {
    className: 'elegant-shape--ml',
    delay: 0.4,
    width: 300,
    height: 300,
    rotate: 24,
    gradient: 'linear-gradient(160deg, rgba(30, 58, 95, 0.25), rgba(30, 27, 75, 0.15), transparent 60%)',
    borderRadius: 32,
  },
  {
    className: 'elegant-shape--tr',
    delay: 0.6,
    width: 250,
    height: 100,
    rotate: -20,
    gradient: 'linear-gradient(to right, rgba(165, 180, 252, 0.14), rgba(30, 27, 75, 0.08), transparent)',
    borderRadius: 12,
  },
  {
    className: 'elegant-shape--cr',
    delay: 0.7,
    width: 400,
    height: 150,
    rotate: 35,
    gradient: 'linear-gradient(to left, rgba(30, 58, 95, 0.22), rgba(165, 180, 252, 0.06), transparent 70%)',
    borderRadius: 16,
  },
  {
    className: 'elegant-shape--bl',
    delay: 0.2,
    width: 200,
    height: 200,
    rotate: -25,
    gradient: 'linear-gradient(120deg, rgba(30, 27, 75, 0.28), transparent 65%)',
    borderRadius: 28,
  },
  {
    className: 'elegant-shape--tc',
    delay: 0.8,
    width: 150,
    height: 80,
    rotate: 45,
    gradient: 'linear-gradient(to right, rgba(165, 180, 252, 0.18), rgba(30, 27, 75, 0.06), transparent)',
    borderRadius: 10,
  },
  {
    className: 'elegant-shape--mc',
    delay: 0.9,
    width: 450,
    height: 120,
    rotate: -12,
    gradient: 'linear-gradient(to right, rgba(30, 58, 95, 0.2), rgba(30, 27, 75, 0.08), transparent 60%)',
    borderRadius: 18,
  },
];

export const ElegantShapes = memo(function ElegantShapes() {
  return (
    <div className="elegant-shapes" aria-hidden="true">
      {SHAPES.map((shape) => (
        <ElegantShape key={shape.className} {...shape} />
      ))}
    </div>
  );
});
