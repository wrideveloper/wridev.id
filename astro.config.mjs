// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
