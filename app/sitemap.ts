import type { MetadataRoute } from "next";
import {
  siteConfig,
  services,
  priorityCities,
  contentLastUpdated,
} from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(contentLastUpdated);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/service-area`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = priorityCities.map((city) => ({
    url: `${siteConfig.url}/service-area/${city.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...cityRoutes];
}
