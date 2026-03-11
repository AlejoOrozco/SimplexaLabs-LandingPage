/**
 * Background Paths — animated wave paths for hero section.
 * Adapted for SimpLexaLabs palette: azul eléctrico → morado AI.
 * Renders behind children so text stays readable.
 */
import { motion } from 'motion/react';
import { memo, useMemo } from 'react';

interface Point {
  x: number;
  y: number;
}

interface PathData {
  id: string;
  d: string;
  opacity: number;
  width: number;
  duration: number;
  delay: number;
}

function generateAestheticPath(
  index: number,
  position: number,
  type: 'primary' | 'secondary' | 'accent'
): string {
  const baseAmplitude =
    type === 'primary' ? 150 : type === 'secondary' ? 100 : 60;
  const phase = index * 0.2;
  const points: Point[] = [];
  const segments = type === 'primary' ? 10 : type === 'secondary' ? 8 : 6;

  const startX = 2400;
  const startY = 800;
  const endX = -2400;
  const endY = -800 + index * 25;

  for (let i = 0; i <= segments; i++) {
    const progress = i / segments;
    const eased = 1 - (1 - progress) ** 2;

    const baseX = startX + (endX - startX) * eased;
    const baseY = startY + (endY - startY) * eased;

    const amplitudeFactor = 1 - eased * 0.3;
    const wave1 =
      Math.sin(progress * Math.PI * 3 + phase) *
      (baseAmplitude * 0.7 * amplitudeFactor);
    const wave2 =
      Math.cos(progress * Math.PI * 4 + phase) *
      (baseAmplitude * 0.3 * amplitudeFactor);
    const wave3 =
      Math.sin(progress * Math.PI * 2 + phase) *
      (baseAmplitude * 0.2 * amplitudeFactor);

    points.push({
      x: baseX * position,
      y: baseY + wave1 + wave2 + wave3,
    });
  }

  const pathCommands = points.map((point: Point, i: number) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prevPoint = points[i - 1];
    const tension = 0.4;
    const cp1x = prevPoint.x + (point.x - prevPoint.x) * tension;
    const cp1y = prevPoint.y;
    const cp2x = prevPoint.x + (point.x - prevPoint.x) * (1 - tension);
    const cp2y = point.y;
    return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
  });

  return pathCommands.join(' ');
}

const generateUniqueId = (prefix: string): string =>
  `${prefix}-${Math.random().toString(36).substring(2, 11)}`;

const FloatingPaths = memo(function FloatingPaths({
  position,
}: {
  position: number;
}) {
  const primaryPaths: PathData[] = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: generateUniqueId('primary'),
        d: generateAestheticPath(i, position, 'primary'),
        opacity: 0.12 + i * 0.015,
        width: 4 + i * 0.3,
        duration: 25,
        delay: 0,
      })),
    [position]
  );

  const secondaryPaths: PathData[] = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: generateUniqueId('secondary'),
        d: generateAestheticPath(i, position, 'secondary'),
        opacity: 0.1 + i * 0.012,
        width: 3 + i * 0.25,
        duration: 20,
        delay: 0,
      })),
    [position]
  );

  const accentPaths: PathData[] = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: generateUniqueId('accent'),
        d: generateAestheticPath(i, position, 'accent'),
        opacity: 0.06 + i * 0.01,
        width: 2 + i * 0.2,
        duration: 15,
        delay: 0,
      })),
    [position]
  );

  const sharedAnimationProps = {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 1 },
      scale: { duration: 1 },
    },
  };

  return (
    <div className="hero-bg-paths__paths" aria-hidden="true">
      <svg
        className="hero-bg-paths__svg"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="-2400 -800 4800 1600"
      >
        <title>Background Paths</title>
        <defs>
          <linearGradient
            id="heroPathsGradient"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Full-width overlay inside the hero section */}
        <g className="hero-bg-paths__group hero-bg-paths__group--primary">
          {primaryPaths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="url(#heroPathsGradient)"
              strokeLinecap="round"
              strokeWidth={path.width}
              style={{ opacity: path.opacity }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                ...sharedAnimationProps,
                y: [0, -15, 0],
              }}
              transition={{
                ...sharedAnimationProps.transition,
                y: {
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  repeatType: 'reverse',
                },
              }}
            />
          ))}
        </g>

        <g
          className="hero-bg-paths__group hero-bg-paths__group--secondary"
          style={{ opacity: 0.8 }}
        >
          {secondaryPaths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="url(#heroPathsGradient)"
              strokeLinecap="round"
              strokeWidth={path.width}
              style={{ opacity: path.opacity }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                ...sharedAnimationProps,
                y: [0, -10, 0],
              }}
              transition={{
                ...sharedAnimationProps.transition,
                y: {
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  repeatType: 'reverse',
                },
              }}
            />
          ))}
        </g>

        <g
          className="hero-bg-paths__group hero-bg-paths__group--accent"
          style={{ opacity: 0.6 }}
        >
          {accentPaths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="url(#heroPathsGradient)"
              strokeLinecap="round"
              strokeWidth={path.width}
              style={{ opacity: path.opacity }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                ...sharedAnimationProps,
                y: [0, -5, 0],
              }}
              transition={{
                ...sharedAnimationProps.transition,
                y: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  repeatType: 'reverse',
                },
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
});

export const BackgroundPaths = memo(function BackgroundPaths({
  position = 1,
}: {
  position?: number;
}) {
  return <FloatingPaths position={position} />;
});
