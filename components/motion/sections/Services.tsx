'use client';

import { motion, cubicBezier } from 'framer-motion';
import { useAnalytics } from '@/lib/analytics';
import type { ServicesConfig } from '@/types/motion.config.types';

export function Services({
  eyebrow,
  title,
  subtitle,
  items = [],
}: ServicesConfig) {
  const { trackFeatureInteraction } = useAnalytics();
  if (!items || items.length === 0) return null;

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

  return (
    <section id="servicios" className="bg-dark px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[.2em] mb-3 text-primary">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              className="font-black tracking-tight text-white"
              style={{
                fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
                lineHeight: 1.1,
              }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-white/40 mt-3 text-sm max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Grid de servicios */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((service, idx) => (
            <motion.div
              key={idx}
              onAnimationComplete={() => trackFeatureInteraction('view', service.title, idx)}
              className="rounded-2xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all group"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              {/* Tag */}
              {service.tag && (
                <span className="inline-flex text-xs font-semibold mb-3 text-primary">
                  {service.tag}
                </span>
              )}

              {/* Title */}
              <h3 className="font-bold text-white text-lg mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              {service.features && service.features.length > 0 && (
                <ul className="space-y-2 text-xs text-white/50">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
