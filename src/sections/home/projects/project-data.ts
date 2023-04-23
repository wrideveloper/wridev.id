import type { TechStack } from "~/sections/home/projects/components/project-card";

type Project = {
	title: string;
	image: string;
	description: string;
	techStacks: TechStack[];
};

export const PROJECT_ITEMS: Project[] = [
	{
		title: "Website E-Vote HTML",
		image: "/assets/projects/evote.png",
		description:
			"Proyek kali ini datang dari himpunan JTI, dimana website yang dituju diharuskan bisa melakukan voting 1x saja, untuk teknologi yang kami gunakan yaitu laravel dan react",
		techStacks: ["laravel", "react"],
	},
	{
		title: "Website E-Vote HTML 1",
		image: "/assets/projects/evote.png",
		description:
			"Proyek kali ini datang dari himpunan JTI, dimana website yang dituju diharuskan bisa melakukan voting 1x saja, untuk teknologi yang kami gunakan yaitu laravel dan react",
		techStacks: ["laravel", "react"],
	},
	{
		title: "Website E-Vote HTML 2",
		image: "/assets/projects/evote.png",
		description:
			"Proyek kali ini datang dari himpunan JTI, dimana website yang dituju diharuskan bisa melakukan voting 1x saja, untuk teknologi yang kami gunakan yaitu laravel dan react",
		techStacks: ["laravel", "react"],
	},
];
