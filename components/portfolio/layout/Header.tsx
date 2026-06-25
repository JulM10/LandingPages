'use client';

import { useState, useEffect } from 'react';
import { useAnalytics } from '@/lib/analytics';
import type { PortfolioHeaderConfig } from '@/types/portfolio.config.types';

export function Header({
  logo,
  siteName,
  navLinks = [],
  cta,
}: PortfolioHeaderConfig) {
  const { trackCTAClick } = useAnalytics();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ocultar header al scrollear hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si scrolleamos hacia abajo más de 100px, ocultamos el header
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        // Si scrolleamos hacia arriba, mostramos el header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (label: string, href: string) => {
    trackCTAClick(label, 'header', href);
    setIsMobileMenuOpen(false); // Cerrar menú al clickear
  };

  const handleCtaClick = () => {
    if (cta) trackCTAClick(cta.label, 'header_cta', cta.href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0 group">
          {logo && (
            <img 
              src={logo} 
              alt={siteName} 
              className="h-8 sm:h-10 w-auto group-hover:opacity-80 transition" 
            />
          )}
          <span className="font-bold text-base sm:text-lg text-dark hidden sm:inline-block">
            {siteName}
          </span>
        </a>

        {/* Nav Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 ml-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.label, link.href)}
              className="text-xs sm:text-sm text-gray-600 hover:text-primary transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        {cta && (
          <a
            href={cta.href}
            onClick={handleCtaClick}
            className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm hover:bg-opacity-90 transition whitespace-nowrap shadow-md hover:shadow-lg"
          >
            {cta.label}
          </a>
        )}

        {/* Hamburger Menu - Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-600 hover:text-primary transition"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.label, link.href)}
                className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-light rounded transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
