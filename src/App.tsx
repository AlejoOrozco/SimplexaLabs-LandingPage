import { lazy, Suspense } from 'react';
import { ScheduleMeetingProvider } from './contexts/ScheduleMeetingContext';
import { Header, Footer, SocialProofToast, ScheduleMeetingModal } from './components';
import { LazySection } from './sections/LazySection';

const ChatWidget = lazy(() =>
  import('@/features/chat').then((m) => ({ default: m.ChatWidget }))
);
const Hero = lazy(() => import('./sections/Hero').then((m) => ({ default: m.Hero })));
const Problema = lazy(() => import('./sections/Problema').then((m) => ({ default: m.Problema })));
const Solucion = lazy(() => import('./sections/Solucion').then((m) => ({ default: m.Solucion })));
const QueHaceEmpleado = lazy(() => import('./sections/QueHaceEmpleado').then((m) => ({ default: m.QueHaceEmpleado })));
const BeneficiosROI = lazy(() => import('./sections/BeneficiosROI').then((m) => ({ default: m.BeneficiosROI })));
const ComoFunciona = lazy(() => import('./sections/ComoFunciona').then((m) => ({ default: m.ComoFunciona })));
const CrmAutomatizacion = lazy(() => import('./sections/CrmAutomatizacion').then((m) => ({ default: m.CrmAutomatizacion })));
const MarketingContent = lazy(() => import('./sections/MarketingContent').then((m) => ({ default: m.MarketingContent })));
const ProgramaFundador = lazy(() => import('./sections/ProgramaFundador').then((m) => ({ default: m.ProgramaFundador })));
const Pricing = lazy(() => import('./sections/Pricing').then((m) => ({ default: m.Pricing })));
const AddOnSitioWeb = lazy(() => import('./sections/AddOnSitioWeb').then((m) => ({ default: m.AddOnSitioWeb })));
const CasosDeUso = lazy(() => import('./sections/CasosDeUso').then((m) => ({ default: m.CasosDeUso })));
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

        <LazySection id="problema" ariaLabel="El problema" placeholderMinHeight={320} className="section section--gradient-bg">
          <Suspense fallback={<SectionFallback />}>
            <Problema />
          </Suspense>
        </LazySection>

        <LazySection id="solucion" ariaLabel="La solución" placeholderMinHeight={260} className="section section--gradient-bg">
          <Suspense fallback={<SectionFallback />}>
            <Solucion />
          </Suspense>
        </LazySection>

        <LazySection id="que-hace-empleado" ariaLabel="Qué hace el empleado digital" placeholderMinHeight={380} className="section section--gradient-bg">
          <Suspense fallback={<SectionFallback />}>
            <QueHaceEmpleado />
          </Suspense>
        </LazySection>

        <LazySection id="beneficios" ariaLabel="Beneficios" placeholderMinHeight={360} className="section section--gradient-bg">
          <Suspense fallback={<SectionFallback />}>
            <BeneficiosROI />
          </Suspense>
        </LazySection>

        <LazySection id="como-funciona" ariaLabel="Cómo funciona" placeholderMinHeight={320} className="section section--gradient-bg section--alt">
          <Suspense fallback={<SectionFallback />}>
            <ComoFunciona />
          </Suspense>
        </LazySection>

        <LazySection id="crm" ariaLabel="CRM y automatización" placeholderMinHeight={380} className="section section--gradient-bg section--crm">
          <Suspense fallback={<SectionFallback />}>
            <CrmAutomatizacion />
          </Suspense>
        </LazySection>

        <LazySection id="marketing-content" ariaLabel="Contenido de marketing con IA" placeholderMinHeight={380} className="section section--gradient-bg section--alt section--marketing-content">
          <Suspense fallback={<SectionFallback />}>
            <MarketingContent />
          </Suspense>
        </LazySection>

        <LazySection id="programa-fundador" ariaLabel="Programa Fundador" placeholderMinHeight={420} className="section section--gradient-bg section--programa-fundador">
          <Suspense fallback={<SectionFallback />}>
            <ProgramaFundador />
          </Suspense>
        </LazySection>

        <LazySection id="pricing" ariaLabel="Planes y precios" placeholderMinHeight={400} className="section section--gradient-bg">
          <Suspense fallback={<SectionFallback />}>
            <Pricing />
          </Suspense>
        </LazySection>

        <LazySection id="addon-sitio" ariaLabel="Sitio web con IA" placeholderMinHeight={320} className="section section--gradient-bg section--alt">
          <Suspense fallback={<SectionFallback />}>
            <AddOnSitioWeb />
          </Suspense>
        </LazySection>

        <LazySection id="casos-de-uso" ariaLabel="Casos de uso" placeholderMinHeight={340} className="section section--gradient-bg">
          <Suspense fallback={<SectionFallback />}>
            <CasosDeUso />
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

        <LazySection id="cta-final" ariaLabel="Empezar ahora" placeholderMinHeight={280} className="section section--gradient-bg cta-final">
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
