<script lang="ts">
  export let name: string;
  export let image: string;
  export let tags: string[]; 
  export let description: string;


  $: displayTags = (() => {
    let processed = [...tags];
    const isWebDev = processed.includes("frontend") || processed.includes("backend");
    if (isWebDev) processed.push("Web Dev");

    return processed.map((tag) => {
      if (tag === "cyber-security") return "Cyber Security";
      if (tag === "ui/ux") return "UI/UX";
      if (tag === "Web Dev") return "Web Dev";
      return tag.charAt(0).toUpperCase() + tag.slice(1);
    });
  })();

  $: shortDescription = description.includes(".")
    ? description.slice(0, description.indexOf(".") + 1)
    : description;
</script>

<div
  class="block group relative w-full aspect-282/332 overflow-hidden rounded-xl bg-gray-200"
>
  <img
    src={image}
    alt={name}
    class="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
  />

  <div
    class="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
  ></div>

  <div class="absolute bottom-0 left-0 w-full p-2 md:p-4 mb-2 flex flex-col justify-end">
    <div
      class="flex flex-wrap gap-1.5 md:gap-2.5 translate-y-4 transition-transform duration-300 group-hover:translate-y-0"
    >
      {#each displayTags as tag}
        <span
          class="rounded-md bg-white px-1.5 py-0.5 md:px-2 md:py-1 text-[0.6rem] md:text-sm font-bold text-gray-900 shadow-sm"
        >
          {tag}
        </span>
      {/each}
    </div>

    <div
      class="mt-2 h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:h-auto group-hover:opacity-100"
    >
      <p class="text-xs md:text-lg font-medium leading-snug text-white">
        {shortDescription}
      </p>
    </div>
  </div>
</div>
