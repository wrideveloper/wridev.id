import { PropsWithChildren } from "react";

type ButtonVariant = "solid" | "outlined";

type ButtonProps = {
	variant?: ButtonVariant;
};

export function Button({ variant = "solid", ...props }: PropsWithChildren<ButtonProps>) {
	const variantClassname =
		variant === "solid" ? "text-white bg-amber-400" : "text-amber-400 border-2 border-amber-400 font-semibold";

	return <button className={`font-sans rounded-lg px-8 py-2 ${variantClassname}`}>{props.children}</button>;
}
