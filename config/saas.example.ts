import type { SaaSConfig } from '@/types/config.types';

export const saaExampleConfig: SaaSConfig = {
  header: {
    logoSrc: '/quanty_wordmark.svg',
    nombre: 'SaaS Template',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Docs', href: '#docs' },
    ],
    textButton: { label: 'Get Started', href: '#cta' },
  },

  hero: {
    badge: "Introducing SaaS Template",
    headline: "The platform for modern teams",
    highlight: "built for scale",
    subtitle: "Streamline your workflow with our all-in-one solution. Trusted by 1000+ companies.",
    cta: { label: "Start Free Trial", href: "#cta" },
    secondaryCta: { label: "Watch Demo", href: "#" },
  },

  problemSolution: {
    eyebrow: "The Problem",
    title: "Your team is drowning in tools",
    problems: [
      {
        title: "Context Switching",
        description: "Jump between 5+ apps to get work done",
        icon: "🔄",
      },
      {
        title: "Data Silos",
        description: "Information scattered across platforms",
        icon: "📊",
      },
      {
        title: "Wasted Time",
        description: "Manual tasks eating up 20% of your day",
        icon: "⏰",
      },
    ],
    solution: "One unified platform that brings everything together.",
  },

  features: {
    eyebrow: "Powerful Features",
    title: "Everything you need",
    subtitle: "Built for teams that move fast",
    items: [
      {
        icon: "🚀",
        tag: "Collaboration",
        title: "Real-time Collaboration",
        description: "Work together seamlessly with instant updates",
        features: ["Live editing", "Comments", "Version history"],
      },
      {
        icon: "📈",
        tag: "Analytics",
        title: "Advanced Analytics",
        description: "Track metrics that matter to your business",
        features: ["Custom dashboards", "Real-time reports", "Data export"],
      },
      {
        icon: "🔐",
        tag: "Security",
        title: "Enterprise Security",
        description: "SOC 2, GDPR, and ISO 27001 compliant",
        features: ["256-bit encryption", "SSO", "Audit logs"],
      },
      {
        icon: "⚡",
        tag: "Performance",
        title: "Lightning Fast",
        description: "Sub-second response times, always",
        features: ["99.99% uptime", "CDN global", "Auto-scaling"],
      },
      {
        icon: "🧠",
        tag: "AI",
        title: "AI-Powered Insights",
        description: "Automated recommendations to boost productivity",
        features: ["Smart suggestions", "ML algorithms", "Predictive"],
      },
      {
        icon: "🔗",
        tag: "Integrations",
        title: "1000+ Integrations",
        description: "Connect your entire tech stack",
        features: ["Zapier", "Webhooks", "API"],
      },
    ],
  },

  workflow: {
    eyebrow: "How It Works",
    title: "Get started in 3 steps",
    steps: [
      {
        number: 1,
        title: "Sign Up",
        description: "Create your account in less than 2 minutes",
        icon: "📝",
      },
      {
        number: 2,
        title: "Invite Your Team",
        description: "Add team members and set permissions",
        icon: "👥",
      },
      {
        number: 3,
        title: "Start Shipping",
        description: "Begin collaborating and shipping faster",
        icon: "🚢",
      },
    ],
  },

  integrations: {
    eyebrow: "Integrations",
    title: "Connect your tools",
    logos: [
      "Slack",
      "GitHub",
      "Google Workspace",
      "Zapier",
      "Stripe",
      "Salesforce",
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "Trusted by teams worldwide",
    columnas: [
      {
        testimonio:
          "This platform cut our operational overhead by 40%. Best investment we made this year.",
        name: "Sarah Chen",
        description: "CTO at TechCorp",
      },
      {
        testimonio:
          "The team loved it immediately. Implementation took just 1 week and ROI in 30 days.",
        name: "Marcus Johnson",
        description: "Head of Operations at ScaleUp Inc",
      },
      {
        testimonio:
          "Finally a platform that scales with us. Support is exceptional.",
        name: "Elena Rodriguez",
        description: "Founder of Startup Labs",
      },
    ],
  },

  plans: {
    eyebrow: "Simple Pricing",
    title: "Pick your plan",
    subtitle: "All plans include a 14-day free trial",
    items: [
      {
        icon: "⭐",
        name: "Starter",
        title: "For small teams",
        platform: "Up to 5 users",
        features: [
          "Core features",
          "5 GB storage",
          "Email support",
          "Basic integrations",
        ],
      },
      {
        icon: "🚀",
        name: "Professional",
        title: "For growing teams",
        platform: "Up to 50 users",
        features: [
          "Advanced features",
          "100 GB storage",
          "Priority support",
          "Unlimited integrations",
          "Custom workflows",
        ],
        featured: true,
      },
      {
        icon: "👑",
        name: "Enterprise",
        title: "For enterprises",
        platform: "Unlimited users",
        features: [
          "All features",
          "Unlimited storage",
          "Dedicated support",
          "SSO & SAML",
          "Advanced security",
          "Custom contracts",
        ],
      },
    ],
  },

  trust: {
    badges: [
      { icon: "🔒", label: "SOC 2 Type II" },
      { icon: "🌍", label: "GDPR Compliant" },
      { icon: "📋", label: "ISO 27001" },
    ],
    stats: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "256-bit", label: "Encryption" },
      { value: "3", label: "Data Centers" },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    questions: [
      {
        question: "Can I try before I buy?",
        answer: "Yes! All plans include a 14-day free trial with full access.",
      },
      {
        question: "How long does setup take?",
        answer: "Usually 1-2 hours for a small team. Our onboarding team can help.",
      },
      {
        question: "Do you offer discounts for annual billing?",
        answer: "Yes, we offer 20% off when you pay annually.",
      },
      {
        question: "What about data security?",
        answer: "We're SOC 2 Type II certified with 256-bit encryption and 99.99% uptime.",
      },
    ],
  },

  cta: {
    eyebrow: "Ready to ship faster?",
    title: "Join 1000+ teams using our platform",
    subtitle: "14-day free trial. No credit card required.",
    cta: { label: "Start Free Trial", href: "#" },
  },

  footer: {
    nombre: "SaaS Template",
    contacts: [
      { label: "Email", href: "mailto:hello@saas.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
    isologoSrc: "/quanty_wordmark.svg",
  },
};
