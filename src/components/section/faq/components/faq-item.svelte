<script lang="ts">
	import ChevronRightIcon from "~icons/ph/caret-right";
	import { slide } from "svelte/transition";

	export let question: string;
	export let answer: string;

	let isOpen = false;
</script>

<button class="w-full rounded-md border border-slate-200" on:click={() => (isOpen = !isOpen)}>
	<div class="flex items-center justify-between p-4 text-lg text-slate-700">
		<span>{question}</span>
		<ChevronRightIcon class="w-4 h-4" />
	</div>
	{#if isOpen}
		<div
			transition:slide={{ duration: 200, axis: "y" }}
			class="px-4 py-4 text-base text-slate-700 text-left border-t border-slate-200"
		>
			{answer}
		</div>
	{/if}
</button>
