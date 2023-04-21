import Image from "next/image";
import { Button } from "~/components/button";
import { MENU_ITEMS } from "~/components/header/menu-data";
import { Menu } from "~/components/header/menu";

export function Header() {
	return (
		<header className="p-4 shadow-md w-full sticky left-0 right-0 top-0">
			<div className="mx-auto max-w-screen-xl grid grid-cols-[1fr,4fr,1fr] gap-8">
				<div>
					<Image src="/assets/wri-logo.png" alt="WRI Logo" width={200} height={64} />
				</div>
				<div className="flex items-center justify-center gap-4">
					{MENU_ITEMS.map((menu) => (
						<Menu key={menu.href} href={menu.href}>
							{menu.text}
						</Menu>
					))}
				</div>
				<div className="flex justify-end items-center">
					<Button variant="outlined">Portfolio</Button>
				</div>
			</div>
		</header>
	);
}