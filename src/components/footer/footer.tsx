import Image from "next/image";
import { FOOTER_ITEMS } from "./footer-data";
import { FooterMenuList } from "./components/footer-menu-list";

export function Footer() {
	return (
		<footer className="py-14 bg-gray-900">
			<div className="mx-auto max-w-screen-2xl grid grid-cols-5 gap-8 mb-20">
				<Image className="col-span-2" src="/assets/wri-logo-dark.png" alt="WRI Logo" width={320} height={100} />
				{FOOTER_ITEMS.map((item) => (
					<FooterMenuList key={item.title} {...item} />
				))}
			</div>
			<span className="block text-center text-white text-lg">©2023 Workshop Riset Informatika</span>
		</footer>
	);
}
