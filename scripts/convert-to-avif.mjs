import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const INPUT_DIR = "./public/presets";
const QUALITY = 60; // AVIF quality — lower = smaller file, higher = better quality (50-70 is a good range)

const SUPPORTED = [".jpg", ".jpeg", ".png", ".webp"];

async function convert() {
  const files = await readdir(INPUT_DIR);
  const images = files.filter((f) => SUPPORTED.includes(extname(f).toLowerCase()));

  console.log(`Found ${images.length} images to convert...\n`);

  let totalOriginal = 0;
  let totalAvif = 0;

  for (const file of images) {
    const inputPath = join(INPUT_DIR, file);
    const outputName = basename(file, extname(file)) + ".avif";
    const outputPath = join(INPUT_DIR, outputName);

    // Skip if already an avif
    if (extname(file).toLowerCase() === ".avif") continue;

    try {
      await sharp(inputPath)
        .avif({ quality: QUALITY })
        .toFile(outputPath);

      const [origSize, avifSize] = await Promise.all([
        stat(inputPath).then((s) => s.size),
        stat(outputPath).then((s) => s.size),
      ]);

      const saving = Math.round((1 - avifSize / origSize) * 100);
      totalOriginal += origSize;
      totalAvif += avifSize;

      console.log(`✓ ${file} → ${outputName}  (${kb(origSize)} → ${kb(avifSize)}, -${saving}%)`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  const totalSaving = Math.round((1 - totalAvif / totalOriginal) * 100);
  console.log(`\nDone. Total: ${mb(totalOriginal)} → ${mb(totalAvif)} (-${totalSaving}%)`);
}

const kb = (b) => `${Math.round(b / 1024)}kb`;
const mb = (b) => `${(b / 1024 / 1024).toFixed(1)}mb`;

convert();
