<script lang="ts">
  import { onMount } from 'svelte';
  import ProjectCard from './project-card.svelte';

  export let projects: any[] = [];
  
  let isLoading = false;

  // Helper to extract URL based on type
  const getLink = (linksRaw: string, type: 'github' | 'figma' | 'dribbble' | 'description') => {
    try {
      const links = typeof linksRaw === 'string' ? JSON.parse(linksRaw) : linksRaw;
      return links.find((l: any) => l.type === type)?.url || "#";
    } catch (e) {
      return "#";
    }
  };

  // Helper to get description text safely
  const getDescription = (linksRaw: string) => {
    try {
        const links = typeof linksRaw === 'string' ? JSON.parse(linksRaw) : linksRaw;
        const desc = links.find((l: any) => l.type === 'description')?.url;
        return (desc && desc !== 'No description available.') ? desc : 'Project';
    } catch(e) {
        return 'Project';
    }
  }

  // SELF-HEALING LOGIC
  onMount(async () => {
    if (!projects || projects.length === 0) {
      console.log("[ProjectGrid] No projects found. Attempting client-side heal...");
      
      const pathParts = window.location.pathname.split('/');
      const slug = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2]; // Handle trailing slash
      
      if (slug) {
        isLoading = true;
        try {
           // 1. Wait 2.5 seconds to give the backend scraper a moment to finish
           await new Promise(resolve => setTimeout(resolve, 2500));
           
           const WORKER_URL = "https://your-worker-url.workers.dev"; 
           
           const res = await fetch(`${WORKER_URL}/talent/${slug}`);
           const data  = await res.json();
           
           if (data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
             console.log("[ProjectGrid] Healed! Projects found:", data.projects.length);
             projects = data.projects;
           } else {
             console.log("[ProjectGrid] Still no projects found after retry.");
           }
        } catch (e) {
          console.error("[ProjectGrid] Client-side refetch failed", e);
        } finally {
          isLoading = false;
        }
      }
    }
  });
</script>

{#if isLoading}
  <div class="w-full py-12 flex flex-col items-center justify-center text-wri-gray-400 gap-3 animate-pulse">
    <div class="w-6 h-6 border-2 border-wri-gray-300 border-t-black rounded-full animate-spin"></div>
    <span class="text-sm font-medium">Syncing latest projects...</span>
  </div>
{:else if projects.length > 0}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each projects as project}
      <ProjectCard 
        title={project.name} 
        category={getDescription(project.links)}
        image={project.img} 
        repoUrl={getLink(project.links, 'github')}
        figmaUrl={getLink(project.links, 'figma')}
        dribbbleUrl={getLink(project.links, 'dribbble')}
      />
    {/each}
  </div>
{:else}
  <div class="w-full py-12 border border-dashed border-wri-gray-200 rounded-3xl flex items-center justify-center text-wri-gray-400">
    No projects found.
  </div>
{/if}
