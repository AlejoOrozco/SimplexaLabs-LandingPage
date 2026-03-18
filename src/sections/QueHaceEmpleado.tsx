import { Card } from '../components';
import { FlowField } from '../components/FlowField';

const CARDS = [
  {
    title: 'Responde clientes automáticamente',
    text: 'Atiende preguntas frecuentes, horarios, precios, servicios y dudas iniciales sin depender del equipo.',
  },
  {
    title: 'Agenda citas',
    text: 'Ayuda a organizar solicitudes de valoración, consulta, demostración o llamada comercial.',
  },
  {
    title: 'Vende productos o servicios',
    text: 'Guía al cliente durante la conversación para aumentar conversiones y acelerar decisiones.',
  },
  {
    title: 'Trabaja en varios canales',
    text: 'Funciona en WhatsApp, Instagram y tu página web desde una misma lógica de atención.',
  },
  {
    title: 'Califica leads',
    text: 'Filtra prospectos para identificar quién está listo para comprar, agendar o recibir seguimiento.',
  },
  {
    title: 'Hace seguimiento automático',
    text: 'Retoma conversaciones, recuerda información y evita que oportunidades valiosas se enfríen.',
  },
  {
    title: 'Organiza todos tus leads en un CRM',
    text: 'Cada conversación queda registrada, etiquetada y en un pipeline visual. Sabes exactamente en qué etapa está cada prospecto y quién necesita atención hoy.',
  },
  {
    title: 'Crea tu contenido de marketing',
    text: 'Generamos posts, ads, reels y emails con IA cada mes adaptados a tu marca y voz. Listo para publicar. Sin que dediques horas a pensar qué publicar.',
  },
];

export function QueHaceEmpleado() {
  return (
    <>
      <FlowField
        hueStart={210}
        hueRange={160}
        count={1200}
        bg="15, 23, 42"
      />
      <div className="section__inner que-hace__content">
        <h2 className="section__title que-hace__title">
          Todo lo que tu empleado digital puede hacer por tu empresa
        </h2>
        <div className="card-grid card-grid--2">
          {CARDS.map((item, i) => (
            <Card key={i} title={item.title} text={item.text} className="card--glass" />
          ))}
        </div>
      </div>
    </>
  );
}
