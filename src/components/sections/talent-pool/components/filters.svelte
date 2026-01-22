<script lang="ts">
    import { selectedCategory } from "~/components/sections/talent-pool/stores/filter";
    import AllIcon from "~icons/ph/squares-four-fill";
    import DatabaseIcon from "~icons/ph/database-duotone";
    import CodeIcon from "~icons/ph/code-duotone";
    import MobileIcon from "~icons/ph/device-mobile-duotone";
    import PaletteIcon from "~icons/ph/palette-duotone";
    import CreativeIcon from "~icons/ph/aperture";
    import CyberIcon from "~icons/ph/bug";
    import { t } from "~/i18n";

    export let tr: ReturnType<typeof t>;

    const categories = [
        { name: "All",      value: "All",            icon: AllIcon },
        { name: "Backend",  value: "backend",        icon: DatabaseIcon },
        { name: "Frontend", value: "frontend",       icon: CodeIcon },
        { name: "Mobile",   value: "mobile",         icon: MobileIcon },
        { name: "UI/UX",    value: "ui/ux",          icon: PaletteIcon },
        { name: "Creative", value: "creative",       icon: CreativeIcon },
        { name: "Cyber",    value: "cyber-security", icon: CyberIcon }, 
    ];
</script>

<div class="inline-flex items-center gap-1 rounded-lg bg-gray-100 p-0.5 overflow-x-auto no-scrollbar">
    {#each categories as category}
        <button
            on:click={() => ($selectedCategory = category.value)}
            class="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all whitespace-nowrap
            
            {$selectedCategory === category.value
                ? 'bg-white text-blue-600 shadow-sm font-medium text-xl'
                : 'text-gray-500 hover:bg-white/50 hover:text-gray-900 text-xl'}"
        >
            <svelte:component this={category.icon} class="w-4 h-4" />
            {tr.filters.categories[category.name]}
        </button>
    {/each}
</div>
