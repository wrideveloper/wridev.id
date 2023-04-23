import Link from "next/link";
import { PropsWithChildren } from "react";

type MenuProps = {
	href: string;
};

export function Menu(props: PropsWithChildren<MenuProps>) {
	return (
		<>
			<style jsx>{`
				.animated-underline::after {
					content: "";
					position: absolute;
					left: 0;
					bottom: -0.25rem;
					width: 0;
					height: 0.125rem;
					background-color: transparent;
					transition: width 200ms ease-out;
				}

				.animated-underline:hover::after {
					width: 100%;
					background-color: currentColor;
				}
			`}</style>
			<Link href={props.href}>
				<span className="animated-underline relative text-gray-600 font-semibold hover:text-amber-500 transition-colors ease-in duration-100">
					{props.children}
				</span>
			</Link>
		</>
	);
}
