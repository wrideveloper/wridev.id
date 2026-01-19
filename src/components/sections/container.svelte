<script lang="ts">
    export let className = '';
</script>

<div class={`w-full justify-center flex flex-col items-center px-30 ${className}`}>
    <slot />
</div>
