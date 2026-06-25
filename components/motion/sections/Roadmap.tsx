'use client';

import { motion, cubicBezier } from 'framer-motion';
import { useAnalytics } from '@/lib/analytics';
import type { RoadmapConfig } from '@/types/motion.config.types';

export function Roadmap({
  eyebrow,
  title,
  subtitle,
  steps = [],
}: RoadmapConfig) {
  const { trackRoadmapInteraction } = useAnalytics();
  if (!steps || steps.length === 0) return null;

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
    <section id="proceso" className="bg-light px-6 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
              fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted mt-4 text-sm max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Línea conectora (solo desktop) */}
          <div
            className="absolute top-12 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 hidden md:block"
            style={{
              background: 'linear-gradient(90deg,rgba(43,169,247,.2),rgba(24,184,204,.2))',
            }}
          />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              onAnimationComplete={() => trackRoadmapInteraction('view', (idx + 1).toString(), step.name)}
              onHoverStart={() => trackRoadmapInteraction('hover', (idx + 1).toString(), step.name)}
              className="bg-white rounded-2xl p-7 text-center relative border border-dark/10 shadow-sm hover:shadow-md transition-all"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Número */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-lg"
                style={{
                  background: 'linear-gradient(135deg, #2ba9f7, #0d90e0)',
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: '.05em',
                }}
              >
                {step.number}
              </div>

              {/* Semana */}
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                {step.week}
              </span>

              {/* Nombre del paso */}
              <h3 className="font-bold text-base mt-2 mb-2 text-dark">
                {step.name}
              </h3>

              {/* Descripción */}
              <p className="text-sm text-muted leading-relaxed">
                {step.name === 'Auditoría + KPIs'
                  ? 'Analizamos tu cuenta, tu competencia y definimos objetivos realistas y medibles.'
                  : step.name === 'Estrategia + lanzamiento'
                  ? 'Diseñamos tu estrategia personalizada y lanzamos las campañas optimizadas.'
                  : 'Monitoreamos y escalamos rentablemente en base a los datos en tiempo real.'}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
