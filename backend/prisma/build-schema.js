// Script Node.js pour concaténer tous les fichiers .prisma du dossier prisma/schema/ dans prisma/schema.prisma
// Usage : node prisma/build-schema.js

const fs = require('fs');
const path = require('path');

const SCHEMA_DIR = path.join(__dirname, 'schema');
const OUTPUT_FILE = path.join(__dirname, 'schema.prisma');

function concatSchemas() {
  const files = fs.readdirSync(SCHEMA_DIR)
    .filter(f => f.endsWith('.prisma'))
    .sort(); // Optionnel : ordre alphabétique

  let content = '';
  for (const file of files) {
    const filePath = path.join(SCHEMA_DIR, file);
    content += `// --- ${file} ---\n`;
    content += fs.readFileSync(filePath, 'utf8') + '\n';
  }
  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`Schemas concaténés dans ${OUTPUT_FILE}`);
}

concatSchemas();
