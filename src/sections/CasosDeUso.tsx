import { Card } from '../components';

const CASOS = [
  {
    title: 'Clínicas y estéticas',
    text: 'Responde dudas, filtra interesados y mueve más conversaciones hacia valoración o cita.',
  },
  {
    title: 'Odontología',
    text: 'Automatiza preguntas frecuentes, captura leads y mejora seguimiento a pacientes potenciales.',
  },
  {
    title: 'Gimnasios y fitness',
    text: 'Atiende consultas sobre planes, horarios, mensualidades y seguimiento comercial.',
  },
  {
    title: 'Agencias y servicios',
    text: 'Filtra leads, responde más rápido y evita perder oportunidades por falta de seguimiento.',
  },
  {
    title: 'Negocios locales',
    text: 'Convierte WhatsApp en un canal más ordenado, rápido y rentable.',
  },
];

export function CasosDeUso() {
  return (
    <div className="section__inner">
      <h2 className="section__title">
        Hecho para negocios que viven de responder rápido y vender mejor
      </h2>
      <div className="card-grid card-grid--2">
        {CASOS.map((item, i) => (
          <Card key={i} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}
