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
import { parkingLotHubHref } from "@/lib/parking-lot-service-page";
import { foundationsHubHref } from "@/lib/commercial-foundations-page";
import { metalBuildingsHubHref } from "@/lib/commercial-metal-buildings-page";
import { caseStudies, hasCaseStudies } from "@/lib/projects-data";
import { hasPublishableCredentials } from "@/lib/credentials-data";

/**
 * Path-level lastmod for URLs with dated substantive updates after
 * contentLastUpdated. Dates match PR #22 / #23 merge dates (2026-09-16),
 * not build time.
 */
const sitemapLastmodByPath: Record<string, string> = {
  "/services": "2026-09-16",
  "/services/asphalt-paving": "2026-09-16",
  "/services/commercial-parking-lots": "2026-09-16",
  "/services/commercial-metal-buildings": "2026-09-16",
  "/services/metal-buildings-roofing": "2026-09-16",
  ...Object.fromEntries(
    asphaltCityIndex.map((page) => [
      asphaltCityHref(page.citySlug),
      "2026-09-16",
    ]),
  ),
};

function lastModifiedFor(path: string): Date {
  return new Date(sitemapLastmodByPath[path] ?? contentLastUpdated);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultLastModified = lastModifiedFor("/");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: defaultLastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: lastModifiedFor("/services"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/service-area`,
      lastModified: defaultLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/industries`,
      lastModified: defaultLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: defaultLastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: lastModifiedFor(`/services/${service.slug}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = priorityCities.map((city) => ({
    url: `${siteConfig.url}/service-area/${city.slug}`,
    lastModified: defaultLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityServiceRoutes: MetadataRoute.Sitemap = cityServicePages
    .filter((entry) => entry.serviceSlug !== "asphalt-paving")
    .map((entry) => ({
      url: `${siteConfig.url}${cityServiceHref(entry.citySlug, entry.serviceSlug)}`,
      lastModified: defaultLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const asphaltCityRoutes: MetadataRoute.Sitemap = asphaltCityIndex.map(
    (page) => ({
      url: `${siteConfig.url}${asphaltCityHref(page.citySlug)}`,
      lastModified: lastModifiedFor(asphaltCityHref(page.citySlug)),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const concreteCityRoutes: MetadataRoute.Sitemap = concreteServiceAreaCities.map(
    (city) => ({
      url: `${siteConfig.url}${concreteCityHref(city.slug)}`,
      lastModified: defaultLastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  const parkingLotHubRoute: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}${parkingLotHubHref}`,
      lastModified: lastModifiedFor(parkingLotHubHref),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const foundationsHubRoute: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}${foundationsHubHref}`,
      lastModified: defaultLastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const metalBuildingsHubRoute: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}${metalBuildingsHubHref}`,
      lastModified: lastModifiedFor(metalBuildingsHubHref),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // These routes exist so they can be reviewed on staging, but an empty
  // projects or credentials page is a thin page and is not worth submitting.
  const projectsIndex: MetadataRoute.Sitemap = hasCaseStudies
    ? [
        {
          url: `${siteConfig.url}/projects`,
          lastModified: defaultLastModified,
          changeFrequency: "monthly",
          priority: 0.9,
        },
      ]
    : [];

  const certificationsRoute: MetadataRoute.Sitemap = hasPublishableCredentials
    ? [
        {
          url: `${siteConfig.url}/certifications`,
          lastModified: defaultLastModified,
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
    ...parkingLotHubRoute,
    ...foundationsHubRoute,
    ...metalBuildingsHubRoute,
    ...projectsIndex,
    ...projectRoutes,
    ...certificationsRoute,
  ];
}
