<script lang="ts">
	import type { Availability, Talent } from "~/models/talent";
	import { activeProficiencyFilter, sortByFilter, experienceFilter, availabilityFilter } from "../stores/filter";
	import Card from "./talent-card.svelte";

	export let talents: Talent[] = [];
	export let limit = Infinity;

	$: filteredTalents = talents.filter((talent) =>
		$activeProficiencyFilter === null ? true : talent.proficiencies.includes($activeProficiencyFilter),
	);
	$: reversedTalents = filteredTalents.slice().reverse();
	$: sortedTalents = reversedTalents.sort((a, b) => {
		switch ($sortByFilter) {
			case "name":
				return a.name.localeCompare(b.name);
			case "experience":
				return a.yearsOfExperience - b.yearsOfExperience;
			case "position":
				return a.position.localeCompare(b.position);
			default:
				return 0;
		}
	});
	$: filteredByExperience = sortedTalents.filter((talent) => {
		switch ($experienceFilter) {
			case "-1":
				return true;
			case "0":
				return talent.yearsOfExperience < 1;
			case "1":
				return talent.yearsOfExperience >= 1 && talent.yearsOfExperience <= 3;
			case "2":
				return talent.yearsOfExperience >= 4 && talent.yearsOfExperience <= 5;
			default:
				return talent.yearsOfExperience > 5;
		}
	});
	$: filteredByAvailability = filteredByExperience.filter((talent) => {
		if ($availabilityFilter === "-") return true;
		return talent.availabilities.includes($availabilityFilter as Availability);
	});
	$: visibleTalents = filteredByAvailability.slice(0, limit);
</script>

<div class="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
	{#each visibleTalents as { availabilities: _, proficiencies: __, ...talent }}
		<Card {...talent} />
	{/each}
</div>
