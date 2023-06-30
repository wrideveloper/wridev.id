import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import Unfonts from "unplugin-fonts/astro";

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
});
