// Uploads only the named files from public/photos to Cloudinary under the
// "gifts-gulf" folder (public_id = filename without extension).
//
// Usage: node scripts/upload-selected-photos.mjs blog-a4-size.jpg blog-lanyard-guide.jpg

import { v2 as cloudinary } from "cloudinary";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { config } from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.join(__dirname, "..", ".env.local") });

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("Missing Cloudinary credentials in .env.local");
  process.exit(1);
}
cloudinary.config({ cloud_name: CLOUDINARY_CLOUD_NAME, api_key: CLOUDINARY_API_KEY, api_secret: CLOUDINARY_API_SECRET });

const photosDir = path.join(__dirname, "..", "public", "photos");
for (const file of process.argv.slice(2)) {
  const publicId = `gifts-gulf/${path.basename(file, ".jpg")}`;
  const r = await cloudinary.uploader.upload(path.join(photosDir, file), { public_id: publicId, overwrite: true, invalidate: true });
  console.log(`ok ${file} -> ${r.public_id} (${r.width}x${r.height})`);
}
