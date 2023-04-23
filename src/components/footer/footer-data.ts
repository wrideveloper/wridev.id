import { Menu } from "./components/footer-menu-list";

export const FOOTER_ITEMS: Menu[] = [
	{
		title: "Kunjungi Kami",
		items: [
			{ label: "Github", href: "https://github.com/wrideveloper" },
			{ label: "Medium", href: "https://medium.com/wripolinema" },
			{ label: "LinkedIn", href: "https://linkedin.com/" },
		],
	},
	{
		title: "Social Media Kami",
		items: [
			{ label: "Facebook", href: "https://facebook.com" },
			{ label: "Instagram", href: "https://instagram.com" },
			{ label: "Youtube", href: "https://youtube.com" },
		],
	},
	{
		title: "Kontak Kami",
		items: [
			{ label: "contact@wri-dev.id", href: "mailto:contact@wri-dev.id" },
			{ label: "+62 1234 5678 9011", href: "tel:+62123456789011" },
		],
	},
];
