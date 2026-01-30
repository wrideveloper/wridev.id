<script lang="ts">
  import ProjectCard from './project-card.svelte';
  export let projects: any[] = [];

  const getLink = (linksRaw: string, type: 'github' | 'figma') => {
    try {
      const links = JSON.parse(linksRaw);
      return links.find((l: any) => l.type === type)?.url || "#";
    } catch (e) {
      return "#";
    }
  };
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  {#each projects as project}
    <ProjectCard 
      title={project.name} 
      category="Project" 
      image={project.img} 
      repoUrl={getLink(project.links, 'github')}
      figmaUrl={getLink(project.links, 'figma')}
    />
  {/each}
</div>
