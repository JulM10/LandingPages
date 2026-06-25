'use client';

import { motion, cubicBezier } from 'framer-motion';
import { useInView } from '@/lib/useInView';
import type { ProblemSolutionConfig } from '@/types/saas.config.types';

export function ProblemSolution({
  eyebrow,
  title,
  problems = [],
  solution,
}: ProblemSolutionConfig) {
  const ref = useInView('problem_solution');
  if (!problems || problems.length === 0) return null;

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
    <section ref={ref} id="problema" className="bg-light px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
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
            className="font-black tracking-tight text-dark"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.6rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Problems Grid - responsive: 1 col mobile, 3 col desktop */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl p-5 sm:p-6 md:p-7 bg-white border border-dark/10 hover:shadow-md transition-all"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{problem.icon}</div>
              <h3 className="font-bold text-dark text-base sm:text-lg mb-2">
                {problem.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 sm:px-6 py-2 sm:py-3">
            <p className="text-primary font-bold text-sm sm:text-base md:text-lg">
              ✨ {solution}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
