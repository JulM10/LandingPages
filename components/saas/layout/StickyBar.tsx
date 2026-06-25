'use client';

import { useState, useEffect } from 'react';
import { useAnalytics } from '@/lib/analytics';

interface StickyBarProps {
  cta?: {
    label: string;
    href: string;
  };
}

export function StickyBar({ cta = { label: 'Reservar mi lugar →', href: '#form' } }: StickyBarProps) {
  const { trackCTAClick } = useAnalytics();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleCtaClick = () => {
    trackCTAClick(cta.label, 'sticky_bar', cta.href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Muestra cuando scrollea más de 300px hacia abajo
      setIsVisible(currentScrollY > 300);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 inset-x-0 z-50 border-b border-white/8 animate-in fade-in slide-in-from-top duration-300"
      style={{
        background: 'rgba(8, 15, 24, 0.95)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-5 py-3 md:py-2.5">
        {/* Left: dot + message */}
        <div className="flex items-center gap-3">
          {/* Pulse dot */}
          <div className="relative flex items-center justify-center">
            {/* Outer pulse ring */}
            <div
              className="absolute w-2.5 h-2.5 rounded-full animate-pulse"
              style={{
                background: 'var(--color-success)',
                boxShadow: '0 0 8px var(--color-success)',
              }}
            />
            {/* Inner solid dot */}
            <div
              className="w-2 h-2 rounded-full relative z-10"
              style={{ background: '#22c55e' }}
            />
          </div>

          {/* Message */}
          <p className="text-sm text-white/70 font-medium text-xs sm:text-sm">
            <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Diagnóstico gratis</span> disponible
            ahora
          </p>
        </div>

        {/* Right: CTA Button */}
        <a
          href={cta.href}
          onClick={handleCtaClick}
          className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-bold rounded-lg transition-all duration-200 hover:translate-y-[-2px]"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, #0d90e0 100%)',
            color: '#fff',
            boxShadow: '0 4px 24px rgba(43,169,247,.45)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              '0 8px 32px rgba(43,169,247,.55)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              '0 4px 24px rgba(43,169,247,.45)';
          }}
        >
          {cta.label}
        </a>
      </div>
    </div>
  );
}
