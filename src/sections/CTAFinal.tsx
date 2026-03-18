import { motion } from 'motion/react';
import { Button, CtaBorderWrap } from '../components';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';
import { WHATSAPP_URL } from '../constants';

export function CTAFinal() {
  const { openScheduleModal } = useScheduleMeeting();
  return (
    <div className="section__inner cta-final__inner">
      {/* Glow orbs */}
      <div className="cta-final__orb cta-final__orb--blue" aria-hidden="true" />
      <div className="cta-final__orb cta-final__orb--purple" aria-hidden="true" />

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
          <Button
            variant="primary"
            className="btn--hero-primary btn--marquee-overflow"
            onClick={() => openScheduleModal('Prueba gratis')}
          >
            <span className="btn__marquee" aria-label="Comienza tu prueba gratis">
              <span className="btn__marquee-track">
                <span className="btn__marquee-item">Comienza tu prueba gratis →</span>
                <span className="btn__marquee-item" aria-hidden="true">Comienza tu prueba gratis →</span>
              </span>
            </span>
          </Button>
        </CtaBorderWrap>
        <Button href={WHATSAPP_URL} variant="secondary" target="_blank" rel="noopener noreferrer">
          Hablar con ventas →
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
