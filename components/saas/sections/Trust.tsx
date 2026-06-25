'use client';

import { motion, cubicBezier } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import type { TrustConfig } from '@/types/saas.config.types';

export function Trust({
  badges = [],
  stats = [],
}: TrustConfig) {
  const ref = useInView('trust');
  if ((!badges || badges.length === 0) && (!stats || stats.length === 0)) {
    return null;
  }

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
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section ref={ref} id="seguridad" className="bg-dark px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Badges */}
          {badges && badges.length > 0 && (
            <motion.div variants={itemVariants}>
              <p
                className="text-xs sm:text-sm font-bold uppercase mb-4 sm:mb-6 text-primary"
                style={{ letterSpacing: '.2em' }}
              >
                🔒 Certificaciones
              </p>
              <div className="space-y-3 sm:space-y-4">
                {badges.map((badge, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                  >
                    <div className="text-xl sm:text-2xl flex-shrink-0">{badge.icon}</div>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {badge.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
            <motion.div variants={itemVariants}>
              <p
                className="text-xs sm:text-sm font-bold uppercase mb-4 sm:mb-6 text-primary"
                style={{ letterSpacing: '.2em' }}
              >
                ⚡ Rendimiento
              </p>
              <div className="space-y-3 sm:space-y-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 hover:border-primary/40 transition-colors"
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                  >
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-white/60 mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
