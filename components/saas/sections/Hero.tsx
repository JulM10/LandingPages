'use client';

import { motion, cubicBezier } from 'framer-motion';
import { useAnalytics } from '@/lib/analytics'; // 📊 Analytics
import type { HeroConfig } from '@/types/saas.config.types';

export function Hero({
  badge,
  headline,
  highlight,
  subtitle,
  cta,
  secondaryCta,
}: HeroConfig) {
  // 📊 ANALYTICS: Inicializar tracking
  const { trackEvent } = useAnalytics();

  const handleCtaClick = () => {
    // 📊 ANALYTICS: Trackear click en CTA principal
    trackEvent('cta_click', {
      cta_label: cta?.label,
      cta_location: 'hero_section',
      page: 'saas',
    });
  };

  const handleSecondaryCTAClick = () => {
    // 📊 ANALYTICS: Trackear click en CTA secundaria
    trackEvent('secondary_cta_click', {
      cta_label: secondaryCta?.label,
      cta_location: 'hero_section',
      page: 'saas',
    });
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

  // ✨ Shine effect animation
  const shineVariants = {
    animate: {
      backgroundPosition: ['300% center', '-300% center'],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'loop' as const,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-dark via-dark to-dark/95 px-4 sm:px-6 py-16 sm:py-24 md:py-32 lg:py-40 min-h-[100vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blur elements - hidden on small screens */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl opacity-20" />

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto text-center px-2 sm:px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        {badge && (
          <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
            <span className="inline-block rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-primary border border-primary/20">
              {badge}
            </span>
          </motion.div>
        )}

        {/* Headline with highlight */}
        <motion.h1
          variants={itemVariants}
          className="font-black tracking-tight text-white mb-4 sm:mb-6"
          style={{
            fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
            lineHeight: 1.1,
          }}
        >
          {headline}
          {highlight && (
            <>
              {' '}
              <motion.span
                className="bg-clip-text text-transparent inline-block"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #2ba9f7 0%, #2ba9f7 20%, #ffffff 50%, #18b8cc 80%, #18b8cc 100%)',
                  backgroundSize: '300% 100%',
                  backgroundPosition: '300% center',
                }}
                variants={shineVariants}
                animate="animate"
              >
                {highlight}
              </motion.span>
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-white/70 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          {cta && (
            <a
              href={cta.href}
              onClick={handleCtaClick} // 📊 ANALYTICS: Track main CTA click
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {cta.label}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              onClick={handleSecondaryCTAClick} // 📊 ANALYTICS: Track secondary CTA click
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl border-2 border-white/20 text-white font-bold text-sm sm:text-base hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
            >
              {secondaryCta.label}
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
