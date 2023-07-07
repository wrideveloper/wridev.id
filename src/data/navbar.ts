import LogoDark from "~/assets/logo/wri-dark-512.png";
import LogoLight from "~/assets/logo/wri-light-512.png";

type NavigationItem = {
	href: string;
	text: string;
};

type NavbarData = {
	logo: {
		light: ImageMetadata;
		dark: ImageMetadata;
	};
	navigationItems: NavigationItem[];
};

export const NAVBAR_DATA: NavbarData = {
	logo: {
		dark: LogoDark,
		light: LogoLight,
	},
	navigationItems: [
		{ href: "/miniclass", text: "Miniclass" },
		{ href: "/articles", text: "Articles" },
		{ href: "/projects", text: "Projects" },
		{ href: "/talents", text: "Talents" },
		{ href: "/about", text: "About" },
	],
};
