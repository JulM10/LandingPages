import type { Stat } from "@/components/conversion/ui/StatCard"; 

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
  eyebrow: string;
  title: string;
  subtitle: string;
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
  eyebrow: string;
  title: string;
  subtitle: string;
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
  eyebrow: string;
  title: string;
  subtitle: string;
  items: {
    icon: string;
    title: string;
    description: string
  }[]
}

export interface NosEligenConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  company: {
    logoSrc: string;
    name: string;
    description: string;
    instagram: string
  }[];
}

export interface FAQConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  questions: {
    question: string;
    answer: string
  }[];
}

export interface DiferenciasConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  columnas: {
    title: string;
    puntos: string[];
    destacado?: boolean;
  }[]
}

export interface AgendaConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: CtaButton;
  secondaryCta: CtaButton;
  whatsappNumber: string;
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
  plans: PlansConfigConversion;
  nosEligen: NosEligenConfig;
  roadmapConfig: RoadmapConfig;
  faq: FAQConfig;
  agendaUnaLlamada: AgendaConfig;
  whatsapp: WhatsAppConfig;
  footer: FooterConfig;
}
