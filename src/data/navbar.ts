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
		dark: "/assets/logo/wri-dark-512.png",
		light: "/assets/logo/wri-light-512.png",
	},
	navigationItems: [
		{ href: "/miniclass", text: "Miniclass" },
		{ href: "/articles", text: "Articles" },
		{ href: "/projects", text: "Projects" },
		{ href: "/talents", text: "Talents" },
	],
};
