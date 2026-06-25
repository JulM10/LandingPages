'use client';

import { useAnalytics } from '@/lib/analytics';
import { useInView } from '@/lib/useInView';
import type { PortfolioTestimonialsConfig } from '@/types/portfolio.config.types';

export function Testimonials({
  eyebrow,
  title,
  subtitle,
  testimonials,
}: PortfolioTestimonialsConfig) {
  const ref = useInView('portfolio_testimonials');
  const { trackTestimonialInteraction } = useAnalytics();

  return (
    <section
      ref={ref}
      id="testimonials"
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              onClick={() =>
                trackTestimonialInteraction(idx, testimonial.clientName)
              }
              className="bg-light rounded-xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-200 hover:border-primary group"
            >
              {/* Rating */}
              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
              )}

              {/* Quote */}
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.testimonialText}"
              </p>

              {/* Client Info */}
              <div className="flex items-start gap-4">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.clientName}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary"
                  />
                )}
                <div>
                  <p className="font-bold text-dark text-sm sm:text-base">
                    {testimonial.clientName}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {testimonial.clientRole}
                  </p>
                  <p className="text-xs text-primary font-semibold">
                    {testimonial.clientCompany}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
