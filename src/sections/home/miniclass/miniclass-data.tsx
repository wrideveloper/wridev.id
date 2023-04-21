import { ReactNode } from "react";
import MiniclassWebIcon from "~/icons/ic_miniclass_web.svg";
import MiniclassMobileIcon from "~/icons/ic_miniclass_mobile.svg";
import MiniclassUiUxIcon from "~/icons/ic_miniclass_ui_ux.svg";
import MiniclassGameIcon from "~/icons/ic_miniclass_game.svg";

type Miniclass = {
	icon: ReactNode;
	name: string;
	description: string;
};

export const MINICLASS_ITEMS: Miniclass[] = [
	{
		icon: <MiniclassWebIcon />,
		name: "website",
		description: "Miniclass yang berfokus web app development",
	},
	{
		icon: <MiniclassMobileIcon />,
		name: "mobile",
		description: "Miniclass yang berfokus pada Mobile Apps",
	},
	{
		icon: <MiniclassUiUxIcon />,
		name: "ui/ux",
		description: "Miniclass yang berfokus pada Design Aplikasi",
	},
	{
		icon: <MiniclassGameIcon />,
		name: "game",
		description: "Miniclass yang berfokus pada game development",
	},
];
