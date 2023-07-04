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
		"https://i.ibb.co/PT83M2z/IMG-1914.jpg",
		"https://i.ibb.co/sPTv3wz/IMG-1915.jpg",
		"https://i.ibb.co/crt0tk2/DSC00329.jpg",
		"https://i.ibb.co/G9J7744/DSC00342.jpg",
		"https://i.ibb.co/Dt0xvRW/DSC09915.jpg",
	],
};
