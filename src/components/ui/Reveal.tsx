import { type ReactNode, type ReactElement } from 'react';
import { motion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import { DURATION, EASE_OUT_EXPO, STAGGER } from '@/lib/motion';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

const OFFSET = 28;

function getOffset(direction: RevealDirection): { x: number; y: number } {
  if (direction === 'up') return { x: 0, y: OFFSET };
  if (direction === 'down') return { x: 0, y: -OFFSET };
  if (direction === 'left') return { x: OFFSET, y: 0 };
  if (direction === 'right') return { x: -OFFSET, y: 0 };
  return { x: 0, y: 0 };
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  blur?: boolean;
  amount?: number;
  once?: boolean;
}

/**
 * Scroll-triggered fade/slide/blur reveal. Reduced-motion users get an instant
 * fade only (Motion neutralizes transforms automatically).
 */
export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  blur = true,
  amount = 0.3,
  once = true,
}: RevealProps): ReactElement {
  const { x, y } = getOffset(direction);

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x, y, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration: DURATION.slow, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER.base } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: OFFSET, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: DURATION.base, ease: EASE_OUT_EXPO },
  },
};

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  amount?: number;
  once?: boolean;
}

/** Container that staggers direct `RevealItem` children into view. */
export function RevealGroup({
  children,
  className,
  amount = 0.25,
  once = true,
}: RevealGroupProps): ReactElement {
  return (
    <motion.div
      className={cn(className)}
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

export function RevealItem({ children, className }: RevealItemProps): ReactElement {
  return (
    <motion.div className={cn(className)} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
