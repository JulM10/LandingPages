'use client';

import { motion, cubicBezier } from 'framer-motion';
import type { NosEligenConfig } from '@/types/config.types';

export function NosEligen({ eyebrow, title, subtitle, company = [] }: NosEligenConfig) {
  if (!company || company.length === 0) return null;

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
    <section className="bg-light px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
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
          <h2
            className="font-black tracking-tight text-dark"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted mt-3 text-sm">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Grid de empresas */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {company.map((empresa, idx) => (
            <motion.a
              key={idx}
              href={`https://www.instagram.com/${empresa.instagram}/?hl=es`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-dark/10 bg-white p-5 hover:shadow-md hover:border-primary/40 transition text-left"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 text-lg bg-primary/5">
                <img src={empresa.logoSrc ? empresa.logoSrc : '🏢'} alt={empresa.name} />
              </div>

              {/* Nombre */}
              <p className="font-bold text-sm group-hover:text-primary transition text-dark">
                {empresa.name}
              </p>

              {/* Descripción */}
              <p className="text-xs text-muted mt-1 leading-relaxed">
                {empresa.description}
              </p>

              {/* Link */}
              <p className="text-xs font-semibold mt-3 text-primary">
                @{empresa.instagram} →
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
