import { Hero } from "@/components/minimal/sections/Hero";
import { Header } from "@/components/minimal/layout/Header";
import { Footer } from "@/components/minimal/layout/Footer";
import { WhatsAppFloat } from "@/components/minimal/layout/WhatsAppFloat";
import { Services } from "@/components/minimal/sections/Services";
import { Plans } from "@/components/minimal/sections/Plans";
import { Cta } from "@/components/minimal/sections/Cta";
import { clientConfig } from "@/config/client.config";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Header
        logoSrc={clientConfig.header.logoSrc}
        nombre={clientConfig.header.nombre}
        links={clientConfig.header.links}
        textButton={clientConfig.header.textButton}
      />
      <Hero
        badge={clientConfig.hero.badge}
        headline={clientConfig.hero.headline}
        highlight={clientConfig.hero.highlight}
        subtitle={clientConfig.hero.subtitle}
        cta={clientConfig.hero.cta}
        secondaryCta={clientConfig.hero.secondaryCta}
        stats={clientConfig.hero.stats}
      />
      <Services
        eyebrow={clientConfig.services.eyebrow}
        title={clientConfig.services.title}
        subtitle={clientConfig.services.subtitle}
        items={clientConfig.services.items}
      />
      <Plans
        eyebrow={clientConfig.plans.eyebrow}
        title={clientConfig.plans.title}
        subtitle={clientConfig.plans.subtitle}
        items={clientConfig.plans.items}
      />
      <Cta
        eyebrow={clientConfig.roadmapconfig.eyebrow}
        title={clientConfig.roadmapconfig.title}
        subtitle={clientConfig.roadmapconfig.subtitle}
        steps={clientConfig.roadmapconfig.steps}
        cta={clientConfig.roadmapconfig.cta}
        secondaryCta={clientConfig.roadmapconfig.secondaryCta}
        disclaimer={clientConfig.roadmapconfig.disclaimer}
      />
      <WhatsAppFloat
        message={clientConfig.whatsapp.message}
        number={clientConfig.whatsapp.number} />
      <Footer
        isologoSrc={clientConfig.footer.isologoSrc}
        nombre={clientConfig.footer.nombre}
        contacts={clientConfig.footer.contacts}
      />
    </main>
  );
}