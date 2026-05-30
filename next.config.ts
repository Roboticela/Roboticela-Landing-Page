import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/company/press',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/resources/documentation',
        destination: '/support',
        permanent: true,
      },
      {
        source: '/resources/community',
        destination: '/community',
        permanent: true,
      },
      {
        source: '/resources/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/legal/accessibility',
        destination: '/accessibility',
        permanent: true,
      },
      {
        source: '/legal/security',
        destination: '/security',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
