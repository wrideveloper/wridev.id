import type { ReactNode } from "react";

type MiniclassCardProps = {
	name: string;
	description: string;
	icon: ReactNode;
};

export function MiniclassCard(props: MiniclassCardProps) {
	return (
		<div className="drop-shadow-xl rounded-2xl px-8 py-12 bg-white text-gray-600 text-center">
			<div className="mb-4 w-full flex justify-center">{props.icon}</div>
			<span className="uppercase text-xl font-bold block mb-4">{props.name}</span>
			<p className="text-base font-medium leading-6">{props.description}</p>
		</div>
	);
}
