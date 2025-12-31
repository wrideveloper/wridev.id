<script lang="ts">
    import PillsBlueText from "./blue-pills-text.svelte";

    const stats = [
        {
            title: "Years Of Actvities",
            value: "10yrs+",
            desc: "A decade of creating, learngin, and pushing boundaries from design sparks to digital innovations.",
        },
        {
            title: "Active Members",
            value: "100+",
            desc: "100+ curious minds exploring everything from mobiel apps to game worlds united by creativity and tech passiion.",
        },
        {
            title: "Miniclass",
            value: "4",
            desc: "Four epic miniclasses: Frontend, Backend, UI/UX, and Game Development. Choose your path, learn your craft and level up together!",
        },
    ];
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
                <div class="text-gray-500">{desc}</div>
            </div>
        </div>
    {/each}
</div>
