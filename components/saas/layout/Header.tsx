"use client";

import { motion } from "framer-motion";
import { useAnalytics } from "@/lib/analytics";
import { HeaderConfig } from "@/types/saas.config.types";

export function Header({ logoSrc, nombre, links, textButton }: HeaderConfig) {
  const { trackCTAClick } = useAnalytics();

  const handleNavClick = (label: string, href: string) => {
    trackCTAClick(label, 'header_nav', href);
  };

  const handleCtaClick = () => {
    trackCTAClick(textButton.label, 'header_cta', textButton.href);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-40 border-b border-white/5 bg-dark/95 backdrop-blur-md"
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
          className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(43, 169, 247, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          {textButton.label}
        </motion.a>
      </div>
    </motion.header>
  );
}