import type { MetadataRoute } from "next";
import {
  siteConfig,
  services,
  priorityCities,
  contentLastUpdated,
} from "@/lib/site-data";
import { cityServicePages, cityServiceHref } from "@/lib/city-service-data";
import {
  asphaltCityIndex,
  asphaltCityHref,
} from "@/lib/asphalt-city-index";
import {
  concreteCityHref,
  concreteServiceAreaCities,
} from "@/lib/concrete-service-page";
import { caseStudies, hasCaseStudies } from "@/lib/projects-data";
import { hasPublishableCredentials } from "@/lib/credentials-data";

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
    {
      url: `${siteConfig.url}/industries`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
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

  const cityServiceRoutes: MetadataRoute.Sitemap = cityServicePages
    .filter((entry) => entry.serviceSlug !== "asphalt-paving")
    .map((entry) => ({
      url: `${siteConfig.url}${cityServiceHref(entry.citySlug, entry.serviceSlug)}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const asphaltCityRoutes: MetadataRoute.Sitemap = asphaltCityIndex.map(
    (page) => ({
      url: `${siteConfig.url}${asphaltCityHref(page.citySlug)}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const concreteCityRoutes: MetadataRoute.Sitemap = concreteServiceAreaCities.map(
    (city) => ({
      url: `${siteConfig.url}${concreteCityHref(city.slug)}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  // These routes exist so they can be reviewed on staging, but an empty
  // projects or credentials page is a thin page and is not worth submitting.
  const projectsIndex: MetadataRoute.Sitemap = hasCaseStudies
    ? [
        {
          url: `${siteConfig.url}/projects`,
          lastModified,
          changeFrequency: "monthly",
          priority: 0.9,
        },
      ]
    : [];

  const certificationsRoute: MetadataRoute.Sitemap = hasPublishableCredentials
    ? [
        {
          url: `${siteConfig.url}/certifications`,
          lastModified,
          changeFrequency: "yearly",
          priority: 0.7,
        },
      ]
    : [];

  const projectRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${siteConfig.url}/projects/${study.slug}`,
    lastModified: new Date(study.completedAt),
    changeFrequency: "yearly",
    priority: study.featured ? 0.85 : 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...cityRoutes,
    ...cityServiceRoutes,
    ...asphaltCityRoutes,
    ...concreteCityRoutes,
    ...projectsIndex,
    ...projectRoutes,
    ...certificationsRoute,
  ];
}
