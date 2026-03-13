import { Card } from '../components';
import { FlowField } from '../components/FlowField';

export function QueHaceEmpleado() {
  const items = [
    {
      title: 'Responde clientes automáticamente',
      text: 'Atiende preguntas frecuentes, horarios, precios, servicios y dudas iniciales sin depender del equipo.',
    },
    {
      title: 'Califica leads',
      text: 'Filtra prospectos para identificar quién sí está listo para comprar, agendar o recibir seguimiento.',
    },
    {
      title: 'Agenda citas',
      text: 'Ayuda a organizar solicitudes de valoración, consulta, demostración o llamada comercial.',
    },
    {
      title: 'Hace seguimiento automático',
      text: 'Retoma conversaciones, recuerda información y evita que oportunidades valiosas se enfríen.',
    },
    {
      title: 'Vende productos o servicios',
      text: 'Guía al cliente durante la conversación para aumentar conversiones y acelerar decisiones.',
    },
    {
      title: 'Trabaja en varios canales',
      text: 'Funciona en WhatsApp, Instagram y tu página web desde una misma lógica de atención.',
    },
  ];

  return (
    <>
      <FlowField
        hueStart={210}
        hueRange={160}
        count={1200}
        bg="8, 12, 28"
      />
      <div className="section__inner que-hace__content">
        <h2 className="section__title que-hace__title">
          Todo lo que tu empleado digital puede hacer por tu empresa
        </h2>
        <div className="card-grid card-grid--2">
          {items.map((item, i) => (
            <Card key={i} title={item.title} text={item.text} className="card--glass" />
          ))}
        </div>
      </div>
    </>
  );
}
