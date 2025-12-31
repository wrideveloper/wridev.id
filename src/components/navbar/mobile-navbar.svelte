<script lang="ts">
	import { fade } from "svelte/transition";
	import { NAVBAR_DATA } from "~/data/navbar";
	import NavbarItem from "./navbar-item.svelte";

	export let path: string;
</script>

<div
	transition:fade={{ duration: 200 }}
	class="bg-white fixed inset-0 z-40 flex items-center justify-center"
	on:scroll={(e) => {
		e.stopPropagation();
	}}
>
	<div class="flex flex-col lg:flex-row items-center gap-x-6 font-medium">
		{#each NAVBAR_DATA.navigationItems as item}
			<NavbarItem isActive={path === item.href} href={item.href} text={item.text} />
		{/each}
	</div>
</div>
