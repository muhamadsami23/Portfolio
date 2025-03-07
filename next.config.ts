import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features if needed
  experimental: {},
  
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;