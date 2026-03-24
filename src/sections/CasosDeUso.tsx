import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';
import { cn } from '@/lib/utils';

type IndustryTab = {
  id: string;
  label: string;
  emoji: string;
  question: string;
  intro?: string;
  features?: string[];
  result?: string;
  extraNote?: string;
  cta?: string;
  /** Tab 5: link to packages instead of long form */
  packagesOnly?: boolean;
};

const INDUSTRIES: IndustryTab[] = [
  {
    id: 'clinicas',
    label: 'Clínicas y Consultorios',
    emoji: '🏥',
    question: '¿Cuántos pacientes pierdes cada semana porque nadie contestó a tiempo?',
    features: [
      'Agente de IA que responde WhatsApp e Instagram 24/7, agenda citas y responde preguntas frecuentes',
      'Sitio web con tus servicios, precios y botón de agendamiento directo',
      'Contenido mensual para redes (procedimientos, tips de salud, testimonios)',
      'Recordatorios automáticos de citas para reducir inasistencias',
    ],
    result: 'Resultado típico: Más citas agendadas, menos trabajo manual para tu recepcionista.',
    cta: 'Quiero esto para mi clínica',
  },
  {
    id: 'gimnasios',
    label: 'Gimnasios y Centros Fitness',
    emoji: '💪',
    question: '¿Tus leads preguntan por membresías y nadie les responde a tiempo?',
    features: [
      'Agente de IA que responde consultas de membresías, horarios y clases de prueba a cualquier hora',
      'Sitio web con tus planes, instalaciones y formulario de inscripción',
      'Contenido mensual para redes (transformaciones, rutinas, promociones)',
      'Automatización de seguimiento para leads que no cerraron en el primer contacto',
    ],
    result: 'Resultado típico: Más inscripciones sin contratar más personal de ventas.',
    cta: 'Quiero esto para mi gimnasio',
  },
  {
    id: 'pymes',
    label: 'Negocios y PYMEs',
    emoji: '🏢',
    question: '¿Tu negocio no tiene presencia digital o la que tiene no genera clientes?',
    features: [
      'Sitio web profesional que posiciona tu negocio en Google y convierte visitantes en contactos',
      'Sistema de respuesta automática para WhatsApp e Instagram',
      'Contenido mensual para redes que muestra lo que haces y genera confianza',
      'Automatizaciones de seguimiento para que ningún lead se pierda',
    ],
    result:
      'Resultado típico: Presencia digital completa, funcionando, sin depender de agencias que desaparecen.',
    cta: 'Quiero esto para mi negocio',
  },
  {
    id: 'ecommerce',
    label: 'Tiendas Online y E-Commerce',
    emoji: '🛒',
    question: '¿Cuántas ventas estás perdiendo porque nadie hace seguimiento automático?',
    features: [
      'Tienda online profesional con hasta 50 productos cargados (Shopify o WooCommerce)',
      'Agente de IA que responde preguntas de productos, disponibilidad y pedidos por WhatsApp 24/7',
      'Automatización de recuperación de carritos abandonados',
      'Contenido mensual de productos para redes (promociones, lanzamientos, temporadas)',
      'Reporte mensual de ventas y conversaciones',
    ],
    result:
      'Resultado típico: Más ventas completadas, menos preguntas sin responder, seguimiento automático que cierra lo que quedó pendiente.',
    cta: 'Quiero esto para mi tienda online',
  },
  {
    id: 'ya-tienes',
    label: '¿Ya tienes algo?',
    emoji: '✨',
    question: '¿Ya tienes algo pero necesitas más?',
    intro:
      'No empezamos desde cero si ya tienes una parte funcionando. Elige solo lo que te falta — lo integramos con lo que ya tienes.',
    packagesOnly: true,
  },
];

export function CasosDeUso() {
  const [active, setActive] = useState(0);
  const { openScheduleModal } = useScheduleMeeting();
  const tab = INDUSTRIES[active];

  return (
    <div className="section__inner casos-section__inner casos-section__inner--tabs">
      <motion.div
        className="casos__header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <span className="casos__eyebrow">Para tu industria</span>
        <h2 className="section__title">Hecho para tu tipo de negocio</h2>
        <p className="section__subtitle">
          Elige tu sector y revisa qué construimos y operamos para ti.
        </p>
      </motion.div>

      <div className="pricing-tabs industria-tabs" role="tablist" aria-label="Industria">
        {INDUSTRIES.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`industria-tab-${item.id}`}
            aria-selected={active === i}
            aria-controls="industria-panel"
            className={cn('pricing-tab', active === i && 'pricing-tab--active')}
            onClick={() => setActive(i)}
          >
            <span className="industria-tab__emoji" aria-hidden="true">
              {item.emoji}
            </span>{' '}
            {item.label}
          </button>
        ))}
      </div>

      <motion.div
        id="industria-panel"
        role="tabpanel"
        aria-labelledby={`industria-tab-${tab.id}`}
        className="industria-panel card card--glass"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        key={tab.id}
      >
        <h3 className="industria-panel__question">{tab.question}</h3>

        {tab.packagesOnly ? (
          <>
            <p className="industria-panel__intro">{tab.intro}</p>
            <Button variant="primary" href="#pricing" className="industria-panel__cta">
              Ver paquetes modulares →
            </Button>
          </>
        ) : (
          <>
            <p className="industria-panel__sub">Lo que construimos para ti:</p>
            <ul className="industria-panel__list">
              {tab.features?.map((f) => (
                <li key={f}>→ {f}</li>
              ))}
            </ul>
            {tab.result && <p className="industria-panel__result">{tab.result}</p>}
            {tab.extraNote && <p className="industria-panel__extra">{tab.extraNote}</p>}
            <Button
              type="button"
              variant="primary"
              className="industria-panel__cta"
              onClick={() => openScheduleModal(tab.cta ?? tab.label)}
            >
              {tab.cta} →
            </Button>
          </>
        )}
      </motion.div>
    </div>
  );
}
