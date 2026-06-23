import { Zap } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { Reveal } from '../components/ui';
import { EASE_OUT_EXPO } from '@/lib/motion';

/**
 * Mock de conversación WhatsApp + IA — muestra qué hace el agente (responder, agendar, CRM).
 */
const chatVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.6, delayChildren: 0.3 } },
};

const userMsgVariants: Variants = {
  hidden: { opacity: 0, x: 24, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: EASE_OUT_EXPO } },
};

const aiMsgVariants: Variants = {
  hidden: { opacity: 0, x: -24, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: EASE_OUT_EXPO } },
};

const crmVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

export function AgentDemo() {
  return (
    <div className="section__inner agent-demo__inner">
      <Reveal direction="up">
        <p className="agent-demo__eyebrow">Tu agente en acción</p>
        <h2 className="section__title agent-demo__heading">Así atiende tu empleado digital en WhatsApp</h2>
        <p className="section__subtitle agent-demo__lead">
          Ejemplo tipo clínica: el visitante escribe, el agente responde al instante, confirma la cita y deja el lead
          registrado en el CRM — sin que tu recepción tenga que estar pegada al teléfono.
        </p>
      </Reveal>

      <motion.div
        className="agent-demo__window"
        role="region"
        aria-label="Ejemplo de conversación de WhatsApp con asistente de IA"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        <div className="agent-demo__titlebar">
          <span className="agent-demo__traffic" aria-hidden="true">
            <span className="agent-demo__traffic-dot agent-demo__traffic-dot--red" />
            <span className="agent-demo__traffic-dot agent-demo__traffic-dot--yellow" />
            <span className="agent-demo__traffic-dot agent-demo__traffic-dot--green" />
          </span>
          <span className="agent-demo__titlebar-label">WhatsApp — Tu Clínica</span>
        </div>

        <motion.div
          className="agent-demo__chat"
          variants={chatVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className="agent-demo__msg agent-demo__msg--user" variants={userMsgVariants}>
            <div className="agent-demo__bubble agent-demo__bubble--user">
              <p>Hola! Quiero saber si tienen cita disponible para mañana a las 3pm 🙏</p>
            </div>
            <div className="agent-demo__avatar agent-demo__avatar--user" aria-hidden="true">
              P
            </div>
          </motion.div>

          <motion.div className="agent-demo__msg agent-demo__msg--ai" variants={aiMsgVariants}>
            <div className="agent-demo__avatar agent-demo__avatar--ai" aria-hidden="true">
              AI
            </div>
            <div className="agent-demo__bubble agent-demo__bubble--ai">
              <p>
                ¡Hola! Soy el asistente de Clínica Sonrisa 😊 Claro, tenemos disponibilidad mañana a las 3:00pm con la
                Dra. Martínez. ¿Confirmo la cita a tu nombre?
              </p>
              <p className="agent-demo__meta">
                <Zap className="agent-demo__meta-icon" size={14} aria-hidden />
                <span>Respondió en 4 seg</span>
              </p>
            </div>
          </motion.div>

          <motion.div className="agent-demo__msg agent-demo__msg--user" variants={userMsgVariants}>
            <div className="agent-demo__bubble agent-demo__bubble--user">
              <p>Sí, a nombre de Patricia López</p>
            </div>
            <div className="agent-demo__avatar agent-demo__avatar--user" aria-hidden="true">
              P
            </div>
          </motion.div>

          <motion.div
            className="agent-demo__msg agent-demo__msg--ai"
            variants={aiMsgVariants}
          >
            <div className="agent-demo__avatar agent-demo__avatar--ai" aria-hidden="true">
              AI
            </div>
            <div className="agent-demo__bubble agent-demo__bubble--ai agent-demo__bubble--success">
              <p>
                ✅ ¡Perfecto, Patricia! Tu cita está confirmada: <strong>mañana a las 3:00pm</strong>. Te enviaré un
                recordatorio 2 horas antes. ¿Necesitas indicaciones para llegar?
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="agent-demo__crm"
          variants={crmVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <span className="agent-demo__crm-dot" aria-hidden="true" />
          <span>
            CRM: Nuevo lead capturado — <strong>Patricia López</strong> · Cita confirmada · Pipeline: Agendado
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
