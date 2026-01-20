<script lang="ts">
    import PillsBlueText from "~/components/sections/feature/components/blue-pills-text.svelte";

    export let stats: {
        title: string;
        value: string;
        desc: string;
    }[];
</script>

<div class="flex w-full justify-between items-center">
    {#each stats as { title, value, desc }, index}
        <div class="flex items-center">
            {#if index !== 0}
                <div
                    class="w-px bg-linear-to-b from-white via-wri-blue to-white h-[9rem] shrink-0 mr-12"
                ></div>
            {/if}

            <div class="flex flex-col gap-3 items-start">
                <PillsBlueText>{title}</PillsBlueText>
                <div class="text-6xl font-bold">{value}</div>
                <div class="text-gray-600 max-w-100 text-lg">{desc}</div>
            </div>
        </div>
    {/each}
</div>
