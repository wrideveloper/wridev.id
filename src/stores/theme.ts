import { writable } from "svelte/store";

type Theme = "dark" | "light";

export const theme = writable<Theme>("light");

theme.subscribe((theme) => {
	if (typeof document === "undefined") return;
	if (theme === "dark") {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
});
