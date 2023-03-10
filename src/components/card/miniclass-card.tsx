import type { ReactNode } from "react";

type MiniclassCardProps = {
	name: string;
	description: string;
	icon: ReactNode;
};

export function MiniclassCard(props: MiniclassCardProps[]) {
	return <div>miniclass card</div>;
}
