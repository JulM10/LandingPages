'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAnalytics } from '@/lib/analytics';
import { useInView } from '@/lib/useInView';
import type { PortfolioServicesConfig } from '@/types/portfolio.config.types';

export function Services({
  eyebrow,
  title,
  subtitle,
  services,
}: PortfolioServicesConfig) {
  const ref = useInView('portfolio_services');
  const { trackFeatureInteraction, trackCTAClick } = useAnalytics();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleContactClick = (serviceTitle: string) => {
    trackCTAClick('Contactarse', `service_${serviceTitle}`, '#contact');
    // Disparar evento para pre-llenar el formulario con el nombre del servicio
    window.dispatchEvent(new CustomEvent('serviceContact', { detail: `Estoy interesado en: ${serviceTitle}` }));
    // Scroll a la sección de contacto
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section
      ref={ref}
      id="services"
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-light"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {eyebrow && (
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 sm:mb-3">
              {eyebrow}
            </p>
          )}
          <h2
            className="font-black text-2xl sm:text-3xl lg:text-4xl text-dark mb-3 sm:mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl border-2 border-gray-200 hover:border-primary transition-all duration-300 overflow-hidden cursor-pointer ${
                expandedId === idx ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Card Header - Always visible */}
              <button
                onClick={() => {
                  trackFeatureInteraction('expand', service.title, idx);
                  setExpandedId(expandedId === idx ? null : idx);
                }}
                className="w-full p-6 sm:p-8 text-left hover:bg-light transition-colors group"
              >
                {/* Image */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg sm:text-xl text-dark mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Expand Indicator */}
                <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                  <span>{expandedId === idx ? 'Mostrar menos' : 'Saber más'}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      expandedId === idx ? 'rotate-180' : ''
                    }`}
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
              </button>

              {/* Expanded Content - Only when clicked */}
              {expandedId === idx && (
                <div className="border-t-2 border-gray-200 p-6 sm:p-8 bg-light animate-in fade-in slide-in-from-top-2">
                  {service.details && (
                    <div className="mb-6">
                      <h4 className="font-bold text-dark mb-2">Detalles</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {service.details}
                      </p>
                    </div>
                  )}

                  {service.features && service.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-bold text-dark mb-3">Lo que incluye</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start gap-3 text-sm sm:text-base text-gray-600">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold mt-0.5">
                              ✓
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contact Button */}
                  <button
                    onClick={() => handleContactClick(service.title)}
                    className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-opacity-90 transition shadow-md hover:shadow-lg"
                  >
                    Contactarse
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
