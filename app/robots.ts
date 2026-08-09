import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";
import { isProductionSite } from "@/lib/site-env";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionSite) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
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
