import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// This cache reads prerendered pages from Workers assets and is read-only: it
// only suits routes that are fully prerendered at build time and never
// revalidated (ISR, revalidatePath/Tag). `build:worker` must run
// `populateCache local` so the entries ship with the assets.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
