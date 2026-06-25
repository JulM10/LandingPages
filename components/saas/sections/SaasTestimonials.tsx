'use client';

import { motion, cubicBezier } from 'framer-motion';
import type { Testimonios } from '@/types/saas.config.types';

export function SaasTestimonials({
  eyebrow,
  title,
  columnas = [],
}: Testimonios) {
  if (!columnas || columnas.length === 0) return null;

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
    <section id="testimonials" className="bg-gradient-to-br from-dark via-dark to-dark/95 px-4 sm:px-6 py-12 md:py-24 lg:py-32">
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
            className="font-black tracking-tight text-white"
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Testimonials Grid - responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {columnas.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-amber-400">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm sm:text-base text-white/80 mb-6 leading-relaxed">
                {testimonial.testimonio}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                {/* Avatar */}
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm"
                  style={{
                    background: 'rgba(43, 169, 247, 0.2)',
                    color: '#2ba9f7',
                  }}
                >
                  {testimonial.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)}
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm sm:text-base truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-white/50 truncate">
                    {testimonial.description}
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
