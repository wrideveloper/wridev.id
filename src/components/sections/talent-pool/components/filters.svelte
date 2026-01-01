<script lang="ts">
  import { selectedCategory } from '../stores/filter';
  // import AllIcon from "~icons/ph/selection-all-duotone";
  // import DatabaseIcon from "~icons/ph/database-duotone";
  // import CodeIcon from "~icons/ph/code-duotone";
  // import MobileIcon from "~icons/ph/device-mobile-duotone";
  // import PaletteIcon from "~icons/ph/palette-duotone";
  // import PhCamera from '~icons/ph/camera';
  // import PhBugBeetle from '~icons/ph/bug-beetle';

  // later need to add , icon after the name
  const categories = [
    { name: 'All',      },
    { name: 'Backend',  },
    { name: 'Frontend', },
    { name: 'Mobile',   },
    { name: 'UI/UX',    },
    { name: 'Creative', },
    { name: 'Cyber',    }
  ];
</script>

<div class="inline-flex items-center gap-1 rounded-2xl bg-gray-100 p-1.5 overflow-x-auto no-scrollbar">
  {#each categories as category}
    <button 
      on:click={() => $selectedCategory = category.name}
      class="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all whitespace-nowrap
      {$selectedCategory === category.name 
        ? 'bg-white text-blue-600 shadow-sm font-semibold' 
        : 'text-gray-500 hover:bg-white/50 hover:text-gray-900'}"
    >
      <!-- <svelte:component this={category.icon} class="w-4 h-4" /> -->
      
      {category.name}
    </button>
  {/each}
</div>
