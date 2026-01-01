<script lang="ts">
  export let logos: string[];
</script>

<div
  class="w-full overflow-hidden bg-white
  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
>
  <div class="flex w-max animate-walk-left">
    {#each [...logos, ...logos] as logo}
      <img
        src={logo}
        alt="logo"
        class="h-14 mx-10 select-none"
        draggable="false"
      />
    {/each}
  </div>
</div>
