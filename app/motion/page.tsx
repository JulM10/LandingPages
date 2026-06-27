import { Header } from "@/components/motion/layout/Header";
import { Hero } from "@/components/motion/sections/Hero";
import { Stats } from "@/components/motion/sections/Stats";
import { Clients } from "@/components/motion/sections/Clients";
import { NosEligen } from "@/components/motion/sections/NosEligen";
import { QuienesSomos } from "@/components/motion/sections/QuienesSomos";
import { Services } from "@/components/motion/sections/Services";
import { Plans } from "@/components/motion/sections/Plans";
import { Testimonials } from "@/components/motion/sections/Testimonials";
import { Roadmap } from "@/components/motion/sections/Roadmap";
import { Faq } from "@/components/motion/sections/Faq";
import { Cta } from "@/components/motion/sections/Cta";
import { Footer } from "@/components/motion/layout/Footer";
import { StickyBar } from "@/components/motion/layout/StickyBar";
import { motionConfig } from "@/config/motion.config";
import { WhatsAppFloat } from "@/components/motion/layout/WhatsAppFloat";

const config = motionConfig;

export default function MotionPage() {
  return (
    <>
      <StickyBar cta={{ label: "Agendar ahora →", href: "#form" }} />
      <Header {...config.header} />
      <Hero {...config.hero} />
      <Stats {...config.metricas} />
      <Clients {...config.ticker} />
      <Services {...config.services} />
      <NosEligen {...config.nosEligen} />
      <QuienesSomos {...config.quienesSomos} />
      <Plans {...config.plans} />
      <Testimonials {...config.resultadosTestimonios} />
      <Roadmap {...config.roadmapconfig} />
      <Faq {...config.faq} />
      <Cta {...config.agendaUnaLlamada} />
      <WhatsAppFloat {...config.whatsapp}/>
      <Footer {...config.footer} />
    </>
  );
}