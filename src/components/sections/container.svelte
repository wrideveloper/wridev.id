<script lang="ts">
    export let className = '';
</script>

<div class={`w-full flex flex-col px-4 md:px-[10dvw] ${className}`}>
    <slot />
</div>
