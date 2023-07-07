import type { Highlight } from "~/models/hero";

type HeroData = {
	headline: {
		top: string;
		bottom: string;
	};
	shortText: string;
	buttonText: string;
	highlights: Highlight[];
	images: string[];
};

export const HERO_DATA: HeroData = {
	headline: {
		top: "Learn Together",
		bottom: "Grow Together",
	},
	shortText:
		"Bersama Workshop Riset Informatika, sudahi galaumu mari nguli ngoding bersamaku, bersama tuhan mari kita kerjakan seluruh proyekan.",
	buttonText: "Know More",
	highlights: [
		{ title: "10+", subtitle: "years" },
		{ title: "200+", subtitle: "members" },
		{ title: "3", subtitle: "partners" },
		{ title: "4", subtitle: "miniclass" },
	],
	images: [
		"/assets/hero/hero-1.jpg",
		"/assets/hero/hero-2.jpg",
		"/assets/hero/hero-3.jpg",
		"/assets/hero/hero-4.jpg",
		"/assets/hero/hero-5.jpg",
	],
};
