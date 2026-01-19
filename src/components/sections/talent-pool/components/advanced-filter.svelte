<script lang="ts">
  import { selectedAvailability, selectedExperience } from '~/components/sections/talent-pool/stores/filter';
  
  function toggleAvailability(val: string) {
    $selectedAvailability = $selectedAvailability === val ? null : val;
  }
  
  function toggleExperience(val: string) {
    $selectedExperience = $selectedExperience === val ? null : val;
  }

  const availabilities = ["Freelance", "Fulltime", "Contract", "Part Time"];
  const experiences = ["0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"];
</script>

<div class="absolute top-12 right-0 z-50 w-[200px] flex flex-col gap-4 p-4 bg-wri-white border border-gray-100 rounded-lg shadow-xl">
  
  <div class="flex flex-col gap-2">
    <h3 class="text-sm text-gray-500">By Availability</h3>
    {#each availabilities as item}
      <button 
        class="flex items-center gap-2 text-left group w-full"
        on:click={() => toggleAvailability(item)}
      >
        <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0
          {$selectedAvailability === item ? 'border-blue-500' : 'border-gray-200 group-hover:border-blue-300'}">
          {#if $selectedAvailability === item}
            <div class="w-2.5 h-2.5 bg-blue-500 rounded-full" ></div>
          {/if}
        </div>
        <span class="text-base {$selectedAvailability === item ? 'font-medium text-black' : 'font-normal text-gray-900'}">
          {item}
        </span>
      </button>
    {/each}
  </div>

  <div class="h-px bg-gray-100"></div>

  <div class="flex flex-col gap-2">
    <h3 class="text-sm text-gray-500">By Experience</h3>
    {#each experiences as item}
      <button 
        class="flex items-center gap-2 text-left group w-full"
        on:click={() => toggleExperience(item)}
      >
        <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0
          {$selectedExperience === item ? 'border-blue-500' : 'border-gray-200 group-hover:border-blue-300'}">
          {#if $selectedExperience === item}
            <div class="w-2.5 h-2.5 bg-blue-500 rounded-full" ></div>
          {/if}
        </div>
        <span class="text-base {$selectedExperience === item ? 'font-medium text-black' : 'font-normal text-gray-900'}">
          {item}
        </span>
      </button>
    {/each}
  </div>
</div>
