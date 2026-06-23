'use client';

import { motion, cubicBezier } from 'framer-motion';
import Image from 'next/image';
import type { QuienesSomosConfig } from '@/types/config.types';

export function QuienesSomos({
  eyebrow,
  title,
  subtitle,
  stat = [],
  people = [],
}: QuienesSomosConfig) {
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
        <div className="grid md:grid-cols-2 gap-6 md:gap-14 items-start">
          {/* Columna 1: Texto + Valores */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            {eyebrow && (
              <p className="text-xs font-bold tracking-[.2em] uppercase mb-3 text-primary">
                {eyebrow}
              </p>
            )}
            <h2
              className="font-black tracking-tight text-dark"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                lineHeight: 1.1,
              }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted mt-5 leading-relaxed" style={{ fontSize: '0.95rem' }}>
                {subtitle}
              </p>
            )}

            {/* Grid de valores 2x2 */}
            {stat && stat.length > 0 && (
              <motion.div
                className="grid grid-cols-2 gap-3 mt-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {stat.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="rounded-xl p-4 group transition-all duration-200 hover:shadow-md border border-dark/10 bg-white"
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                  >
                    <p className="font-bold text-sm leading-snug text-dark">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Certificaciones/Pills */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mt-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold bg-primary/10 text-primary">
                ✓ Meta Certified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-accent" style={{ background: 'rgba(24,184,204,.1)' }}>
                ✓ Google Ads Certified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold" style={{ background: 'rgba(255,122,0,.08)', color: '#e8601c' }}>
                ✓ HubSpot
              </span>
            </motion.div>
          </motion.div>

          {/* Columna 2: Integrantes */}
          {people && people.length > 0 && (
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {people.map((person, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 rounded-2xl border border-dark/10 bg-white p-5"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  {/* Foto */}
                  {person.imagesrc && (
                    <Image
                      src={person.imagesrc}
                      alt={person.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                    />
                  )}

                  <div className="flex-1">
                    {/* Nombre */}
                    <p className="font-bold text-dark">
                      {person.name}
                    </p>

                    {/* Subtitle */}
                    {person.subtitle && (
                      <p className="text-primary text-sm font-semibold">
                        {person.subtitle}
                      </p>
                    )}

                    {/* Descripción */}
                    {person.description && (
                      <p className="text-muted text-sm mt-1">
                        {person.description}
                      </p>
                    )}

                    {/* Pills/Badges */}
                    {person.bullets && person.bullets.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {person.bullets.map((bullet, bidx) => (
                          <span
                            key={bidx}
                            className="text-xs rounded-full px-3 py-1 bg-primary/10 text-primary"
                          >
                            {bullet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
