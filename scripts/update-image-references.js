const fs = require('fs').promises;
const path = require('path');

/**
 * Script para actualizar referencias de imágenes en el código
 * Cambia extensiones .jpg, .jpeg, .png a .webp en archivos TypeScript/TSX
 */

const SOURCE_DIR = path.join(__dirname, '../src');
const DATA_DIR = path.join(__dirname, '../public/assets/img');

// Extensiones a buscar
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

/**
 * Verifica si un archivo existe
 */
async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

/**
 * Actualiza referencias en un archivo
 */
async function updateFileReferences(filePath) {
    try {
        let content = await fs.readFile(filePath, 'utf-8');
        let modified = false;
        let changes = [];

        // Buscar todas las referencias a imágenes (strings y imports con @/)
        const imagePattern = /(["'`])([@]?\/?assets\/img\/[^"'`]*\.(jpg|jpeg|png|JPG|JPEG|PNG))(["'`])/gi;

        const matches = [...content.matchAll(imagePattern)];
        for (const match of matches) {
            const quote1 = match[1];
            let imagePath = match[2];
            const quote2 = match[4];

            // Normalizar ruta: convertir @/assets a /assets para verificación de archivo
            const normalizedPath = imagePath.replace(/^@\//, '/');
            const webpPath = imagePath.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp');
            const normalizedWebpPath = normalizedPath.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp');
            const fullWebpPath = path.join(__dirname, '../public', normalizedWebpPath);

            const exists = await fileExists(fullWebpPath);
            if (exists) {
                content = content.replace(match[0], `${quote1}${webpPath}${quote2}`);
                modified = true;
                changes.push(`${imagePath} → ${webpPath}`);
            }
        }

        // También buscar en imports con from
        const importPattern = /from\s+["']([@]?\/?assets\/img\/[^"']*\.(jpg|jpeg|png|JPG|JPEG|PNG))["']/gi;
        const importMatches = [...content.matchAll(importPattern)];
        for (const match of importMatches) {
            let imagePath = match[1];
            const normalizedPath = imagePath.replace(/^@\//, '/');
            const webpPath = imagePath.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp');
            const normalizedWebpPath = normalizedPath.replace(/\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i, '.webp');
            const fullWebpPath = path.join(__dirname, '../public', normalizedWebpPath);

            const exists = await fileExists(fullWebpPath);
            if (exists) {
                content = content.replace(match[0], match[0].replace(imagePath, webpPath));
                modified = true;
                changes.push(`import: ${imagePath} → ${webpPath}`);
            }
        }

        if (modified) {
            await fs.writeFile(filePath, content, 'utf-8');
            console.log(`✓ Actualizado: ${path.relative(SOURCE_DIR, filePath)}`);
            changes.forEach(change => console.log(`  - ${change}`));
            return changes.length;
        }
        return 0;
    } catch (error) {
        console.error(`✗ Error en ${filePath}:`, error.message);
        return 0;
    }
}

/**
 * Busca recursivamente archivos TypeScript/TSX, SCSS y CSS
 */
async function findFiles(dir, fileList = []) {
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
        const filePath = path.join(dir, file.name);

        if (file.isDirectory()) {
            // Excluir node_modules y .next
            if (file.name !== 'node_modules' && file.name !== '.next') {
                await findFiles(filePath, fileList);
            }
        } else if (file.isFile() && /\.(ts|tsx|scss|css)$/.test(file.name)) {
            fileList.push(filePath);
        }
    }

    return fileList;
}

/**
 * Función principal
 */
async function main() {
    console.log('🔄 Actualizando referencias de imágenes a WebP...\n');

    try {
        // Buscar todos los archivos TypeScript/TSX, SCSS y CSS
        const files = await findFiles(SOURCE_DIR);

        // También buscar en public/assets/scss
        const scssDir = path.join(__dirname, '../public/assets/scss');
        try {
            const scssFiles = await findFiles(scssDir);
            files.push(...scssFiles);
        } catch (e) {
            // Ignorar si no existe
        }

        console.log(`Encontrados ${files.length} archivos para revisar\n`);

        let totalChanges = 0;
        for (const file of files) {
            const changes = await updateFileReferences(file);
            totalChanges += changes;
        }

        console.log(`\n✅ Proceso completado. ${totalChanges} referencias actualizadas.`);
    } catch (error) {
        console.error('Error fatal:', error);
        process.exit(1);
    }
}

main().catch(console.error);

