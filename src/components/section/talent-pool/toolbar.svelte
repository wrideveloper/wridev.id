<script lang="ts">
	import AllIcon from "~icons/ph/selection-all-duotone";
	import DatabaseIcon from "~icons/ph/database-duotone";
	import CodeIcon from "~icons/ph/code-duotone";
	import MobileIcon from "~icons/ph/device-mobile-duotone";
	import GameIcon from "~icons/ph/game-controller-duotone";
	import PaletteIcon from "~icons/ph/palette-duotone";
	import type { SvelteComponent } from "svelte";

	type CategoryId = "all" | "backend" | "frontend" | "mobile" | "game" | "ui/ux";
	type IconComponent = typeof SvelteComponent;
	type TalentCategory = {
		id: CategoryId;
		name: string;
		icon: IconComponent;
	};

	const categories: TalentCategory[] = [
		{ id: "all", name: "All", icon: AllIcon as unknown as IconComponent },
		{ id: "backend", name: "Backend", icon: DatabaseIcon as unknown as IconComponent },
		{ id: "frontend", name: "Frontend", icon: CodeIcon as unknown as IconComponent },
		{ id: "mobile", name: "Mobile", icon: MobileIcon as unknown as IconComponent },
		{ id: "game", name: "Game", icon: GameIcon as unknown as IconComponent },
		{ id: "ui/ux", name: "UI/UX", icon: PaletteIcon as unknown as IconComponent },
	];

	let activeCategory: CategoryId = "all";

	function handleChangeCategory(category: CategoryId) {
		return () => {
			activeCategory = category;
		};
	}
</script>

<div
	class="sticky top-24 md:top-20 w-full flex bg-white dark:bg-muted-800 border border-muted-200 dark:border-muted-700 rounded divide-x divide-muted-200 dark:divide-muted-700 shadow-xl shadow-muted-300/30 dark:shadow-muted-900/30 overflow-x-auto z-30"
>
	{#each categories as category}
		<button
			class="{activeCategory === category.id
				? 'bg-muted-50 dark:bg-muted-700'
				: ''} group flex-1 flex items-center px-5 py-3 whitespace-nowrap font-sans text-muted-800 dark:text-muted-100 hover:bg-muted-50 dark:hover:bg-muted-700 transition-colors duration-300"
			on:click={handleChangeCategory(category.id)}
		>
			<span
				class="flex items-center justify-center h-10 w-10 {activeCategory === category.id
					? 'text-rose-500'
					: 'text-muted-400 group-hover:text-primary-500'}"
			>
				<svelte:component this={category.icon} class="w-6 h-6" />
			</span>
			<span>{category.name}</span>
		</button>
	{/each}
</div>
