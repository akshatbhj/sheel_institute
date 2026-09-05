import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, "..");

const publicDir = path.join(root, "public");
const outputDir = path.join(root, "src", "assets", "optimized");

await fs.mkdir(outputDir, { recursive: true });

const images = [
  "pgdca.jpg",
  "elearning.jpeg",
  "adminLoginArea.jpg",
  "terp.jpg",
  "esc.jpg",
  "plc.jpg",

  // Gallery
  "slide_1.jpg",
  "slide_2.jpg",
  "slide_3.jpg",
  "slide_4.jpg",
  "slide_5.jpg",
];

for (const file of images) {
  const input = path.join(publicDir, file);

  const name = path.basename(file, path.extname(file));

  const output = path.join(outputDir, `${name}.webp`);

  try {
    await sharp(input)
      .webp({
        quality: 80,
        effort: 6,
      })
      .toFile(output);

    console.log(`✓ Created: ${name}.webp`);
  } catch (error) {
    console.error(`✗ Failed: ${file}`);
    console.error(error.message);
  }
}

console.log("\nImage optimization complete.");
