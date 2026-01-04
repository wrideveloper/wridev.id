<script lang="ts">

  import TalentCard from './talent-card.svelte';
  import { searchQuery, selectedCategory } from '../stores/filter';

  import type { Talent } from '../../../../models/talent'; 

  export let talents: Talent[] = [];

  $: filteredTalents = talents.filter(talent => {

    const query = $searchQuery.toLowerCase();
    const currentCategory = $selectedCategory;

    // Search logic using the property names (proficiencies, position)
    const matchesSearch = 
      talent.name.toLowerCase().includes(query) || 
      talent.position.toLowerCase().includes(query) ||
      talent.proficiencies.some(p => p.toLowerCase().includes(query));

    // Category logic
    const matchesCategory = 
      currentCategory === 'All' || 
      talent.proficiencies.some(p => p.toLowerCase() === currentCategory.toLowerCase());



    return matchesSearch && matchesCategory;

  });

</script>



<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

  {#each filteredTalents as talent (talent.name)}
    <TalentCard 
      name={talent.name}
      image={talent.profileImage}      
      description={talent.about}       
      tags={talent.proficiencies}      
    />
  {/each}
  {#if filteredTalents.length === 0}
    <div class="col-span-full py-20 text-center text-gray-500">
      No talents found matching your criteria.
    </div>
  {/if}

</div>
