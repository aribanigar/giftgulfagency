import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    // Photos are served from Cloudinary (f_auto,q_auto), which already
    // returns optimized bytes — skip Vercel's metered Image Optimization
    // API on top of that.
    unoptimized: true,
  },
};

export default nextConfig;
