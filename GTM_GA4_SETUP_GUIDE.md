# 🏷️ Guía Completa: GTM + GA4 Setup

Documento con todos los pasos para configurar Google Tag Manager (GTM) y conectarlo con Google Analytics 4 (GA4).

---

## 📋 Requisitos Previos

- ✅ Cuenta de Google
- ✅ GA4 creado (Measurement ID: `G-WBM7M8DT5Z`)
- ✅ GTM creado (Container ID: `GTM-M7PZCF4G`)
- ✅ Código de GTM y GA4 ya agregado al `layout.tsx`

---

## 🔧 PARTE 1: Configuración Inicial en GTM

### Paso 1: Acceder a GTM

1. Ve a: **https://tagmanager.google.com**
2. Selecciona tu cuenta: **Quanty Ads**
3. Abre el contenedor: **GTM-M7PZCF4G**
4. Haz click en **"Espacio de trabajo"** (arriba a la izquierda)

---

### Paso 2: Crear Variable para GA4

**Variables** → Botón **"Nueva"** (arriba a la derecha)

```
Nombre: GA4 Config
Tipo de variable: Google Analytics 4 Configuration
Measurement ID: G-WBM7M8DT5Z
```

Haz click en **"Guardar"**

---

### Paso 3: Crear Tag de Configuración GA4

**Tags** → Botón **"Nueva"**

```
Nombre: GA4 - Configuration Tag
Tipo de etiqueta: Google Analytics 4 Configuration
Measurement ID: G-WBM7M8DT5Z
Desencadenador: All Pages (crear si no existe)
```

Haz click en **"Guardar"**

---

### Paso 4: Crear Trigger "All Pages"

Si no existe el trigger "All Pages":

**Desencadenadores** → **"Nuevo"**

```
Nombre: All Pages
Tipo: Page View
Activación: All Pages
```

Haz click en **"Guardar"**

---

### Paso 5: Publicar Cambios

Botón **"Publicar"** (arriba a la derecha)

```
Nombre de versión: Initial GA4 Setup
Descripción: GA4 Configuration Tag
```

Haz click en **"Publicar"**

---

## 🔗 PARTE 2: Verificar Conexión GA4 ↔ GTM

### Paso 1: Instalar Google Tag Manager Assistant

1. Ve a Chrome Web Store
2. Busca: **"Google Tag Manager Assistant"**
3. Agrega la extensión a Chrome

---

### Paso 2: Verificar GTM está funcionando

1. Abre tu sitio: **http://localhost:3000/saas** (o tu página)
2. Abre DevTools (F12)
3. Haz click en la extensión GTM Assistant
4. Deberías ver:
   - ✅ `GTM-M7PZCF4G` activo
   - ✅ Tag de GA4 Configuration firing
   - ✅ Page View siendo registrado

---

### Paso 3: Verificar en GA4

1. Ve a: **https://analytics.google.com**
2. Selecciona tu propiedad GA4
3. Ve a **"Realtime"** (tiempo real)
4. Abre tu sitio en otra pestaña
5. Deberías ver:
   - ✅ "1 usuario activo ahora"
   - ✅ País/dispositivo/navegador

Si ves el usuario activo → **¡Conexión exitosa!** ✅

---

## 📊 PARTE 3: Estructura Actual

```
Tu Sitio (layout.tsx)
    ↓
GTM Script (GTM-M7PZCF4G)
    ↓
GTM Workspace (Tags, Triggers, Variables)
    ↓
GA4 Configuration Tag
    ↓
GA4 (G-WBM7M8DT5Z)
    ↓
Analytics Dashboard
    ↓
Reportes en tiempo real
```

---

## 🎯 PARTE 4: Próximos Pasos

Una vez que GA4 y GTM están conectados, puedes:

### 1. Crear eventos custom sin código (en GTM):
- `cta_click`
- `form_submit`
- `scroll_depth`
- `plan_selected`
- etc.

### 2. Crear dimensiones custom:
- `page_section`
- `button_label`
- `form_type`

### 3. Ver datos en GA4:
- Events → Eventos custom registrados
- Realtime → Usuarios activos
- Conversion Path → Funnels de usuarios

### 4. Crear dashboards:
- CTR por botón
- Form conversion rate
- Scroll depth distribution
- Funnel analysis

---

## 🐛 Troubleshooting

### Problema: No aparece "1 usuario activo" en GA4

**Solución:**
1. Abre DevTools (F12)
2. Ve a Console
3. Escribe: `window.dataLayer`
4. Presiona Enter
5. Debería mostrar un array con eventos

Si el array está vacío:
- ✓ Recarga la página
- ✓ Limpia cache (Ctrl+Shift+Del)
- ✓ Verifica que GTM ID sea correcto

### Problema: GTM Assistant no muestra tags

**Solución:**
1. Abre DevTools
2. Ve a la pestaña **Network**
3. Filtra por: `googletagmanager`
4. Deberías ver requests a `gtm.js`

Si no hay requests:
- ✓ Verifica el código en `layout.tsx`
- ✓ Recarga la página
- ✓ Verifica que no haya adblockers

### Problema: GA4 muestra 0 usuarios

**Solución:**
1. En GA4, ve a **"Admin"** (rueda de engranaje)
2. Verifica **Data Streams**
3. Haz click en tu stream web
4. Verifica que **Measurement ID = G-WBM7M8DT5Z**
5. En GTM, verifica que el Tag use el mismo Measurement ID

---

## ✅ Checklist de Verificación

- [ ] GTM código agregado en `<head>` de layout.tsx
- [ ] Noscript de GTM agregado después de `<body>`
- [ ] GA4 código agregado en `<head>`
- [ ] Acceso a GTM: https://tagmanager.google.com
- [ ] Acceso a GA4: https://analytics.google.com
- [ ] Variable GA4 creada en GTM
- [ ] Tag GA4 Configuration creado en GTM
- [ ] Cambios publicados en GTM
- [ ] GTM Assistant instalado en Chrome
- [ ] GTM Assistant muestra GTM-M7PZCF4G activo
- [ ] GA4 muestra "usuario activo" en Realtime
- [ ] dataLayer contiene eventos en DevTools Console

---

## 📚 Recursos Útiles

- **GTM Help:** https://support.google.com/tagmanager
- **GA4 Help:** https://support.google.com/analytics
- **GTM Assistant:** Chrome Extension
- **Measurement Protocol:** https://developers.google.com/analytics/devguides/collection/protocol/ga4

---

## 🚀 Próximo: Crear Eventos en GTM

Una vez verificado todo, podemos crear los primeros eventos:
1. `cta_click` - Click en botones CTA
2. `form_submit` - Envío de formularios
3. `scroll_depth` - Profundidad de scroll
4. `plan_selected` - Selección de plan

Ver: `ANALYTICS_TRACKING_PLAN.md` para lista completa de eventos.
