# 📱 Meta Pixel Setup Guide - Configuración Completa

Guía para agregar Meta Pixel (Facebook Pixel) a tu landing page para rastreo de eventos y retargeting en Meta Ads.

---

## 📋 Requisitos Previos

- ✅ Cuenta de Meta (Facebook/Instagram)
- ✅ Acceso a Meta Ads Manager
- ✅ Dominio o sitio web registrado
- ✅ Next.js 14+ (ya tienes)

---

## 🔧 PARTE 1: Crear Pixel en Meta Ads Manager

### Paso 1: Acceder a Meta Ads Manager

1. Ve a: **https://business.facebook.com**
2. Inicia sesión con tu cuenta de Meta
3. Navega a **Ads Manager** (icono del martillo arriba a la izquierda)

---

### Paso 2: Ir a Data Sources (Fuentes de datos)

1. En el menú izquierdo, ve a: **Configuración** → **Fuentes de datos**
2. O directo: **https://business.facebook.com/adsmanager/pixel/**
3. Click en **Crear** o **+ Crear nueva fuente de datos**

---

### Paso 3: Crear nuevo Pixel

```
Nombre del pixel: Quanty Ads - Landing Page
(o el nombre que prefieras)

Selecciona: Web (sitio web)

Paso siguiente...
```

---

### Paso 4: Obtener el Pixel ID

Una vez creado, verás:
```
Pixel ID: 123456789012345
(este número es único para tu pixel)
```

**Guarda este número**, lo necesitarás en `.env.local`

---

### Paso 5: Instalar Pixel (método moderno)

En la misma pantalla verás:
```
Método de instalación:
├─ Instalación manual (copiar código)
├─ Usar conversiones API (recomendado para backend)
└─ Google Tag Manager (RECOMENDADO para ti)
```

**Selecciona: Google Tag Manager** (ya tienes GTM configurado)

---

## 🏷️ PARTE 2: Integrar Meta Pixel con GTM

### Paso 1: Copiar el código de Meta

En Meta Ads Manager:
```
Copia el código de evento estándar de Meta
(te dará algo como):

fbq('track', 'PageView');
fbq('track', 'ViewContent', {...});
```

---

### Paso 2: Agregar Meta Pixel a GTM

En **Google Tag Manager (GTM-M7PZCF4G)**:

```
Variables → Nueva
Nombre: Meta Pixel ID
Tipo: Variable constante
Valor: 123456789012345 (tu Pixel ID)
Guardar
```

---

### Paso 3: Crear Tag de Meta Pixel en GTM

**En GTM:**
```
Tags → Nueva
Nombre: Meta Pixel - PageView
Tipo: Meta Pixel (busca en el listado)
Pixel ID: {{Meta Pixel ID}} (selecciona la variable)
Event: PageView
Desencadenador: All Pages
Guardar
```

---

## 💾 PARTE 3: Agregar a .env.local

Actualiza tu `.env.local`:

```env
# 📱 Meta Pixel ID
NEXT_PUBLIC_META_PIXEL_ID=123456789012345

# 🏷️ Google Tag Manager (GTM) ID
NEXT_PUBLIC_GTM_ID=GTM-M7PZCF4G

# 📊 Google Analytics 4 (GA4) ID
NEXT_PUBLIC_GA4_ID=G-WBM7M8DT5Z

# Web3Forms access key
NEXT_PUBLIC_WEB3FORMS_KEY=...
```

---

## 🔌 PARTE 4: Agregar Meta Pixel al layout.tsx

Meta Pixel se agrega como Script en el `<head>`:

```typescript
// En app/layout.tsx, en el <head> section:

{process.env.NEXT_PUBLIC_META_PIXEL_ID && (
  <>
    <Script
      id="meta-pixel"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
          fbq('track', 'PageView');
        `,
      }}
    />
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
      />
    </noscript>
  </>
)}
```

---

## 📊 PARTE 5: Eventos a Trackear en Meta Pixel

Una vez que Pixel está activo, puedes trackear:

### Eventos Estándar (recomendados):

```javascript
// PageView - se dispara automáticamente
fbq('track', 'PageView');

// ViewContent - usuario ve contenido
fbq('track', 'ViewContent', {
  content_name: 'Pricing Page',
  content_type: 'product'
});

// InitiateCheckout - inicia checkout/form
fbq('track', 'InitiateCheckout', {
  value: 100,
  currency: 'ARS'
});

// Purchase - compra/conversión
fbq('track', 'Purchase', {
  value: 100,
  currency: 'ARS'
});

// Lead - lead/contacto
fbq('track', 'Lead', {
  value: 100,
  currency: 'ARS',
  content_name: 'Consultation'
});
```

---

## 🎯 PARTE 6: Crear conversiones en Meta Ads Manager

### Paso 1: Ir a Conversiones

En Meta Ads Manager:
```
Configuración → Conversiones
```

### Paso 2: Crear conversión basada en Pixel

```
Crear conversión
Nombre: Contact Form Submission
Fuente: Tu Pixel
Evento: Lead (o Custom - motion_hero_form_submit)
```

### Paso 3: Usar en campaña

```
Crear campaña
Objetivo: Conversiones
Seleccionar conversión creada
→ Meta mostrará anuncios a usuarios similares
```

---

## ✅ Verificación

### Cómo verificar que Meta Pixel funciona:

**Opción 1: Meta Pixel Helper (extensión Chrome)**
1. Instala: **Meta Pixel Helper**
2. Ve a tu sitio
3. Haz click en la extensión
4. Deberías ver: "Pixel is active"
5. Cuando ejecutes acciones (form, clicks) verás eventos

**Opción 2: Meta Ads Manager Realtime**
1. Ve a: Ads Manager → tu Pixel
2. Pestaña: **Testing Tools**
3. Haz acciones en tu sitio
4. Verás eventos en tiempo real

**Opción 3: DevTools Console**
```javascript
// Abre F12 → Console
fbq('track', 'TestEvent');
// Deberías ver el evento en Meta Pixel Helper
```

---

## 🔗 Relación entre Pixel, GTM y GA4

```
Tu Sitio
├─ GA4: "¿Cuántos users? ¿Qué hicieron?"
│  └─ Dashboard en Google Analytics
│
├─ GTM: "Gestiona eventos sin código"
│  └─ Propaga a GA4, Meta Pixel, etc.
│
└─ Meta Pixel: "¿Quiénes convirtieron? Retargeting"
   └─ Usado en Meta Ads para campaña
```

---

## 📈 Eventos a Trackear (Recomendación)

### 🔴 ALTA PRIORIDAD (Meta Pixel)

```
1. PageView (automático)
   └─ Se dispara en cada página

2. ViewContent (cuando llega a pricing)
   └─ Saber quién vio pricing

3. InitiateCheckout (cuando abre form)
   └─ Quién intentó contactar

4. Lead (cuando envía form)
   └─ Quién convirtió

5. Purchase (si hay venta)
   └─ Quién pagó
```

---

## 🚀 Próximos Pasos

1. **Crear Meta Pixel** (sigue PARTE 1)
2. **Agregar Pixel ID a .env.local** (PARTE 3)
3. **Agregar código a layout.tsx** (PARTE 4)
4. **Verificar con Meta Pixel Helper** (Verificación)
5. **Crear conversiones en Ads Manager** (PARTE 6)
6. **Usar en campaña** (Retargeting)

---

## 📌 Notas Importantes

- **Privacy:** Meta Pixel respeta Cookies y GDPR
- **Conversión API:** Para conversiones más confiables (requiere backend)
- **Retargeting:** Necesitas lista de audiencia en Meta Ads
- **Múltiples Pixels:** Puedes tener varios (aunque no es recomendado)

---

## 🔗 URLs Útiles

- **Meta Ads Manager:** https://business.facebook.com/adsmanager
- **Pixel Help:** https://www.facebook.com/business/help/952192354843755
- **Meta Pixel Helper:** Chrome Extension
- **Events Standard:** https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking

---

**Última actualización:** 2026-06-22  
**Estado:** Guía lista para implementación
