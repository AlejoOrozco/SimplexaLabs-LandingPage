import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ShimmerTextProps {
  text: string;
  className?: string;
}

/**
 * Shimmer text — animated gradient sweep across text.
 */
export function ShimmerText({ text, className }: ShimmerTextProps) {
  return (
    <motion.span
      animate={{
        backgroundPosition: ['200% center', '-200% center'],
      }}
      className={cn(
        'inline-block bg-[length:200%_100%] bg-clip-text font-bold text-transparent',
        'bg-gradient-to-r from-[#f4f6ff] via-[#22d3ee] to-[#a5b4fc]',
        className
      )}
      transition={{
        duration: 2.5,
        ease: 'linear',
        repeat: Number.POSITIVE_INFINITY,
      }}
    >
      {text}
    </motion.span>
  );
}
