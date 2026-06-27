import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo · Madero Webs",
  description: "Catálogo de landing pages demo de Madero Webs.",
};

const demos = [
  {
    href: "/minimal",
    nombre: "Minimal",
    descripcion: "Estilo premium, limpio y oscuro. Ideal para servicios profesionales y marcas premium.",
  },
  {
    href: "/conversion",
    nombre: "Conversion",
    descripcion: "Direct response, orientada a la venta. Ideal para e-commerce, lead gen y performance.",
  },
  {
    href: "/motion",
    nombre: "Motion",
    descripcion: "Animada con Framer Motion. Ideal para tech, startups y marcas jóvenes.",
  },
  {
    href: "/saas",
    nombre: "Saas",
    descripcion: "Producto digital con demo, integraciones y pricing. Ideal para software y herramientas.",
  },
  {
    href: "/portfolio",
    nombre: "Portfolio",
    descripcion: "Agencia creativa con galería y proceso. Ideal para estudios y freelancers.",
  },
];

const EMAIL = "juliomadero21@gmail.com";
const PHONE = "5493544550382";
const GITHUB_URL = "https://github.com/JulM10";
const LINKEDIN_URL = "https://www.linkedin.com/in/julio-madero-40374b16a/";

export default function DemosPage() {
  return (
    <div className="madero-demo min-h-screen bg-[var(--bg-dark)] text-[var(--color-light)]">
      <style>{`
        .madero-demo {
          --color-primary: #10b981;
          --color-primary-dark: #059669;
          --color-secondary: #14b8a6;
          --color-accent: #34d399;

          --bg-dark: #0f1419;
          --bg-darker: #060e0c;
          --bg-secondary: #1a2e2a;
          --bg-accent-light: #0a1f1b;
          --bg-accent-medium: #0c1c18;
          --bg-accent-dark: #112620;

          --color-light: #ffffff;
          --color-muted: #a7f3d0;
          --color-text-secondary: #14b8a6;

          --background: #ffffff;
          --foreground: #171717;

          --badge-bg: rgba(16, 185, 129, 0.15);
          --badge-border: rgba(16, 185, 129, 0.3);
          --whatsapp-green: #25D366;
          --whatsapp-green-dark: #20BA5E;
        }
        .madero-demo .whatsapp-float {
          background-color: var(--whatsapp-green);
        }
        .madero-demo .whatsapp-float:hover {
          background-color: var(--whatsapp-green-dark);
        }
      `}</style>

      {/* Header */}
      <header className="border-b border-[var(--bg-secondary)] px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-xl font-bold text-[var(--color-primary)]">
              Julio Madero
            </p>
            <p className="font-body text-sm text-[var(--color-text-secondary)]">
              Freelancer Web Developer · Córdoba, Argentina
            </p>
          </div>

          <nav aria-label="Contacto" className="flex items-center gap-5">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-[var(--color-light)] transition hover:text-[var(--color-primary)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V9h3Zm-1.5-11.3A1.7 1.7 0 1 1 8.2 6a1.7 1.7 0 0 1-1.7 1.7ZM20 19h-3v-5.2c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8V19h-3s.1-9 0-10h3v1.4a3 3 0 0 1 2.7-1.5c2 0 3.4 1.3 3.4 4.1Z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-[var(--color-light)] transition hover:text-[var(--color-primary)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.3 3.5.99.1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.33 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.56 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.82 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 0Z" />
              </svg>
              GitHub
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 font-body text-sm text-[var(--color-light)] transition hover:text-[var(--color-primary)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm19.4 2H2.6L12 13Zm-19.4 1.5V18h20V7.5l-9.4 7.05a1 1 0 0 1-1.2 0Z" />
              </svg>
              Email
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-col items-center px-6 py-20">
        <div className="max-w-3xl w-full text-center">
          <span className="inline-block rounded-full border px-4 py-1 font-body text-sm uppercase tracking-widest text-[var(--color-accent)]"
            style={{ backgroundColor: "var(--badge-bg)", borderColor: "var(--badge-border)" }}
          >
            Madero Webs
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-4 mb-4">
            Demo de Madero Webs
          </h1>
          <p className="font-body text-[var(--color-muted)] text-lg max-w-xl mx-auto">
            Estas son nuestras páginas. Elegí un estilo para ver cómo se ve una
            landing terminada según el tipo de negocio.
          </p>
        </div>

        <nav
          aria-label="Páginas demo"
          className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-2"
        >
          {demos.map((demo) => (
            <Link
              key={demo.href}
              href={demo.href}
              className="group flex flex-col gap-2 rounded-xl border p-6 text-left transition hover:border-[var(--color-primary)]"
              style={{ borderColor: "var(--bg-secondary)", backgroundColor: "var(--bg-accent-light)" }}
            >
              <span className="font-heading text-xl font-semibold text-[var(--color-light)] group-hover:text-[var(--color-primary)]">
                {demo.nombre}
              </span>
              <span className="font-body text-sm text-[var(--color-muted)]">
                {demo.descripcion}
              </span>
              <span className="font-body text-sm text-[var(--color-primary)] mt-2">
                Ver demo →
              </span>
            </Link>
          ))}
        </nav>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--bg-secondary)] px-6 py-6">
        <p className="font-body text-sm text-[var(--color-muted)] text-center">
          © 2026 Julio Madero - Freelancer Web Developer. Todos los derechos reservados.
        </p>
      </footer>

      {/* WhatsApp flotante */}
      <a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float fixed bottom-6 right-6 flex items-center gap-2 rounded-full px-5 py-3 font-body text-sm font-semibold text-white shadow-lg transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0Zm0 21.8c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.6.9.9-3.5-.2-.4A9.7 9.7 0 0 1 2.2 12c0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.1-.5-.1-.2-.7-1.7-.9-2.1-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 1.7 2.6 4.2 3.6 2 .8 2.4.6 2.9.6.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1Z" />
        </svg>
        Contactar
      </a>
    </div>
  );
}
