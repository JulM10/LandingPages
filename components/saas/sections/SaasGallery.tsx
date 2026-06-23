'use client';

import { motion, cubicBezier } from 'framer-motion';
import Image from 'next/image';
import type { SaasGalleryConfig } from '@/types/config.types';

export function SaasGallery({
  eyebrow,
  title,
  subtitle,
  images = [],
}: SaasGalleryConfig) {
  if (!images || images.length === 0) return null;

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="gallery" className="bg-light px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
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

        {/* Gallery Grid - responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border-2 border-dark/10 hover:border-primary/30 transition-all"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay with title */}
              {image.title && (
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-4 sm:p-6">
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    {image.title}
                  </h3>
                </div>
              )}

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
