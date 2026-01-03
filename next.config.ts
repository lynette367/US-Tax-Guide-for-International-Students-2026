import type { NextConfig } from "next";

const archiveRoutes = [
  "/study",
  "/volunteer",
  "/aupair",
  "/work",
  "/immigration",
];

const nextConfig: NextConfig = {
  async rewrites() {
    return archiveRoutes.map((route) => ({
      source: route,
      destination: `/archive${route}`,
    }));
  },
  async headers() {
    const robotsHeader = [
      {
        key: "X-Robots-Tag",
        value: "noindex, follow",
      },
    ];

    return [
      {
        source: "/archive/:path*",
        headers: robotsHeader,
      },
      ...archiveRoutes.map((route) => ({
        source: route,
        headers: robotsHeader,
      })),
    ];
  },
};

export default nextConfig;
