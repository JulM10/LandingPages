# Madero Webs — Template de Landing Pages

Sistema de **landing pages template, config-driven**: un único codebase que se adapta a cada cliente cambiando sus datos. Los componentes solo renderizan; la información vive afuera (props / config). Cambiar de cliente = cambiar los datos, no el código.

**Primer cliente:** [Quanty Ads](https://instagram.com/quanty.ads) — agencia de Paid Media (Meta, Google y TikTok Ads) en Córdoba, Argentina.

---

## Stack

| Herramienta | Uso |
|-------------|-----|
| **Next.js 16** (App Router) | Framework. Pre-renderiza HTML para buen SEO. |
| **TypeScript** | Tipado de props y datos. |
| **Tailwind CSS v4** | Estilos. Config CSS-first con `@theme` en `globals.css` (sin `tailwind.config`). |
| **Framer Motion** | Animaciones (demo `motion` y página 404). |
| **next/font** | Fuentes optimizadas (Inter, Montserrat, Bebas Neue, DM Sans). |
| **@next/third-parties** + scripts propios | Google Tag Manager, GA4 y Meta Pixel (condicionales por env var). |
| **@vercel/analytics** + **@vercel/speed-insights** | Métricas de uso y performance en producción. |
| **@web3forms/react** | Envío de formularios de contacto. |

---

## Cómo correr

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción (corre TypeScript + genera estáticos)
npm start        # sirve el build
npm run lint     # ESLint
npm run cache    # borra .next
```

Variables de entorno (`.env.local`):

```
URL_DOMAIN_JMWEB=https://maderowebs.com.ar        # base para metadata/OG
NEXT_PUBLIC_GTM_ID_JMWEB=GTM-XXXXXXX               # opcional: Google Tag Manager
NEXT_PUBLIC_GA4_ID_JMWEB=G-XXXXXXX                 # opcional: Google Analytics 4
NEXT_PUBLIC_META_PIXEL_ID_JMWEB=XXXXXXXXXX         # opcional: Meta Pixel
```

---

## Páginas

Cada ruta es un **demo independiente**: tiene su propio set de componentes (`components/<demo>/`), su propio config (`config/<demo>.config.ts`) y sus propios tipos (`types/<demo>.config.types.ts`). No comparten un `components/ui/` global — cada estilo tiene su propio lenguaje visual.

| Ruta | Archivo | Estilo | Para qué cliente |
|------|---------|--------|-------------------|
| `/` | `app/page.tsx` | Hoy muestra el demo **motion** (landing completa de Quanty Ads, con stats, testimonios, roadmap y FAQ animados) | — |
| `/minimal` | `app/minimal/page.tsx` | Premium, oscuro, mucho aire. Header, Hero, Services, Plans, CTA con process strip, Footer | Servicios profesionales, marcas premium |
| `/conversion` | `app/conversion/page.tsx` | Direct response: StickyBar, Hero, métricas, diferenciales, Plans, FAQ, CTA fuerte | E-commerce, lead gen, performance |
| `/motion` | `app/motion/page.tsx` | Mismo contenido que `/` pero accesible por su propia ruta — animado con Framer Motion: Header, Hero, Stats, Clients, Plans, Testimonials, Roadmap, FAQ | Tech, startups, marcas jóvenes |
| `/saas` | `app/saas/page.tsx` | Producto digital: demo de producto, problema/solución, integraciones, workflow, pricing, roadmap | Software, herramientas, productos digitales |
| `/portfolio` | `app/portfolio/page.tsx` | Agencia creativa: galería de proyectos, proceso, testimonios, contacto | Estudios creativos, freelancers, agencias |
| `/demos` | `app/demos/page.tsx` | Página de presentación simple ("Demo de Madero Webs") con botones a cada uno de los demos de arriba | Uso interno: mostrarle al cliente el catálogo completo |

Todas las páginas usan, además, componentes transversales en cada demo: `Header`, `Footer`, `WhatsAppFloat` (botón flotante de WhatsApp) y, en la mayoría, `StickyBar` (barra fija con CTA).

---

## Arquitectura — Config-Driven

Cada demo importa su config (`config/*.config.ts`) y pasa los datos como props a sus componentes. Los componentes no conocen el contenido: lo reciben y lo renderizan. Para adaptar un demo a un cliente real, se cambian los datos del config, no el código de los componentes.

**Composición por capas (dentro de cada `components/<demo>/`):**

- **`ui/`** — átomos reutilizables: `Button`, `StatCard`, `ServiceCard`, `PlanCard`.
- **`sections/`** — bloques de la página, compuestos con átomos: `Hero`, `Stats`, `Services`, `Plans`, `Cta`, etc.
- **`layout/`** — estructura global presente en toda página: `Header`, `Footer`, `WhatsAppFloat`, `StickyBar`.

```
app/
├── layout.tsx           # fuentes, metadata SEO, GTM/GA4/Meta Pixel
├── page.tsx             # home (hoy: demo motion)
├── globals.css          # @theme con los tokens de marca
├── not-found.tsx         # 404 animado
├── demos/page.tsx        # catálogo simple con links a cada demo
├── minimal/page.tsx
├── conversion/page.tsx
├── saas/page.tsx
└── portfolio/page.tsx

components/
└── <demo>/               # minimal · conversion · motion · saas · portfolio
    ├── layout/   → Header · Footer · WhatsAppFloat · StickyBar
    ├── sections/ → Hero · Services · Plans · Cta · ...
    └── ui/       → Button · StatCard · ServiceCard · PlanCard

config/    → <demo>.config.ts (datos de cada demo)
types/     → <demo>.config.types.ts (tipos de cada config)
lib/       → analytics.ts · useInView.ts · useTimeTracking.ts
```

Principios aplicados: **mobile-first** (estilos base para mobile, `md:`/`lg:` para escalar), **accesibilidad** (semántica HTML, `aria-*`, contraste WCAG) y **DRY** (átomos compartidos dentro de cada demo).

---

## Analytics

Tres capas, todas centralizadas en `app/layout.tsx` y `lib/`:

1. **Scripts de tracking** (`app/layout.tsx`) — GTM, GA4 y Meta Pixel se inyectan condicionalmente: cada uno solo se carga si su env var está seteada (`NEXT_PUBLIC_GTM_ID_JMWEB`, `NEXT_PUBLIC_GA4_ID_JMWEB`, `NEXT_PUBLIC_META_PIXEL_ID_JMWEB`). Si no hay env var, no se inyecta nada (sin errores, sin scripts vacíos).
2. **`lib/analytics.ts`** — helpers tipados que centralizan el envío de eventos a `gtag` (GA4/GTM) y `fbq` (Meta Pixel) en un solo lugar, para no repetir `window.gtag(...)` en cada componente:
   - `trackGAEvent` / `trackPixelEvent` — primitivas genéricas.
   - `trackFormSubmit`, `trackCTAClick`, `trackSocialClick`, `trackSectionView`, `trackFAQInteraction`, `trackFeatureInteraction`, `trackPlanSelection`, `trackTestimonialInteraction`, `trackRoadmapInteraction` — eventos de producto ya mapeados a GA4 + Meta Pixel a la vez.
   - `useAnalytics()` — hook que devuelve todas las funciones anteriores, para usar dentro de componentes cliente.
3. **`lib/useTimeTracking.ts`** — hook que dispara `page_time_30s` / `page_time_120s` / `page_time_300s` en GA4 según el tiempo que el usuario permanece en la página. Hoy solo está enganchado en `/saas` (`app/saas/page.tsx`).
4. **`@vercel/analytics`** + **`@vercel/speed-insights`** — `<Analytics />` y `<SpeedInsights />` se montan una sola vez en `app/layout.tsx` (no hay duplicados en ningún otro layout o página).

**Dónde se usa `trackFormSubmit` hoy:** `components/conversion/sections/Hero.tsx`, `components/motion/sections/Hero.tsx`, `components/portfolio/sections/Contact.tsx`. El resto de los eventos (`trackCTAClick`, `trackFAQInteraction`, etc.) están repartidos en casi todos los componentes de sección de los 5 demos.

**Pendiente / huecos detectados:**
- No existe `.env.example` — quien clone el repo no tiene referencia de qué env vars cargar sin leer `app/layout.tsx`.
- Las guías `GTM_EVENTS_CREATED.md`, `GTM_GA4_SETUP_GUIDE.md` y `META_PIXEL_SETUP_GUIDE.md` (cómo crear el contenedor de GTM, mapear los eventos custom en GA4 y configurar el Pixel paso a paso) ya no están en el repo — esta sección del README es la única documentación de analytics que queda.
- `useTimeTracking` solo está cableado en `/saas`; si se quiere medir tiempo en página en los demás demos hay que importarlo ahí también.

---

## Sistema de marca — Quanty Ads (datos de ejemplo)

**Colores** (definidos en `app/globals.css` con `@theme`):

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#2ba9f7` | Botones, links, acentos |
| `accent` | `#18b8cc` | Highlights, detalles |
| `dark` | `#0b1c2d` | Fondos oscuros (hero, CTA) |
| `light` | `#f4f6f8` | Fondos de secciones claras |
| `muted` | `#6b7280` | Texto secundario |
| `success` | `#2ecc71` | Estados positivos, checks |

**Fuentes:** Inter (`font-heading`, títulos) · Montserrat (`font-body`, cuerpo) · Bebas Neue y DM Sans disponibles como variantes.

**Contacto (demo Quanty Ads):** quantyads@gmail.com · [@Quanty.Ads](https://instagram.com/quanty.ads) · WhatsApp +54 358 429 6560 · Nueva Córdoba.

---

## Estado actual

- [x] Demos `minimal`, `conversion`, `motion`, `saas`, `portfolio` — completos
- [x] Página `/demos` — catálogo de presentación para mostrarle a un cliente potencial todos los estilos disponibles
- [x] SEO global (metadata + imagen Open Graph) y analytics (GTM, GA4, Meta Pixel, Vercel Analytics/Speed Insights)
- [x] Mobile-first + accesibilidad en todos los demos
- [ ] Favicon propio (hoy usa el default de Next)
- [ ] Formulario de contacto conectado (Web3Forms está como dependencia, falta cablearlo en los CTA)
- [ ] Dominio real en `URL_DOMAIN_JMWEB`
- [ ] Deploy en Vercel

---

## Roadmap

1. ✅ Setup (Next, Tailwind, fuentes, analytics)
2. ✅ Construcción de los 5 demos (`minimal`, `conversion`, `motion`, `saas`, `portfolio`)
3. ✅ Página `/demos` de presentación
4. 🔵 Pulido y deploy (favicon, dominio, formulario, Vercel)
5. ⬜ Sistema multi-paleta por cliente (clases CSS sobre los tokens de `@theme`, ej. `.theme-conversion { --color-primary: ... }`, aplicadas con `<main className="theme-x">`)
