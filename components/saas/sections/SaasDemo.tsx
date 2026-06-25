'use client';

import { motion, cubicBezier } from 'framer-motion';
import Image from 'next/image';
import type { SaasDemoConfig } from '@/types/saas.config.types';
import { useInView } from '@/lib/useInView';

export function SaasDemo({
  eyebrow,
  title,
  subtitle,
  mediaUrl,
  mediaType = 'image',
  alt = 'Product demo',
}: SaasDemoConfig) {
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
  const ref = useInView('saas_demo');

  return (
    <section ref={ref} id="demo" className="bg-light px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32">
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
            className="font-black tracking-tight text-dark mb-3"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.6rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Media Container */}
        <motion.div
          className="rounded-2xl overflow-hidden border-2 border-dark/10 shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          whileHover={{ borderColor: 'rgba(43, 169, 247, 0.3)' }}
        >
          {mediaType === 'video' ? (
            <video
              src={mediaUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto bg-dark"
            />
          ) : (
            <Image
              src={mediaUrl}
              alt={alt}
              width={1200}
              height={600}
              className="w-full h-auto bg-dark object-cover"
              priority
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
