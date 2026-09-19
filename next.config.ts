import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.fcgp27-1.fna.fbcdn.net',
        port: '',
        pathname: '/v/**',
      },
    ],
  },
};

export default nextConfig;
