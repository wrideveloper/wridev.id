type MenuItem = {
	label: string;
	href: string;
};

type MenuListProps = {
	title: string;
	items: MenuItem[];
};

export function MenuList(props: MenuListProps) {
	return <div>menu list</div>;
}
