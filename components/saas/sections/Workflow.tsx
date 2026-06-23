'use client';

import { motion, cubicBezier } from 'framer-motion';
import Image from 'next/image';
import type { WorkflowConfig } from '@/types/config.types';

export function Workflow({
  eyebrow,
  title,
  steps = [],
}: WorkflowConfig) {
  if (!steps || steps.length === 0) return null;

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
    <section id="workflow" className="bg-dark px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20"
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
            className="font-black tracking-tight text-white"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.6rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Steps with images - 2 col layout desktop, 1 col mobile */}
        <div className="space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              {/* Left: Text (order-2 on odd, order-1 on even for alternating) */}
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                {/* Number circle */}
                <div className="mb-4 sm:mb-6">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-black text-lg sm:text-xl"
                    style={{
                      background: `linear-gradient(135deg, rgba(43, 169, 247, 0.2), rgba(43, 169, 247, 0.05))`,
                      border: '2px solid rgba(43, 169, 247, 0.3)',
                    }}
                  >
                    <span className="text-primary">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-4">{step.icon}</div>
                <h3 className="font-bold text-white text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>

              {/* Right: Image */}
              {step.image && (
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <Image
                    src={step.image}
                    alt={step.imageAlt || step.title}
                    width={600}
                    height={400}
                    className="w-full rounded-2xl border border-white/10 shadow-2xl"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
