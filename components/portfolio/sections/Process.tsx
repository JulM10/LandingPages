'use client';

import Image from 'next/image';
import { useAnalytics } from '@/lib/analytics';
import { useInView } from '@/lib/useInView';
import type { PortfolioProcessConfig } from '@/types/portfolio.config.types';

export function Process({
  eyebrow,
  title,
  subtitle,
  steps,
}: PortfolioProcessConfig) {
  const ref = useInView('portfolio_process');
  const { trackRoadmapInteraction } = useAnalytics();

  return (
    <section
      ref={ref}
      id="process"
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

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onMouseEnter={() =>
                trackRoadmapInteraction('hover', step.number.toString(), step.title)
              }
              onClick={() =>
                trackRoadmapInteraction('click', step.number.toString(), step.title)
              }
              className="relative group"
            >
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-full h-1 bg-gradient-to-r from-primary to-primary/20 -z-10" />
              )}

              {/* Step Circle with Number */}
              <div className="bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border-4 border-primary mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <span className="font-black text-lg sm:text-2xl text-primary">
                  {step.number}
                </span>
              </div>

              {/* Image */}
              {step.image && (
                <div className="relative w-full h-32 sm:h-40 mb-4 rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Content */}
              <h3 className="font-bold text-lg sm:text-xl text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
