<script lang="ts">
    export let className = '';
</script>

<div class={`w-full flex flex-col px-30 ${className}`}>
    <slot />
</div>
