type NavigationItem = {
	href: string;
	text: string;
};

type SiteNavigationList = {
	title: string;
	items: NavigationItem[];
};

type FooterData = {
	/** the logo source url */
	logo: {
		dark: string;
		light: string;
	};
	/** used for the description below the logo on the footer */
	description: string;
	/** used for the navigation list on the footer */
	navigationList: SiteNavigationList[];
};

export const FOOTER_DATA: FooterData = {
	logo: {
		dark: "https://elianiva.my.id/wri/light.png",
		light: "https://elianiva.my.id/wri/light.png",
	},
	description:
		"Komunitas yang bertujuan untuk membina dan mengembangkan kreativitas mahasiswa di bidang ilmu pengetahuan dan teknologi",
	navigationList: [
		{
			title: "Miniclass",
			items: [
				{ href: "/", text: "Mobile Development" },
				{ href: "/", text: "Web Development" },
				{ href: "/", text: "Game Development" },
				{ href: "/", text: "UI/UX Design" },
			],
		},
		{
			title: "Activities",
			items: [
				{ href: "/", text: "Open Talk" },
				{ href: "/", text: "WRI OOT" },
				{ href: "/", text: "Workshop" },
			],
		},
		{
			title: "Contact Us",
			items: [
				{ href: "/", text: "Instagram" },
				{ href: "/", text: "Facebook" },
				{ href: "/", text: "Github" },
				{ href: "/", text: "LinkedIn" },
				{ href: "/", text: "Medium" },
			],
		},
		{
			title: "Talents",
			items: [
				{ href: "/", text: "Talent Pool" },
				{ href: "/", text: "Recruitment" },
			],
		},
	],
};
