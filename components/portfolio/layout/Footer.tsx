'use client';

import { useAnalytics } from '@/lib/analytics';
import type { PortfolioFooterConfig } from '@/types/portfolio.config.types';

export function Footer({
  siteName,
  tagline,
  contacts = [],
  socialLinks = [],
  copyrightYear = new Date().getFullYear(),
}: PortfolioFooterConfig) {
  const { trackSocialClick } = useAnalytics();

  const handleContactClick = (label: string, href: string) => {
    trackSocialClick(label, label, href);
  };

  const handleSocialClick = (platform: string, href: string) => {
    trackSocialClick(platform, platform, href);
  };

  return (
    <footer className="bg-dark text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg sm:text-xl mb-2 text-primary">
              {siteName}
            </h3>
            {tagline && (
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                {tagline}
              </p>
            )}
          </div>

          {/* Contacts */}
          {contacts.length > 0 && (
            <div className="col-span-1">
              <p className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">
                Contacto
              </p>
              <div className="space-y-2">
                {contacts.map((contact) => (
                  <a
                    key={contact.href}
                    href={contact.href}
                    onClick={() => handleContactClick(contact.label, contact.href)}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-xs sm:text-sm text-white/60 hover:text-primary transition flex items-center gap-2 group"
                  >
                    {contact.icon && (
                      <span className="text-base group-hover:scale-110 transition">
                        {contact.icon}
                      </span>
                    )}
                    <span>{contact.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Social */}
          {socialLinks.length > 0 && (
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <p className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">
                Síguenos
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    onClick={() => handleSocialClick(social.platform, social.href)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition text-base sm:text-lg hover:scale-110 transform duration-300"
                    title={social.platform}
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-white/40">
            © {copyrightYear} {siteName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
