<script lang="ts">
	export let name: string;
	export let title: string;
	type Option = {
		value: string;
		text: string;
	};
	export let options: Option[] = [];
	export let selected = "";
	export let onSelect: (selected: string) => void = () => {};
</script>

<div class="pt-6 pb-10 border-b border-slate-200">
	<h3 class="font-sans font-light text-lg mb-6 text-slate-800">{title}</h3>
	<div class="space-y-4">
		{#each options as option}
			<div class="flex items-center gap-3 cursor-pointer">
				<div
					class="bg-white rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative"
				>
					<input
						id="radio-{option.value}"
						type="radio"
						{name}
						class="peer appearance-none ring-offset-white focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 focus:outline-none border rounded-full border-slate-400 absolute cursor-pointer w-full h-full checked:border-none"
						value={option.value}
						on:change={() => {
							selected = option.value;
							onSelect(option.value);
						}}
						checked={selected === option.value}
					/>
					<div class="border-2 border-transparent peer-checked:border-primary-600 rounded-full w-full h-full z-1" />
				</div>
				<label
					for="radio-{option.value}"
					class="cursor-pointer ml-2 text-sm leading-4 font-normal text-slate-800"
				>
					{option.text}
				</label>
			</div>
		{/each}
	</div>
</div>
