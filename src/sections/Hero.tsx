import { useEffect, useRef, useState, type ReactElement } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'motion/react';
import { Button, BackgroundPaths, CtaBorderWrap } from '../components';
import { WHATSAPP_URL } from '@/constants/contact';

interface Stat {
  readonly value: string;
  readonly label: string;
}

const STATS: readonly Stat[] = [
  { value: '24/7', label: 'Atención sin parar' },
  { value: '3×', label: 'Más leads calificados' },
  { value: '−80%', label: 'Tiempo en tareas repetitivas' },
  { value: '+40%', label: 'Conversión de leads' },
];

interface ParsedStat {
  readonly prefix: string;
  readonly target: number;
  readonly suffix: string;
}

/** Only simple numeric stats should count up — not ratios like 24/7. */
function parseStat(value: string): ParsedStat | null {
  if (value.includes('/')) return null;

  const match = value.match(/^([+−-]?)(\d+)(.*)$/);
  if (!match) return null;

  const sign = match[1];
  const target = Number(match[2]);
  const suffix = match[3];

  return {
    prefix: sign,
    target: sign === '−' || sign === '-' ? -target : target,
    suffix,
  };
}

const COUNT_UP_DURATION_S = 1.3;

function StatValue({ value }: { value: string }): ReactElement {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const parsed = parseStat(value);
  const canAnimate = parsed !== null && !prefersReducedMotion;
  const [display, setDisplay] = useState<string>(value);

  useEffect(() => {
    if (!canAnimate || !isInView || parsed === null) return;

    const { prefix, target, suffix } = parsed;
    const controls = animate(0, target, {
      duration: COUNT_UP_DURATION_S,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        const rounded = Math.round(latest);
        const magnitude = Math.abs(rounded);
        setDisplay(`${prefix}${magnitude}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [canAnimate, isInView, parsed?.prefix, parsed?.target, parsed?.suffix, value]);

  return (
    <span ref={ref} className="hero__stat-value">
      {display}
    </span>
  );
}

export function Hero(): ReactElement {
  return (
    <>
      <BackgroundPaths />
      <div className="section__inner hero__content">
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Lo construimos <span className="hero__title-accent">todo</span> para ti.
        </motion.h1>
        <motion.p
          className="hero__subheadline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          Sitio web profesional, marketing y automatizaciones que trabajan 24/7 — para
          clínicas, gimnasios, tiendas online y negocios que quieren crecer sin complicarse.
        </motion.p>

        <motion.div
          className="hero__stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              className="hero__stat"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              <StatValue value={s.value} />
              <span className="hero__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <CtaBorderWrap>
            <Button
              variant="primary"
              className="btn--hero-primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Quiero que lo construyan para mí — abre WhatsApp"
            >
              Quiero que lo construyan →
            </Button>
          </CtaBorderWrap>
          <Button variant="secondary" href="#how-it-works">
            Ver cómo funciona
          </Button>
        </motion.div>
        <p className="hero__microcopy">
          Sin contratos complicados · Setup en 14 días · Tú no tocas nada
        </p>
      </div>
    </>
  );
}
