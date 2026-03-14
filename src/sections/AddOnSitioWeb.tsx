import { motion } from 'motion/react';
import { Button, Card } from '../components';
import {
  Sparkles,
  LayoutDashboard,
  Bot,
  Workflow,
  Magnet,
  ShoppingBag,
} from 'lucide-react';

const FEATURES = [
  {
    title: 'Creación completa del sitio web',
    description: 'Diseñamos la estructura, navegación y mensajes clave para que tu sitio convierta desde el día uno.',
    icon: Sparkles,
  },
  {
    title: 'Diseño de páginas del negocio',
    description: 'Home, servicios, contacto y páginas clave adaptadas al tipo de negocio, marca y estilo.',
    icon: LayoutDashboard,
  },
  {
    title: 'Integración del empleado digital',
    description: 'Conectamos tu AI directamente en el sitio para responder y guiar a tus visitantes en tiempo real.',
    icon: Bot,
  },
  {
    title: 'Conexión con tus automatizaciones',
    description: 'Enlazamos formularios, chats y eventos del sitio con tus automatizaciones de seguimiento y ventas.',
    icon: Workflow,
  },
  {
    title: 'Captura de leads optimizada',
    description: 'Opt-ins y formularios optimizados para que cada visita tenga una forma clara de dejar sus datos.',
    icon: Magnet,
  },
  {
    title: 'Sitio listo para vender',
    description: 'Lanzamos un sitio rápido, seguro y listo para enviar tráfico desde campañas y canales orgánicos.',
    icon: ShoppingBag,
  },
];

export function AddOnSitioWeb() {
  return (
    <section className="section__inner addon-section__inner">
      {/* Static gradient — no JS animation loop */}
      <div className="addon-section__bg" aria-hidden="true" />

      <div className="addon-section__grid">
        {/* Left: text + features */}
        <div>
          <motion.h2
            className="section__title mb-3"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Construimos tu sitio web con IA
          </motion.h2>
          <motion.p
            className="section__subtitle"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
          >
            También puedes agregar a cualquier plan la creación de tu sitio web con IA — para que no solo automatices
            conversaciones, sino también tu presencia digital.
          </motion.p>

          {/* Feature cards — reuse site card system, no backdrop-blur per card */}
          <motion.div
            className="addon-section__features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
          >
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Card className="card--glass-light addon-feature-card">
                    <div className="addon-feature-card__icon">
                      <Icon size={17} strokeWidth={1.9} />
                    </div>
                    <h3 className="card__title addon-feature-card__title">
                      {index + 1}. {feature.title}
                    </h3>
                    <p className="card__text">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Right: website UI mockup */}
        <motion.div
          className="addon-section__mockup"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
        >
          <div className="addon-mockup__shell">
            <div className="addon-mockup__inner">
              <div className="addon-mockup__bar">
                <span className="addon-mockup__dot addon-mockup__dot--green" />
                <span className="addon-mockup__dot addon-mockup__dot--amber" />
                <span className="addon-mockup__dot addon-mockup__dot--rose" />
                <span className="addon-mockup__url" />
              </div>
              <div className="addon-mockup__body">
                <div className="addon-mockup__lines">
                  <div className="addon-mockup__line addon-mockup__line--short" />
                  <div className="addon-mockup__line addon-mockup__line--long" />
                </div>
                <div className="addon-mockup__blocks">
                  <div className="addon-mockup__block addon-mockup__block--indigo" />
                  <div className="addon-mockup__block addon-mockup__block--sky" />
                  <div className="addon-mockup__block addon-mockup__block--purple" />
                  <div className="addon-mockup__line addon-mockup__line--full" />
                  <div className="addon-mockup__line addon-mockup__line--med" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA — separate grid item so it can be ordered after mockup on mobile */}
        <motion.div
          className="addon-section__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >
          <p className="addon-section__cta-note addon-section__cta-note--above">
            ¿Ya tienes website? No hay problema — nuestros planes de automatización funcionan con cualquier sitio existente.
          </p>
          <Button href="#pricing" variant="primary" className="btn--pulse">
            Quiero website + automatización →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
