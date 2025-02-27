import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [solid()],
  site: "https://your-username.github.io",
  base: "/url-extractor",
  vite: {
    build: {
      target: "esnext",
      polyfillDynamicImport: false,
    },
  },
});
