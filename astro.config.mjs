// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
import uicons from "unplugin-icons/vite";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  integrations: [svelte(), icon()],

  vite: {
    plugins: [tailwindcss(), uicons({ compiler: "svelte" })],
  },
});
