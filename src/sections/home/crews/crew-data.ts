import type { Contact } from "./components/crew-card";

type Crew = {
	image: string;
	name: string;
	role: string;
	contacts: Contact[];
};

export const CREW_ITEMS: Crew[] = [
	{
		image: "/assets/crews/jerome.png",
		name: "Jerome Bell",
		role: "Fullsnack Engineer",
		contacts: [
			{ type: "medium", url: "https://medium.com" },
			{ type: "github", url: "https://github.com" },
		]
	},
	{
		image: "/assets/crews/cody.png",
		name: "Cody Fisher",
		role: "Fullsnack Engineer",
		contacts: [
			{ type: "medium", url: "https://medium.com" },
			{ type: "github", url: "https://github.com" },
			{ type: "linkedin", url: "https://linkedin.com" },
		]
	},
	{
		image: "/assets/crews/eleanor.png",
		name: "Eleanor Pena",
		role: "Fullsnack Engineer",
		contacts: [
			{ type: "medium", url: "https://medium.com" },
			{ type: "linkedin", url: "https://linkedin.com" },
		]
	},
	{
		image: "/assets/crews/jenny.png",
		name: "Jenny Wilson",
		role: "Fullsnack Engineer",
		contacts: [
			{ type: "medium", url: "https://medium.com" },
			{ type: "github", url: "https://github.com" },
			{ type: "linkedin", url: "https://linkedin.com" },
		]
	},
	{
		image: "/assets/crews/devon.png",
		name: "Devon Lane",
		role: "Fullsnack Engineer",
		contacts: [
			{ type: "github", url: "https://github.com" },
			{ type: "linkedin", url: "https://linkedin.com" },
		]
	},
	{
		image: "/assets/crews/ronald.png",
		name: "Ronald Richards",
		role: "Fullsnack Engineer",
		contacts: [
			{ type: "github", url: "https://github.com" },
		]
	},
	{
		image: "/assets/crews/leslie.png",
		name: "Leslie Alexander",
		role: "Fullsnack Engineer",
		contacts: [
			{ type: "medium", url: "https://medium.com" },
			{ type: "github", url: "https://github.com" },
			{ type: "linkedin", url: "https://linkedin.com" },
		]
	},
	{
		image: "/assets/crews/jane.png",
		name: "Jane Cooper",
		role: "Fullsnack Engineer",
		contacts: [
			{ type: "medium", url: "https://medium.com" },
			{ type: "github", url: "https://github.com" },
			{ type: "linkedin", url: "https://linkedin.com" },
		]
	},
]
