import { Button } from '../components';

export function AddOnSitioWeb() {
  const features = [
    'creación completa del sitio web',
    'diseño de páginas del negocio',
    'integración del empleado digital',
    'conexión con automatizaciones',
    'captura de leads',
    'sitio listo para vender',
  ];

  return (
    <div className="section__inner">
      <h2 className="section__title">Construimos tu sitio web con IA</h2>
      <p className="section__copy">
        También puedes agregar a cualquier plan la creación de tu sitio web con IA para que no solo automatices conversaciones, sino también tu presencia digital.
      </p>
      <h3 className="section__title section__title--sm">Qué incluye</h3>
      <ul className="list--bullets">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="section__copy">
        <strong>Beneficio:</strong> Un sitio web conectado a ventas automatizadas, listo en pocos días.
      </p>
      <Button href="#cta-final" variant="primary">Agregar a mi plan</Button>
    </div>
  );
}
