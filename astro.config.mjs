import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [solid()],
  site: "https://dg4-design.github.io",
  base: "/url-extractor",
  build: {
    assets: "_assets",
  },
  vite: {
    build: {
      target: "esnext",
      polyfillDynamicImport: false,
    },
  },
});
