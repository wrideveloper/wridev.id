<script lang="ts">
    import PillsBlueText from "~/components/sections/feature/components/blue-pills-text.svelte";

    export let stats: {
        title: string;
        value: string;
        desc: string;
    }[];
</script>

<div class="flex flex-col md:flex-row w-full gap-10 md:gap-0 md:justify-between items-center md:items-start">
    {#each stats as { title, value, desc }, index}
        <div class="flex flex-col md:flex-row items-center md:items-center w-full md:w-auto">
            {#if index !== 0}
                <div
                    class="hidden md:block w-px bg-linear-to-b from-white via-wri-blue to-white h-[9rem] shrink-0 mr-12"
                ></div>
            {/if}

            <div class="flex flex-col gap-3 items-center md:items-start">
                <PillsBlueText>{title}</PillsBlueText>
                <div class="text-6xl font-bold">{value}</div>
                <div class="text-gray-600 w-full md:max-w-100 text-lg text-center md:text-left">{desc}</div>
            </div>
        </div>
    {/each}
</div>
