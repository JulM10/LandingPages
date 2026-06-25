'use client';

import { useAnalytics } from '@/lib/analytics';
import type { PortfolioCTAConfig } from '@/types/portfolio.config.types';

export function Cta({
  eyebrow,
  title,
  subtitle,
  cta,
  secondaryCta,
}: PortfolioCTAConfig) {
  const { trackCTAClick } = useAnalytics();

  const handleCtaClick = () => {
    trackCTAClick(cta.label, 'cta', cta.href);
  };

  const handleSecondaryCtaClick = () => {
    if (secondaryCta) trackCTAClick(secondaryCta.label, 'cta', secondaryCta.href);
  };

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 mb-3 sm:mb-4">
            {eyebrow}
          </p>
        )}

        {/* Title */}
        <h2
          className="font-black text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6"
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
            lineHeight: 1.1,
          }}
        >
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={cta.href}
            onClick={handleCtaClick}
            className="w-full sm:w-auto bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-opacity-90 transition shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
          >
            {cta.label}
          </a>

          {secondaryCta && (
            <a
              href={secondaryCta.href}
              onClick={handleSecondaryCtaClick}
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-white/10 transition transform hover:scale-105 duration-300"
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
