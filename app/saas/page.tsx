import { Header } from '@/components/motion/layout/Header';
import { Hero } from '@/components/saas/sections/Hero';
import { SaasDemo } from '@/components/saas/sections/SaasDemo';
import { Services } from '@/components/motion/sections/Services';
import { SaasPricing } from '@/components/saas/sections/SaasPricing';
import { SaasTestimonials } from '@/components/saas/sections/SaasTestimonials';
import { SaasRoadmap } from '@/components/saas/sections/SaasRoadmap';
import { SaasGallery } from '@/components/saas/sections/SaasGallery';
import { SaasFaq } from '@/components/saas/sections/SaasFaq';
import { Footer } from '@/components/motion/layout/Footer';
import { StickyBar } from '@/components/motion/layout/StickyBar';
import { ProblemSolution } from '@/components/saas/sections/ProblemSolution';
import { Workflow } from '@/components/saas/sections/Workflow';
import { Integrations } from '@/components/saas/sections/Integrations';
import { Trust } from '@/components/saas/sections/Trust';
import { saaExampleConfig } from '@/config/saas.example';

export default function SaaSPage() {
  const config = saaExampleConfig;

  return (
    <>
      <StickyBar cta={{ label: 'Comenzar →', href: '#pricing' }} />

      <Header
        logoSrc={config.header.logoSrc}
        nombre={config.header.nombre}
        links={config.header.links}
        textButton={{ label: 'Comenzar', href: '#pricing' }}
      />

      <Hero
        badge={config.hero.badge}
        headline={config.hero.headline}
        highlight={config.hero.highlight}
        subtitle={config.hero.subtitle}
        cta={{ label: 'Comenzar Prueba Gratis', href: '#pricing' }}
      />

      <SaasDemo
        eyebrow="Visualiza el poder"
        title="Así se ve en acción"
        subtitle="Un vistazo rápido a la interfaz"
        mediaUrl="/saas-demo.png"
        mediaType="image"
      />

      <ProblemSolution
        eyebrow={config.problemSolution.eyebrow}
        title={config.problemSolution.title}
        problems={config.problemSolution.problems}
        solution={config.problemSolution.solution}
      />

      <Services
        eyebrow={config.features.eyebrow}
        title={config.features.title}
        subtitle={config.features.subtitle}
        items={config.features.items}
      />

      <Workflow
        eyebrow={config.workflow.eyebrow}
        title={config.workflow.title}
        steps={config.workflow.steps?.map((step, idx) => ({
          ...step,
          image: [
            '/workflow-step-1.png',
            '/workflow-step-2.png',
            '/workflow-step-3.png',
          ][idx],
          imageAlt: step.title,
        }))}
      />

      <Integrations
        eyebrow={config.integrations.eyebrow}
        title={config.integrations.title}
        logos={config.integrations.logos}
      />

      <SaasGallery
        eyebrow="Galería"
        title="Explora el producto"
        subtitle="Screenshots de la plataforma en acción"
        images={[
          {
            src: '/gallery-1.png',
            alt: 'Analytics Dashboard',
            title: 'Dashboard de Análisis',
          },
          {
            src: '/gallery-2.png',
            alt: 'Workspace',
            title: 'Espacio de Trabajo',
          },
          {
            src: '/gallery-3.png',
            alt: 'Collaboration',
            title: 'Colaboración en Tiempo Real',
          },
        ]}
      />

      <SaasPricing
        eyebrow={config.plans.eyebrow}
        title={config.plans.title}
        subtitle={config.plans.subtitle}
        items={config.plans.items}
      />

      <SaasTestimonials
        eyebrow={config.testimonials.eyebrow}
        title={config.testimonials.title}
        columnas={config.testimonials.columnas}
      />

      <SaasRoadmap
        eyebrow={config.cta.eyebrow}
        title="Próximas Features"
        subtitle="Lo que estamos construyendo"
        steps={[
          {
            number: '1',
            week: 'Semana 1',
            name: 'Lanzamiento',
            description: 'Presenta la primera versión con features core',
          },
          {
            number: '2',
            week: 'Semana 2',
            name: 'Optimización',
            description: 'Mejora performance y experiencia del usuario',
          },
          {
            number: '3',
            week: 'Semana 3',
            name: 'Escalado',
            description: 'Prepara para usuarios en producción',
          },
        ]}
        cta={config.cta.cta}
      />

      <Trust
        badges={config.trust.badges}
        stats={config.trust.stats}
      />

      <SaasFaq
        eyebrow={config.faq.eyebrow}
        title={config.faq.title}
        subtitle={config.faq.subtitle}
        questions={config.faq.questions}
      />

      <Footer
        nombre={config.footer.nombre}
        contacts={config.footer.contacts}
        isologoSrc={config.footer.isologoSrc}
      />
    </>
  );
}
