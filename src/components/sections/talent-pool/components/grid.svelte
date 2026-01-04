<script lang="ts">
    import TalentCard from "./talent-card.svelte";
    import { searchQuery, selectedCategory } from "../stores/filter";

    interface Talent {
        name: string;
        image: string;
        tags: string[];
        description: string;
    }

    export let talents: Talent[] = [];

    $: filteredTalents = talents.filter((talent) => {
        const matchesSearch =
            talent.name.toLowerCase().includes($searchQuery.toLowerCase()) ||
            talent.tags.some((t) =>
                t.toLowerCase().includes($searchQuery.toLowerCase()),
            );

        const matchesCategory =
            $selectedCategory === "All" ||
            talent.tags.includes($selectedCategory);

        return matchesSearch && matchesCategory;
    });
</script>

<div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
>
    {#each filteredTalents as talent (talent.name)}
        <div class="contents" data-namecursor={talent.name}>
            
        <TalentCard {...talent}  />
        </div>
    {/each}

    {#if filteredTalents.length === 0}
        <div class="col-span-full py-20 text-center text-gray-500">
            No talents found matching your criteria.
        </div>
    {/if}
</div>
