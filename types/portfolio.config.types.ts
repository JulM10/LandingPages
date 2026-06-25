

export interface CtaButton {
  label: string;
  href: string;
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