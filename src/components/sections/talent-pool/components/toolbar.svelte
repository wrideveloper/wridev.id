<script lang="ts">
    import Filters from "~/components/sections/talent-pool/components/filters.svelte";
    import AdvancedFilter from "~/components/sections/talent-pool/components/advanced-filter.svelte";
    import { searchQuery } from "~/components/sections/talent-pool/stores/filter";
    import SearchIcon from "~icons/ph/magnifying-glass";
    
    import { t } from "~/i18n";

    export let tr: ReturnType<typeof t>;

    let showAdvancedFilters = false;
</script>

<div class="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
    
    <div class="w-full md:w-auto">
        <Filters tr={tr} />
    </div>

    <div class="flex items-center gap-3 w-full md:w-auto">
        
        <div class="relative grow md:grow-0 md:w-64">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svelte:component this={SearchIcon} class="w-4 h-4" />
            </div>
            <input
                type="text"
                placeholder={tr.filters.search}
                bind:value={$searchQuery}
                class="block w-full rounded-lg border border-gray-200 bg-white py-1.5 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
        </div>

        <div class="relative">
            <button
                on:click={() => showAdvancedFilters = !showAdvancedFilters}
                class="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
                <svg
                    class="size-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                </svg>
                {tr.filters.filter}
            </button>

            {#if showAdvancedFilters}
                <AdvancedFilter tr={tr} />
                <button
                    class="fixed inset-0 z-40 w-full h-full focus:outline-none"
                    on:click={() => (showAdvancedFilters = false)}
                    on:keydown={(e) =>
                        e.key === "Escape" && (showAdvancedFilters = false)}
                    tabindex="-1"
                    aria-label="Close filters"
                ></button>
            {/if}
        </div>
    </div>
</div>
