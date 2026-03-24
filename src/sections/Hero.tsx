import { motion } from 'motion/react';
import { Button, BackgroundPaths, CtaBorderWrap } from '../components';
import { WHATSAPP_URL } from '@/constants/contact';

const STATS = [
  { value: '24/7', label: 'Atención sin parar' },
  { value: '3×', label: 'Más leads calificados' },
  { value: '−80%', label: 'Tiempo en tareas repetitivas' },
  { value: '+40%', label: 'Conversión de leads' },
];

export function Hero() {
  return (
    <>
      <BackgroundPaths />
      <div className="section__inner hero__content">
        <motion.div
          className="hero__stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              className="hero__stat"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
        <h1 className="hero__title">Lo construimos todo para ti.</h1>
        <p className="hero__subheadline">
          Sitio web profesional, marketing y automatizaciones que trabajan 24/7 — para
          clínicas, gimnasios, tiendas online y negocios que quieren crecer sin complicarse.
        </p>
        <div className="hero__ctas">
          <CtaBorderWrap>
            <Button
              variant="primary"
              className="btn--hero-primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero que lo construyan para mí →
            </Button>
          </CtaBorderWrap>
          <Button variant="secondary" href="#how-it-works">
            Ver cómo funciona
          </Button>
        </div>
        <p className="hero__microcopy">
          Sin contratos complicados · Setup en 14 días · Tú no tocas nada
        </p>
      </div>
    </>
  );
}
