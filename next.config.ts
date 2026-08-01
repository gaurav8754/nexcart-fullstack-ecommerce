import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // cacheComponents: false,


  // experimental: {
  //   turbopackFileSystemCacheForDev: false
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  }

};

export default nextConfig;
