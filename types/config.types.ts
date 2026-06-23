import type { Stat } from "@/components/minimal/ui/StatCard";
import type { Plan } from "@/components/minimal/ui/PlanCard";
import type { Service } from "@/components/minimal/ui/ServiceCard";

export interface CtaButton {
  label: string;
  href: string;
}

export interface RoadmapStep {
  number: string;
  week: string;
  name: string;
  description?: string;
}

export interface RoadmapConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps?: RoadmapStep[];
  cta: CtaButton;
  secondaryCta?: CtaButton;
  disclaimer?: string
}

export interface HeroConfig {
  badge?: string;
  headline: string;
  highlight?: string;
  subtitle: string;
  cta: CtaButton;
  secondaryCta?: CtaButton;
  stats?: Stat[];
}

export interface PlansConfig {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: Plan[]
}

export interface ServicesConfig {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: Service[]
}

export interface HeaderConfig {
  logoSrc?: string;
  nombre?: string;
  links?: { label: string; href: string }[];
  textButton: { label: string; href: string };
}

export interface FooterConfig {
  nombre?: string;
  contacts?: { label: string; href: string }[];
  isologoSrc?: string;
}

export interface WhatsAppConfig {
  message: string;
  number: string;
}

/** Configuración completa de un cliente. Cada campo es una sección de la landing. */
export interface ClientConfig {
  /** Barra de navegación superior. */
  header: HeaderConfig;
  /** Sección principal arriba de todo. */
  hero: HeroConfig;
  /** servicios que ofrece el cliente, con título, subtítulo y lista de servicios. */
  services: ServicesConfig;
  /** Configuración del botón de WhatsApp. */
  whatsapp: WhatsAppConfig;
  /** Sección de planes o precios, con título, subtítulo y lista de planes. */
  plans: PlansConfig;
  /** Pie de página, con nombre del cliente, contactos y isologo. */
  footer: FooterConfig;
  /** Llamado a la acción final, con etiqueta y enlace. roadmap de un trabajo de la empresa */
  roadmapconfig: RoadmapConfig;
}

export interface QuienesSomosConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  stat: { title: string; description: string }[];
  people: {
    name: string,
    imagesrc: string,
    subtitle: string,
    description: string,
    bullets: string[]
  }[];
}

export interface PlansConfigConversion {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: {
    name: string;
    title: string;
    platform: string;
    features: string[];
    featured?: boolean;
  }[]
}

export interface ConversionHeroConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  bullets: string[];
  form: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    empresa?: string;
    contacto?: string;
    dropdownlabel?: string;
    dropdownOptions?: string[];
    cta: CtaButton;
    ctasubtitle?: string
  };
}

export interface BenefitsConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: {
    icon: string;
    title: string;
    description: string
  }[]
}

export interface NosEligenConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  company: {
    logoSrc: string;
    name: string;
    description: string;
    instagram: string
  }[];
}

export interface FAQConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  questions: {
    question: string;
    answer: string
  }[];
}

export interface DiferenciasConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  columnas: {
    title: string;
    puntos: string[];
    destacado?: boolean;
  }[]
}

export interface AgendaConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta: CtaButton;
  secondaryCta?: CtaButton;
  whatsappNumber?: string;
}
export interface MetricasConfig {
  stats: Stat[];
}

export interface ConversionConfig {
  header: HeaderConfig;
  hero: ConversionHeroConfig;
  metricas: MetricasConfig;
  quienesSomos: QuienesSomosConfig;
  benefits: BenefitsConfig;
  diferencia: DiferenciasConfig;
  plans: PlansConfig;
  nosEligen: NosEligenConfig;
  roadmapConfig: RoadmapConfig;
  faq: FAQConfig;
  agendaUnaLlamada: AgendaConfig;
  whatsapp: WhatsAppConfig;
  footer: FooterConfig;

}

export interface MotionConfig {
  header: HeaderConfig;
  hero: ConversionHeroConfig;
  metricas: MetricasConfig;
  ticker: TickerClientesConfig;
  nosEligen: NosEligenConfig;
  quienesSomos: QuienesSomosConfig;
  resultadosTestimonios: Testimonios;
  services: ServicesConfig;
  whatsapp: WhatsAppConfig;
  plans: PlansConfig;
  footer: FooterConfig;
  roadmapconfig: RoadmapConfig;
  faq: FAQConfig;
  agendaUnaLlamada: AgendaConfig;
}


export interface Testimonios{
  eyebrow?: string;
  title: string;
  columnas: {
    testimonio: string;
    name: string;
    description: string;
  }[]
}
export interface TickerClientesConfig {
  companies: { name: string; logo: string }[];
}

// ===== SaaS Template Types =====

export interface ProblemSolutionConfig {
  eyebrow?: string;
  title: string;
  problems: {
    title: string;
    description: string;
    icon: string;
  }[];
  solution: string;
}

export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  image?: string;
  imageAlt?: string;
}

export interface WorkflowConfig {
  eyebrow?: string;
  title: string;
  steps?: WorkflowStep[];
}

export interface IntegrationsConfig {
  eyebrow?: string;
  title: string;
  logos: string[];
}

export interface TrustConfig {
  badges: {
    icon: string;
    label: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
}

export interface SaasDemoConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  mediaUrl: string;
  mediaType?: 'video' | 'image';
  alt?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export interface SaasGalleryConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  images: GalleryImage[];
}

export interface SaaSConfig {
  header: HeaderConfig;
  hero: HeroConfig;
  problemSolution: ProblemSolutionConfig;
  features: ServicesConfig;
  workflow: WorkflowConfig;
  integrations: IntegrationsConfig;
  testimonials: Testimonios;
  plans: PlansConfig;
  trust: TrustConfig;
  faq: FAQConfig;
  cta: AgendaConfig;
  footer: FooterConfig;
}