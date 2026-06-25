import type { ConversionConfig } from "@/types/conversion.config.types";

const nombre = "Quanty Ads";
const mail = "quantyads@gmail.com";
const numero = "5493584296560";
const whatsappMessage = "Hola, quiero más información sobre los servicios de Paid Media.";

export const conversionConfig: ConversionConfig = {
  header: {
    logoSrc: "/quanty_wordmark.svg",
    nombre: nombre,
    links: [
      { label: "Servicios", href: "#benefits" },
      { label: "Planes", href: "#plans" },
      { label: "Contacto", href: "#agenda" },
    ],
    textButton: { label: "Solicitar información", href: "#agenda" },
  },
  hero: {
    eyebrow: "Agencia de Paid Media",
    title: "Escalamos tu negocio con data",
    subtitle: "Convertimos tu inversión publicitaria en leads calificados, ventas y crecimiento sostenido.",
    highlight: "data",
    bullets: [
      "3× retorno promedio en primeros 90 días",
      "Equipo certificado en Meta, Google y Analytics",
      "Estrategia personalizada para tu negocio",
    ],
    form: {
      eyebrow: "Diagnóstico Gratuito",
      title: "Cuéntanos sobre tu negocio",
      subtitle: "Completa el formulario y recibirás una propuesta personalizada",
      empresa: "Nombre de la empresa",
      contacto: "Tu nombre",
      dropdownlabel: "Presupuesto mensual",
      dropdownOptions: [
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000 - $25,000",
        "$25,000+",
      ],
      cta: { label: "Solicitar diagnóstico", href: "#" },
      ctasubtitle: "Tu información es privada y segura",
    },
  },
  metricas: {
    stats: [
      { value: "3×", label: "Retorno promedio", meta: "En primeros 90 días" },
      { value: "+500", label: "Clientes activos", meta: "Desde 2019" },
      { value: "2.4M", label: "En inversión gestionada", meta: "Anualmente" },
    ],
  },
  quienesSomos: {
    eyebrow: "Sobre Nosotros",
    title: "¿Quiénes somos?",
    subtitle: "Somos expertos en Paid Media con años de experiencia optimizando presupuestos.",
    stat: [
      { title: "500+", description: "Clientes satisfechos" },
      { title: "2.4M", description: "En inversión gestionada anualmente" },
      { title: "3×", description: "ROI promedio en 90 días" },
    ],
    people: [
      {
        name: "Juan Pérez",
        imagesrc: "/luciano.png",
        subtitle: "Head of Paid Media",
        description: "Especialista en Meta Ads con 10+ años de experiencia",
        bullets: ["Meta Certified Partner", "Google Certified", "Analytics Certified"],
      },
      {
        name: "María García",
        imagesrc: "/kevin.png",
        subtitle: "Director de Estrategia",
        description: "Experto en estrategia de conversión y growth hacking",
        bullets: ["Performance Marketing", "Data Analysis", "Growth Strategy"],
      },
    ],
  },
  benefits: {
    eyebrow: "Servicios",
    title: "¿Qué hacemos?",
    subtitle: "Gestionamos publicidad paga en las 3 plataformas que mueven el 90% del presupuesto digital.",
    items: [
      {
        icon: "📘",
        title: "Meta Ads",
        description: "Publicidad en Facebook, Instagram y Audience Network con targeting avanzado",
      },
      {
        icon: "🔍",
        title: "Google Ads",
        description: "Search, Display y Shopping ads optimizadas para conversiones máximas",
      },
      {
        icon: "🎬",
        title: "TikTok Ads",
        description: "Campañas creativas en TikTok para alcanzar audiencias jóvenes",
      },
    ],
  },
  diferencia: {
    eyebrow: "Ventajas",
    title: "¿Por qué elegirnos?",
    subtitle: "Nos diferenciamos por nuestro enfoque data-driven y resultados comprobados",
    columnas: [
      {
        title: "Nosotros",
        puntos: [
          "Enfoque 100% en resultados (ROAS)",
          "Equipo certificado y especializado",
          "Reportes transparentes semanales",
          "Optimización constante",
          "Respuesta en menos de 24 horas",
        ],
        destacado: true,
      },
      {
        title: "Competencia",
        puntos: [
          "Enfoque en impresiones",
          "Equipos generales",
          "Reportes mensuales básicos",
          "Sin optimización",
          "Respuesta en días",
        ],
      },
    ],
  },
  plans: {
    eyebrow: "Planes",
    title: "Elige tu plan",
    subtitle: "Opciones flexible para empresas de todo tamaño",
    items: [
      {
        name: "Starter",
        title: "Para pequeños negocios",
        platform: "Meta Ads",
        features: [
          "Hasta $5,000 mensual en presupuesto",
          "1 plataforma (Meta)",
          "Reportes semanales",
          "Optimización básica",
        ],
      },
      {
        name: "Professional",
        title: "Para empresas en crecimiento",
        platform: "Meta + Google",
        features: [
          "Hasta $25,000 mensual en presupuesto",
          "2 plataformas (Meta + Google)",
          "Reportes semanales detallados",
          "Optimización avanzada",
        ],
        featured: true,
      },
      {
        name: "Enterprise",
        title: "Para grandes negocios",
        platform: "Meta + Google + TikTok",
        features: [
          "Presupuesto ilimitado",
          "3 plataformas (Meta + Google + TikTok)",
          "Reportes diarios personalizados",
          "Estrategia custom",
        ],
      },
    ],
  },
  nosEligen: {
    eyebrow: "Clientes",
    title: "Quiénes nos eligen",
    subtitle: "Empresas líderes confían en nuestro expertise",
    company: [
      {
        logoSrc: "/gallery-1.png",
        name: "TechStartup",
        description: "Incrementaron conversiones 300%",
        instagram: "@techstartup",
      },
      {
        logoSrc: "/gallery-2.png",
        name: "EcommercePro",
        description: "Reducieron CAC en 40%",
        instagram: "@ecommercepro",
      },
      {
        logoSrc: "/gallery-3.png",
        name: "ServiceCorp",
        description: "Triplicaron leads calificados",
        instagram: "@servicecorp",
      },
    ],
  },
  roadmapConfig: {
    eyebrow: "Proceso",
    title: "Cómo trabajamos",
    subtitle: "4 semanas para resultados comprobados",
    steps: [
      {
        number: "1",
        week: "Semana 1",
        name: "Auditoría",
        description: "Análisis profundo de tu negocio y competencia",
      },
      {
        number: "2",
        week: "Semana 2",
        name: "Estrategia",
        description: "Diseñamos tu estrategia personalizada",
      },
      {
        number: "3",
        week: "Semana 3",
        name: "Ejecución",
        description: "Lanzamos campañas optimizadas",
      },
      {
        number: "4",
        week: "Semana 4",
        name: "Resultados",
        description: "Primeros resultados y optimizaciones",
      },
    ],
    cta: { label: "Empezar ahora", href: "#agenda" },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    subtitle: "Resolvemos tus dudas",
    questions: [
      {
        question: "¿Cuál es el presupuesto mínimo?",
        answer: "El presupuesto mínimo es de $1,000 USD mensuales. Para presupuestos menores, ofrecemos consultoría a proyecto.",
      },
      {
        question: "¿En cuánto tiempo veo resultados?",
        answer: "Típicamente entre 2-4 semanas. Algunos clientes ven resultados en la primera semana, pero depende de tu industria.",
      },
      {
        question: "¿Puedo cambiar de plan?",
        answer: "Sí, puedes cambiar de plan en cualquier momento. Ajustaremos tu presupuesto y estrategia según necesites.",
      },
      {
        question: "¿Qué incluye el servicio?",
        answer: "Gestión completa de campañas, optimización diaria, reportes semanales y estrategia personalizada.",
      },
    ],
  },
  agendaUnaLlamada: {
    eyebrow: "Contacto",
    title: "Agenda tu consulta gratuita",
    subtitle: "30 minutos sin compromiso para definir tu estrategia",
    cta: { label: "Agendar ahora", href: "#" },
    secondaryCta: { label: "Hablar por WhatsApp", href: `https://wa.me/${numero}?text=${encodeURIComponent(whatsappMessage)}` },
    whatsappNumber: numero,
  },
  whatsapp: {
    message: whatsappMessage,
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
