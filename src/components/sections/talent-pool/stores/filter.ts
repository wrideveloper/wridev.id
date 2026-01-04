import { writable } from "svelte/store";

export const searchQuery = writable("");
export const selectedCategory = writable("All");
export const selectedAvailability = writable<string | null>(null);
export const selectedExperience = writable<string | null>(null);
