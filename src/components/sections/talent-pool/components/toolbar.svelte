<script lang="ts">
    import Filters from "~/components/sections/talent-pool/components/filters.svelte";
    import AdvancedFilter from "~/components/sections/talent-pool/components/advanced-filter.svelte";
    import { searchQuery } from "~/components/sections/talent-pool/stores/filter";
    import SearchIcon from "~icons/ph/magnifying-glass";

    let showAdvancedFilters = false;
</script>

<div class="flex w-full flex-col gap-5 md:flex-row md:items-center md:justify-between mb-8">
    <Filters />

    <div class="flex w-full items-center gap-4 md:w-auto relative">
            <div class="relative w-full md:w-80">
            <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
                <svelte:component this={SearchIcon} class="w-4 h-4" />
            </div>
            <input
                type="text"
                placeholder="Search"
                bind:value={$searchQuery}
                class="block w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 text-xl focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
        </div>

        <div class="relative">
            <button
                on:click={() => showAdvancedFilters = !showAdvancedFilters}
                class="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors text-xl"
            >
                <svg
                    class="size-4"
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
                Filter
            </button>

            {#if showAdvancedFilters}
                <AdvancedFilter />
                <button
                    class="fixed inset-0 z-40 w-full h-full cursor-default focus:outline-none"
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
