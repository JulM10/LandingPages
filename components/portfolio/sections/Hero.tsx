'use client';

import { useAnalytics } from '@/lib/analytics';
import { useInView } from '@/lib/useInView';
import type { PortfolioHeroConfig } from '@/types/portfolio.config.types';

export function Hero({
  background,
  overlayOpacity = 0.5,
  eyebrow,
  title,
  subtitle,
  cta,
}: PortfolioHeroConfig) {
  const ref = useInView('portfolio_hero');
  const { trackCTAClick } = useAnalytics();

  const handleCtaClick = () => {
    trackCTAClick(cta.label, 'hero', cta.href);
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full h-screen min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background - Image or Video */}
      <div className="absolute inset-0 w-full h-full">
        {background.type === 'image' ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${background.src}')`,
              backgroundAttachment: 'fixed',
            }}
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={background.src} type={`video/${background.videoType || 'mp4'}`} />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-dark"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-3 sm:mb-4">
            {eyebrow}
          </p>
        )}

        {/* Title */}
        <h1
          className="font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight tracking-tight mb-4 sm:mb-6"
          style={{
            fontSize: 'clamp(1.875rem, 8vw, 3.75rem)',
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* CTA Button */}
        <a
          href={cta.href}
          onClick={handleCtaClick}
          className="inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-opacity-90 transition shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
        >
          {cta.label}
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
