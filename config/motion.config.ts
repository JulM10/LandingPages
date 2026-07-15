import type { MotionConfig } from "@/types/motion.config.types";

// Motion Page Configuration
// Este archivo contiene toda la configuración para /app/page.tsx (Motion)

const nombre = "Quanty Ads";
const mail = "quantyads@gmail.com";
const numero = "5493584296560";

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

export const motionConfig: MotionConfig = {
  header: {
    logoSrc: "/quanty_wordmark.svg",
    nombre: nombre,
    links: [
      { label: "Inicio", href: "/"},
      { label: "Servicios", href: "#servicios" },
      { label: "Planes", href: "#planes" },
      { label: "Contacto", href: "#contacto" },
    ],
    textButton: { label: "Solicitar información", href: "#contacto" },
  },

  hero: {
    eyebrow: "Solo 3 cupos disponibles · Diagnóstico gratuito",
    title: "Tu próximo cliente",
    highlight: "ya está buscando lo que vos vendés.",
    subtitle:
      "Gestionamos tus campañas en Google y Meta con un único objetivo: que cada peso invertido te devuelva más clientes reales, no clics vacíos.",
    bullets: [
      "Más de 50 campañas gestionadas con éxito",
      "Equipo certificado en Google y Meta Ads",
      "Resultados comprobables en 30 días",
    ],
    form: {
      eyebrow: "Disponible ahora",
      title: "Pedí tu diagnóstico gratuito",
      subtitle:
        "Analizamos tu cuenta y te decimos exactamente qué cambiar para vender más. Respondemos en menos de 24h.",
      empresa: "Nombre de tu empresa",
      mail:"Mail",
      telefono:"Telefono",
      dropdownlabel: "¿Cuánto invertís en ads?",
      dropdownOptions: ["Menos de $500", "$500 - $1000", "$1000 - $5000", "$5000+"],
      cta: { label: "Enviar diagnóstico", href: "#" },
      ctasubtitle: "No compartimos tus datos. Respetamos tu privacidad.",
    },
  },

  metricas: {
    stats: [
      {
        value: "3×",
        label: "Retorno promedio en primeros 90 días",
        meta: "Clientes activos · Meta + Google",
      },
      { value: "#1", label: "Equipo certificado en Meta Ads" },
      { value: "#2", label: "Equipo certificado en Google Ads" },
      { value: "#2", label: "Equipo certificado en Google Ads" },
    ],
  },

  ticker: {
    companies: [
      { name: "iWoz Service", logo: "Servicio técnico iPhone" },
      { name: "iWoz Mayorista", logo: "Tecnología mayorista" },
      { name: "Union Tools", logo: "Microelectrónica" },
      { name: "Grupo Green", logo: "Habilitaciones municipales" },
      { name: "+11 clientes más", logo: "Córdoba, Argentina" },
    ],
  },

  services: {
    eyebrow: "Plataformas",
    title: "¿Qué hacemos?",
    subtitle:
      "Gestionamos publicidad paga en las 3 plataformas que mueven el 90% del presupuesto digital.",
    items: [
      {
        icon: "📘",
        tag: "#1 · Meta Ads",
        title: "Facebook & Instagram",
        description:
          "Captación y remarketing con audiencias segmentadas. Escalado rentable con creatividades optimizadas y full funnel.",
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
        description:
          "Captamos demanda activa. Conectamos tu negocio con personas que ya están buscando lo que vendés en Google.",
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
        description:
          "Alcance y performance con creatividad nativa. Testing ágil para escalar con métricas de conversión reales.",
        features: [
          "Creatividades nativas de alto impacto",
          "A/B testing continuo",
          "Segmentación por comportamiento",
          "Escalado por métricas de conversión",
        ],
      },
    ],
  },

  nosEligen: {
    eyebrow: "Nos eligen",
    title: "Negocios cordobeses que ya crecen con nosotros",
    company: [
      {
        logoSrc: "/isologo.png",
        name: "iWoz Service",
        description: "Servicio técnico exclusivo iPhone · venta de accesorios móviles",
        instagram: "iwozservice",
      },
      {
        logoSrc: "/isologo.png",
        name: "iWoz Mayorista",
        description: "Importador directo de accesorios y tecnología · venta mayorista",
        instagram: "iwozmayorista",
      },
      {
        logoSrc: "/isologo.png",
        name: "Union Tools",
        description: "Herramientas profesionales de microelectrónica · envíos a todo el país",
        instagram: "uniontoolsarg",
      },
      {
        logoSrc: "/isologo.png",
        name: "Grupo Green",
        description: "Habilitaciones municipales, higiene, seguridad y ambiente · Córdoba",
        instagram: "grupogreenok",
      },
    ],
  },

  quienesSomos: {
    eyebrow: "Quiénes somos",
    title: "Una agencia de dos personas. Con foco en una sola cosa.",
    subtitle:
      "Quanty Ads es una agencia de Paid Media especializada en adquisición, performance y escalado rentable. Trabajamos con negocios que ya venden y buscan transformar su inversión publicitaria en resultados medibles: leads calificados, ventas y crecimiento sostenido.",
    stat: [
      { title: "Performance antes que estética", description: "Los números mandan. Siempre." },
      { title: "Datos antes que opiniones", description: "Cada decisión tiene sustento real." },
      { title: "Optimizar antes de escalar", description: "Primero eficiencia, después volumen." },
      { title: "Sin fórmulas mágicas", description: "Transparencia y procesos claros." },
    ],
    people: [
      {
        name: "Luciano Carmine",
        imagesrc: "/isologo.png",
        subtitle: "Paid Media & Growth",
        description:
          "Lic. en Comunicación. Especialista en Meta Ads, branding y estrategia full funnel. Maneja la visión creativa y el mensaje de cada campaña.",
        bullets: ["Meta Certified"],
      },
      {
        name: "Kevin Brarda",
        imagesrc: "/isologo.png",
        subtitle: "Paid Search & Sales Performance",
        description:
          "Lic. en Marketing. Especialista en Google Ads, captación de demanda activa y optimización de conversiones para maximizar el retorno.",
        bullets: ["Google Ads Certified", "HubSpot"],
      },
    ],
  },

  plans: {
    eyebrow: "Planes de servicio",
    title: "Encontrá tu plan",
    subtitle:
      "Desde negocios que están empezando a publicar hasta marcas que quieren escalar multicanal.",
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
    ],
  },

  resultadosTestimonios: {
    eyebrow: "Resultados reales",
    title: "Lo que dicen los que ya están adentro",
    columnas: [
      {
        testimonio:
          "Antes tirábamos plata en ads sin saber si funcionaban. Con Quanty empezamos a ver leads reales en la primera semana.",
        name: "iWoz Service",
        description: "Servicio técnico iPhone · Córdoba",
      },
      {
        testimonio:
          "La transparencia es lo que más valoro. Sé exactamente qué pasa con mi inversión. Sin vueltas, sin excusas.",
        name: "Union Tools",
        description: "Microelectrónica · Córdoba",
      },
      {
        testimonio:
          "El costo por lead bajó casi a la mitad en el segundo mes. El diagnóstico inicial ya fue valiosísimo.",
        name: "Grupo Green",
        description: "Habilitaciones · Córdoba",
      },
    ],
  },

  roadmapconfig: {
    eyebrow: "Sin compromiso",
    title: "De cero a escalando en 3 semanas",
    subtitle:
      "Analizamos tu negocio y te decimos exactamente qué estrategia tiene más sentido para vos.",
    steps: [
      { number: "1", week: "Semana 1", name: "Auditoría + KPIs" },
      { number: "2", week: "Semana 2", name: "Estrategia + lanzamiento" },
      { number: "3", week: "Semana 3", name: "Escalado smart" },
    ],
    cta: { label: "Agendá tu diagnóstico gratuito", href: `mailto:${mail}` },
    secondaryCta: { label: "Escribir por WhatsApp", href: `https://wa.me/${numero}` },
    disclaimer: "Diagnóstico sin compromiso · @Quanty.Ads · Nueva Córdoba",
  },

  faq: {
    eyebrow: "Dudas frecuentes",
    title: "Antes de que preguntes",
    questions: [
      {
        question: "¿Cuánto necesito invertir para empezar?",
        answer:
          "Depende de tu rubro y objetivo. En el diagnóstico definimos un piso realista para que cada peso tenga sentido. Sin sorpresas.",
      },
      {
        question: "¿Tienen permanencia o contrato mínimo?",
        answer:
          "Trabajamos mes a mes. Si no ves valor, no seguís. Te quedás por resultados, no por contrato.",
      },
      {
        question: "¿En cuánto tiempo veo resultados?",
        answer:
          "Las primeras señales aparecen en 2 a 3 semanas. La optimización fuerte se nota entre el primer y el tercer mes.",
      },
      {
        question: "¿Trabajan solo con Google y Meta?",
        answer:
          "Sí. Nos especializamos en Google Ads y Meta Ads porque son las plataformas con mejor retorno para la mayoría de los negocios.",
      },
    ],
  },

  agendaUnaLlamada: {
    eyebrow: "Nueva Córdoba · +15 clientes activos",
    title: "¿Seguís pagando por ads que no te traen clientes?",
    subtitle:
      "En 30 minutos te mostramos exactamente qué está fallando en tus campañas y cómo arreglarlo. Gratis. Sin compromiso.",
    cta: { label: "Agendá el diagnóstico gratis →", href: "#form" },
    secondaryCta: { label: "Escribinos por WhatsApp", href: "#" },
    whatsappNumber: numero,
  },

  whatsapp: {
    message: "Hola, quiero más información sobre sus servicios de publicidad digital.",
    number: numero,
  },

  footer: {
    nombre: nombre,
    contacts: [
      { label: "Email", href: `mailto:${mail}` },
      { label: "WhatsApp", href: `https://wa.me/${numero}` },
    ],
    isologoSrc: "/isologo.png",
  },
};
