export function ComoFunciona() {
  const steps = [
    { num: 1, title: 'Conectamos tus canales', detail: 'WhatsApp, Instagram o tu sitio web.' },
    { num: 2, title: 'Configuramos tu negocio', detail: 'Entrenamos el agente con tus servicios, preguntas frecuentes, tono y procesos.' },
    { num: 3, title: 'Activamos automatizaciones', detail: 'Respuesta, captura de leads, seguimiento, ventas y citas.' },
    { num: 4, title: 'Empiezas a operar 24/7', detail: 'Tu negocio atiende más rápido y con menos carga manual.' },
  ];

  return (
    <div className="section__inner">
      <h2 className="section__title">Implementarlo es más fácil de lo que crees</h2>
      <ol className="como-funciona__steps">
        {steps.map((step) => (
          <li key={step.num} className="como-funciona__step">
            <span className="como-funciona__num">Paso {step.num}</span>
            <strong className="como-funciona__title">— {step.title}</strong>
            <span className="como-funciona__detail">{step.detail}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
