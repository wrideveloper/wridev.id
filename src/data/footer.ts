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
