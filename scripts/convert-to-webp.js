const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuración
const IMAGE_DIR = path.join(__dirname, '../public/assets/img');
const QUALITY = 85; // Calidad WebP (0-100)
const MAX_WIDTH = 1920; // Ancho máximo para imágenes grandes
const MAX_HEIGHT = 1920; // Alto máximo para imágenes grandes

// Extensiones de imagen a convertir
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

// Directorios/carpetas a excluir (opcional)
const EXCLUDE_DIRS = ['svg', 'svg-2', 'svg-3'];

// Estadísticas
let stats = {
    converted: 0,
    skipped: 0,
    errors: 0,
    totalSizeBefore: 0,
    totalSizeAfter: 0,
};

/**
 * Verifica si un archivo es una imagen que debe convertirse
 */
function shouldConvert(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
}

/**
 * Verifica si un directorio debe ser excluido
 */
function shouldExcludeDir(dirPath) {
    const dirName = path.basename(dirPath);
    return EXCLUDE_DIRS.includes(dirName);
}

/**
 * Convierte una imagen a WebP
 */
async function convertToWebP(inputPath, outputPath) {
    try {
        const fileStats = await fs.stat(inputPath);
        const sizeBefore = fileStats.size;
        stats.totalSizeBefore += sizeBefore;

        // Leer la imagen y obtener sus dimensiones
        const metadata = await sharp(inputPath).metadata();

        // Calcular dimensiones manteniendo aspect ratio si es necesario
        let width = metadata.width;
        let height = metadata.height;

        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
            if (width > height) {
                width = MAX_WIDTH;
                height = Math.round((metadata.height / metadata.width) * MAX_WIDTH);
            } else {
                height = MAX_HEIGHT;
                width = Math.round((metadata.width / metadata.height) * MAX_HEIGHT);
            }
        }

        // Convertir a WebP
        await sharp(inputPath)
            .resize(width, height, {
                fit: 'inside',
                withoutEnlargement: true,
            })
            .webp({ quality: QUALITY })
            .toFile(outputPath);

        const outputFileStats = await fs.stat(outputPath);
        const sizeAfter = outputFileStats.size;
        stats.totalSizeAfter += sizeAfter;

        // Eliminar archivo original solo si la conversión fue exitosa y el WebP es más pequeño
        if (sizeAfter < sizeBefore) {
            await fs.unlink(inputPath);
            console.log(`✓ Convertido: ${path.relative(IMAGE_DIR, inputPath)} (${(sizeBefore / 1024).toFixed(2)}KB → ${(sizeAfter / 1024).toFixed(2)}KB)`);
            stats.converted++;
        } else {
            // Si el WebP es más grande, mantener el original y eliminar el WebP
            await fs.unlink(outputPath);
            console.log(`⊘ Saltado (original más pequeño): ${path.relative(IMAGE_DIR, inputPath)}`);
            stats.skipped++;
        }
    } catch (error) {
        console.error(`✗ Error convirtiendo ${inputPath}:`, error.message);
        stats.errors++;

        // Eliminar archivo WebP si existe y hubo error
        try {
            await fs.unlink(outputPath);
        } catch (e) {
            // Ignorar si no existe
        }
    }
}

/**
 * Procesa recursivamente un directorio
 */
async function processDirectory(dirPath) {
    try {
        const entries = await fs.readdir(dirPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);

            if (entry.isDirectory()) {
                if (!shouldExcludeDir(fullPath)) {
                    await processDirectory(fullPath);
                }
            } else if (entry.isFile() && shouldConvert(fullPath)) {
                const ext = path.extname(fullPath);
                const outputPath = fullPath.replace(ext, '.webp');

                // Solo convertir si el WebP no existe ya
                try {
                    await fs.access(outputPath);
                    console.log(`⊘ Ya existe: ${path.relative(IMAGE_DIR, outputPath)}`);
                    stats.skipped++;
                } catch {
                    await convertToWebP(fullPath, outputPath);
                }
            }
        }
    } catch (error) {
        console.error(`Error procesando directorio ${dirPath}:`, error.message);
    }
}

/**
 * Función principal
 */
async function main() {
    console.log('🚀 Iniciando conversión de imágenes a WebP...\n');
    console.log(`Directorio: ${IMAGE_DIR}`);
    console.log(`Calidad: ${QUALITY}`);
    console.log(`Tamaño máximo: ${MAX_WIDTH}x${MAX_HEIGHT}\n`);

    const startTime = Date.now();

    try {
        await processDirectory(IMAGE_DIR);
    } catch (error) {
        console.error('Error fatal:', error);
        process.exit(1);
    }

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log('\n' + '='.repeat(50));
    console.log('📊 Estadísticas:');
    console.log(`   Convertidas: ${stats.converted}`);
    console.log(`   Saltadas: ${stats.skipped}`);
    console.log(`   Errores: ${stats.errors}`);
    console.log(`   Tamaño antes: ${(stats.totalSizeBefore / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Tamaño después: ${(stats.totalSizeAfter / 1024 / 1024).toFixed(2)} MB`);
    if (stats.totalSizeBefore > 0) {
        const reduction = ((1 - stats.totalSizeAfter / stats.totalSizeBefore) * 100).toFixed(2);
        console.log(`   Reducción: ${reduction}%`);
    }
    console.log(`   Tiempo: ${duration}s`);
    console.log('='.repeat(50));
}

// Ejecutar
main().catch(console.error);

