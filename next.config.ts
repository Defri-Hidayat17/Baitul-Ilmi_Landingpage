import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**", // Ini untuk mencocokkan URL thumbnail YouTube
      },
    ],
  },
  // Anda bisa menambahkan konfigurasi Next.js lainnya di sini jika ada
};

export default nextConfig;
