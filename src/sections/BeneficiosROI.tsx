import { Card } from '../components';

export function BeneficiosROI() {
  const items = [
    { title: '⏱️ Recupera tiempo', text: 'Reduce horas perdidas respondiendo lo mismo una y otra vez.' },
    { title: '⚡ Responde más rápido', text: 'Atiende clientes en el momento en que tienen intención de compra.' },
    { title: '📈 Mejora conversiones', text: 'Más seguimiento y mejor atención significan más oportunidades cerradas.' },
    { title: '🚀 Escala sin aumentar nómina', text: 'Atiende más conversaciones sin contratar otra persona de inmediato.' },
    { title: '🎯 Organiza mejor la operación', text: 'Menos caos en canales digitales y más control sobre la atención comercial.' },
  ];

  return (
    <div className="section__inner">
      <h2 className="section__title">Lo que realmente ganas con SimpLexaLabs</h2>
      <p className="section__subtitle">
        No es solo automatización. Es más tiempo, más velocidad y más capacidad operativa para vender.
      </p>
      <div className="card-grid card-grid--2">
        {items.map((item, i) => (
          <Card key={i} title={item.title} text={item.text} className="card--glass-light" />
        ))}
      </div>
    </div>
  );
}
