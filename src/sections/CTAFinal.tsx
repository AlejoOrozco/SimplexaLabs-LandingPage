import { motion } from 'motion/react';
import { Button, CtaBorderWrap } from '../components';

const STATS = [
  { value: '24/7', label: 'Atención sin parar' },
  { value: '3×', label: 'Más leads calificados' },
  { value: '−80%', label: 'Tiempo en tareas repetitivas' },
];

export function CTAFinal() {
  return (
    <div className="section__inner cta-final__inner">
      {/* Glow orbs */}
      <div className="cta-final__orb cta-final__orb--blue" aria-hidden="true" />
      <div className="cta-final__orb cta-final__orb--purple" aria-hidden="true" />

      {/* Stats row */}
      <motion.div
        className="cta-final__stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            className="cta-final__stat"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          >
            <span className="cta-final__stat-value">{s.value}</span>
            <span className="cta-final__stat-label">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="section__title cta-final__title"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Deja de perder tiempo, leads y ventas por operar manualmente
      </motion.h2>

      <motion.p
        className="section__subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      >
        Empieza hoy con SimpLexaLabs y descubre cómo un empleado digital con IA
        puede trabajar 24/7 para tu negocio.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="hero__ctas"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
      >
        <CtaBorderWrap>
          <Button href="#pricing" variant="primary" className="btn--hero-primary btn--marquee-overflow">
            <span className="btn__marquee" aria-label="Comienza tu prueba gratis">
              <span className="btn__marquee-track">
                <span className="btn__marquee-item">Comienza tu prueba gratis</span>
                <span className="btn__marquee-item" aria-hidden="true">Comienza tu prueba gratis</span>
              </span>
            </span>
          </Button>
        </CtaBorderWrap>
        <Button href="mailto:hola@simplexalabs.com" variant="secondary">
          Hablar con ventas
        </Button>
      </motion.div>

      {/* Microcopy */}
      <motion.p
        className="hero__microcopy"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        7 días gratis · Sin tarjeta de crédito · Cancela cuando quieras
      </motion.p>
    </div>
  );
}
