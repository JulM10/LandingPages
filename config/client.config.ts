import type { ClientConfig } from "@/types/minimal.config.types";

const nombre = "Quanty Ads";
const mail = "quantyads@gmail.com"
const numero = "5493584296560";

// SEO Metadata for Minimal Template
export const seoMetadata = {
  title: "Quanty Ads — Escalamos negocios con data",
  description: "Agencia de Paid Media en Córdoba. Meta Ads, Google Ads y TikTok Ads orientados a resultados reales.",
  siteName: "Quanty Ads",
  locale: "es_AR",
  ogImage: "/og-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  alt: "Quanty Ads — Agencia de Paid Media"
};

export const clientConfig: ClientConfig = {
    header: {
        logoSrc: "/quanty_wordmark.svg",
        nombre: nombre,
        links: [
            { label: "Inicio", href: "/"},
            { label: "Servicios", href: "#servicios" },
            { label: "Planes", href: "#planes" },
            { label: "Contacto", href: "#contacto" }
        ],
        textButton: { label: "Solicitar información", href: "#contacto" }
    },
    hero: {
        badge: "Paid Media · Performance · Escalado",
        headline: "Escalamos tu negocio con data",
        highlight: "data",
        subtitle: "Convertimos tu inversión publicitaria en leads calificados, ventas y crecimiento sostenido. Sin fórmulas mágicas. Solo estrategia, datos y optimización constante.",
        cta: { label: "Agendá tu diagnóstico gratuito", href: "#contacto" },
        secondaryCta: { label: "Hablar por WhatsApp", href: `https://wa.me/${numero}` },
        stats: [
            { value: "3×", label: "Retorno promedio en primeros 90 días", meta: "Clientes activos · Meta + Google" },
            { value: "#1", label: "Equipo certificado en Meta Ads" },
            { value: "#2", label: "Equipo certificado en Google Ads" },
            { value: "#3", label: "Equipo certificado en Analytics" },
        ]
    },
    services: {
        eyebrow: "Plataformas",
        title: "¿Qué hacemos?",
        subtitle: "Gestionamos publicidad paga en las 3 plataformas que mueven el 90% del presupuesto digital.",
        items: [
            {
                icon: "📘",
                tag: "#1 · Meta Ads",
                title: "Facebook & Instagram",
                description: "Captación y remarketing con audiencias segmentadas. Escalado rentable con creatividades optimizadas y full funnel.",
                features: [
                    "Campañas de leads calificados",
                    "Remarketing y retención",
                    "Branding + mensajería (WhatsApp)",
                    "Optimización de CPL y ROAS",
                ],
            },
            {
                icon: "🔍",
                tag: "#2 · Google Ads",
                title: "Search & Display",
                description: "Captamos demanda activa. Conectamos tu negocio con personas que ya están buscando lo que vendés en Google.",
                features: [
                    "Search: palabras clave de intención",
                    "Display y remarketing visual",
                    "Maximización de conversiones",
                    "Reducción de costo por resultado",
                ],
            },
            {
                icon: "🎵",
                tag: "#3 · TikTok Ads",
                title: "TikTok Advertising",
                description: "Alcance y performance con creatividad nativa. Testing ágil para escalar con métricas de conversión reales.",
                features: [
                    "Creatividades nativas de alto impacto",
                    "A/B testing continuo",
                    "Segmentación por comportamiento",
                    "Escalado por métricas de conversión",
                ],
            },
        ]
    },
    whatsapp: {
        message: "Hola, quiero más información sobre sus servicios de publicidad digital.",
        number: numero
    },
    plans: {
        eyebrow: "Planes de servicio",
        title: "Encontrá tu plan",
        subtitle: "Desde negocios que están empezando a publicar hasta marcas que quieren escalar multicanal.",
        items: [
            {
                icon: "🚀",
                name: "Plan 01",
                title: "Start Branding + WhatsApp",
                platform: "Meta Ads",
                features: [
                    "Campañas de branding en Meta",
                    "Mensajería a WhatsApp",
                    "Optimización básica",
                    "Reporte mensual",
                ],
            },
            {
                icon: "📈",
                name: "Plan 02",
                title: "Start Paid Media",
                platform: "Meta o Google",
                features: [
                    "Gestión de 1 plataforma completa",
                    "Estrategia de captación",
                    "Optimización activa",
                    "Reporte semanal",
                ],
            },
            {
                icon: "⚡",
                name: "Plan 03",
                title: "Performance Core",
                platform: "Meta + Google",
                featured: true,
                features: [
                    "Gestión full multicanal",
                    "Optimización avanzada",
                    "A/B testing continuo",
                    "Reporting accionable",
                ],
            },
            {
                icon: "🌐",
                name: "Plan 04",
                title: "Scale Premium",
                platform: "Meta + Google + TikTok",
                features: [
                    "Estrategia multicanal completa",
                    "TikTok Ads incluido",
                    "Full funnel advertising",
                    "Escalado inteligente",
                ],
            },
        ]
    },
    footer: {
        nombre: nombre,
        contacts: [
            { label: "Email", href: `mailto:${mail}` },
            { label: "WhatsApp", href: `https://wa.me/${numero}` }
        ],
        isologoSrc: "/isologo.png"
    },
    roadmapconfig: {
        eyebrow: "Sin compromiso",
        title: "¿Listo para escalar tu negocio?",
        subtitle: "Analizamos tu negocio y te decimos exactamente qué estrategia tiene más sentido para vos.",
        steps: [
            { number: "1", week: "Semana 1", name: "Auditoría + KPIs" },
            { number: "2", week: "Semana 2", name: "Estrategia + lanzamiento" },
            { number: "3", week: "Semana 3", name: "Escalado smart" },
        ],
        cta: { label: "Agendá tu diagnóstico gratuito", href: `mailto:${mail}` },
        secondaryCta: { label: "Escribir por WhatsApp", href: `https://wa.me/${numero}` },
        disclaimer: "Diagnóstico sin compromiso · @Quanty.Ads · Nueva Córdoba"
    }
};