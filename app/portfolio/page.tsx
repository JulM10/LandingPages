import { portfolioConfig } from '@/config/portfolio.config';
import { Header } from '@/components/portfolio/layout/Header';
import { Footer } from '@/components/portfolio/layout/Footer';
import { StickyBar } from '@/components/portfolio/layout/StickyBar';
import { Hero } from '@/components/portfolio/sections/Hero';
import { Services } from '@/components/portfolio/sections/Services';
import { Gallery } from '@/components/portfolio/sections/Gallery';
import { Process } from '@/components/portfolio/sections/Process';
import { Testimonials } from '@/components/portfolio/sections/Testimonials';
import { Cta } from '@/components/portfolio/sections/Cta';

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <Header {...portfolioConfig.header} />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <Hero {...portfolioConfig.hero} />

        {/* Services */}
        <Services {...portfolioConfig.services} />

        {/* Gallery */}
        <Gallery {...portfolioConfig.gallery} />

        {/* Process */}
        <Process {...portfolioConfig.process} />

        {/* Testimonials */}
        <Testimonials {...portfolioConfig.testimonials} />

        {/* CTA */}
        <Cta {...portfolioConfig.cta} />
      </main>

      {/* Sticky Bar */}
      <StickyBar {...portfolioConfig.stickyBar} />

      {/* Footer */}
      <Footer {...portfolioConfig.footer} />
    </>
  );
}
