import { lazy, Suspense } from 'react';
import { ScheduleMeetingProvider } from './contexts/ScheduleMeetingContext';
import { Header, Footer, SocialProofToast, ScheduleMeetingModal } from './components';
import { LazySection } from './sections/LazySection';
import { Pricing } from './sections/Pricing';

const ChatWidget = lazy(() =>
  import('@/features/chat').then((m) => ({ default: m.ChatWidget }))
);
const Hero = lazy(() => import('./sections/Hero').then((m) => ({ default: m.Hero })));
const Problema = lazy(() => import('./sections/Problema').then((m) => ({ default: m.Problema })));
const AgentDemo = lazy(() => import('./sections/AgentDemo').then((m) => ({ default: m.AgentDemo })));
const CasosDeUso = lazy(() => import('./sections/CasosDeUso').then((m) => ({ default: m.CasosDeUso })));
const ComoFunciona = lazy(() => import('./sections/ComoFunciona').then((m) => ({ default: m.ComoFunciona })));
const ShowcaseSitioReal = lazy(() =>
  import('./sections/ShowcaseSitioReal').then((m) => ({ default: m.ShowcaseSitioReal }))
);
const ProgramaFundador = lazy(() => import('./sections/ProgramaFundador').then((m) => ({ default: m.ProgramaFundador })));
const Testimonios = lazy(() => import('./sections/Testimonios').then((m) => ({ default: m.Testimonios })));
const FAQ = lazy(() => import('./sections/FAQ').then((m) => ({ default: m.FAQ })));
const CTAFinal = lazy(() => import('./sections/CTAFinal').then((m) => ({ default: m.CTAFinal })));

function SectionFallback() {
  return <div className="lazy-placeholder" style={{ minHeight: 200 }} />;
}

function App() {
  return (
    <ScheduleMeetingProvider>
      <Header />
      <main>
        <LazySection id="hero" ariaLabel="Inicio" placeholderMinHeight={420} className="section section--gradient-bg hero">
          <Suspense fallback={<SectionFallback />}>
            <Hero />
          </Suspense>
        </LazySection>

        <LazySection
          id="problema-solucion"
          ariaLabel="Problema y solución"
          placeholderMinHeight={420}
          className="section section--gradient-bg"
        >
          <Suspense fallback={<SectionFallback />}>
            <Problema />
          </Suspense>
        </LazySection>

        <LazySection
          id="ejemplo-agente"
          ariaLabel="Ejemplo de agente en WhatsApp"
          placeholderMinHeight={520}
          className="section section--gradient-bg section--agent-demo"
        >
          <Suspense fallback={<SectionFallback />}>
            <AgentDemo />
          </Suspense>
        </LazySection>

        <LazySection id="casos-de-uso" ariaLabel="Para tu industria" placeholderMinHeight={420} className="section section--gradient-bg">
          <Suspense fallback={<SectionFallback />}>
            <CasosDeUso />
          </Suspense>
        </LazySection>

        <LazySection id="how-it-works" ariaLabel="Cómo funciona" placeholderMinHeight={360} className="section section--gradient-bg section--alt">
          <Suspense fallback={<SectionFallback />}>
            <ComoFunciona />
          </Suspense>
        </LazySection>

        <LazySection
          id="ejemplo-sitio-web"
          ariaLabel="Ejemplo de sitio web real"
          placeholderMinHeight={520}
          className="section section--gradient-bg"
        >
          <Suspense fallback={<SectionFallback />}>
            <ShowcaseSitioReal />
          </Suspense>
        </LazySection>

        {/* Pricing montado de inicio para que el ancla #plan-sitio-web exista al hacer clic desde el showcase */}
        <section id="pricing" className="section section--gradient-bg" aria-label="Paquetes modulares">
          <Pricing />
        </section>

        <LazySection id="programa-fundador" ariaLabel="Programa Fundador" placeholderMinHeight={420} className="section section--gradient-bg section--programa-fundador">
          <Suspense fallback={<SectionFallback />}>
            <ProgramaFundador />
          </Suspense>
        </LazySection>

        <LazySection id="testimonios" ariaLabel="Testimonios" placeholderMinHeight={400} className="section section--gradient-bg section--alt">
          <Suspense fallback={<SectionFallback />}>
            <Testimonios />
          </Suspense>
        </LazySection>

        <LazySection id="faq" ariaLabel="Preguntas frecuentes" placeholderMinHeight={360} className="section section--gradient-bg">
          <Suspense fallback={<SectionFallback />}>
            <FAQ />
          </Suspense>
        </LazySection>

        <LazySection id="cta-final" ariaLabel="Agendar llamada" placeholderMinHeight={320} className="section section--gradient-bg cta-final">
          <Suspense fallback={<SectionFallback />}>
            <CTAFinal />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
      <SocialProofToast />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
      <ScheduleMeetingModal />
    </ScheduleMeetingProvider>
  );
}

export default App;
