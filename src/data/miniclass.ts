import type { Miniclass } from "~/models/miniclass";

type MiniclassData = {
	title: string;
	description: string;
	miniclasses: Miniclass[];
};

export const MINICLASS_DATA: MiniclassData = {
	title: "Workshop Riset Informatika",
	description:
		"Suatu komunitas mahasiswa IT Polinema dengan tujuan membina serta mengembangkan kreativitas mahasiswa di bidang Ilmu Pengetahuan dan Teknologi.",
	miniclasses: [
		{
			icon: "/assets/miniclass/web.png",
			title: "Web Development",
			description: "Miniclass yang berfokus dengan web app development",
			href: "/miniclass/web",
		},
		{
			icon: "/assets/miniclass/mobile.png",
			title: "Mobile Development",
			description: "Miniclass yang berfokus dengan mobile app development",
			href: "/miniclass/mobile",
		},
		{
			icon: "/assets/miniclass/game.png",
			title: "Game Development",
			description: "Miniclass yang berfokus dengan game development",
			href: "/miniclass/game",
		},
		{
			icon: "/assets/miniclass/ui-ux.png",
			title: "UI/UX Design",
			description: "Miniclass yang berfokus dengan ui/ux design",
			href: "/miniclass/ui-ux",
		},
	],
};
