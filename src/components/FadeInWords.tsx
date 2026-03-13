/**
 * FadeInWords — reveals text word-by-word when scrolled into view.
 * Uses motion's whileInView so the animation only fires once on first scroll.
 */
import { motion } from 'motion/react';

interface FadeInWordsProps {
  text: string;
  className?: string;
  /** base delay in seconds before the first word starts */
  startDelay?: number;
  /** stagger between each word in seconds */
  stagger?: number;
}

export function FadeInWords({
  text,
  className,
  startDelay = 0,
  stagger = 0.06,
}: FadeInWordsProps) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.35,
            delay: startDelay + i * stagger,
            ease: 'easeOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
