import { Benefits } from "@/components/conversion/sections/Benefits";
import { Diferencias } from "@/components/conversion/sections/Diferencias";
import { WhatsAppFloat } from "@/components/conversion/layout/WhatsAppFloat";
import { Header } from "@/components/conversion/layout/Header";
import { Hero } from "@/components/conversion/sections/Hero";
import { NosEligen } from "@/components/conversion/sections/NosEligen"
import { Metricas } from "@/components/conversion/sections/Metricas"
import { Faq } from "@/components/conversion/sections/Faq"
import { Footer } from "@/components/conversion/layout/Footer"
import { QuienesSomos } from "@/components/conversion/sections/QuienesSomos"
import { Plans } from "@/components/conversion/sections/Plans"
import { Cta } from "@/components/conversion/sections/Cta"
import { StickyBar } from "@/components/conversion/layout/StickyBar";
import { conversionConfig } from "@/config/conversion.config";

export default function ConversionPage() {
    return (
        <main className="bg-dark pt-20">
            <StickyBar cta={conversionConfig.agendaUnaLlamada.cta} />
            <Header {...conversionConfig.header} />
            <Hero {...conversionConfig.hero} />
            <Metricas {...conversionConfig.metricas} />
            <QuienesSomos {...conversionConfig.quienesSomos} />
            <NosEligen {...conversionConfig.nosEligen} />
            <Benefits {...conversionConfig.benefits} />
            <Diferencias {...conversionConfig.diferencia} />
            <Plans {...conversionConfig.plans} />
            <Faq {...conversionConfig.faq} />
            <Cta {...conversionConfig.agendaUnaLlamada} />
            <WhatsAppFloat {...conversionConfig.whatsapp} />
            <Footer {...conversionConfig.footer} />
        </main>
    );
}