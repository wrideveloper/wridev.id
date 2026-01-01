<script lang="ts">
    import PillsBlueText from "./blue-pills-text.svelte";

    export let stats: {
        title: string;
        value: string;
        desc: string;
    }[];
</script>

<div class="flex gap-8">
    {#each stats as { title, value, desc }, index}
        <div class="flex gap-6 items-center">
            {#if index !== 0}
                <div
                    class="w-px bg-gradient-to-b from-white via-wri-blue to-white h-[9rem] shrink-0"
                ></div>
            {/if}

            <div class="flex flex-col gap-2">
                <PillsBlueText>{title}</PillsBlueText>
                <div class="text-5xl font-bold">{value}</div>
                <div class="text-gray-500 max-w-80">{desc}</div>
            </div>
        </div>
    {/each}
</div>
