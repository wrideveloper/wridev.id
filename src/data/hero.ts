import type { Highlight } from "~/models/hero";
import HeroImage1 from "~/assets/hero/hero-1.jpg";
import HeroImage2 from "~/assets/hero/hero-2.jpg";
import HeroImage3 from "~/assets/hero/hero-3.jpg";
import HeroImage4 from "~/assets/hero/hero-4.jpg";
import HeroImage5 from "~/assets/hero/hero-5.jpg";

type HeroData = {
	headline: {
		top: string;
		bottom: string;
	};
	shortText: string;
	buttonText: string;
	highlights: Highlight[];
	images: ImageMetadata[];
};

export const HERO_DATA: HeroData = {
	headline: {
		top: "Learn Together",
		bottom: "Grow Together",
	},
	shortText:
		"Saling berbagi, belajar, dan bangun koneksi yang berharga dengan sesama tech-enthusiast. Dapatkan wawasan terbaru tentang perkembangan teknologi dan temukan kesempatan kolaborasi yang tak ternilai harganya.",
	buttonText: "Let's Xplore 🚀",
	highlights: [
		{ title: "10+", subtitle: "years of activities" },
		{ title: "100+", subtitle: "active members" },
		{ title: "4", subtitle: "miniclass" },
	],
	images: [HeroImage1, HeroImage2, HeroImage3, HeroImage4, HeroImage5],
};
