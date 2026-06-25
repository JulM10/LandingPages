'use client';

import { useEffect, useState } from 'react';
import { useAnalytics } from '@/lib/analytics';
import type { PortfolioStickyBarConfig } from '@/types/portfolio.config.types';

export function StickyBar({ cta, subtitle }: PortfolioStickyBarConfig) {
  const { trackCTAClick } = useAnalytics();
  const [isVisible, setIsVisible] = useState(false);

  const handleCtaClick = () => {
    trackCTAClick(cta.label, 'sticky_bar', cta.href);
  };

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Muestra sticky bar cuando hero sale del viewport
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-40 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm sm:text-base font-semibold text-dark">
            ¿Tienes un proyecto?
          </p>
          {subtitle && (
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {subtitle}
            </p>
          )}
        </div>
        <a
          href={cta.href}
          onClick={handleCtaClick}
          className="w-full sm:w-auto bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm hover:bg-opacity-90 transition whitespace-nowrap text-center shadow-md hover:shadow-lg"
        >
          {cta.label}
        </a>
      </div>
    </div>
  );
}
