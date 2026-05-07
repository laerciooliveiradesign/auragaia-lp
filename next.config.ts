import type { NextConfig } from "next";

const APRESENTACAO_URL = "https://apresentacao-portal-gaia.vercel.app";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/apresentacao-comercial", destination: `${APRESENTACAO_URL}/` },
      { source: "/apresentacao-comercial/:path*", destination: `${APRESENTACAO_URL}/:path*` },
    ];
  },
};

export default nextConfig;
