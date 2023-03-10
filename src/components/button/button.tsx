import { PropsWithChildren } from "react";

type ButtonVariant = "solid" | "outlined";

type ButtonProps = {
	variant?: ButtonVariant;
};

export function Button({ variant = "solid", ...props }: PropsWithChildren<ButtonProps>) {
	return <button>{props.children}</button>;
}
