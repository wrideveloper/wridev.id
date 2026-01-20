// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
import uicons from "unplugin-icons/vite";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [svelte(), icon()],
  vite: {
    plugins: [tailwindcss(), uicons({ compiler: "svelte" })],
  },
});
