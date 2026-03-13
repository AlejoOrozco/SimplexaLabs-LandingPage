import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '@/constants/faq';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="section__inner faq-section__inner">
      <motion.div
        className="faq__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <span className="faq__eyebrow">FAQ</span>
        <h2 className="section__title">Preguntas frecuentes</h2>
        <p className="section__subtitle">
          Todo lo que necesitas saber antes de empezar.
        </p>
      </motion.div>

      <motion.dl
        className="faq__accordion"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
      >
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              className={`faq__item${isOpen ? ' faq__item--open' : ''}`}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <dt>
                <button
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <motion.path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ originX: '50%', originY: '50%' }}
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.dd
                    className="faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <p>{item.a}</p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.dl>
    </div>
  );
}
