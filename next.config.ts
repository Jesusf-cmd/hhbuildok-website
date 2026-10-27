import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import { siteRedirects } from "./lib/site-redirects";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  // Next unshifts a trailing-slash redirect ahead of user redirects, which
  // would chain /services/concrete-construction/{city}/ to the non-slash
  // path and then to the survivor. Skip that built-in rule and append the
  // same normalization after the concrete rules in siteRedirects().
  skipTrailingSlashRedirect: true,
  async redirects() {
    return siteRedirects();
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
