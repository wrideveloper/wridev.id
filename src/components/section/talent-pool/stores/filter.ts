import { writable } from "svelte/store";
import type { Availability, Proficiency } from "~/models/talent";

export const activeProficiencyFilter = writable<Proficiency | null>(null);
export const sortByFilter = writable<string>("name");
export const experienceFilter = writable<string>("-1");
export const availabilityFilter = writable<Availability | "-">("-");
