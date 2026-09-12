// One-time script: uploads public/photos/*.jpg to Cloudinary under the
// "gifts-gulf" folder, using a public_id that matches the local filename
// (minus extension) so src/lib/photos.ts can build predictable URLs.
//
// Usage: node scripts/upload-photos-to-cloudinary.mjs
// Requires CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET
// in .env.local.

import { v2 as cloudinary } from "cloudinary";
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { config } from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.join(__dirname, "..", ".env.local") });

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error(
    "Missing Cloudinary credentials in .env.local — see .env.example.",
  );
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const photosDir = path.join(__dirname, "..", "public", "photos");
const files = readdirSync(photosDir).filter((f) => f.endsWith(".jpg"));

console.log(`Uploading ${files.length} photos to Cloudinary (folder: gifts-gulf)...`);

for (const file of files) {
  const publicId = `gifts-gulf/${path.basename(file, ".jpg")}`;
  const result = await cloudinary.uploader.upload(path.join(photosDir, file), {
    public_id: publicId,
    overwrite: true,
    invalidate: true,
  });
  console.log(`✓ ${file} -> ${result.public_id} (${result.width}x${result.height})`);
}

console.log("Done.");
