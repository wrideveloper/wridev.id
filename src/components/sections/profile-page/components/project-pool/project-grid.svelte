<script lang="ts">
  import ProjectCard from './project-card.svelte';
  export let projects: any[] = [];

  // Helper to extract URL based on type
  const getLink = (linksRaw: string, type: 'github' | 'figma' | 'dribbble' | 'description') => {
    try {
      const links = JSON.parse(linksRaw);
      return links.find((l: any) => l.type === type)?.url || "#";
    } catch (e) {
      return "#";
    }
  };

  // Helper to get description text safely
  const getDescription = (linksRaw: string) => {
    try {
        const links = JSON.parse(linksRaw);
        const desc = links.find((l: any) => l.type === 'description')?.url;
        // If description is just the URL/default text, return 'Project'
        return (desc && desc !== 'No description available.') ? desc : 'Project';
    } catch(e) {
        return 'Project';
    }
  }
</script>

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
