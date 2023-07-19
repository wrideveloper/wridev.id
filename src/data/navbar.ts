import LogoDark from "~/assets/logo/wri-dark-512.png";
import LogoLight from "~/assets/logo/wri-light-512.png";
import type { Logo } from "~/models/logo";
import type { NavigationItem } from "~/models/navigation";

type NavbarData = {
	logo: Logo;
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
		{ href: "/talents", text: "Talents" },
		{ href: "/about", text: "About" },
	],
};
