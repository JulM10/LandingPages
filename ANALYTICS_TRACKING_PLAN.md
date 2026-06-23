# 📊 Plan de Tracking Analytics - GA4

Documento que lista todos los eventos que deberían ser registrados en GA4 para analizar el comportamiento de usuarios en nuestras landing pages.

---

## 🔵 SAAS PAGE (`/saas`)

### Hero Section
**Archivo:** `components/saas/sections/Hero.tsx`

| Evento | Descripción | Datos | Valor |
|--------|-------------|-------|-------|
| `cta_click` | Click botón principal CTA | label, location, page | ✅ IMPLEMENTADO |
| `secondary_cta_click` | Click botón secundario | label, location, page | ✅ IMPLEMENTADO |

---

### Demo Section
**Archivo:** `components/saas/sections/SaasDemo.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `demo_view` | Usuario ve la sección demo | media_type (image/video), page |
| `demo_video_play` | Usuario inicia video (si hay) | video_url, page |
| `demo_video_complete` | Usuario completa video | video_duration, page |

---

### Problem/Solution
**Archivo:** `components/saas/sections/ProblemSolution.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `problem_expand` | Usuario abre un problema específico | problem_title, index |
| `solution_click` | Usuario interactúa con la solución | page |

---

### Features/Services
**Archivo:** `components/motion/sections/Services.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `feature_view` | Usuario ve una feature card | feature_title, index |
| `feature_expand` | Usuario expande detalles (si es clickeable) | feature_title, features_count |

---

### Workflow
**Archivo:** `components/saas/sections/Workflow.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `workflow_step_view` | Usuario ve un paso | step_number, step_title |
| `workflow_step_click` | Usuario clickea paso (si es interactivo) | step_number, step_title |
| `workflow_image_load` | Imagen del step se carga | step_number, image_url |

---

### Integrations
**Archivo:** `components/saas/sections/Integrations.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `integration_view` | Usuario ve sección integraciones | integrations_count |
| `integration_hover` | Usuario hace hover en logo | integration_name |
| `integration_click` | Usuario clickea en integración | integration_name, href |

---

### Gallery
**Archivo:** `components/saas/sections/SaasGallery.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `gallery_view` | Usuario ve galería | total_images |
| `gallery_image_click` | Usuario abre imagen | image_index, image_title |
| `gallery_image_hover` | Usuario hace hover | image_index, image_title |

---

### Pricing
**Archivo:** `components/saas/sections/SaasPricing.tsx`

| Evento | Descripción | Datos | Estado |
|--------|-------------|-------|--------|
| `pricing_view` | Usuario llega a pricing | plan_count, page | ⏳ PENDIENTE |
| `plan_selected` | Usuario selecciona un plan | plan_name, plan_price | ✅ IMPLEMENTADO (parcial) |
| `plan_cta_click` | Usuario clickea CTA del plan | plan_name, cta_label | ✅ IMPLEMENTADO EN GTM |
| `pricing_form_submit_attempt` | Usuario intenta enviar form | email, empresa, page | ✅ IMPLEMENTADO |
| `pricing_form_submit_success` | Form enviado exitosamente | email, empresa, page | ✅ IMPLEMENTADO |
| `pricing_form_error` | Error en envío form | error_message | ⏳ PENDIENTE |

**Notas de implementación:**
- GTM Trigger: "Click - Plan CTA Button"
- GTM Tag: "Event - plan_cta_click"
- Captura: nombre del plan, texto del botón
- Ver: `GTM_EVENTS_CREATED.md` para detalles de configuración

---

### Testimonials
**Archivo:** `components/saas/sections/SaasTestimonials.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `testimonial_view` | Usuario ve testimonios | testimonials_count |
| `testimonial_expand` | Usuario lee testimonial completo | testimonial_index, author_name |

---

### Roadmap
**Archivo:** `components/saas/sections/SaasRoadmap.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `roadmap_view` | Usuario ve sección roadmap | steps_count |
| `roadmap_step_hover` | Usuario hace hover en step | step_number, step_name |
| `roadmap_step_click` | Usuario clickea paso (si interactivo) | step_number, step_name |

---

### Trust/Security
**Archivo:** `components/saas/sections/Trust.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `trust_view` | Usuario ve sección trust | badges_count, stats_count |
| `trust_badge_hover` | Usuario hace hover badge | badge_label |
| `trust_stat_hover` | Usuario hace hover stat | stat_label, stat_value |

---

### FAQ
**Archivo:** `components/saas/sections/SaasFaq.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `faq_expand` | Usuario abre una pregunta | question_index, question_text |
| `faq_collapse` | Usuario cierra una pregunta | question_index |
| `faq_scroll` | Usuario scrollea FAQ | questions_visible |

---

## 🟣 MOTION PAGE (`/motion`)

### Hero Section
**Archivo:** `components/motion/sections/Hero.tsx`

| Evento | Descripción | Datos | Estado |
|--------|-------------|-------|--------|
| `motion_hero_cta_click` | Click CTA (diagnóstico) | cta_label, page | ⏳ PENDIENTE |
| `motion_hero_form_submit` | Form hero enviado | empresa, email, presupuesto | ✅ IMPLEMENTADO EN GTM |
| `motion_hero_form_error` | Error en form hero | error_message | ⏳ PENDIENTE |

**Notas de implementación:**
- GTM Trigger: "Form Submit - Motion Hero"
- GTM Tag: "Event - motion_hero_form_submit"
- Ver: `GTM_EVENTS_CREATED.md` para detalles de configuración

---

### Stats/Metrics
**Archivo:** `components/motion/sections/Stats.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `stats_view` | Usuario ve stats | stats_count |
| `stats_hover` | Usuario hace hover stat | stat_label, stat_value |

---

### Clients/Ticker
**Archivo:** `components/motion/sections/Clients.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `clients_view` | Usuario ve lista clientes | clients_count |
| `client_hover` | Usuario hace hover cliente | client_name |

---

### Services
**Archivo:** `components/motion/sections/Services.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `motion_service_view` | Usuario ve servicio | service_title, index |
| `motion_service_expand` | Usuario expande servicio | service_title, features_count |

---

### NosEligen (Social Proof)
**Archivo:** `components/motion/sections/NosEligen.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `case_study_view` | Usuario ve case study | company_name, industry |
| `case_study_instagram_click` | Usuario clickea Instagram | company_name, instagram_handle |
| `case_study_scroll` | Usuario scrollea case studies | cases_visible |

---

### QuienesSomos
**Archivo:** `components/motion/sections/QuienesSomos.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `about_view` | Usuario ve sección about | stats_count, people_count |
| `about_stat_hover` | Usuario hace hover stat | stat_title |
| `about_person_hover` | Usuario hace hover persona | person_name, role |

---

### Testimonials
**Archivo:** `components/motion/sections/Testimonials.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `motion_testimonial_view` | Usuario ve testimonios | testimonials_count |
| `motion_testimonial_read` | Usuario lee testimonio completo | testimonial_company |

---

### Roadmap
**Archivo:** `components/motion/sections/Roadmap.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `motion_roadmap_view` | Usuario ve roadmap | weeks_count |
| `motion_roadmap_week_hover` | Usuario hace hover semana | week_number, week_name |
| `motion_roadmap_cta_click` | Usuario clickea CTA final | cta_label |

---

### FAQ
**Archivo:** `components/motion/sections/Faq.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `motion_faq_expand` | Usuario abre pregunta | question_index, question_text |
| `motion_faq_whatsapp_click` | Usuario clickea WhatsApp | question_index |

---

## 🌍 EVENTOS GLOBALES (todas las páginas)

### Navigation & Header
**Archivo:** `components/motion/layout/Header.tsx` / `components/saas/sections/Header.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `header_nav_click` | Click en link navegación | link_label, link_href, page |
| `header_logo_click` | Click en logo | page |
| `header_cta_click` | Click CTA del header | cta_label, page |

---

### StickyBar
**Archivo:** `components/motion/layout/StickyBar.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `sticky_bar_cta_click` | Click en sticky CTA | cta_label, scroll_depth |
| `sticky_bar_view` | Sticky bar se hace visible | scroll_percent |

---

### Footer
**Archivo:** `components/motion/layout/Footer.tsx`

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `footer_link_click` | Click en link footer | link_label, link_href |
| `footer_contact_click` | Click en contacto | contact_type (email/phone) |

---

### Scroll Depth (GTM)
**Implementado en:** Google Tag Manager  
**Tipo de trigger:** Scroll Depth

| Evento | Descripción | Datos | Estado |
|--------|-------------|-------|--------|
| `scroll_depth_50` | Usuario scrollea 50% | page, time_spent | ✅ IMPLEMENTADO EN GTM |
| `scroll_depth_75` | Usuario scrollea 75% | page, time_spent | ✅ IMPLEMENTADO EN GTM |
| `scroll_depth_100` | Usuario llega al final | page, time_spent_total | ⏳ PENDIENTE |

**Notas de implementación:**
- GTM Triggers: "Scroll Depth - 50%" y "Scroll Depth - 75%"
- GTM Tags: "Event - scroll_depth_50" y "Event - scroll_depth_75"
- Funciona en todas las páginas automáticamente
- Ver: `GTM_EVENTS_CREATED.md` para detalles de configuración

---

### Time on Page
**Archivo:** `hooks/useTimeTracking.ts` (crear nuevo)

| Evento | Descripción | Datos |
|--------|-------------|-------|
| `page_time_30s` | Usuario está 30s | page |
| `page_time_120s` | Usuario está 2min | page |
| `page_time_300s` | Usuario está 5min | page |

---

## 📋 RESUMEN POR PRIORIDAD

### 🔴 ALTA PRIORIDAD (Conversiones críticas) ✅ COMPLETADA
- ✅ `cta_click` (Hero SaaS) - IMPLEMENTADO en código
- ✅ `pricing_form_submit` (SaaS) - IMPLEMENTADO en código
- ✅ `motion_hero_form_submit` (Motion) - IMPLEMENTADO EN GTM
- ✅ `plan_cta_click` (Pricing cards) - IMPLEMENTADO EN GTM
- ✅ `scroll_depth_50` (Engagement indicator) - IMPLEMENTADO EN GTM
- ✅ `scroll_depth_75` (Engagement indicator) - IMPLEMENTADO EN GTM

### 🟡 MEDIA PRIORIDAD (Engagement)
- ⏳ Feature clicks y hovers
- ⏳ Testimonial interactions
- ⏳ Plan selection
- ⏳ FAQ expands
- ⏳ Roadmap interactions

### 🟢 BAJA PRIORIDAD (Nice to have)
- ⏳ Hover states
- ⏳ Image loads
- ⏳ Video plays
- ⏳ Scroll metrics

---

## 🛠️ IMPLEMENTACIÓN RECOMENDADA

1. **Fase 1 (Inmediato):**
   - Motion hero form
   - Pricing plan CTA
   - Scroll depth hook
   - Time on page hook

2. **Fase 2 (Semana 1):**
   - FAQ interactions
   - Feature clicks
   - Plan selection
   - Error handling

3. **Fase 3 (Semana 2):**
   - Hover states
   - Media interactions
   - Advanced scroll metrics
   - User journey funnels

---

## 📌 NOTAS TÉCNICAS

- Todos los eventos deben incluir `page` como parámetro
- Los valores booleanos se envían como strings ("true"/"false")
- Los índices comienzan en 0
- Los timestamps están en milisegundos
- Los eventos se envían sincrónicamente (sin await)
- El console.log para debugging está habilitado en analytics.ts
