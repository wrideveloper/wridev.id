<script lang="ts">
    import { searchQuery } from "~/components/sections/articles/stores/filter";
    import SearchIcon from "~icons/ph/magnifying-glass";
    import BoldSearchIcon from "~icons/ph/magnifying-glass-bold";
</script>

<div>
    <div class="w-full flex justify-center gap-2 items-center">
        <div class="relative w-[30%] flex h-fit">
            <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            >
                <svelte:component this={SearchIcon} class="w-4 h-4" />
            </div>
            <input
                type="text"
                placeholder="Search news"
                bind:value={$searchQuery}
                class="block w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
        </div>
        <div class="relative">
            <a href="#">
                <div
                    class="flex justify-center items-center bg-wri-lighterblue text-wri-white p-1 rounded-xl"
                >
                    <div
                        class="flex justify-center items-center bg-linear-to-b from-wri-blue to-wri-blue/56 px-4 py-1.5 rounded-lg border border-wri-darkerblue text-center"
                    >
                        <svelte:component this={BoldSearchIcon} class="w-4 h-4 text-wri-white mr-2" />
                        Search
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>
