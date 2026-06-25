'use client';

import Image from 'next/image';
import { useAnalytics } from '@/lib/analytics';
import { useInView } from '@/lib/useInView';
import type { PortfolioGalleryConfig } from '@/types/portfolio.config.types';

export function Gallery({
  eyebrow,
  title,
  subtitle,
  projects,
  columns = 3,
}: PortfolioGalleryConfig) {
  const ref = useInView('portfolio_gallery');
  const { trackFeatureInteraction } = useAnalytics();

  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <section
      ref={ref}
      id="gallery"
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {eyebrow && (
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary mb-2 sm:mb-3">
              {eyebrow}
            </p>
          )}
          <h2
            className="font-black text-2xl sm:text-3xl lg:text-4xl text-dark mb-3 sm:mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4 sm:gap-6 lg:gap-8`}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link || '#'}
              onClick={() => trackFeatureInteraction('view', project.title, 0)}
              className="group relative aspect-square sm:aspect-video overflow-hidden rounded-lg"
            >
              {/* Image - Zoom on desktop hover, static on mobile */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="w-full h-full object-cover scale-100 md:group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay - Visible on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-dark/60 md:bg-dark/0 md:group-hover:bg-dark/60 flex flex-col items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-bold text-white text-lg sm:text-xl text-center px-4">
                  {project.title}
                </h3>
                {project.category && (
                  <p className="text-white/80 text-xs sm:text-sm mt-2">
                    {project.category}
                  </p>
                )}
                {project.year && (
                  <p className="text-white/60 text-xs mt-1">{project.year}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
