import { useEffect, useRef } from 'react';

const steps = [
  {
    num: 1,
    title: 'Hablamos',
    detail: 'Nos cuentas sobre tu negocio en una llamada de 30 minutos. Sin tecnicismos.',
  },
  {
    num: 2,
    title: 'Lo construimos',
    detail:
      'En 14 días tu sitio web, agente de IA y sistema de automatización están listos y funcionando.',
  },
  {
    num: 3,
    title: 'Tú creces, nosotros operamos',
    detail: 'Nosotros gestionamos el sistema mes a mes. Tú solo ves los resultados.',
  },
];

/** Centers for three dots along the 1200-wide SVG */
const DOT_CX = [300, 600, 900];
const DOT_Y = 120;

const STAGGER = 0.18;

export function ComoFunciona() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(SVGGElement | null)[]>([]);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = stepsRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        steps.forEach((_, i) => {
          const delay = `${i * STAGGER}s`;

          const num = numRefs.current[i];
          if (num) {
            num.style.animationDelay = delay;
            num.classList.add('steps-item--animate');
          }

          const dot = dotRefs.current[i];
          if (dot) {
            dot.style.animationDelay = delay;
            dot.classList.add('steps-item--animate');
          }

          const card = cardRefs.current[i];
          if (card) {
            card.style.animationDelay = delay;
            card.classList.add('steps-item--animate');
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section__inner steps-section__inner">
      <h2 className="section__title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Así de simple funciona
      </h2>

      <div className="steps steps--three" ref={stepsRef}>
        <div className="steps__bgnums" aria-hidden="true">
          {steps.map((s, i) => (
            <span
              key={s.num}
              className="steps__bgnum"
              ref={(el) => {
                numRefs.current[i] = el;
              }}
            >
              {s.num}
            </span>
          ))}
        </div>

        <svg
          className="steps__svg"
          viewBox="0 0 1200 160"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="stepsLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          <line
            x1={0}
            y1={DOT_Y}
            x2={1200}
            y2={DOT_Y}
            stroke="url(#stepsLineGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {DOT_CX.map((cx, i) => (
            <g
              key={cx}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              className="steps__dot"
            >
              <circle cx={cx} cy={DOT_Y} r={18} fill="url(#stepsLineGrad)" />
              <polyline
                points={`${cx - 7},${DOT_Y} ${cx - 2},${DOT_Y + 6} ${cx + 8},${DOT_Y - 6}`}
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>
          ))}
        </svg>

        <div className="steps__cards">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="steps__card card--glass"
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <span className="steps__card-badge" aria-hidden="true">
                {step.num}
              </span>
              <h3 className="steps__card-title">{step.title}</h3>
              <p className="steps__card-detail">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
