import LogoDark from "~/assets/logo/wri-dark-512.png";
import LogoLight from "~/assets/logo/wri-light-512.png";
import type { SiteNavigationList } from "~/models/navigation";
import type { Logo } from "~/models/logo";

type FooterData = {
	logo: Logo;
	description: string;
	navigationList: SiteNavigationList[];
};

export const FOOTER_DATA: FooterData = {
	logo: {
		dark: LogoDark,
		light: LogoLight,
	},
	description:
		"Komunitas sebagai tempat belajar bersama mengembangkan kreativitas dan inovasi di bidang ilmu pengetahuan dan teknologi",
	navigationList: [
		{
			title: "Miniclass",
			items: [
				{ href: "/miniclass/mobile", text: "Mobile Development" },
				{ href: "/miniclass/web", text: "Web Development" },
				{ href: "/miniclass/game", text: "Game Development" },
				{ href: "/miniclass/ui-ux", text: "UI/UX Design" },
			],
		},
		{
			title: "Contact Us",
			items: [
				{ href: "https://www.instagram.com/wri_polinema/", text: "Instagram" },
				{ href: "https://github.com/wrideveloper", text: "Github" },
				{ href: "https://www.linkedin.com/company/wripolinema", text: "LinkedIn" },
				{ href: "https://medium.com/wripolinema", text: "Medium" },
			],
		},
	],
};
