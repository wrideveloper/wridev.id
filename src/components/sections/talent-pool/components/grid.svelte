<script lang="ts">
  import TalentCard from '~/components/sections/talent-pool/components/talent-card.svelte';
  import { searchQuery, selectedCategory, selectedAvailability, selectedExperience } from '~/components/sections/talent-pool/stores/filter';
  import type { Talent } from '~/models/talent';
  import { t } from "~/i18n";
  import { getLocalizedPath } from "~/utils/i18n";

  export let talents: Talent[] = [];
  export let tr: ReturnType<typeof t>;
  export let locale: string = "en";
  export let limit: number = -1;

  function createSlug(name: string) {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

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

  $: displayedTalents = limit === -1
      ? filteredTalents
      : filteredTalents.slice(0, limit);
</script>

<div class="grid grid-cols-2 lg:grid-cols-4 gap-[2vw] sm:gap-6 justify-items-center">
    {#each displayedTalents as talent, i (talent.name)}
        <a
            href={getLocalizedPath(`/talents/${createSlug(talent.name)}`, locale)}
            class="contents group cursor-pointer"
            data-namecursor={talent.name}
        >
            <TalentCard
              name={talent.name}
              image={talent.profileImage}
              description={talent.about}
              tags={talent.proficiencies}
              loading={i < 3 ? "eager" : "lazy"}
              isVerified={talent.isVerified}
            />
        </a>
    {/each}

    {#if filteredTalents.length === 0}
        <div class="col-span-full py-20 text-center text-gray-500">
            {tr.talent.noResults}
        </div>
    {/if}
</div>
