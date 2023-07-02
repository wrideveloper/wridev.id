<script lang="ts">
	export let title: string;
	export let selected: string;
	type Option = {
		value: string;
		text: string;
	};
	export let options: Option[] = [];
	export let onSelect: (selected: string) => void = () => {};
</script>

<div class="pb-10 border-b border-muted-200 dark:border-muted-800">
	<h3 class="font-sans font-light text-lg mb-6 text-muted-800 dark:text-muted-100">{title}</h3>
	<div class="relative max-w-[210px]">
		<div class="relative group">
			<select
				title="Select {title}"
				on:change={(e) => {
					if (e.target === null) return;
					// @ts-expect-error - we can't cast the change event type inside an expression block in svelte
					selected = e.target.value;
					// @ts-expect-error
					onSelect(e.target.value);
				}}
				class="appearance-none px-3 py-2 h-10 text-sm leading-5 font-sans w-full border border-muted-300 bg-white text-muted-600 placeholder-muted-300 focus-visible:border-muted-300 focus-visible:shadow-lg dark:placeholder-muted-600 dark:bg-muted-700 dark:text-muted-200 dark:border-muted-600 dark:focus-visible:border-muted-600 focus-visible:ring-0 outline-transparent focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-muted-300 dark:focus-visible:outline-muted-600 focus-visible:outline-offset-2 transition-all duration-300"
			>
				{#each options as option}
					<option value={option.value}>{option.text}</option>
				{/each}
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
				>
					<polyline points="6 9 12 15 18 9" />
				</svg>
			</div>
		</div>
	</div>
</div>
