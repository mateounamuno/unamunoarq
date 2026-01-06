# 🚀 Guía de Optimización de Rendimiento

Esta guía contiene recomendaciones y herramientas para mejorar el rendimiento y velocidad de carga de la web.

## 📦 Conversión de Imágenes a WebP

### Paso 1: Convertir todas las imágenes

Ejecuta el script de conversión:

```bash
npm run convert-images
```

Este script:
- ✅ Convierte todas las imágenes JPG/PNG a WebP
- ✅ Optimiza el tamaño (máximo 1920x1920px)
- ✅ Mantiene calidad visual (85% calidad)
- ✅ Elimina originales solo si el WebP es más pequeño
- ✅ Excluye carpetas SVG (no necesitan conversión)

### Paso 2: Actualizar referencias en el código

Después de convertir, actualiza las referencias en el código:

```bash
npm run update-refs
```

Este script actualiza automáticamente todas las referencias de `.jpg`, `.jpeg`, `.png` a `.webp` en archivos TypeScript/TSX.

## 🎯 Optimizaciones Implementadas

### 1. Configuración de Next.js Image

Ya configurado en `next.config.mjs`:
- ✅ Soporte para WebP y AVIF
- ✅ Tamaños de dispositivo optimizados
- ✅ Cache de 30 días para imágenes
- ✅ Compresión habilitada

### 2. Headers de Caché

Los assets estáticos ahora tienen headers de caché de 1 año:
- `/assets/*` → `Cache-Control: public, max-age=31536000, immutable`

### 3. Optimización de Build

- ✅ `swcMinify` habilitado (minificación más rápida)
- ✅ Compresión gzip/brotli habilitada
- ✅ Optimización de imports de GSAP y Three.js

## 📋 Recomendaciones Adicionales

### 1. Lazy Loading de Imágenes

Asegúrate de usar `loading="lazy"` en imágenes que no están "above the fold":

```tsx
<Image
  src="/assets/img/..."
  alt="..."
  loading="lazy"  // ← Agregar para imágenes fuera del viewport inicial
  width={800}
  height={600}
/>
```

### 2. Priority para Imágenes Críticas

Marca imágenes críticas (hero, logo, etc.) con `priority`:

```tsx
<Image
  src="/assets/img/hero.jpg"
  alt="Hero"
  priority  // ← Solo para imágenes críticas
  width={1920}
  height={1080}
/>
```

### 3. Tamaños Responsive

Usa el atributo `sizes` para optimizar carga según viewport:

```tsx
<Image
  src="/assets/img/..."
  alt="..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  width={800}
  height={600}
/>
```

### 4. Eliminar `unoptimized={true}`

Revisa y elimina `unoptimized={true}` donde sea posible. Solo úsalo si:
- La imagen necesita transparencia compleja que WebP no soporta bien
- Es una imagen que cambia dinámicamente y no puede ser optimizada

### 5. Code Splitting

- ✅ Usa `dynamic import` para componentes pesados:
```tsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Solo si no necesita SSR
});
```

### 6. Optimización de Fuentes

- ✅ Usa `next/font` para optimizar fuentes:
```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

### 7. Bundle Analysis

Analiza el tamaño del bundle:

```bash
npm install --save-dev @next/bundle-analyzer
```

Luego en `next.config.mjs`:
```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

Ejecuta: `ANALYZE=true npm run build`

### 8. Optimización de CSS

- ✅ Usa CSS Modules o Tailwind (ya implementado)
- ✅ Elimina CSS no utilizado
- ✅ Minifica CSS en producción

### 9. Preload de Recursos Críticos

En `layout.tsx` o `_document.tsx`, agrega preload:

```tsx
<link rel="preload" href="/assets/fonts/Geist-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```

### 10. Service Worker (Opcional)

Considera implementar un Service Worker para:
- Caché offline
- Pre-carga de recursos
- Actualizaciones en segundo plano

## 🔍 Herramientas de Análisis

### Lighthouse
Ejecuta Lighthouse en Chrome DevTools para medir:
- Performance Score
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)

### WebPageTest
- https://www.webpagetest.org/
- Prueba desde diferentes ubicaciones y dispositivos

### Next.js Analytics
Considera habilitar Next.js Analytics para monitoreo en producción.

## 📊 Métricas Objetivo

Objetivos de rendimiento:
- **Lighthouse Performance Score**: > 90
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Total Blocking Time (TBT)**: < 200ms
- **Cumulative Layout Shift (CLS)**: < 0.1

## 🛠️ Checklist de Optimización

- [ ] Convertir todas las imágenes a WebP
- [ ] Actualizar referencias en código
- [ ] Agregar `loading="lazy"` a imágenes no críticas
- [ ] Agregar `priority` a imágenes críticas
- [ ] Revisar y eliminar `unoptimized={true}` innecesarios
- [ ] Implementar `sizes` responsive
- [ ] Optimizar fuentes con `next/font`
- [ ] Analizar bundle size
- [ ] Preload recursos críticos
- [ ] Configurar Service Worker (opcional)
- [ ] Ejecutar Lighthouse y corregir problemas
- [ ] Probar en dispositivos móviles reales

## 🚨 Problemas Comunes

### Imágenes no se optimizan
- Verifica que `sharp` esté instalado: `npm install sharp`
- Asegúrate de no usar `unoptimized={true}` innecesariamente

### WebP no se carga
- Verifica que el archivo `.webp` existe en `public/assets/img/`
- Revisa la consola del navegador para errores 404

### Bundle muy grande
- Usa `dynamic import` para componentes pesados
- Revisa imports innecesarios
- Considera code splitting por ruta

## 📚 Recursos Adicionales

- [Next.js Image Optimization](https://nextjs.org/docs/pages/api-reference/components/image)
- [Web.dev Performance](https://web.dev/performance/)
- [Lighthouse Scoring Guide](https://web.dev/performance-scoring/)

---

**Nota**: Después de aplicar estas optimizaciones, ejecuta `npm run build` y prueba en modo producción para ver las mejoras reales.


