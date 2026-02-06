import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Note: Content-Security-Policy est souvent complexe à mettre en place avec les scripts externes (Analytics, SumUp, etc.)
          // On le laisse de côté pour éviter de casser le site, mais c'est recommandé en production.
        ],
      },
    ];
  },
};

export default nextConfig;
