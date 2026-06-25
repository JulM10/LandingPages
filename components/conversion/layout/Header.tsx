'use client';

import { useState, useEffect } from 'react';
import { useAnalytics } from "@/lib/analytics";
import { HeaderConfig } from "@/types/conversion.config.types";

export function Header({ logoSrc, nombre, textButton }: HeaderConfig) {
  const { trackCTAClick } = useAnalytics();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const handleCtaClick = () => {
    trackCTAClick(textButton.label, 'header_cta', textButton.href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto py-3 px-6">
        <img src={logoSrc} alt={nombre} className="h-8" />
        <a href={textButton.href}
           onClick={handleCtaClick}
           className="bg-primary text-white px-4 py-2 text-sm rounded-lg font-semibold hover:bg-primary/90 transition">
          {textButton.label}
        </a>
      </div>
    </header>
  );
}