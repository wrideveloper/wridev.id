<script lang="ts">
	import RadioFilter from "./radio-filter.svelte";
</script>

<div class="px-2">
	<!--Filter group-->
	<div class="pb-10 border-b border-muted-200 dark:border-muted-800">
		<h3 class="font-sans font-light text-lg mb-6 text-muted-800 dark:text-muted-100">Availability</h3>
		<!--Select-->
		<div class="relative max-w-[210px]">
			<div class="relative group">
				<select
					title="select"
					class="appearance-none px-3 py-2 h-10 text-sm leading-5 font-sans w-full border border-muted-300 bg-white text-muted-600 placeholder-muted-300 focus-visible:border-muted-300 focus-visible:shadow-lg dark:placeholder-muted-600 dark:bg-muted-700 dark:text-muted-200 dark:border-muted-600 dark:focus-visible:border-muted-600 focus-visible:ring-0 outline-transparent focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-muted-300 dark:focus-visible:outline-muted-600 focus-visible:outline-offset-2 transition-all duration-300"
				>
					<option>-</option>
					<option>Fulltime</option>
					<option>Freelance</option>
					<option>Contract</option>
					<option>Part-time</option>
				</select>
				<div
					class="absolute top-0 right-0 h-10 w-10 flex justify-center items-center text-muted-400 transition-transform duration-300 group-focus-within:-rotate-180"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-4 w-4"
						><polyline points="6 9 12 15 18 9" />
					</svg>
				</div>
			</div>
		</div>
	</div>
	<RadioFilter
		title="Sort By"
		options={[
			{ value: "experience", text: "Experience" },
			{ value: "name", text: "Name" },
			{ value: "position", text: "Position" },
		]}
	/>
	<RadioFilter
		title="Experiences"
		options={[
			{ value: "0", text: "Less than a year" },
			{ value: "1", text: "1 - 3 years" },
			{ value: "2", text: "4 - 5 years" },
			{ value: "3", text: "+5 years" },
		]}
	/>
</div>
