<script lang="ts">
	import type { Faq } from "~/models/faq";
	import FaqItem from "./faq-item.svelte";

	export let faqs: Faq[] = [];
</script>

<div class="flex flex-col gap-4 w-full">
	{#each faqs as faq}
		<FaqItem {...faq} />
	{/each}
</div>
