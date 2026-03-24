import { motion } from 'motion/react';
import { Button, CtaBorderWrap } from '../components';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';
import { WHATSAPP_URL } from '../constants';

export function CTAFinal() {
  const { openScheduleModal } = useScheduleMeeting();
  return (
    <div className="section__inner cta-final__inner">
      <div className="cta-final__orb cta-final__orb--blue" aria-hidden="true" />
      <div className="cta-final__orb cta-final__orb--purple" aria-hidden="true" />

      <motion.p
        className="cta-final__eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        — Agenda tu llamada
      </motion.p>

      <motion.h2
        className="section__title cta-final__title"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        ¿Listo para que lo construyamos para ti?
      </motion.h2>

      <motion.p
        className="section__subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      >
        Agenda una llamada de 30 minutos. Sin costo. Sin compromiso. Solo cuéntanos sobre tu negocio y te decimos
        exactamente qué construiríamos para ti.
      </motion.p>

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
            className="btn--hero-primary"
            onClick={() => openScheduleModal('Agendar llamada gratuita')}
          >
            Agendar mi llamada gratuita →
          </Button>
        </CtaBorderWrap>
        <Button href={WHATSAPP_URL} variant="secondary" target="_blank" rel="noopener noreferrer">
          Escribir por WhatsApp →
        </Button>
      </motion.div>

      <motion.p
        className="hero__microcopy"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Contratos anuales. Configuración incluida. Operación mensual gestionada por nosotros.
      </motion.p>
    </div>
  );
}
