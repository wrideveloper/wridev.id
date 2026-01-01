// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
import uicons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), icon()],
  vite: {
    plugins: [
      tailwindcss(),
      uicons({ compiler: "svelte" }),
    ],
  },
});
