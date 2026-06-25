'use client';

import { motion, cubicBezier } from 'framer-motion';
import { useState } from 'react';
import type { FAQConfig } from '@/types/saas.config.types';

export function SaasFaq({
  eyebrow,
  title,
  subtitle,
  questions = [],
}: FAQConfig) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  if (!questions || questions.length === 0) return null;

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
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="faq" className="bg-light px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
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
            className="font-black tracking-tight text-dark mb-3"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.6rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-muted max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* FAQ Accordion - responsive */}
        <motion.div
          className="space-y-2 sm:space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {questions.map((item, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl border border-dark/10 bg-white overflow-hidden hover:border-primary/30 transition-colors"
              variants={itemVariants}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 hover:bg-light/50 transition-colors"
              >
                {/* Question */}
                <span className="font-semibold text-sm sm:text-base text-dark flex-1">
                  {item.question}
                </span>

                {/* Toggle icon */}
                <span
                  className="text-primary text-xl flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer - collapse/expand */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIdx === idx ? 'auto' : 0,
                  opacity: openIdx === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-muted leading-relaxed border-t border-dark/10">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
