<script lang="ts">
  import GithubIcon from "~icons/ph/github-logo-fill";
  import FigmaIcon from "~icons/ph/figma-logo";

  export let title: string;
  export let category: string;
  export let image: string;
  export let repoUrl: string = "#";
  export let figmaUrl: string = "#";

  $: hasRepo = repoUrl && repoUrl !== "#";
  $: hasFigma = figmaUrl && figmaUrl !== "#";
</script>

<div class="group flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-wri-gray-100">
  
  <div class="relative overflow-hidden rounded-2xl bg-wri-gray-100 aspect-[16/10] border border-wri-gray-200">
    <img 
      src={image || '/assets/placeholder-project.webp'} 
      alt={title}
      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    
    <a 
      href={hasRepo ? repoUrl : (hasFigma ? figmaUrl : "#")} 
      target="_blank"
      class="absolute inset-0 bg-gradient-to-t from-[#4f46e5]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
    >
        <span class="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Project
        </span>
    </a>
  </div>

  <div class="space-y-3 px-2 pb-2">
    <h3 class="text-2xl font-bold text-wri-text leading-tight">
      {title} <br/> <span class="font-normal text-lg text-wri-gray-500">— {category}</span>
    </h3>

    <div class="flex gap-3 mt-4">
      {#if hasRepo}
        <a 
          href={repoUrl} 
          target="_blank"
          class="flex items-center gap-2 px-5 py-1.5 rounded-full border border-wri-gray-300 text-sm font-medium text-wri-gray-700 hover:border-black hover:bg-black hover:text-white transition-all"
        >
          <GithubIcon class="w-4 h-4" />
          Repo
        </a>
      {/if}

      {#if hasFigma}
        <a 
          href={figmaUrl} 
          target="_blank"
          class="flex items-center gap-2 px-5 py-1.5 rounded-full border border-wri-gray-300 text-sm font-medium text-wri-gray-700 hover:border-black hover:bg-black hover:text-white transition-all"
        >
          <FigmaIcon class="w-4 h-4" />
          Figma
        </a>
      {/if}
    </div>
  </div>
</div>
