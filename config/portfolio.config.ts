import type { PortfolioPageConfig } from '@/types/portfolio.config.types';

// OPCIÓN 1: Hero con IMAGEN (Activa)
export const portfolioConfig: PortfolioPageConfig = {
  header: {
    logo: '/icon.png',
    siteName: 'Deep Weel Service',
    navLinks: [
      { label: 'Proyectos', href: '#gallery' },
      { label: 'Servicios', href: '#services' },
      { label: 'Proceso', href: '#process' },
      { label: 'Clientes', href: '#testimonials' },
    ],
    cta: { label: 'Contactar', href: '#contact' },
  },

  hero: {
    background: {
      type: 'image',
      src: '/hero-bg.webp',
    },
    overlayOpacity: 0.5,
    eyebrow: 'Nuestro Portafolio',
    title: 'Proyectos que transforman espacios',
    subtitle: 'Experiencia en construcción y diseño de espacios comerciales',
    cta: { label: 'Ver Proyectos', href: '#gallery' },
  },

  services: {
    eyebrow: 'Servicios',
    title: 'Lo que hacemos',
    subtitle: 'Ofrecemos soluciones integrales para tus proyectos',
    services: [
      {
        image: '/gallery-1.png',
        title: 'Construcción',
        description: 'Proyectos de construcción con estándares de calidad internacionales',
      },
      {
        image: '/gallery-2.png',
        title: 'Diseño Interior',
        description: 'Diseño de espacios funcionales y estéticos',
      },
      {
        image: '/gallery-3.png',
        title: 'Planificación',
        description: 'Planificación y gestión de proyectos desde el inicio',
      },
    ],
  },

  gallery: {
    eyebrow: 'Galería',
    title: 'Nuestros Proyectos',
    subtitle: 'Visualiza trabajos realizados',
    projects: [
      {
        id: '1',
        image: '/project-1.webp',
        title: 'Centro Comercial',
        category: 'Comercial',
        year: 2023,
      },
      {
        id: '2',
        image: '/project-2.webp',
        title: 'Oficinas Corporativas',
        category: 'Corporativo',
        year: 2023,
      },
      {
        id: '3',
        image: '/project-3.webp',
        title: 'Residencial Premium',
        category: 'Residencial',
        year: 2022,
      },
    ],
    columns: 3,
  },

  process: {
    eyebrow: 'Proceso',
    title: 'Cómo trabajamos',
    subtitle: 'Metodología probada en cada proyecto',
    steps: [
      {
        number: 1,
        title: 'Consulta',
        description: 'Entendemos tus necesidades',
        image: '/workflow-step-1.png',
      },
      {
        number: 2,
        title: 'Diseño',
        description: 'Creamos la solución perfecta',
        image: '/workflow-step-2.png',
      },
      {
        number: 3,
        title: 'Ejecución',
        description: 'Implementamos con excelencia',
        image: '/workflow-step-3.png',
      },
      {
        number: 4,
        title: 'Entrega',
        description: 'Proyecto completado a tiempo',
        image: '/workflow-step-1.png',
      },
    ],
  },

  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Clientes Satisfechos',
    subtitle: 'Experiencias reales de nuestros proyectos',
    testimonials: [
      {
        clientName: 'Juan Rodríguez',
        clientRole: 'Director',
        clientCompany: 'Empresa XYZ',
        testimonialText: 'Excelente trabajo, muy profesionales y atentos a los detalles.',
        rating: 5,
        projectCategory: 'Comercial',
      },
      {
        clientName: 'María García',
        clientRole: 'Propietaria',
        clientCompany: 'Inmobiliaria ABC',
        testimonialText: 'Superaron nuestras expectativas en diseño y ejecución.',
        rating: 5,
        projectCategory: 'Residencial',
      },
    ],
  },

  cta: {
    eyebrow: 'Contacto',
    title: '¿Listo para tu próximo proyecto?',
    subtitle: 'Contáctanos para una consulta sin compromiso',
    cta: { label: 'Solicitar Consulta', href: '#contact' },
  },

  footer: {
    siteName: 'Studio Arquitectónico',
    tagline: 'Transformamos espacios en experiencias',
    contacts: [
      { label: '+54 11 XXXX-XXXX', href: 'tel:+5411XXXXXXXX', icon: '📞' },
      { label: 'info@studio.com', href: 'mailto:info@studio.com', icon: '✉️' },
      { label: 'Buenos Aires, Argentina', href: '#', icon: '📍' },
    ],
    socialLinks: [
      { platform: 'Instagram', href: '#', icon: '📷' },
      { platform: 'Facebook', href: '#', icon: 'f' },
      { platform: 'LinkedIn', href: '#', icon: 'in' },
    ],
  },

  stickyBar: {
    cta: { label: 'Contactar Ahora', href: '#contact' },
    subtitle: 'Consulta gratuita sin compromiso',
  },
};

// ============ OPCIÓN 2: Hero con VIDEO ============
// Descomenta esto y comenta la opción anterior para usar video
// export const portfolioConfig: PortfolioPageConfig = {
//   ...portfolioConfig,
//   hero: {
//     background: {
//       type: 'video',
//       src: '/videos/portfolio-hero.mp4',
//       videoType: 'mp4',
//     },
//     overlayOpacity: 0.5,
//     eyebrow: 'Nuestro Portafolio',
//     title: 'Proyectos que transforman espacios',
//     subtitle: 'Experiencia en construcción y diseño de espacios comerciales',
//     cta: { label: 'Ver Proyectos', href: '#gallery' },
//   },
// };
