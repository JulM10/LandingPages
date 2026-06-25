"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAnalytics } from "@/lib/analytics";
import { HeaderConfig } from "@/types/saas.config.types";

export function Header({ logoSrc, nombre, links, textButton }: HeaderConfig) {
  const { trackCTAClick } = useAnalytics();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hide header on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (label: string, href: string) => {
    trackCTAClick(label, 'header_nav', href);
    setIsMobileMenuOpen(false);
  };

  const handleCtaClick = () => {
    trackCTAClick(textButton.label, 'header_cta', textButton.href);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-40 border-b border-white/5 bg-dark/95 backdrop-blur-md transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            {logoSrc && <img src={logoSrc} alt={nombre ?? "Quanty Ads"} width={120} height={40} />}
          </motion.a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {links?.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.label, link.href)}
                className="text-sm text-white/50 hover:text-white transition font-medium"
                whileHover={{ color: "#f4f6f8" }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href={textButton.href}
            onClick={handleCtaClick}
            className="hidden md:inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(43, 169, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            {textButton.label}
          </motion.a>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-dark/95">
            <nav className="max-w-6xl mx-auto px-5 py-4 space-y-2">
              {links?.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.label, link.href)}
                  className="block px-4 py-2 text-sm text-white/50 hover:text-primary hover:bg-white/5 rounded transition"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={textButton.href}
                onClick={handleCtaClick}
                className="block w-full px-4 py-2 mt-4 text-sm font-bold text-white bg-primary rounded hover:bg-primary/90 transition text-center"
              >
                {textButton.label}
              </a>
            </nav>
          </div>
        )}
      </motion.header>
    </>
  );
}