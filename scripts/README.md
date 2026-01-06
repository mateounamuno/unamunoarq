# Scripts de Optimización

## convert-to-webp.js

Convierte todas las imágenes JPG/PNG a formato WebP optimizado.

### Uso:
```bash
npm run convert-images
```

### Características:
- Convierte automáticamente todas las imágenes en `public/assets/img/`
- Optimiza tamaño (máximo 1920x1920px)
- Mantiene calidad visual (85%)
- Solo elimina originales si el WebP es más pequeño
- Excluye carpetas SVG (no necesitan conversión)
- Muestra estadísticas de reducción de tamaño

### Configuración:
Edita las constantes al inicio del archivo:
- `QUALITY`: Calidad WebP (0-100, default: 85)
- `MAX_WIDTH`: Ancho máximo (default: 1920)
- `MAX_HEIGHT`: Alto máximo (default: 1920)
- `EXCLUDE_DIRS`: Carpetas a excluir (default: ['svg', 'svg-2', 'svg-3'])

## update-image-references.js

Actualiza automáticamente las referencias de imágenes en el código TypeScript/TSX.

### Uso:
```bash
npm run update-refs
```

### Características:
- Busca todas las referencias a `.jpg`, `.jpeg`, `.png` en archivos `.ts` y `.tsx`
- Verifica si existe la versión `.webp` correspondiente
- Actualiza las referencias automáticamente
- Funciona con imports y strings

### Nota:
Ejecuta este script **después** de `convert-images` para actualizar todas las referencias.


