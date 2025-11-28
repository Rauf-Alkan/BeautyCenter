import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash için izin
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", // Unsplash Plus görselleri için
      },
      // Eğer başka bir yerden resim çekeceksen (örn: kendi sunucun), buraya ekle:
      // {
      //   protocol: "https",
      //   hostname: "resimlerin-oldugu-site.com",
      // },
    ],
  },
};

export default nextConfig;
