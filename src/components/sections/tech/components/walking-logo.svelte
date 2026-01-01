<script lang="ts">
    // D:\smth\WRI\wridev.id\src\assets\technology\blender.webp
    // D:\smth\WRI\wridev.id\src\assets\technology\figma.webp
    // D:\smth\WRI\wridev.id\src\assets\technology\laravel.webp
    // D:\smth\WRI\wridev.id\src\assets\technology\svelte.webp
    // D:\smth\WRI\wridev.id\src\assets\technology\flutter.webp
    // D:\smth\WRI\wridev.id\src\assets\technology\aseprite.webp
    // D:\smth\WRI\wridev.id\src\assets\technology\nodejs.webp
    // D:\smth\WRI\wridev.id\src\assets\technology\unity.webp
  const logos = [
    '/assets/technology/blender.webp',
    '/assets/technology/figma.webp',
    '/assets/technology/laravel.webp',
    '/assets/technology/svelte.webp',
    '/assets/technology/flutter.webp',
    '/assets/technology/aseprite.webp',
    '/assets/technology/nodejs.webp',
    '/assets/technology/unity.webp',
  ];
</script>

<div
  class="w-full overflow-hidden bg-white
  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
>
  <div class="flex w-max animate-walk">
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
