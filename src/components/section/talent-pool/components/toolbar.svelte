<script lang="ts">
	import AllIcon from "~icons/ph/selection-all-duotone";
	import DatabaseIcon from "~icons/ph/database-duotone";
	import CodeIcon from "~icons/ph/code-duotone";
	import MobileIcon from "~icons/ph/device-mobile-duotone";
	import GameIcon from "~icons/ph/game-controller-duotone";
	import PaletteIcon from "~icons/ph/palette-duotone";
	import type { SvelteComponent } from "svelte";
	import type { Proficiency } from "~/models/talent";
	import { activeProficiencyFilter } from "../stores/filter";

	type IconComponent = typeof SvelteComponent;
	type TalentCategory = {
		id: Proficiency | null;
		name: string;
		icon: IconComponent;
	};

	const categories: TalentCategory[] = [
		{ id: null, name: "All", icon: AllIcon as unknown as IconComponent },
		{ id: "backend", name: "Backend", icon: DatabaseIcon as unknown as IconComponent },
		{ id: "frontend", name: "Frontend", icon: CodeIcon as unknown as IconComponent },
		{ id: "mobile", name: "Mobile", icon: MobileIcon as unknown as IconComponent },
		{ id: "game", name: "Game", icon: GameIcon as unknown as IconComponent },
		{ id: "ui/ux", name: "UI/UX", icon: PaletteIcon as unknown as IconComponent },
	];

	function handleChangeCategory(category: Proficiency | null) {
		return () => {
			activeProficiencyFilter.set(category);
		};
	}
</script>

<div
	class="sticky top-24 w-full flex bg-white border border-slate-200 rounded divide-x divide-slate-200 shadow-xl shadow-slate-300/30 overflow-x-auto z-30"
>
	{#each categories as category}
		<button
			class="{$activeProficiencyFilter === category.id
				? 'bg-slate-50'
				: ''} group flex-1 flex items-center px-5 py-3 whitespace-nowrap font-sans text-slate-800 hover:bg-slate-50 transition-colors duration-300"
			on:click={handleChangeCategory(category.id)}
		>
			<span
				class="flex items-center justify-center h-10 w-10 {$activeProficiencyFilter === category.id
					? 'text-rose-500'
					: 'text-slate-400 group-hover:text-primary-500'}"
			>
				<svelte:component this={category.icon} class="w-6 h-6" />
			</span>
			<span class={$activeProficiencyFilter === category.id ? "text-slate-800" : "text-slate-600"}>
				{category.name}
			</span>
		</button>
	{/each}
</div>
