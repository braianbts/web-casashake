const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const publicDir = path.join(process.cwd(), "public");

// extensiones que queremos convertir
const validExtensions = [".png", ".jpg", ".jpeg", ".JPG", ".JPEG", ".avif"];

// archivos o carpetas que querés ignorar
const ignoredNames = new Set([
  ".DS_Store",
]);

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (ignoredNames.has(entry.name)) continue;

    if (entry.isDirectory()) {
      files = files.concat(await walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function convertImage(filePath) {
  const ext = path.extname(filePath);
  if (!validExtensions.includes(ext)) return;

  const outputPath = filePath.replace(new RegExp(`${ext}$`), ".webp");

  try {
    await sharp(filePath)
      .webp({
        quality: 82,
        effort: 6,
      })
      .toFile(outputPath);

    console.log(`✅ Convertido: ${path.relative(publicDir, filePath)} -> ${path.relative(publicDir, outputPath)}`);
  } catch (error) {
    console.error(`❌ Error convirtiendo ${filePath}`);
    console.error(error.message);
  }
}

async function main() {
  try {
    const allFiles = await walk(publicDir);

    for (const file of allFiles) {
      await convertImage(file);
    }

    console.log("\n🎉 Conversión terminada.");
    console.log("Revisá los .webp generados dentro de /public");
  } catch (error) {
    console.error("❌ Error general:");
    console.error(error);
  }
}

main();