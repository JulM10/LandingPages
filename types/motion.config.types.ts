import type { Stat } from "@/components/motion/ui/StatCard"; 
import type { Plan } from "@/components/motion/ui/PlanCard"; 
import type { Service } from "@/components/motion/ui/ServiceCard"; 

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
    mail:string;
    telefono:string;
    dropdownlabel?: string;
    dropdownOptions?: string[];
    cta: CtaButton;
    ctasubtitle?: string
  };
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

export interface MotionConfig { // Motion
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

export interface Testimonios { // Compartido: Motion, SaaS
  eyebrow?: string;
  title: string;
  columnas: {
    testimonio: string;
    name: string;
    description: string;
  }[]
}


export interface TickerClientesConfig { // Motion
  companies: { name: string; logo: string }[];
}