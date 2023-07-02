<script lang="ts">
	export let title: string;
	type Option = {
		value: string;
		text: string;
	};
	export let options: Option[] = [];
	let selected = "";
</script>

<div class="pt-6 pb-10 border-b border-muted-200 dark:border-muted-800">
	<h3 class="font-sans font-light text-lg mb-6 text-muted-800 dark:text-muted-100">{title}</h3>
	<div class="space-y-4">
		{#each options as option}
			<div class="flex items-center gap-3 cursor-pointer">
				<div
					class="bg-white dark:bg-muted-900 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative"
				>
					<input
						id="radio-6"
						type="radio"
						name="radio_experience"
						class="peer appearance-none ring-offset-white dark:ring-offset-muted-900 focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 focus:outline-none border rounded-full border-muted-400 absolute cursor-pointer w-full h-full checked:border-none"
						value={option.value}
						on:change={() => (selected = option.value)}
						checked={selected === option.value}
					/>
					<div class="border-2 border-transparent peer-checked:border-primary-600 rounded-full w-full h-full z-1" />
				</div>
				<label for="radio-6" class="ml-2 text-sm leading-4 font-normal text-muted-800 dark:text-muted-400">
					{option.text}
				</label>
			</div>
		{/each}
	</div>
</div>
