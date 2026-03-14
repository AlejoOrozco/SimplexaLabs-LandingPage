import { motion, type Variants } from 'motion/react';

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
    emoji: '🏠',
    title: 'Inmobiliarias y constructoras',
    text: 'Califica leads, agenda visitas y hace seguimiento automático para no perder una venta.',
    roi: '+5× leads calificados',
    accent: 'caso--purple',
    wide: false,
  },
  {
    emoji: '🚗',
    title: 'Concesionarios y seguros',
    text: 'Agenda pruebas de manejo, cotizaciones y citas sin que se pierda ningún mensaje.',
    roi: '+50% citas de prueba',
    accent: 'caso--amber',
    wide: false,
  },
  {
    emoji: '🍽️',
    title: 'Restaurantes y food service',
    text: 'Toma reservas, responde horarios y pedidos sin saturar el teléfono ni perder llamadas.',
    roi: '−80% llamadas perdidas',
    accent: 'caso--rose',
    wide: true,
  },
];

const cardVariants: Variants = {
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

        {/* Row 2: four cards */}
        {CASOS.slice(2, 6).map((item) => (
          <motion.div key={item.title} variants={cardVariants} className={`caso-card ${item.accent} ${item.wide ? 'caso-card--wide' : ''}`}>
            <CasoCardInner item={item} />
          </motion.div>
        ))}
        {/* Row 3: last card (Restaurantes) */}
        <motion.div variants={cardVariants} className={`caso-card ${CASOS[6].accent}`}>
          <CasoCardInner item={CASOS[6]} />
        </motion.div>
      </motion.div>
      <p className="casos__footer">
        Atención 24/7 sin costo extra · Para cualquier negocio que reciba mensajes
      </p>
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
