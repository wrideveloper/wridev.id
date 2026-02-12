<script lang="ts">
    export let active = false;
    export let disabled = false;
    export let onClick: (event: MouseEvent) => void;
</script>

<div
    class="rounded-lg h-11 w-12 items-center border-2 flex justify-center"
    class:active={active}
    class:disabled={disabled}
    class:border-blue-500={active}
    class:bg-blue-500={active}
    class:text-white={active}
    class:border-gray-200={!active}
    class:bg-white={!active}
    class:text-gray-700={!active}
    class:opacity-50={disabled}
    class:cursor-not-allowed={disabled}
    class:hover:bg-gray-100={!disabled}
    class:hover:text-gray-700={!disabled}
    on:click|preventDefault
    on:click|stopPropagation
    on:click={!disabled && onClick}
>
    <slot/>
</div>
