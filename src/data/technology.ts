import type { Technology } from "~/models/technology";

type TechnologyData = {
	technologies: Technology[];
};

export const TECHNOLOGY_DATA: TechnologyData = {
	technologies: [
		{ icon: "/assets/technology/laravel.png", name: "Laravel" },
		{ icon: "/assets/technology/figma.png", name: "Figma" },
		{ icon: "/assets/technology/svelte.png", name: "Svelte" },
		{ icon: "/assets/technology/flutter.png", name: "Flutter" },
		{ icon: "/assets/technology/unity.png", name: "Unity" },
		{ icon: "/assets/technology/node.png", name: "NodeJS" },
	],
};
