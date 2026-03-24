import { motion } from 'motion/react';
import { WHATSAPP_URL } from '@/constants/contact';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';
import { Button } from '../components';

const SPOTS_TOTAL = 4;
const SPOTS_TAKEN = 0;
const SPOTS_LEFT = SPOTS_TOTAL - SPOTS_TAKEN;

const INCLUDES = [
  'Sistema completo (sitio web + IA + automatizaciones)',
  '37% de descuento en el plan Growth',
  'Acompañamiento directo con los fundadores',
  'Precio bloqueado de por vida mientras seas cliente',
];

export function ProgramaFundador() {
  const { openScheduleModal } = useScheduleMeeting();
  return (
    <div className="section__inner programa-fundador__inner">
      <motion.span
        className="programa-fundador__badge"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Programa Fundador
      </motion.span>

      <motion.h2
        className="section__title programa-fundador__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        Programa Fundador — Solo 4 cupos
      </motion.h2>
      <motion.p
        className="section__subtitle programa-fundador__lead"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        Estamos en nuestra etapa de lanzamiento y buscamos 4 negocios que quieran construir esto con nosotros a precio
        especial, a cambio de ser nuestros primeros casos de éxito.
      </motion.p>

      <motion.p
        className="programa-fundador__includes-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Incluye:
      </motion.p>
      <motion.ul
        className="programa-fundador__includes-list"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {INCLUDES.map((line) => (
          <motion.li
            key={line}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
          >
            ✦ {line}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="programa-fundador__spots"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div
          className="programa-fundador__spots-bar"
          role="img"
          aria-label={`${SPOTS_TAKEN} de ${SPOTS_TOTAL} cupos tomados`}
        >
          <span
            className="programa-fundador__spots-fill"
            style={{ width: `${(SPOTS_TAKEN / SPOTS_TOTAL) * 100}%` }}
          />
        </div>
        <p className="programa-fundador__spots-text">
          Solo quedan {SPOTS_LEFT} cupos disponibles.
        </p>
      </motion.div>

      <motion.div
        className="programa-fundador__cta"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <Button variant="primary" className="btn--hero-primary" onClick={() => openScheduleModal('Programa Fundador')}>
          Quiero uno de los cupos fundadores →
        </Button>
        <p className="programa-fundador__cta-note">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            ¿Tienes preguntas? Escríbenos directamente por WhatsApp →
          </a>
        </p>
      </motion.div>
    </div>
  );
}
