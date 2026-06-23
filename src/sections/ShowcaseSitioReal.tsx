import { useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button, Reveal } from '../components';
import { useScrollParallax } from '@/hooks';
import { EASE_OUT_EXPO } from '@/lib/motion';
import imgVistaTelefono from '../assets/TactilesPunto30/1.png';
import imgCapasAnimacion from '../assets/TactilesPunto30/2.png';

export function ShowcaseSitioReal() {
  const leftRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLElement>(null);
  const leftY = useScrollParallax(leftRef, { distance: 26 });
  const rightY = useScrollParallax(rightRef, { distance: -26 });

  return (
    <div className="section__inner showcase-web__inner">
      <Reveal direction="up">
        <p className="showcase-web__eyebrow">Mismo sitio · Dos miradas</p>
        <h2 className="section__title showcase-web__title">
          Una sola web: primero la experiencia, luego cómo se anima por dentro
        </h2>
        <p className="section__subtitle showcase-web__lead">
          En{' '}
          <a
            href="https://tactilespunto30.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="showcase-web__brand-link"
          >
            <strong>Táctiles Punto 30</strong>
          </a>{' '}
          las dos imágenes son <strong>la misma página</strong>: la primera muestra cómo se ve en el{' '}
          <strong>teléfono</strong>, como la vive el visitante. La segunda{' '}
          <strong>desglosa el escenario en capas y componentes</strong> para que se entienda la{' '}
          <strong>animación 3D</strong> y el recorrido visual — no es un antes y un después, es mostrar el producto y
          después <strong>cómo cobra vida</strong> el diseño.
        </p>
      </Reveal>

      <div className="showcase-web__compare" role="group" aria-label="Vista móvil y desglose animado del mismo sitio web">
        <motion.figure
          ref={leftRef}
          className="showcase-web__frame"
          style={{ y: leftY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
        >
          <figcaption className="showcase-web__label showcase-web__label--view">Optimizado para conversiones</figcaption>
          <div className="showcase-web__img-wrap">
            <img
              src={imgVistaTelefono}
              alt="Vista del sitio web de Táctiles Punto 30 en formato móvil"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="showcase-web__micro">La experiencia tal como la ve el usuario: una sola pantalla, clara y directa.</p>
        </motion.figure>

        <div className="showcase-web__arrow" aria-hidden="true">
          <span className="showcase-web__arrow-text showcase-web__arrow-text--desktop">Mismo sitio</span>
          <ArrowRight className="showcase-web__arrow-icon showcase-web__arrow-icon--desktop" strokeWidth={2.5} />
          <ArrowDown className="showcase-web__arrow-icon showcase-web__arrow-icon--mobile" strokeWidth={2.5} />
          <span className="showcase-web__arrow-text showcase-web__arrow-text--mobile">Mismo sitio</span>
        </div>

        <motion.figure
          ref={rightRef}
          className="showcase-web__frame"
          style={{ y: rightY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
        >
          <figcaption className="showcase-web__label showcase-web__label--layers">Capas y animación 3D</figcaption>
          <div className="showcase-web__img-wrap">
            <img
              src={imgCapasAnimacion}
              alt="Desglose en componentes del mismo sitio web con animación 3D para Táctiles Punto 30"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="showcase-web__micro">
            Las mismas piezas, separadas: se ve cómo se construye el movimiento y la profundidad de la página.
          </p>
        </motion.figure>
      </div>

      <Reveal direction="up" className="showcase-web__cta">
        <p className="showcase-web__cta-copy">
          ¿Quieres un sitio que se vea bien en móvil <strong>y</strong> pueda contar una historia con animación? El plan{' '}
          <strong>Solo Sitio Web</strong> incluye diseño, páginas clave y entrega en días — sin que tú toques código.
        </p>
        <Button variant="primary" className="btn--hero-primary showcase-web__btn" href="#plan-sitio-web">
          Ver plan Solo Sitio Web y precio →
        </Button>
      </Reveal>
    </div>
  );
}
