# 📊 GTM Events Created - Registro de Eventos Implementados

Documento que registra todos los eventos creados en Google Tag Manager (GTM) con detalles de configuración.

**Fecha de creación:** 2026-06-22  
**Container ID:** GTM-M7PZCF4G  
**GA4 Measurement ID:** G-WBM7M8DT5Z

---

## ✅ EVENTOS IMPLEMENTADOS EN GTM (ALTA PRIORIDAD)

### 1️⃣ `motion_hero_form_submit`

**Estado:** ✅ IMPLEMENTADO  
**Prioridad:** 🔴 ALTA  
**Página:** `/motion`  
**Ubicación:** Hero section - Formulario de diagnóstico

**Trigger Creado:**
```
Nombre: Form Submit - Motion Hero
Tipo: Form Submission
Activación: All Form Submissions
```

**Tag Creado:**
```
Nombre: Event - motion_hero_form_submit
Tipo: Google Analytics 4 Event
Event Name: motion_hero_form_submit
Event Parameters:
├─ empresa (Form Field - input name="empresa")
├─ contacto (Form Field - input name="contacto")
└─ inversion (Form Field - select name="inversion")
```

**Qué captura:**
- Nombre de la empresa
- Contacto del usuario (nombre o teléfono)
- Rango de inversión/presupuesto

**Dónde se ve:**
- GA4 → Events → motion_hero_form_submit
- GTM Realtime → Event stream

---

### 2️⃣ `plan_cta_click`

**Estado:** ✅ IMPLEMENTADO  
**Prioridad:** 🔴 ALTA  
**Página:** `/saas`  
**Ubicación:** Pricing section - Botones CTA de planes

**Trigger Creado:**
```
Nombre: Click - Plan CTA Button
Tipo: Click - All Elements
Filtro: [se configura según atributo de botón]
```

**Tag Creado:**
```
Nombre: Event - plan_cta_click
Tipo: Google Analytics 4 Event
Event Name: plan_cta_click
Event Parameters:
├─ plan_name (Click Element Attribute)
├─ cta_label (Click Text)
└─ page = "saas"
```

**Qué captura:**
- Nombre del plan seleccionado (Starter, Professional, Enterprise)
- Texto del botón clickeado
- Página donde ocurrió

**Dónde se ve:**
- GA4 → Events → plan_cta_click
- Conversion funnel: plan_cta_click → form submission

---

### 3️⃣ `scroll_depth_50`

**Estado:** ✅ IMPLEMENTADO  
**Prioridad:** 🔴 ALTA  
**Página:** Global (todas las páginas)  
**Ubicación:** Cuando usuario scrollea 50% de la página

**Trigger Creado:**
```
Nombre: Scroll Depth - 50%
Tipo: Scroll Depth
Activación: 50% del viewport
```

**Tag Creado:**
```
Nombre: Event - scroll_depth_50
Tipo: Google Analytics 4 Event
Event Name: scroll_depth_50
Event Parameters:
├─ depth_percent = 50
├─ page (Page Path variable)
└─ time_spent (Time in milliseconds)
```

**Qué captura:**
- Profundidad de scroll alcanzada (50%)
- Página actual
- Tiempo que tardó en llegar

**Dónde se ve:**
- GA4 → Events → scroll_depth_50
- Engagement metric: scroll depth distribution

---

### 4️⃣ `scroll_depth_75`

**Estado:** ✅ IMPLEMENTADO  
**Prioridad:** 🔴 ALTA  
**Página:** Global (todas las páginas)  
**Ubicación:** Cuando usuario scrollea 75% de la página

**Trigger Creado:**
```
Nombre: Scroll Depth - 75%
Tipo: Scroll Depth
Activación: 75% del viewport
```

**Tag Creado:**
```
Nombre: Event - scroll_depth_75
Tipo: Google Analytics 4 Event
Event Name: scroll_depth_75
Event Parameters:
├─ depth_percent = 75
├─ page (Page Path variable)
└─ time_spent (Time in milliseconds)
```

**Qué captura:**
- Profundidad de scroll alcanzada (75%)
- Página actual
- Tiempo que tardó en llegar

**Dónde se ve:**
- GA4 → Events → scroll_depth_75
- Engagement metric: scroll depth distribution

---

## 📊 RESUMEN DE IMPLEMENTACIÓN

| Evento | Trigger | Tag | Estado | GA4 |
|--------|---------|-----|--------|-----|
| motion_hero_form_submit | Form Submit - Motion Hero | Event - motion_hero_form_submit | ✅ Activo | Visible |
| plan_cta_click | Click - Plan CTA Button | Event - plan_cta_click | ✅ Activo | Visible |
| scroll_depth_50 | Scroll Depth - 50% | Event - scroll_depth_50 | ✅ Activo | Visible |
| scroll_depth_75 | Scroll Depth - 75% | Event - scroll_depth_75 | ✅ Activo | Visible |

**Total eventos ALTA PRIORIDAD implementados:** 4/4 ✅

---

## 🔗 RELACIÓN CON CÓDIGO

### Archivos que generan estos eventos:

**1. motion_hero_form_submit**
- Archivo: `components/motion/sections/Hero.tsx`
- Elemento: Formulario con `<form>` tag
- Campos: nombre, email, presupuesto
- Disparador: Submit del form

**2. plan_cta_click**
- Archivo: `components/saas/sections/SaasPricing.tsx`
- Elemento: Botones `<a>` o `<button>` con plan info
- Atributo: `data-plan` o clase que identifique el plan
- Disparador: Click en botón

---

## 📈 PRÓXIMOS EVENTOS A CREAR

### 🔴 ALTA PRIORIDAD (Completada ✅)
- [x] `motion_hero_form_submit` - Form hero enviado ✅
- [x] `plan_cta_click` - Click en CTA de plan ✅
- [x] `scroll_depth_50` - Usuario scrollea 50% ✅
- [x] `scroll_depth_75` - Usuario scrollea 75% ✅
- [ ] `motion_hero_form_error` - Error en envío form
- [ ] `pricing_form_error` - Error en envío pricing form

### 🟡 MEDIA PRIORIDAD (Después)
- [ ] `faq_expand` - Usuario abre FAQ
- [ ] `feature_click` - Click en feature card
- [ ] `testimonial_read` - Lee testimonio
- [ ] `plan_selected` - Selecciona plan

### 🟢 BAJA PRIORIDAD (Nice to have)
- [ ] `integration_hover` - Hover en integración
- [ ] `gallery_image_click` - Click en imagen galería
- [ ] `roadmap_step_hover` - Hover en roadmap

---

## 🔧 CONFIGURACIÓN GTM

**Workspace:** Production  
**Versión:** v2 (con motion_hero_form_submit + plan_cta_click)  
**Estado de publicación:** ✅ Publicado

**Cambios realizados:**
- ✅ Agregado trigger: Form Submit - Motion Hero
- ✅ Agregado trigger: Click - Plan CTA Button
- ✅ Agregado tag: Event - motion_hero_form_submit
- ✅ Agregado tag: Event - plan_cta_click
- ✅ Publicado en GTM Container

---

## 🚀 VERIFICACIÓN

### Cómo verificar que los eventos funcionan:

**1. GTM Assistant (Chrome Extension):**
```
1. Instalar: Google Tag Manager Assistant
2. Ir a página (motion o saas)
3. Ejecutar acción (enviar form o clickear plan)
4. GTM Assistant muestra "Event fired: motion_hero_form_submit"
```

**2. GA4 Realtime:**
```
1. Analytics → tu propiedad GA4
2. Ir a Realtime
3. Ejecutar acción en sitio
4. Ver evento en stream en tiempo real
```

**3. DevTools Console:**
```javascript
// Abrir F12 → Console
window.dataLayer
// Debería mostrar eventos con estructura:
// {event: "motion_hero_form_submit", empresa: "...", ...}
```

---

## 📝 NOTAS

- Los parámetros de evento se envían automáticamente a GA4
- Los valores se capturan del DOM automáticamente
- GTM se actualiza sin requerirencia de rebuild del código
- Cambios en GTM se publican en tiempo real

---

## 📌 MANTENER ACTUALIZADO

Este archivo debe actualizarse cada vez que:
- ✅ Se crea un nuevo evento en GTM
- ✅ Se modifica un trigger o tag existente
- ✅ Se publican cambios en GTM
- ✅ Se agregan parámetros a un evento

**Última actualización:** 2026-06-22  
**Próxima review:** Cuando se agreguen más eventos
