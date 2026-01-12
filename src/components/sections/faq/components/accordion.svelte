<script lang="ts">
    import { slide } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import CaretDown from "~icons/ph/caret-down";

    export let question: string;
    export let answer: string;
    export let isOpen: boolean = false;
    export let onToggle: () => void;
</script>

<div class="flex flex-col w-full">
    <button
        class="flex items-center justify-between w-full py-3 sm:py-4 px-4 sm:px-6 text-left text-wri-gray-900 hover:text-wri-gray-700 transition-colors duration-200 gap-4"
        on:click={onToggle}
    >
        <span class="text-base sm:text-lg lg:text-xl font-medium flex-1 pr-2">{question}</span>
        <div
            class="flex-shrink-0 transition-transform duration-300"
            style="transform: rotate({isOpen ? 180 : 0}deg)"
        >
            <CaretDown class="text-lg sm:text-xl font-medium" />
        </div>
    </button>

    {#if isOpen}
        <div
            class="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-wri-gray-600"
            transition:slide={{ duration: 300, easing: quintOut }}
        >
            {answer}
        </div>
    {/if}
</div>
