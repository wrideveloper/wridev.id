// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
import uicons from "unplugin-icons/vite";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  env: {
    schema: {
      PUBLIC_TURNSTILE_SITE_KEY: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
      TURNSTILE_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: false,
      }),
      METRIC_WORKER_URL: envField.string({
        context: "server",
        access: "public",
        optional: false,
      }),
      CTA_WORKER_URL: envField.string({
        context: "server",
        access: "public",
        optional: false,
      }),
      CTA_PUBLIC_API_TOKEN: envField.string({
        context: "server",
        access: "secret",
        optional: false,
      }),
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [svelte(), icon(), sitemap()],

  vite: {
    plugins: [tailwindcss(), uicons({ compiler: "svelte" })],
  },

  site: "https://wridev.id",
});
