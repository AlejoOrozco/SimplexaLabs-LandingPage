import { lazy, Suspense } from 'react';
import { Header, Footer, SocialProofToast, SalesAssistantWidget } from './components';
import { LazySection } from './sections/LazySection';

const Hero = lazy(() => import('./sections/Hero').then((m) => ({ default: m.Hero })));
const Problema = lazy(() => import('./sections/Problema').then((m) => ({ default: m.Problema })));
const Solucion = lazy(() => import('./sections/Solucion').then((m) => ({ default: m.Solucion })));
const QueHaceEmpleado = lazy(() => import('./sections/QueHaceEmpleado').then((m) => ({ default: m.QueHaceEmpleado })));
const BeneficiosROI = lazy(() => import('./sections/BeneficiosROI').then((m) => ({ default: m.BeneficiosROI })));
const ComoFunciona = lazy(() => import('./sections/ComoFunciona').then((m) => ({ default: m.ComoFunciona })));
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
    <>
      <Header />
      <main>
        <LazySection id="hero" placeholderMinHeight={420} className="section hero">
          <Suspense fallback={<SectionFallback />}>
            <Hero />
          </Suspense>
        </LazySection>

        <LazySection id="problema" placeholderMinHeight={320} className="section section--alt">
          <Suspense fallback={<SectionFallback />}>
            <Problema />
          </Suspense>
        </LazySection>

        <LazySection id="solucion" placeholderMinHeight={260} className="section">
          <Suspense fallback={<SectionFallback />}>
            <Solucion />
          </Suspense>
        </LazySection>

        <LazySection id="que-hace-empleado" placeholderMinHeight={380} className="section section--alt">
          <Suspense fallback={<SectionFallback />}>
            <QueHaceEmpleado />
          </Suspense>
        </LazySection>

        <LazySection id="beneficios" placeholderMinHeight={360} className="section">
          <Suspense fallback={<SectionFallback />}>
            <BeneficiosROI />
          </Suspense>
        </LazySection>

        <LazySection id="como-funciona" placeholderMinHeight={320} className="section section--alt">
          <Suspense fallback={<SectionFallback />}>
            <ComoFunciona />
          </Suspense>
        </LazySection>

        <LazySection id="pricing" placeholderMinHeight={400} className="section">
          <Suspense fallback={<SectionFallback />}>
            <Pricing />
          </Suspense>
        </LazySection>

        <LazySection id="addon-sitio" placeholderMinHeight={320} className="section section--alt">
          <Suspense fallback={<SectionFallback />}>
            <AddOnSitioWeb />
          </Suspense>
        </LazySection>

        <LazySection id="casos-de-uso" placeholderMinHeight={340} className="section">
          <Suspense fallback={<SectionFallback />}>
            <CasosDeUso />
          </Suspense>
        </LazySection>

        <LazySection id="testimonios" placeholderMinHeight={400} className="section section--alt">
          <Suspense fallback={<SectionFallback />}>
            <Testimonios />
          </Suspense>
        </LazySection>

        <LazySection id="faq" placeholderMinHeight={360} className="section section--alt">
          <Suspense fallback={<SectionFallback />}>
            <FAQ />
          </Suspense>
        </LazySection>

        <LazySection id="cta-final" placeholderMinHeight={280} className="section cta-final">
          <Suspense fallback={<SectionFallback />}>
            <CTAFinal />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
      <SocialProofToast />
      <SalesAssistantWidget />
    </>
  );
}

export default App;
