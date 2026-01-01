<script lang="ts">
    import { selectedCategory } from "../stores/filter";
    import AllIcon from "~icons/ph/squares-four-fill";
    import DatabaseIcon from "~icons/ph/database-duotone";
    import CodeIcon from "~icons/ph/code-duotone";
    import MobileIcon from "~icons/ph/device-mobile-duotone";
    import PaletteIcon from "~icons/ph/palette-duotone";
    import CreativeIcon from "~icons/ph/aperture";
    import CyberIcon from "~icons/ph/bug";

    const categories = [
        { name: "All", icon: AllIcon },
        { name: "Backend", icon: DatabaseIcon },
        { name: "Frontend", icon: CodeIcon },
        { name: "Mobile", icon: MobileIcon },
        { name: "UI/UX", icon: PaletteIcon },
        { name: "Creative", icon: CreativeIcon },
        { name: "Cyber", icon: CyberIcon },
    ];
</script>

<div
    class="inline-flex items-center gap-1 rounded-2xl bg-gray-100 p-1.5 overflow-x-auto no-scrollbar"
>
    {#each categories as category}
        <button
            on:click={() => ($selectedCategory = category.name)}
            class="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all whitespace-nowrap
      {$selectedCategory === category.name
                ? 'bg-white text-blue-600 shadow-sm font-semibold'
                : 'text-gray-500 hover:bg-white/50 hover:text-gray-900'}"
        >
            <svelte:component this={category.icon} class="w-4 h-4" />

            {category.name}
        </button>
    {/each}
</div>
