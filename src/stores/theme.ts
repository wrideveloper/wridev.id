import { writable } from "svelte/store";

type Theme = "dark" | "light";

export const themeStore = writable<Theme>("light");
