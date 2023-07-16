import type { Props as SeoData } from "astro-seo";

export const SEO_DATA: SeoData = {
	titleTemplate: "%s - Workshop Riset Informatika",
	description:
		"Komunitas sebagai tempat belajar bersama mengembangkan kreativitas dan inovasi di bidang ilmu pengetahuan dan teknologi",
	extend: {
		link: [{ rel: "icon", href: "/favicon.png" }],
	},
	canonical: "https://wri-dev.id/",
	openGraph: {
		basic: {
			type: "website",
			title: "Workshop Riset Informatika",
			image: "/og-image.png",
			url: "https://wri-dev.id/",
		},
	},
	charset: "UTF-8",
	nofollow: false,
	noindex: false,
	twitter: {
		title: "Workshop Riset Informatika",
		image: "/og-image.png",
		description:
			"Komunitas sebagai tempat belajar bersama mengembangkan kreativitas dan inovasi di bidang ilmu pengetahuan dan teknologi",
		site: "https://wri-dev.id/",
	},
};
