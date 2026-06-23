'use client';

import { motion, cubicBezier } from 'framer-motion';
import type { PlansConfig } from '@/types/config.types';

export function Plans({
  eyebrow,
  title,
  subtitle,
  items = [],
}: PlansConfig) {
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
    <section id="planes" className="bg-dark px-6 py-12 md:py-20">
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
            <p className="text-white/40 mt-3 text-sm">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Grid de planes */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col rounded-2xl p-6 h-full relative ${
                plan.featured
                  ? 'border border-primary/50 bg-gradient-to-br from-primary/10 to-transparent'
                  : 'border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30'
              } transition-all`}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Badge destacado */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-bold bg-gradient-to-r from-primary to-accent text-white">
                  ⭐ Más elegido
                </div>
              )}

              {/* Nivel */}
              <p className="text-xs font-bold uppercase tracking-wider text-white/30 mb-2">
                {plan.name || `Plan ${idx + 1}`}
              </p>

              {/* Título */}
              <h3 className="font-bold text-white text-base mb-0.5">
                {plan.title}
              </h3>

              {/* Plataforma */}
              {plan.platform && (
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold mt-2 mb-5 self-start"
                  style={{
                    background: 'rgba(43, 169, 247, .12)',
                    color: '#5ec8fc',
                  }}
                >
                  {plan.platform}
                </span>
              )}

              {/* Features */}
              <ul className="space-y-2.5 text-sm text-white/60 flex-1">
                {plan.features?.map((feature, fidx) => (
                  <li key={fidx} className="flex gap-2 items-start">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <a
                href="#form"
                className={`mt-6 block text-center rounded-xl border py-2.5 text-sm font-bold transition ${
                  plan.featured
                    ? 'bg-gradient-to-r from-primary to-accent text-white border-primary/50 hover:shadow-lg hover:shadow-primary/50'
                    : 'border-white/12 text-white/60 hover:text-white hover:border-white/30'
                }`}
              >
                Consultar →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
