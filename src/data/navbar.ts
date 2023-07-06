type NavigationItem = {
	href: string;
	text: string;
};

type NavbarData = {
	logo: {
		light: string;
		dark: string;
	};
	navigationItems: NavigationItem[];
};

export const NAVBAR_DATA: NavbarData = {
	logo: {
		dark: "https://elianiva.my.id/wri/dark.png",
		light: "https://elianiva.my.id/wri/light.png",
	},
	navigationItems: [
		{ href: "/miniclass", text: "Miniclass" },
		{ href: "/articles", text: "Articles" },
		{ href: "/projects", text: "Projects" },
		{ href: "/talents", text: "Talents" },
	],
};
