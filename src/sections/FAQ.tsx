const FAQ_ITEMS = [
  {
    q: '¿Esto reemplaza a mi equipo?',
    a: 'No. Automatiza la parte repetitiva para que tu equipo se enfoque en los casos de mayor valor.',
  },
  {
    q: '¿Y si mis clientes quieren hablar con una persona?',
    a: 'Perfecto. El empleado digital puede hacer el primer filtro y luego pasar la conversación al humano cuando sea necesario.',
  },
  {
    q: '¿Eso funciona para mi negocio?',
    a: 'Si recibes leads, preguntas, citas o ventas por WhatsApp, Instagram o web, sí hay una oportunidad clara para automatizar.',
  },
  {
    q: '¿Es difícil implementarlo?',
    a: 'No. Nosotros configuramos la lógica base para que empieces rápido y sin enredarte.',
  },
  {
    q: '¿Por qué no simplemente usar otro chatbot?',
    a: 'Porque SimpLexaLabs está posicionado como un empleado digital con IA: responde, califica, hace seguimiento y ayuda a vender. No solo "contesta mensajes".',
  },
];

export function FAQ() {
  return (
    <div className="section__inner">
      <h2 className="section__title">Preguntas frecuentes</h2>
      <dl className="faq-list">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i} className="faq-item">
            <dt className="faq-item__q">{item.q}</dt>
            <dd className="faq-item__a">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
