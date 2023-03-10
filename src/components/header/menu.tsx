import Link from "next/link";
import { PropsWithChildren } from "react";

type MenuProps = {
	href: string;
};

export function Menu(props: PropsWithChildren<MenuProps>) {
	return <Link href={props.href}>{props.children}</Link>;
}
