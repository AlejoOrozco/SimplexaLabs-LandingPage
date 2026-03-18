import { motion } from 'motion/react';
import { Button, BackgroundPaths, CtaBorderWrap } from '../components';
import { useScheduleMeeting } from '@/contexts/ScheduleMeetingContext';

const STATS = [
  { value: '24/7', label: 'Atención sin parar' },
  { value: '3×', label: 'Más leads calificados' },
  { value: '−80%', label: 'Tiempo en tareas repetitivas' },
  { value: '+40%', label: 'Conversión de leads' },
];

const BENEFITS = [
  'Responde clientes al instante en WhatsApp, Instagram y tu sitio web',
  'Captura leads, agenda citas y hace seguimiento automático',
  'Filtra leads automáticamente — solo hablas con quien está listo para comprar',
  'Genera tu contenido de redes cada mes sin que hagas nada',
  'Escala con más orden y menos esfuerzo manual',
];

export function Hero() {
  const { openScheduleModal } = useScheduleMeeting();
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
        <p className="hero__fundador-alert" role="status">
          Prueba el Plan Fundador de SimpLexaLabs — Solo 2 plazas disponibles. Precio bloqueado de por vida.
        </p>
        <h1 className="hero__title">
          Empleados Digitales con IA que responden, venden y hacen seguimiento 24/7
        </h1>
        <p className="hero__subheadline">
          Sin contratar más personal. Sin perder otro mensaje. Sin trabajar de más.
        </p>
        <div className="hero__benefits" aria-label="Beneficios clave">
          <div className="hero__benefits-fade">
            <div className="hero__benefits-track" role="text">
              {BENEFITS.map((t, i) => (
                <span key={`a-${i}`} className="hero__benefit">
                  <span className="hero__benefit-check" aria-hidden="true">✓</span>
                  {t}
                </span>
              ))}
              <span className="hero__benefits-gap" aria-hidden="true" />
              {BENEFITS.map((t, i) => (
                <span key={`b-${i}`} className="hero__benefit" aria-hidden="true">
                  <span className="hero__benefit-check">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="hero__ctas">
          <CtaBorderWrap>
            <Button
              variant="primary"
              className="btn--hero-primary btn--marquee-overflow"
              onClick={() => openScheduleModal('Prueba gratis')}
            >
              <span className="btn__marquee" aria-label="Empieza tu prueba gratis — 7 días · Sin tarjeta de crédito">
                <span className="btn__marquee-track">
                  <span className="btn__marquee-item">Empieza tu prueba gratis — 7 días · Sin tarjeta de crédito</span>
                  <span className="btn__marquee-item" aria-hidden="true">Empieza tu prueba gratis — 7 días · Sin tarjeta de crédito</span>
                </span>
              </span>
            </Button>
          </CtaBorderWrap>
          <Button variant="secondary" onClick={() => openScheduleModal()}>
            Ver planes
          </Button>
        </div>
        <p className="hero__microcopy">
          7 días gratis · Sin tarjeta de crédito
        </p>
      </div>
    </>
  );
}
