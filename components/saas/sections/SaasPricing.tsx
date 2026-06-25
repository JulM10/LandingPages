'use client';

import { motion, cubicBezier } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import { useAnalytics } from '@/lib/analytics';
import { SaasPricingForm } from './SaasPricingForm';
import type { PlansConfig } from '@/types/saas.config.types';

export function SaasPricing({
  eyebrow,
  title,
  subtitle,
  items = [],
}: PlansConfig) {
  const ref = useInView('pricing');
  const { trackPlanSelection } = useAnalytics();
  if (!items || items.length === 0) return null;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section ref={ref} id="pricing" className="bg-light px-4 sm:px-6 py-12 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          {eyebrow && (
            <p
              className="text-xs sm:text-sm font-bold uppercase mb-3 text-primary"
              style={{ letterSpacing: '.2em' }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className="font-black tracking-tight text-dark mb-3"
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Plans Grid - responsive: 1 col mobile, 2 col tablet, 3-4 col desktop */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                plan.featured
                  ? 'bg-dark text-white border-2 border-primary shadow-2xl lg:scale-105'
                  : 'bg-white border border-dark/10 hover:border-primary/30 hover:shadow-lg'
              }`}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onAnimationComplete={() => trackPlanSelection(plan.name)}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase">
                    Recomendado
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3
                className={`font-black text-lg sm:text-xl mb-2 ${
                  plan.featured ? 'text-white' : 'text-dark'
                }`}
              >
                {plan.name}
              </h3>

              {/* Plan title */}
              <p
                className={`text-xs sm:text-sm mb-4 ${
                  plan.featured ? 'text-white/70' : 'text-muted'
                }`}
              >
                {plan.title}
              </p>

              {/* Plan users/limit */}
              <p
                className={`text-sm sm:text-base font-semibold mb-6 ${
                  plan.featured ? 'text-primary' : 'text-dark'
                }`}
              >
                {plan.platform}
              </p>

              {/* Features list */}
              <div className="space-y-3 mb-8">
                {plan.features?.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <span
                      className={`text-lg flex-shrink-0 ${
                        plan.featured ? 'text-primary' : 'text-primary'
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-xs sm:text-sm ${
                        plan.featured
                          ? 'text-white/90'
                          : 'text-dark/80'
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#form"
                onClick={() => {
                  trackPlanSelection(plan.name);
                  // Disparar custom event para que el form se actualice
                  window.dispatchEvent(new CustomEvent('planSeleccionado', { detail: plan.name }));
                  setTimeout(() => {
                    const form = document.getElementById('form');
                    form?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                data-plan={plan.name.toLowerCase()} // 📊 GTM tracking: plan_cta_click
                className={`block w-full py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base text-center ${
                  plan.featured
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/50'
                    : 'bg-light border border-dark/10 text-dark hover:bg-dark hover:text-white'
                }`}
              >
                Comenzar
              </a>
            </motion.div>
          ))}

          {/* Contact Form Column */}
          <SaasPricingForm />
        </motion.div>
      </div>
    </section>
  );
}
