import type { Props as SeoData } from "astro-seo";

export const SEO_DATA: SeoData = {
	titleTemplate: "%s - Workshop Riset Informatika",
	description: "Workshop Riset Informatika",
	extend: {
		link: [{ rel: "icon", href: "/favicon.png" }],
	},
};
