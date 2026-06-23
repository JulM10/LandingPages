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

export default function ConversionPage() {
    return (
        <main className="bg-dark pt-20">
            <StickyBar cta={{ label: "Agendar ahora →", href: "#form" }} />
            <Header
                logoSrc="/quanty_wordmark.svg"
                nombre="Quanty Ads"
                textButton={{ label: "Solicitar información", href: "#contacto" }}
            />
            <Hero
                eyebrow="Agencia de Performance"
                title="Convierte tu inversión en publicidad en"
                highlight="clientes reales"
                subtitle="En Quanty Ads, nos especializamos en transformar tu presupuesto publicitario en clientes potenciales calificados. Olvídate de los leads fríos y las campañas ineficaces. Con nuestra estrategia basada en datos, cada peso que inviertas se traduce en resultados tangibles para tu negocio."
                bullets={[
                    "Leads calificados, no curiosos",
                    "Optimización continua que baja tu costo por resultado",
                    "Reportes claros, sin humo"
                ]}
                form={{
                    eyebrow: "¿Querés saber más?",
                    title: "¿Querés saber más?",
                    subtitle: "Dejanos tu numero y te contactamos por Whatsapp",
                    contacto: "Tu Whatsapp",
                    empresa: "Tu empresa o nombre",
                    dropdownlabel: "Cuanto invertís mensualmente en publicidad?",
                    dropdownOptions: ["$30.000", "$100.000", "Mas de $100.000"],
                    cta: { label: "Quiero más info", href: "#contacto" },
                    ctasubtitle: "pruebas"
                }}
            />
            <Metricas
                stats={[
                    { value: "3×", label: "Retorno promedio en 90 días" },
                    { value: "+50", label: "Campañas activas gestionadas" },
                    { value: "2", label: "Plataformas certificadas" },
                    { value: "24h", label: "Tiempo máximo de respuesta" },
                ]}
            />
            <QuienesSomos
                eyebrow="Quiénes somos"
                title="Una agencia de dos personas. Con foco en una sola cosa."
                subtitle="Quanty Ads es una agencia de Paid Media especializada en adquisición, performance y escalado rentable. Trabajamos con negocios que ya venden y buscan transformar su inversión publicitaria en resultados medibles: leads calificados, ventas y crecimiento sostenido."
                stat={[
                    { title: "Performance antes que estética", description: "Los números mandan. Siempre." },
                    { title: "Datos antes que opiniones", description: "Cada decisión tiene sustento real." },
                    { title: "Optimizar antes de escalar", description: "Primero eficiencia, después volumen." },
                    { title: "Procesos claros", description: "Sin falsas promesas. Sin fórmulas mágicas." },
                ]}
                people={[
                    {
                        name: "Luciano Carmine",
                        imagesrc: "/luciano.jpg",
                        subtitle: "Paid Media & Growth",
                        description: "Lic. en Comunicación. Especialista en Meta Ads, branding y estrategia full funnel. Maneja la visión creativa y el mensaje de cada campaña.",
                        bullets: ["Meta Certified"],
                    },
                    {
                        name: "Kevin Brarda",
                        imagesrc: "/kevin.jpg",
                        subtitle: "Paid Search & Sales Performance",
                        description: "Lic. en Marketing. Especialista en Google Ads, captación de demanda activa y optimización de conversiones para maximizar el retorno.",
                        bullets: ["Google Ads Certified", "HubSpot"],
                    },
                ]}
            />
            <NosEligen
                eyebrow="Nos eligen"
                title="Negocios que ya escalan con nosotros"
                company={[
                    {
                        logoSrc: "/quanty_wordmark.svg",
                        name: "iWoz Service",
                        description: "Servicio técnico exclusivo iPhone · venta de accesorios móviles",
                        instagram: "iwozservice",
                    },
                    {
                        logoSrc: "/quanty_wordmark.svg",
                        name: "iWoz Mayorista",
                        description: "Importador directo de accesorios y tecnología · venta mayorista",
                        instagram: "iwozmayorista",
                    },
                    {
                        logoSrc: "/quanty_wordmark.svg",
                        name: "Union Tools",
                        description: "Herramientas profesionales de microelectrónica · envíos a todo el país",
                        instagram: "uniontoolsarg",
                    },
                    {
                        logoSrc: "/quanty_wordmark.svg",
                        name: "Grupo Green",
                        description: "Habilitaciones municipales, higiene, seguridad y ambiente · Córdoba",
                        instagram: "grupogreenok",
                    },
                ]}
            />
            <Benefits
                eyebrow="Lo que ganás"
                title="Menos ruido, más resultados"
                items={[
                    { icon: "🎯", title: "Más leads calificados", description: "Gente lista para comprar, no curiosos." },
                    { icon: "⏱️", title: "Ahorro de tiempo", description: "Menos horas perdidas en llamadas sin interés." },
                    { icon: "📈", title: "Mejora en conversiones", description: "Más clientes potenciales se convierten en compradores." },
                    { icon: "📊", title: "Análisis detallado", description: "Informes claros sobre el rendimiento de tus campañas." },
                ]}
            />
            <Diferencias
                eyebrow="¿Por qué elegirnos?"
                title="Solo vs con Quanty"
                subtitle="No somos una agencia común. Nos enfocamos en lo que realmente importa para tu negocio."
                columnas={[
                    {
                        title: "Haciéndolo solo",
                        puntos: [
                            "Tirás presupuesto sin saber qué funciona",
                            "Leads fríos que no compran",
                            "Sin tiempo para optimizar campañas",
                            "Decisiones a ciegas, sin datos"
                        ],
                        destacado: false
                    },
                    {
                        title: "Con Quanty",
                        puntos: [
                            "Cada peso medido y optimizado",
                            "Leads calificados listos para comprar",
                            "Optimización continua todos los días",
                            "Reportes claros y decisiones con datos"
                        ],
                        destacado: true
                    }
                ]}
            />
            <Plans
                eyebrow="Planes de servicio"
                title="Encontrá el plan para tu negocio"
                subtitle="Mes a mes. Sin permanencia. Te quedás por resultados."
                items={[
                    {
                        name: "Entrada", title: "Start Branding + WhatsApp", platform: "Meta Ads",
                        features: ["Branding en Facebook e Instagram", "Mensajería por WhatsApp", "Ideal para empezar a generar contactos"]
                    },
                    {
                        name: "Esencial", title: "Start Paid Media", platform: "Meta o Google",
                        features: ["Gestión completa de 1 plataforma", "Estrategia, creativos y optimización", "Reporting mensual"]
                    },
                    {
                        name: "Recomendado", title: "Performance Core", platform: "Meta + Google", featured: true,
                        features: ["Gestión full en ambas plataformas", "Optimización avanzada multicanal", "A/B testing continuo", "Optimización de CPL y ROAS"]
                    },
                    {
                        name: "Premium", title: "Scale Premium", platform: "Meta + Google + TikTok",
                        features: ["Estrategia multicanal completa", "Full funnel advertising", "Para negocios que ya escalan"]
                    },
                ]}
            />
            <Faq
                eyebrow="Dudas frecuentes"
                title="Antes de que preguntes"
                questions={[
                    {
                        question: "¿Cuánto necesito invertir para empezar?",
                        answer: "Depende de tu rubro y objetivo. En el diagnóstico definimos un piso realista para que cada peso tenga sentido. Sin sorpresas.",
                    },
                    {
                        question: "¿Tienen permanencia o contrato mínimo?",
                        answer: "Trabajamos mes a mes. Si no ves valor, no seguís. Te quedás por resultados, no por contrato.",
                    },
                    {
                        question: "¿En cuánto tiempo veo resultados?",
                        answer: "Las primeras señales aparecen en 2 a 3 semanas. La optimización fuerte se nota entre el primer y el tercer mes.",
                    },
                    {
                        question: "¿Trabajan solo con Google y Meta?",
                        answer: "Sí. Nos especializamos en Google Ads y Meta Ads porque son las plataformas con mejor retorno para la mayoría de los negocios. Hacer pocas cosas bien rinde más que hacer todo a medias.",
                    },
                ]}
            />
            <Cta
                eyebrow="Nueva Córdoba · +15 clientes activos"
                title="¿Listo para que tus ads trabajen de verdad?"
                subtitle="Analizamos tu cuenta y te decimos exactamente qué cambiar. Gratis y sin compromiso."
                cta={{ label: "Agendá una llamada gratis →", href: "#form" }}
            />
            <WhatsAppFloat message="Hola, me gustaría saber más sobre sus servicios." number="549112345678" />
            <Footer
                isologoSrc="/isologo.png"
                nombre="Quanty Ads"
                contacts={[
                    {
                        label: "nombre",
                        href: "google.com",
                    }
                ]}
            />
        </main>
    );
}