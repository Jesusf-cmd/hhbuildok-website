import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const asphaltCitySlugs = [
  "norman",
  "oklahoma-city",
  "edmond",
  "moore",
  "yukon",
  "midwest-city",
  "tulsa",
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return asphaltCitySlugs.map((citySlug) => ({
      source: `/service-area/${citySlug}/asphalt-paving`,
      destination: `/services/asphalt-paving/${citySlug}`,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/services/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
