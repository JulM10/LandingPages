import type { Stat } from "@/components/saas/ui/StatCard"; 
import type { Plan } from "@/components/saas/ui/PlanCard"; 
import type { Service } from "@/components/saas/ui/ServiceCard"; 

export interface CtaButton {
  label: string;
  href: string;
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

export interface Testimonios { 
  eyebrow?: string;
  title: string;
  columnas: {
    testimonio: string;
    name: string;
    description: string;
  }[]
}
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