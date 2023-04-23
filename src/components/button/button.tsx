import { PropsWithChildren } from "react";

type ButtonVariant = "solid" | "outlined";

type ButtonProps = {
	variant?: ButtonVariant;
};

export function Button({ variant = "solid", ...props }: PropsWithChildren<ButtonProps>) {
	const variantClassname =
		variant === "solid"
			? "text-white bg-amber-400 px-6 py-3"
			: "px-8 py-2 text-amber-400 border-2 border-amber-400";

	return <button className={`font-semibold font-sans rounded-lg ${variantClassname}`}>{props.children}</button>;
}
