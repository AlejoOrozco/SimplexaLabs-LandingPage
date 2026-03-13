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
            backdropFilter: 'blur(1px)',
            boxShadow:
              '0 2px 16px -2px rgba(255,255,255,0.04), inset 0 0 0 1px rgba(255,255,255,0.03)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              background:
                'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), transparent 70%)',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

const SHAPES: ShapeConfig[] = [
  {
    className: 'elegant-shape--tl',
    delay: 0.3,
    width: 300,
    height: 500,
    rotate: -8,
    gradient: 'linear-gradient(to right, rgba(37,99,235,0.2), transparent)',
    borderRadius: 24,
  },
  {
    className: 'elegant-shape--br',
    delay: 0.5,
    width: 600,
    height: 200,
    rotate: 15,
    gradient: 'linear-gradient(to right, rgba(124,58,237,0.2), transparent)',
    borderRadius: 20,
  },
  {
    className: 'elegant-shape--ml',
    delay: 0.4,
    width: 300,
    height: 300,
    rotate: 24,
    gradient: 'linear-gradient(to right, rgba(124,58,237,0.18), transparent)',
    borderRadius: 32,
  },
  {
    className: 'elegant-shape--tr',
    delay: 0.6,
    width: 250,
    height: 100,
    rotate: -20,
    gradient: 'linear-gradient(to right, rgba(37,99,235,0.18), transparent)',
    borderRadius: 12,
  },
  {
    className: 'elegant-shape--cr',
    delay: 0.7,
    width: 400,
    height: 150,
    rotate: 35,
    gradient: 'linear-gradient(to right, rgba(96,165,250,0.18), transparent)',
    borderRadius: 16,
  },
  {
    className: 'elegant-shape--bl',
    delay: 0.2,
    width: 200,
    height: 200,
    rotate: -25,
    gradient: 'linear-gradient(to right, rgba(37,99,235,0.15), transparent)',
    borderRadius: 28,
  },
  {
    className: 'elegant-shape--tc',
    delay: 0.8,
    width: 150,
    height: 80,
    rotate: 45,
    gradient: 'linear-gradient(to right, rgba(124,58,237,0.15), transparent)',
    borderRadius: 10,
  },
  {
    className: 'elegant-shape--mc',
    delay: 0.9,
    width: 450,
    height: 120,
    rotate: -12,
    gradient: 'linear-gradient(to right, rgba(96,165,250,0.15), transparent)',
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
