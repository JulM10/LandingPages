'use client';

import { motion, cubicBezier } from 'framer-motion';
import type { RoadmapConfig } from '@/types/config.types';

export function SaasRoadmap({
  eyebrow,
  title,
  subtitle,
  steps = [],
  cta,
}: RoadmapConfig) {
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
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="roadmap" className="bg-light px-4 sm:px-6 py-12 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
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

        {/* Horizontal Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Timeline Grid */}
          <div className="flex items-stretch justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 relative">
            {/* Full timeline line behind */}
            <div
              className="absolute top-[24px] sm:top-[32px] h-1 w-full bg-gradient-to-r from-primary via-primary to-primary/30"
              style={{
                left: 'calc(6rem)',
                right: 'calc(6rem)',
              }}
            />

            {steps?.map((step, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center relative">
                {/* Connector line - kept for flexibility */}
                {idx < (steps?.length ?? 0) - 1 && (
                  <div
                    className="absolute top-[24px] sm:top-[32px] left-[50%] h-1 bg-gradient-to-r from-primary to-primary/30"
                    style={{
                      width: 'calc(100% + 1rem)',
                      left: 'calc(-0.5rem)',
                    }}
                  />
                )}

                {/* Number circle */}
                <motion.div
                  className="relative z-10 mb-4 flex-shrink-0"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-black text-base sm:text-lg text-white shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #2ba9f7, #18b8cc)',
                      boxShadow: '0 0 20px rgba(43, 169, 247, 0.4)',
                    }}
                  >
                    {step.number}
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div className="text-center" variants={itemVariants}>
                  <p className="text-xs font-bold uppercase text-primary mb-1">
                    {step.week}
                  </p>
                  <h3 className="font-black text-sm sm:text-base text-dark mb-2">
                    {step.name}
                  </h3>
                  {step.description && (
                    <p className="text-xs text-muted leading-relaxed max-w-[150px]">
                      {step.description}
                    </p>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        {cta && (
          <motion.div
            className="mt-12 md:mt-16 lg:mt-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <a
              href={cta.href}
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {cta.label}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
