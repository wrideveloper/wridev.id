<script lang="ts">
  import { onMount } from 'svelte';
  import { switchLocalePath } from '~/utils/i18n';
  import CaretDownIcon from '~icons/ph/caret-down';

  export let currentLocale: string = 'en';
  export let currentPath: string = '/';

  let isOpen = false;

  const languages = [
    { code: 'en', name: 'English', icon: '/assets/navs/en-icon.webp' },
    { code: 'id', name: 'Indonesia', icon: '/assets/navs/id-icon.webp' }
  ];

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function selectLanguage(langCode: string) {
    console.log("Selected language:", langCode, ", currentLocale:", currentLocale);
    if (langCode === currentLocale) {
      isOpen = false;
      return;
    }
    const newPath = switchLocalePath(currentPath, currentLocale, langCode);
    console.log("newPath:", newPath);
    window.location.href = newPath;
  }

  // Close dropdown when clicking outside
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-switcher')) {
      isOpen = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  $: currentLang = languages.find(l => l.code === currentLocale) || languages[0];
</script>

<div class="relative language-switcher">
  <button
    class="flex items-center gap-2 cursor-pointer focus:outline-none"
    on:click={toggleDropdown}
  >
    <img
      src={currentLang.icon}
      alt={currentLang.name}
      class="h-7 w-7 rounded-full object-cover"
    />
    <svelte:component
      this={CaretDownIcon}
      class="h-5 w-5 text-gray-500 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
    />
  </button>

  {#if isOpen}
    <div class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
      {#each languages as lang}
          <button
            class="
              group
              flex items-center gap-3 w-full px-4 py-2 text-sm
              text-gray-700
              transition-all duration-150
              hover:bg-gray-100 hover:text-black
              cursor-pointer
            "
            on:click={() => selectLanguage(lang.code)}
          >
          <img
            src={lang.icon}
            alt={lang.name}
            class="h-5 w-5 rounded-full object-cover"
          />
          <span class="{lang.code === currentLocale ? 'font-medium text-black' : ''}">{lang.name}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>
