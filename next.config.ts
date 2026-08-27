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
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return asphaltCitySlugs.map((citySlug) => ({
      source: `/service-area/${citySlug}/asphalt-paving`,
      destination: `/services/asphalt-paving/${citySlug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
