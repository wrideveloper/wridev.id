<script lang="ts">
    import { searchQuery } from "~/components/sections/articles/stores/filter";
</script>

<div>
    <div class="w-full flex justify-center">
        <div class="w-[60%] flex">
            <input
                type="text"
                placeholder="Search news"
                bind:value={$searchQuery}
                class="block w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
        </div>
    </div>
</div>
