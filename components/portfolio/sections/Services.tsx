'use client';

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
  const { trackFeatureInteraction } = useAnalytics();

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
              onClick={() => trackFeatureInteraction('view', service.title, idx)}
              className="group bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col items-center text-center"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
