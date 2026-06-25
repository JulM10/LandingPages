'use client';

import { motion, cubicBezier, Variants } from 'framer-motion';
import Link from 'next/link';
import { motionConfig } from '@/config/motion.config';

export default function NotFound() {
  const whatsappNumber = motionConfig.whatsapp.number;
  const email = motionConfig.footer.contacts?.find(c => c.label === 'Email')?.href?.replace('mailto:', '') || 'contact@example.com';
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark to-dark/95 flex items-center justify-center px-5 py-20 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ background: 'var(--color-primary)' }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ background: 'var(--color-accent)' }}
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="max-w-2xl text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 404 Number */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
          >
            <h1
              className="font-black text-transparent bg-clip-text text-6xl sm:text-7xl lg:text-8xl leading-none mb-4"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
              }}
            >
              404
            </h1>
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-xs font-bold uppercase tracking-[.2em] mb-4 text-primary"
        >
          Página no encontrada
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="font-black tracking-tight text-white mb-6"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            lineHeight: 1.1,
          }}
        >
          Parece que la ruta se perdió en el camino
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted mb-8 max-w-xl mx-auto leading-relaxed"
        >
          La página que buscas no existe o fue movida. Pero no te preocupes, podemos ayudarte a encontrar lo que necesitás.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base font-bold rounded-lg transition-all duration-200 hover:translate-y-[-2px] w-full sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, #0d90e0 100%)',
              color: '#fff',
              boxShadow: '0 4px 24px rgba(43,169,247,.45)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                '0 8px 32px rgba(43,169,247,.55)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                '0 4px 24px rgba(43,169,247,.45)';
            }}
          >
            ← Volver al inicio
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base font-bold rounded-lg border transition-all duration-200 hover:translate-y-[-2px] w-full sm:w-auto"
            style={{
              borderColor: 'rgba(43, 169, 247, 0.4)',
              color: 'var(--color-primary)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                'rgba(43, 169, 247, 0.8)';
              (e.currentTarget as HTMLAnchorElement).style.background =
                'rgba(43, 169, 247, 0.05)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                'rgba(43, 169, 247, 0.4)';
              (e.currentTarget as HTMLAnchorElement).style.background =
                'transparent';
            }}
          >
            Contactá con nosotros →
          </Link>
        </motion.div>

        {/* Footer hint */}
        <motion.p
          variants={itemVariants}
          className="text-xs text-muted/60 mt-8 sm:mt-12"
        >
          ¿Necesitás ayuda? Escribinos por{' '}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition"
          >
            WhatsApp
          </a>
          {' '}o{' '}
          <a
            href={`mailto:${email}`}
            className="text-primary hover:text-accent transition"
          >
            email
          </a>
          .
        </motion.p>
      </motion.div>

      {/* Decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
    </div>
  );
}
