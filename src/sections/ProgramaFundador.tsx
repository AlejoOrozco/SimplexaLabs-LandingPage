import { motion } from 'motion/react';
import { WHATSAPP_URL } from '@/constants/contact';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';
import { Button } from '../components';
import { Lock, DollarSign, Zap, Handshake } from 'lucide-react';

const SPOTS_TAKEN = 3;
const SPOTS_TOTAL = 5;
const SPOTS_LEFT = SPOTS_TOTAL - SPOTS_TAKEN;

const BENEFITS = [
  {
    icon: Lock,
    title: 'Precio bloqueado para siempre',
    text: 'El precio que pagas hoy no sube nunca — mientras mantengas tu contrato activo.',
  },
  {
    icon: DollarSign,
    title: 'Hasta 40% de descuento vs precio regular',
    text: 'Acceso al sistema completo a una fracción del precio que pagará el mercado.',
  },
  {
    icon: Zap,
    title: 'Onboarding prioritario',
    text: 'Eres de los primeros — te configuramos primero y con atención directa.',
  },
  {
    icon: Handshake,
    title: 'Acceso directo al equipo fundador',
    text: 'Hablas directamente con nosotros. No con soporte. Con los creadores.',
  },
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
        SOLO 5 SPOTS DISPONIBLES
      </motion.span>

      <motion.h2
        className="section__title programa-fundador__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        Sé uno de los 5 Clientes Fundadores de SimpLexaLabs.
      </motion.h2>
      <motion.p
        className="section__subtitle programa-fundador__lead"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        Estamos en fase de lanzamiento en Colombia. Para nuestros primeros 5 clientes, tenemos una oferta especial que no volverá a existir: precio de fundador bloqueado de por vida.
      </motion.p>

      <motion.div
        className="programa-fundador__benefits"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {BENEFITS.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className="programa-fundador__benefit"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              <span className="programa-fundador__benefit-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={2} />
              </span>
              <div>
                <h3 className="programa-fundador__benefit-title">{item.title}</h3>
                <p className="programa-fundador__benefit-text">{item.text}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="programa-fundador__spots"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="programa-fundador__spots-bar" role="img" aria-label={`${SPOTS_TAKEN} de ${SPOTS_TOTAL} spots tomados`}>
          <span
            className="programa-fundador__spots-fill"
            style={{ width: `${(SPOTS_TAKEN / SPOTS_TOTAL) * 100}%` }}
          />
        </div>
        <p className="programa-fundador__spots-text">
          Spots tomados: {SPOTS_TAKEN} de {SPOTS_TOTAL} · Quedan: {SPOTS_LEFT} spots
        </p>
      </motion.div>

      <motion.div
        className="programa-fundador__table-wrap"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <table className="programa-fundador__table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Fundador</th>
              <th>Regular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Starter SIN web</td>
              <td>$127/mes</td>
              <td>$197/mes</td>
            </tr>
            <tr>
              <td>Growth SIN web</td>
              <td>$187/mes</td>
              <td>$297/mes</td>
            </tr>
            <tr>
              <td>Growth CON web</td>
              <td>$377/mes + $497 setup</td>
              <td>$597/mes + $797 setup</td>
            </tr>
            <tr>
              <td>Pro CON web</td>
              <td>$627/mes + $797 setup</td>
              <td>$997/mes + $1,297 setup</td>
            </tr>
          </tbody>
        </table>
      </motion.div>

      <motion.p
        className="programa-fundador__legal"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Contrato anual de 12 meses con renovación. Precio bloqueado vigente mientras el contrato esté activo. A cambio: testimonio en video al mes 1 (2 min desde el celular). 50% del setup al firmar · 50% al entregar.
      </motion.p>

      <motion.div
        className="programa-fundador__cta"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <Button variant="primary" className="btn--hero-primary" onClick={() => openScheduleModal('Programa Fundador')}>
          Quiero ser Cliente Fundador →
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
