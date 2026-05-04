import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: '/course/:slug*',
        destination: '/courses/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
