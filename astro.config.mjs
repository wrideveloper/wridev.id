import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import Icons from "unplugin-icons/vite";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true,
	},
	output: "static",
	integrations: [tailwind(), svelte()],
	vite: {
		plugins: [
			Icons({
				compiler: "svelte",
			}),
		],
	},
});
