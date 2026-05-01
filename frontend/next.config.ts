import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port:     "3001",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
