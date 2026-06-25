import type { Stat } from "@/components/minimal/ui/StatCard"; 
import type { Plan } from "@/components/minimal/ui/PlanCard"; 
import type { Service } from "@/components/minimal/ui/ServiceCard"; 


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