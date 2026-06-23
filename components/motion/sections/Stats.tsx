'use client';

import { motion, cubicBezier } from 'framer-motion';
import type { MetricasConfig } from '@/types/config.types';

export function Stats({ stats = [] }: MetricasConfig) {
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

  if (!stats || stats.length === 0) return null;

  return (
    <section
      className="relative border-t border-b border-white/6"
      style={{ background: '#0a1520', padding: '48px 20px' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={`stat-${idx}`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Valor grande */}
              <p
                className="font-black text-primary"
                style={{ fontSize: '3rem', lineHeight: 1 }}
              >
                {stat.value}
              </p>

              {/* Progress bar */}
              <div className="mx-auto mt-3 mb-2" style={{ width: '48px' }}>
                <div
                  className="rounded-full overflow-hidden"
                  style={{
                    height: '3px',
                    background: 'rgba(43,169,247,.15)',
                  }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #2ba9f7, #00d4c8)',
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 1.4,
                      ease: cubicBezier(0.22, 1, 0.36, 1),
                      delay: 0.3 + idx * 0.1,
                    }}
                  />
                </div>
              </div>

              {/* Label */}
              <p className="text-xs text-white/45 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
