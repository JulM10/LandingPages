'use client';

import { motion, cubicBezier } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAnalytics } from '@/lib/analytics';
import type { FAQConfig } from '@/types/motion.config.types';
import { clientConfig } from '@/config/client.config';

export function Faq({
  eyebrow,
  title,
  subtitle,
  questions = [],
}: FAQConfig) {
  const { trackFAQInteraction } = useAnalytics();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const icons = [
    <svg key="0" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key="1" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    <svg key="2" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key="3" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>,
    <svg key="4" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>,
  ];

  const colors = [
    { bg: 'bg-primary/10', text: 'text-primary' },
    { bg: 'bg-accent/10', text: 'text-accent' },
    { bg: 'bg-amber-100', text: 'text-amber-600' },
    { bg: 'bg-purple-100', text: 'text-purple-600' },
    { bg: 'bg-green-100', text: 'text-green-600' },
  ];

  const whatsappLink = `https://wa.me/${clientConfig.whatsapp.number}`;

  return (
    <section id="faq" className="bg-light px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid gap-6 md:gap-12 items-start"
          style={{
            gridTemplateColumns: isMobile ? '1fr' : '300px 1fr',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Columna izquierda: sticky */}
          <motion.div
            className="lg:sticky top-[90px]"
            variants={itemVariants}
          >
            {eyebrow && (
              <p 
                className="text-xs font-bold uppercase mb-3 text-primary"
                style={{ letterSpacing: '.2em' }}
              >
                {eyebrow}
              </p>
            )}
            <h2
              className="font-black tracking-tight text-dark"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
                lineHeight: 1.1,
              }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-muted mt-4 leading-relaxed">
                {subtitle}
              </p>
            )}

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 rounded-xl px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 bg-[#25D366] shadow-[0_4px_16px_rgba(37,211,102,.3)]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escribinos al WhatsApp
            </a>
          </motion.div>

          {/* Columna derecha: accordion */}
          <motion.div className="space-y-2">
            {questions.map((item, idx) => (
              <motion.details
                key={idx}
                className="group rounded-2xl overflow-hidden border border-dark/10 bg-white transition-all"
                variants={itemVariants}
                onToggle={(e) => trackFAQInteraction((e.currentTarget as HTMLDetailsElement).open ? 'expand' : 'collapse', idx, item.question)}
              >
                <summary
                  className="flex cursor-pointer items-center gap-4 p-5 select-none hover:bg-light/50 transition-colors"
                >
                  {/* Icon */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${colors[idx]?.bg} ${colors[idx]?.text}`}
                  >
                    {icons[idx]}
                  </div>

                  {/* Pregunta */}
                  <span className="flex-1 font-semibold text-sm md:text-base text-dark">
                    {item.question}
                  </span>

                  {/* Chevron + */}
                  <span
                    className="text-primary text-xl font-light flex-shrink-0 transition-transform duration-300"
                    style={{
                      lineHeight: 1,
                      transform: 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </summary>

                <div className="px-5 pb-5 pt-0">
                  <div className="pl-12">
                    <p className="text-sm text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>

                <style>{`
                  details[open] > summary span:last-child {
                    transform: rotate(45deg);
                  }
                `}</style>
              </motion.details>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
