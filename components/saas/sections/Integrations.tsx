'use client';

import { motion, cubicBezier } from 'framer-motion';
import type { IntegrationsConfig } from '@/types/config.types';

export function Integrations({
  eyebrow,
  title,
  logos = [],
}: IntegrationsConfig) {
  if (!logos || logos.length === 0) return null;

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
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="integraciones" className="bg-light px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          {eyebrow && (
            <p
              className="text-xs sm:text-sm font-bold uppercase mb-2 sm:mb-3 text-primary"
              style={{ letterSpacing: '.2em' }}
            >
              {eyebrow}
            </p>
          )}
          <h2
            className="font-black tracking-tight text-dark"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.6rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Logo Grid - responsive: 2 cols mobile, 4 cols tablet, 6 cols desktop */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl border border-dark/10 bg-white p-3 sm:p-4 md:p-6 flex items-center justify-center hover:shadow-md hover:border-primary/30 transition-all h-20 sm:h-24 md:h-28"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="text-center w-full">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🔗</div>
                <p className="text-xs font-semibold text-dark/70 line-clamp-2 overflow-hidden">
                  {logo}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
