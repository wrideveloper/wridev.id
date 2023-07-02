<script lang="ts">
	import { sortByFilter, experienceFilter, availabilityFilter } from "../stores/filter";
	import OptionFilter from "./option-filter.svelte";
	import RadioFilter from "./radio-filter.svelte";
</script>

<div class="px-2">
	<OptionFilter
		title="Availability"
		selected={$availabilityFilter}
		onSelect={(availability) => availabilityFilter.set(availability)}
		options={[
			{ value: "-", text: "-" },
			{ value: "fulltime", text: "Fulltime" },
			{ value: "freelance", text: "Freelance" },
			{ value: "contract", text: "Contract" },
			{ value: "part-time", text: "Part-time" },
		]}
	/>
	<RadioFilter
		name="sort-by"
		title="Sort By"
		selected={$sortByFilter}
		onSelect={(sortBy) => sortByFilter.set(sortBy)}
		options={[
			{ value: "experience", text: "Experience" },
			{ value: "name", text: "Name" },
			{ value: "position", text: "Position" },
		]}
	/>
	<RadioFilter
		name="experience"
		title="Experiences"
		selected={$experienceFilter}
		onSelect={(experience) => experienceFilter.set(experience)}
		options={[
			{ value: "-1", text: "Any" },
			{ value: "0", text: "Less than a year" },
			{ value: "1", text: "1 - 3 years" },
			{ value: "2", text: "4 - 5 years" },
			{ value: "3", text: "+5 years" },
		]}
	/>
</div>
