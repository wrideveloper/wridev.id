import type { Technology } from "~/models/technology";
import LaravelLogo from "~/assets/technology/laravel.png";
import SvelteLogo from "~/assets/technology/svelte.png";
import FlutterLogo from "~/assets/technology/flutter.png";
import FigmaLogo from "~/assets/technology/figma.png";
import UnityLogo from "~/assets/technology/unity.png";
import NodeLogo from "~/assets/technology/node.png";

type TechnologyData = {
	technologies: Technology[];
};

export const TECHNOLOGY_DATA: TechnologyData = {
	technologies: [
		{ icon: LaravelLogo, name: "Laravel" },
		{ icon: FlutterLogo, name: "Flutter" },
		{ icon: NodeLogo, name: "NodeJS" },
		{ icon: SvelteLogo, name: "Svelte" },
		{ icon: FigmaLogo, name: "Figma" },
		{ icon: UnityLogo, name: "Unity" },
	],
};
