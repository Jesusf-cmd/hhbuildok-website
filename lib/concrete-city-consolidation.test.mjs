import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { registerHooks } from "node:module";
import {
  concreteConsolidationLastmod,
  concreteConsolidationRedirects,
  concreteSurvivorPath,
  consolidatedConcreteCitySlugs,
  isConsolidatedConcreteCity,
  retiredConcreteCityPath,
} from "./concrete-city-consolidation.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier.startsWith("@/")) {
      const target = path.join(root, specifier.slice(2));
      const file = target.endsWith(".ts") ? target : `${target}.ts`;
      return nextResolve(pathToFileURL(file).href, context);
    }
    if (specifier.startsWith(".") && !path.extname(specifier)) {
      return nextResolve(`${specifier}.ts`, context);
    }
    return nextResolve(specifier, context);
  },
});

const {
  asphaltCityRedirects,
  siteRedirects,
  trailingSlashNormalizationRedirect,
} = await import("./site-redirects.ts");

const { concreteCityHref } = await import("./concrete-service-page.ts");
const { cityServiceHref, getCityService } = await import(
  "./city-service-data.ts"
);
const { foundationsConcreteCityHref } = await import(
  "./commercial-foundations-page.ts"
);
const { parkingLotConcreteCityHref } = await import(
  "./parking-lot-service-page.ts"
);
const { getConcreteCityPage } = await import("./concrete-city-pages.ts");
const { default: sitemap } = await import("../app/sitemap.ts");

const origin = "https://hhbuildok.com";

function walk(dir, files) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name === ".open-next" || name === ".git") {
      continue;
    }
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full, files);
      continue;
    }
    if (/\.(ts|tsx|mjs|js|jsx)$/.test(name) && !name.endsWith(".test.mjs")) {
      files.push(full);
    }
  }
  return files;
}

describe("concrete city consolidation redirects", () => {
  const redirects = siteRedirects();
  const concrete = concreteConsolidationRedirects();
  const normalization = trailingSlashNormalizationRedirect();

  it("maps each retired services URL to the same-city service-area survivor", () => {
    assert.deepEqual(consolidatedConcreteCitySlugs, [
      "edmond",
      "midwest-city",
      "norman",
      "oklahoma-city",
      "yukon",
    ]);

    for (const city of consolidatedConcreteCitySlugs) {
      const survivor = `/service-area/${city}/concrete-construction`;
      assert.equal(concreteSurvivorPath(city), survivor);
      assert.equal(retiredConcreteCityPath(city), `/services/concrete-construction/${city}`);
      assert.equal(
        concrete.find((rule) => rule.source === retiredConcreteCityPath(city))
          .destination,
        survivor,
      );
      assert.equal(
        concrete.find((rule) => rule.source === `${retiredConcreteCityPath(city)}/`)
          .destination,
        survivor,
      );
    }
  });

  it("keeps Edmond on the indexed service-area URL and leaves Moore and Tulsa unmapped", () => {
    assert.equal(
      concreteSurvivorPath("edmond"),
      "/service-area/edmond/concrete-construction",
    );
    assert.equal(isConsolidatedConcreteCity("moore"), false);
    assert.equal(isConsolidatedConcreteCity("tulsa"), false);
    assert.equal(
      redirects.some((rule) => rule.source.includes("concrete-construction/tulsa")),
      false,
    );
    assert.equal(
      redirects.some((rule) => rule.source.includes("/moore/concrete-construction")),
      false,
    );
  });

  it("does not chain, loop, or drop query strings in the redirect table", () => {
    const sources = new Set(redirects.map((rule) => rule.source));
    for (const rule of concrete) {
      assert.equal(rule.permanent, true);
      assert.equal(rule.destination.includes("?"), false);
      assert.equal(rule.destination.endsWith("/"), false);
      assert.equal(sources.has(rule.destination), false);
      assert.notEqual(rule.source, rule.destination);
    }

    for (const rule of redirects) {
      if (rule.source.includes(":")) continue;
      assert.equal(
        redirects.find((next) => next.source === rule.destination),
        undefined,
      );
    }

    assert.equal(redirects.at(-1).source, normalization.source);
    assert.equal(redirects.at(-1).destination, normalization.destination);
    for (const rule of concrete) {
      assert.ok(redirects.indexOf(rule) < redirects.length - 1);
    }
  });

  it("leaves the asphalt city redirects unchanged", () => {
    const asphalt = asphaltCityRedirects();
    assert.deepEqual(
      asphalt.map((rule) => [rule.source, rule.destination, rule.permanent]),
      [
        ["/service-area/norman/asphalt-paving", "/services/asphalt-paving/norman", true],
        ["/service-area/oklahoma-city/asphalt-paving", "/services/asphalt-paving/oklahoma-city", true],
        ["/service-area/edmond/asphalt-paving", "/services/asphalt-paving/edmond", true],
        ["/service-area/moore/asphalt-paving", "/services/asphalt-paving/moore", true],
        ["/service-area/yukon/asphalt-paving", "/services/asphalt-paving/yukon", true],
        ["/service-area/midwest-city/asphalt-paving", "/services/asphalt-paving/midwest-city", true],
        ["/service-area/tulsa/asphalt-paving", "/services/asphalt-paving/tulsa", true],
      ],
    );
    assert.deepEqual(
      redirects.filter((rule) => rule.source.includes("asphalt-paving")),
      asphalt,
    );
  });
});

describe("concrete survivor links and sitemap", () => {
  it("points internal concrete city helpers at the survivor", () => {
    for (const city of consolidatedConcreteCitySlugs) {
      const survivor = concreteSurvivorPath(city);
      assert.equal(concreteCityHref(city), survivor);
      assert.equal(cityServiceHref(city, "concrete-construction"), survivor);
      assert.equal(foundationsConcreteCityHref(city), survivor);
      assert.equal(parkingLotConcreteCityHref(city), survivor);
    }

    assert.equal(
      concreteCityHref("tulsa"),
      "/services/concrete-construction/tulsa",
    );
    assert.equal(
      cityServiceHref("moore", "concrete-construction"),
      "/service-area/moore/concrete-construction",
    );
    assert.equal(getConcreteCityPage("edmond"), null);
    assert.equal(getConcreteCityPage("tulsa")?.citySlug, "tulsa");
  });

  it("does not hard-code a retired concrete URL outside the redirect builder", () => {
    const files = ["app", "components", "lib"].flatMap((dir) =>
      walk(path.join(root, dir), []),
    );
    files.push(path.join(root, "next.config.ts"));
    const allowed = new Set([
      path.normalize(path.join(root, "lib/concrete-city-consolidation.ts")),
    ]);
    for (const city of consolidatedConcreteCitySlugs) {
      const retired = `/services/concrete-construction/${city}`;
      for (const file of files) {
        if (allowed.has(path.normalize(file))) continue;
        const text = readFileSync(file, "utf8");
        assert.equal(
          text.includes(retired),
          false,
          `${path.relative(root, file)} still contains ${retired}`,
        );
      }
    }
  });

  it("lists each survivor once, drops the five duplicates, and dates only those pages", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    assert.equal(urls.length, 39);
    assert.equal(new Set(urls).size, urls.length);

    for (const city of consolidatedConcreteCitySlugs) {
      const survivor = `${origin}${concreteSurvivorPath(city)}`;
      const retired = `${origin}${retiredConcreteCityPath(city)}`;
      assert.equal(urls.filter((url) => url === survivor).length, 1);
      assert.equal(urls.includes(retired), false);
      const entry = entries.find((item) => item.url === survivor);
      assert.equal(entry.lastModified.toISOString().slice(0, 10), concreteConsolidationLastmod);
    }

    assert.equal(urls.includes(`${origin}/services/concrete-construction/tulsa`), true);
    assert.equal(urls.includes(`${origin}/service-area/moore/concrete-construction`), true);
    assert.equal(urls.includes(`${origin}/retaining-walls`), false);

    const home = entries.find((entry) => entry.url === origin);
    const tulsa = entries.find(
      (entry) => entry.url === `${origin}/services/concrete-construction/tulsa`,
    );
    const moore = entries.find(
      (entry) => entry.url === `${origin}/service-area/moore/concrete-construction`,
    );
    const parking = entries.find(
      (entry) => entry.url === `${origin}/services/commercial-parking-lots`,
    );
    assert.equal(home.lastModified.toISOString().slice(0, 10), "2026-08-30");
    assert.equal(tulsa.lastModified.toISOString().slice(0, 10), "2026-08-30");
    assert.equal(moore.lastModified.toISOString().slice(0, 10), "2026-08-30");
    assert.equal(parking.lastModified.toISOString().slice(0, 10), "2026-09-16");
  });

  it("keeps retired scope copy on the survivor and not on Moore", () => {
    const edmond = getCityService("edmond", "concrete-construction");
    const norman = getCityService("norman", "concrete-construction");
    const okc = getCityService("oklahoma-city", "concrete-construction");
    const yukon = getCityService("yukon", "concrete-construction");
    const midwest = getCityService("midwest-city", "concrete-construction");
    const moore = getCityService("moore", "concrete-construction");

    assert.match(edmond.localAngle.join(" "), /East Edmond 15A/);
    assert.match(edmond.approach, /I-35 and Broadway Extension/);
    assert.ok(edmond.faqs.some((faq) => faq.question.includes("ADA-compliant flatwork")));
    assert.match(norman.localAngle.join(" "), /Norman Regional/);
    assert.match(norman.approach, /Norman pour starts/);
    assert.match(okc.localAngle.join(" "), /Boardwalk at Bricktown/);
    assert.match(okc.approach, /Oklahoma City work starts/);
    assert.match(yukon.heroDescription, /Kilpatrick Turnpike/);
    assert.match(yukon.localAngle.join(" "), /roughly 17% since 2020/);
    assert.ok(yukon.faqs.some((faq) => faq.question.includes("HOA-governed")));
    assert.match(midwest.localAngle.join(" "), /Town Center Plaza/);
    assert.match(midwest.localAngle.join(" "), /\$7\.5 billion/);
    assert.ok(midwest.applications.includes("Tinker Business & Industrial Park facility and yard concrete"));
    assert.equal(moore.approach, undefined);
    assert.equal(getConcreteCityPage("moore"), null);
  });
});
