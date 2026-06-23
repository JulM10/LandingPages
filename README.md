# Quanty Landing — Template de Landing Pages

Sistema de **landing pages template, config-driven**: un único codebase que se adapta a cada cliente cambiando sus datos. Los componentes solo renderizan; la información vive afuera (props / config). Cambiar de cliente = cambiar los datos, no el código.

**Primer cliente:** [Quanty Ads](https://instagram.com/quanty.ads) — agencia de Paid Media (Meta, Google y TikTok Ads) en Córdoba, Argentina.

---

## Stack

| Herramienta | Uso |
|-------------|-----|
| **Next.js 16** (App Router) | Framework. Pre-renderiza HTML para buen SEO. |
| **TypeScript** | Tipado de props y datos. |
| **Tailwind CSS v4** | Estilos. Config CSS-first con `@theme` en `globals.css` (sin `tailwind.config`). |
| **next/font** | Fuentes optimizadas (Inter + Montserrat). |
| **@next/third-parties** | Google Tag Manager (condicional por env var). |
| **next/og** (`ImageResponse`) | Imagen Open Graph generada por código. |

---

## Cómo correr

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción (corre TypeScript + genera estáticos)
npm start        # sirve el build
```

Variables de entorno (`.env.local`):

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX   # opcional: si está, carga Google Tag Manager
```

---

## Arquitectura — Config-Driven

Los datos viven en `app/page.tsx` como props. Los componentes no conocen el contenido: lo reciben y lo renderizan. Para una nueva landing, se cambian los datos que se pasan a cada sección.

**Composición por capas:**

- **`components/ui/`** — átomos reutilizables (piezas chicas): `Button`, `StatCard`, `ServiceCard`, `PlanCard`.
- **`components/sections/`** — bloques de la página, compuestos con átomos: `Hero`, `Stats`, `Services`, `Plans`, `Cta`.
- **`components/layout/`** — estructura global presente en toda página: `Header`, `Footer`, `WhatsAppFloat`.

```
app/
├── layout.tsx           # fuentes, metadata SEO, GTM
├── page.tsx             # orquesta las secciones y les pasa los datos
├── globals.css          # @theme con los tokens de marca
└── opengraph-image.tsx  # imagen OG generada por código (1200×630)

components/
├── layout/   → Header · Footer · WhatsAppFloat
├── sections/ → Hero · Stats · Services · Plans · Cta
└── ui/       → Button · StatCard · ServiceCard · PlanCard

public/
└── quanty_wordmark.svg
```

Principios aplicados: **mobile-first** (estilos base para mobile, `md:`/`lg:` para escalar), **accesibilidad** (semántica HTML, `aria-*`, contraste WCAG), y **DRY** (átomos compartidos entre secciones).

---

## Estado actual

### ✅ Demo `minimal` — completa (landing de Quanty Ads)

Estilo premium, mucho aire, oscuro. Hoy vive en `/` (`app/page.tsx`).

- [x] Header fijo con menú responsive (hamburger en mobile) + CTA
- [x] Hero con badge, título con palabra resaltada, CTAs y stats al costado
- [x] Services (3 plataformas: Meta, Google, TikTok)
- [x] Plans (4 planes, 1 destacado con estilo condicional)
- [x] CTA final con "process strip" de 3 pasos
- [x] Footer con contactos
- [x] WhatsApp flotante
- [x] SEO: metadata + imagen Open Graph
- [x] Mobile-first + accesibilidad
- [x] Build de producción limpio

### ⬜ Pendiente para producción

- [ ] **Favicon** propio (hoy usa el default de Next)
- [ ] **Dominio** real (hoy `metadataBase` es placeholder en `layout.tsx`)
- [ ] **Formulario** de contacto (Web3Forms) — el CTA hoy usa `mailto:`
- [ ] **GTM ID** real en `.env.local`
- [ ] **Deploy** en Vercel
- [ ] Migrar datos a `config/client.config.ts` + `types/` (config-driven real, hoy los datos están inline en `page.tsx`)

---

## Catálogo de demos (plan)

Cuatro estilos para mostrar a clientes potenciales según su rubro:

| Demo | Estilo | Cliente ideal | Estado |
|------|--------|---------------|--------|
| **minimal** | Premium, sin ruido, mucho aire | Servicios profesionales, marcas premium | ✅ Hecha |
| **conversion** | Direct response, orientada a la venta | E-commerce, lead gen, performance | ⬜ Pendiente |
| **corporate** | Imagen grande, institucional (ref: grupogreen.com.ar) | Empresas establecidas, B2B | ⬜ Pendiente |
| **motion** | Animaciones (Framer Motion) | Tech, startups, marcas jóvenes | ⬜ Pendiente |

**Estrategia de paletas (multi-demo):** un solo codebase con paletas alternativas como clases CSS sobre los tokens de `@theme` (ej: `.theme-conversion { --color-primary: ... }`), aplicadas con `<main className="theme-x">`. Permite cambiar la identidad visual sin recompilar.

> Nota: para clientes reales se usa **un repo + un dominio por cliente**. El catálogo de demos puede vivir en rutas `/demo/*` dentro de un mismo proyecto.

---

## Sistema de marca — Quanty Ads

**Colores** (definidos en `globals.css` con `@theme`):

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#2ba9f7` | Botones, links, acentos |
| `accent` | `#18b8cc` | Highlights, detalles |
| `dark` | `#0b1c2d` | Fondos oscuros (hero, CTA) |
| `light` | `#f4f6f8` | Fondos de secciones claras |
| `muted` | `#6b7280` | Texto secundario |

**Fuentes:** Inter (`font-heading`, títulos) · Montserrat (`font-body`, cuerpo).

**Contacto:** quantyads@gmail.com · [@Quanty.Ads](https://instagram.com/quanty.ads) · WhatsApp +54 358 429 6560 · Nueva Córdoba.

---

## Roadmap

1. ✅ Setup (Next, Tailwind, fuentes, GTM)
2. ✅ Construcción de secciones — demo `minimal`
3. 🔵 Pulido + deploy de `minimal` (favicon, dominio, formulario, Vercel)
4. ⬜ Config-driven real (`client.config.ts` + tipos)
5. ⬜ Demos `conversion`, `corporate`, `motion`
6. ⬜ Sistema multi-paleta por cliente
