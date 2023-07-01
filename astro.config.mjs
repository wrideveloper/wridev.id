import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import Unfonts from "unplugin-fonts/astro";
import Icons from "unplugin-icons/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		Unfonts({
			google: {
				families: ["Inter"],
			},
		}),
		svelte(),
	],
	vite: {
		plugins: [
			Icons({
				compiler: "svelte",
			}),
		],
	},
});
