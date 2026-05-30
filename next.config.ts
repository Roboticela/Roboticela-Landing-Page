import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|webp|avif|svg|ico|woff2|woff|ttf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Moved pages
      { source: '/company/vision', destination: '/our-vision', permanent: true },
      { source: '/company/press', destination: '/news', permanent: true },

      // Removed solutions pages — redirect to products
      { source: '/solutions/business', destination: '/products', permanent: true },
      { source: '/solutions/individuals', destination: '/products', permanent: true },
      { source: '/solutions/education', destination: '/products', permanent: true },
      { source: '/solutions/developers', destination: '/products', permanent: true },
      { source: '/solutions/:path*', destination: '/products', permanent: true },

      // Removed connect pages — redirect to support/community
      { source: '/connect/partnerships', destination: '/support', permanent: true },
      { source: '/connect/events', destination: '/community', permanent: true },
      { source: '/connect/:path*', destination: '/community', permanent: true },

      // Legacy resource redirects
      { source: '/resources/documentation', destination: '/support', permanent: true },
      { source: '/resources/community', destination: '/community', permanent: true },
      { source: '/resources/blog', destination: '/blogs', permanent: true },
      { source: '/legal/accessibility', destination: '/accessibility', permanent: true },
      { source: '/legal/security', destination: '/security', permanent: true },
    ];
  },
};

export default nextConfig;
