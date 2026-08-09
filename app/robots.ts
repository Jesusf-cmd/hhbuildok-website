import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";
import { isProductionSite } from "@/lib/site-env";

export default function robots(): MetadataRoute.Robots {
  // Staging stays crawlable on purpose: a Disallow would stop crawlers from
  // ever reading the noindex tag that actually keeps these pages out of search.
  if (!isProductionSite) {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
