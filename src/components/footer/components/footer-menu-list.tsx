type MenuItem = {
	label: string;
	href: string;
};

export type Menu = {
	title: string;
	items: MenuItem[];
};

type MenuListProps = Menu;

export function FooterMenuList(props: MenuListProps) {
	return (
		<div>
			<span className="text-2xl text-white font-medium block mb-3">{props.title}</span>
			<ul>
				{props.items.map((item) => (
					<li key={item.href}>
						<a className="text-gray-400 text-xl block pb-3 hover:text-white" href={item.href}>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
