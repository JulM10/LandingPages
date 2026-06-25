/**
 * Portfolio Template Types
 * For visual-heavy service businesses (construction, architecture, design, etc.)
 */

// Hero Section - Image or Video background with overlay
export interface PortfolioHeroConfig {
  background: {
    type: 'image' | 'video';
    src: string; // image URL or video URL
    videoType?: 'mp4' | 'webm' | 'ogg'; // Only for video
  };
  overlayOpacity?: number; // 0.3 - 0.7
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta: {
    label: string;
    href: string;
  };
}

// Service Card - With image, description and details for expansion
export interface PortfolioService {
  image: string;
  title: string;
  description: string;
  details?: string; // Información detallada al expandir
  features?: string[]; // Features/beneficios
}

export interface PortfolioServicesConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  services: PortfolioService[];
}

// Portfolio/Gallery - Project showcase
export interface PortfolioProject {
  id: string;
  image: string;
  title: string;
  category: string;
  description?: string;
  year?: number;
  link?: string;
}

export interface PortfolioGalleryConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  projects: PortfolioProject[];
  columns?: 2 | 3 | 4; // Grid columns
}

// Process/Workflow - Steps to deliver service
export interface PortfolioProcessStep {
  number: number;
  title: string;
  description: string;
  image?: string;
}

export interface PortfolioProcessConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: PortfolioProcessStep[];
}

// Testimonial/Case Study - Client success story
export interface PortfolioTestimonial {
  clientName: string;
  clientRole: string;
  clientCompany: string;
  testimonialText: string;
  image?: string;
  rating?: number; // 1-5 stars
  projectCategory?: string;
}

export interface PortfolioTestimonialsConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  testimonials: PortfolioTestimonial[];
}

// Final CTA - Call to action section
export interface PortfolioCTAConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

// Layout - Header
export interface PortfolioNavLink {
  label: string;
  href: string;
}

export interface PortfolioHeaderConfig {
  logo?: string;
  siteName: string;
  navLinks?: PortfolioNavLink[];
  cta?: {
    label: string;
    href: string;
  };
}

// Layout - Footer
export interface PortfolioFooterContact {
  label: string;
  href: string;
  icon?: string;
}

export interface PortfolioFooterSocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface PortfolioFooterConfig {
  siteName: string;
  tagline?: string;
  contacts?: PortfolioFooterContact[];
  socialLinks?: PortfolioFooterSocialLink[];
  copyrightYear?: number;
}

// Layout - StickyBar
export interface PortfolioStickyBarConfig {
  cta: {
    label: string;
    href: string;
  };
  subtitle?: string;
}

// Contact - Form Section
export interface PortfolioContactConfig {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  formFields: {
    nombre: string;
    telefono: string;
    email: string;
    informacion: string;
  };
  submitButton: string;
}

// Full Portfolio Config
export interface PortfolioPageConfig {
  header: PortfolioHeaderConfig;
  hero: PortfolioHeroConfig;
  services: PortfolioServicesConfig;
  gallery: PortfolioGalleryConfig;
  process: PortfolioProcessConfig;
  testimonials: PortfolioTestimonialsConfig;
  contact: PortfolioContactConfig;
  cta: PortfolioCTAConfig;
  footer: PortfolioFooterConfig;
  stickyBar: PortfolioStickyBarConfig;
}
