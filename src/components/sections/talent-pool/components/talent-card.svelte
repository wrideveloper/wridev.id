<script lang="ts">
  export let name: string;
  export let image: string;
  export let tags: string[]; 
  export let description: string;

  export let loading: "lazy" | "eager" = "lazy";


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

<div class="block group relative w-full aspect-282/332 overflow-hidden rounded-xl bg-gray-200">
  <img
    src={image}
    alt={name}
    loading={loading}
    decoding="async"
    class="
      absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out
      group-hover:scale-105 group-hover:grayscale-0
      
      grayscale-0      lg:grayscale      "
  />

  <div class="
    absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 
    group-hover:opacity-100

    opacity-100      lg:opacity-0      "></div>

  <div class="absolute bottom-0 left-0 w-full p-2 md:p-4 mb-2 flex flex-col justify-end">
    <div class="
      flex flex-wrap gap-1.5 md:gap-2.5 transition-transform duration-300 
      group-hover:translate-y-0

      translate-y-0    lg:translate-y-4 ">
      {#each displayTags as tag}
        <span class="rounded-md bg-white px-1.5 py-0.5 md:px-2 md:py-1 text-[0.6rem] md:text-sm font-bold text-gray-900 shadow-sm">
          {tag}
        </span>
      {/each}
    </div>

    <div class="
      mt-2 overflow-hidden transition-all duration-300 
      group-hover:h-auto group-hover:opacity-100

      h-auto opacity-100   lg:h-0 lg:opacity-0  ">
      <p class="text-xs md:text-lg font-medium leading-snug text-white">
        {shortDescription}
      </p>
    </div>
  </div>
</div>
