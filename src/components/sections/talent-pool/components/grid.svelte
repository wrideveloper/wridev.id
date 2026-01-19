<script lang="ts">
  import TalentCard from '~/components/sections/talent-pool/components/talent-card.svelte';
  import { searchQuery, selectedCategory, selectedAvailability, selectedExperience } from '~/components/sections/talent-pool/stores/filter';
  import type { Talent } from '~/models/talent';

  import SparkleIcon from '~icons/ph/sparkle-fill';

  export let talents: Talent[] = [];
  export let buttonText: string = "See More";

  let isExpanded = false;

  $: filteredTalents = talents.filter(talent => {
    const query = $searchQuery.toLowerCase();
    const cat = $selectedCategory;
    const avail = $selectedAvailability;
    const exp = $selectedExperience;

    const matchesSearch =
      talent.name.toLowerCase().includes(query) ||
      talent.position.toLowerCase().includes(query) ||
      talent.proficiencies.some(p => p.toLowerCase().includes(query));

    const matchesCategory =
      cat === 'All' ||
      talent.proficiencies.some(p => p.toLowerCase() === cat.toLowerCase());

    const matchesAvailability =
        !avail ||
        talent.availabilities.some(a => a.toLowerCase() === avail.toLowerCase().replace(" ", "-"));

    let matchesExperience = true;
    if (exp) {
        const years = talent.yearsOfExperience;
        if (exp === "0-1 Years") matchesExperience = years >= 0 && years <= 1;
        else if (exp === "1-3 Years") matchesExperience = years > 1 && years <= 3;
        else if (exp === "3-5 Years") matchesExperience = years > 3 && years <= 5;
        else if (exp === "5+ Years") matchesExperience = years > 5;
    }

    return matchesSearch && matchesCategory && matchesAvailability && matchesExperience;
  });

  const INITIAL_LIMIT = 8;

  $: displayedTalents = isExpanded
      ? filteredTalents
      : filteredTalents.slice(0, INITIAL_LIMIT);

  $: hasMoreItems = filteredTalents.length > INITIAL_LIMIT;
</script>

<div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
>
    {#each filteredTalents as talent (talent.name)}
        <div class="contents" data-namecursor={talent.name}>
            <TalentCard
              name={talent.name}
              image={talent.profileImage}
              description={talent.about}
              tags={talent.proficiencies}
            />
        </div>
    {/each}

    {#if filteredTalents.length === 0}
        <div class="col-span-full py-20 text-center text-gray-500">
            No talents found matching your criteria.
        </div>
    {/if}
</div>

{#if hasMoreItems && !isExpanded}
  <div class="mt-12 flex justify-center">
    <button
      on:click={() => isExpanded = true}
      class="
        group
        flex items-center gap-2 rounded-lg px-6 py-3
        text-white font-semibold shadow-sm transition-all duration-200
        bg-linear-to-b from-wri-blue to-wri-blue/56
        border border-wri-darkerblue
        ring-4 ring-[#DFEDFF]
        hover:to-wri-blue hover:shadow-md hover:scale-[1.02]
      "
    >
      <SparkleIcon class="w-5 h-5 text-white rotate-12" />
      {buttonText}
    </button>
  </div>
{/if}
