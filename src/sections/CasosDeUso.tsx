import { motion } from 'motion/react';

const CASOS = [
  {
    emoji: '🏥',
    title: 'Clínicas y estéticas',
    text: 'Responde dudas, filtra interesados y mueve más conversaciones hacia valoración o cita.',
    roi: '+3× más citas agendadas',
    accent: 'caso--violet',
    wide: true,
  },
  {
    emoji: '🦷',
    title: 'Odontología',
    text: 'Automatiza preguntas frecuentes, captura leads y mejora seguimiento a pacientes potenciales.',
    roi: '−70% mensajes sin respuesta',
    accent: 'caso--blue',
    wide: false,
  },
  {
    emoji: '💪',
    title: 'Gimnasios y fitness',
    text: 'Atiende consultas sobre planes, horarios, mensualidades y seguimiento comercial.',
    roi: '+40% conversión de leads',
    accent: 'caso--teal',
    wide: false,
  },
  {
    emoji: '🏢',
    title: 'Agencias y servicios',
    text: 'Filtra leads, responde más rápido y evita perder oportunidades por falta de seguimiento.',
    roi: '−60% tiempo en consultas',
    accent: 'caso--indigo',
    wide: false,
  },
  {
    emoji: '📍',
    title: 'Negocios locales',
    text: 'Convierte WhatsApp en un canal más ordenado, rápido y rentable para cerrar más ventas.',
    roi: 'Atención 24/7 sin costo extra',
    accent: 'caso--purple',
    wide: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export function CasosDeUso() {
  return (
    <div className="section__inner casos-section__inner">
      {/* Header */}
      <motion.div
        className="casos__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <span className="casos__eyebrow">Para quién es</span>
        <h2 className="section__title">
          Hecho para negocios que viven de responder rápido y vender mejor
        </h2>
        <p className="section__subtitle">
          Si tu negocio recibe mensajes, genera leads o agenda citas, ya tienes una oportunidad para automatizar.
        </p>
      </motion.div>

      {/* Bento grid */}
      <motion.div
        className="casos__bento"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
      >
        {/* Row 1: wide (2/3) + narrow (1/3) */}
        <motion.div variants={cardVariants} className={`caso-card ${CASOS[0].accent} caso-card--wide`}>
          <CasoCardInner item={CASOS[0]} />
        </motion.div>
        <motion.div variants={cardVariants} className={`caso-card ${CASOS[1].accent}`}>
          <CasoCardInner item={CASOS[1]} />
        </motion.div>

        {/* Row 2: three equal cards */}
        {CASOS.slice(2, 5).map((item) => (
          <motion.div key={item.title} variants={cardVariants} className={`caso-card ${item.accent}`}>
            <CasoCardInner item={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function CasoCardInner({ item }: { item: typeof CASOS[number] }) {
  return (
    <>
      <div className="caso-card__top">
        <span className="caso-card__icon" aria-hidden="true">{item.emoji}</span>
        <span className="caso-card__roi">{item.roi}</span>
      </div>
      <h3 className="caso-card__title">{item.title}</h3>
      <p className="caso-card__text">{item.text}</p>
    </>
  );
}
