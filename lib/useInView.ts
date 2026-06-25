import { useEffect, useRef } from 'react';
import { trackSectionView } from './analytics';

/**
 * Hook que dispara un evento GA4 cuando una sección se hace visible
 * Uso: const ref = useInView('services'); <section ref={ref}>...</section>
 */
export function useInView(sectionName: string) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView(sectionName);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
}
