'use client';

import { motion, cubicBezier } from 'framer-motion';
import type { Testimonios } from '@/types/motion.config.types';

export function Testimonials({
  eyebrow,
  title,
  columnas = [],
}: Testimonios) {
  if (!columnas || columnas.length === 0) return null;

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
    <section id="testimonios" className="bg-dark px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
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
          <h2
            className="font-black tracking-tight text-white"
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Grid de testimonios */}
        <motion.div
          className="grid md:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {columnas.map((testimonio, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-primary/30 transition-all"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                <span style={{ color: '#f59e0b', fontSize: '14px' }}>
                  ★★★★★
                </span>
              </div>

              {/* Testimonio */}
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {testimonio.testimonio}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar circular */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: 'rgba(43, 169, 247, .15)',
                    color: '#2ba9f7',
                  }}
                >
                  {testimonio.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)}
                </div>

                <div>
                  {/* Nombre */}
                  <p className="text-sm font-semibold text-white">
                    {testimonio.name}
                  </p>

                  {/* Descripción */}
                  <p className="text-xs text-white/40">
                    {testimonio.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
