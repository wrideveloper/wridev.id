<script lang="ts">
  import ProjectCard from './project-card.svelte';
  export let projects: any[] = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  {#each projects as project}
    <ProjectCard 
      title={project.title}
      category={project.category}
      image={project.image}
      repoUrl={project.links?.repo}
      figmaUrl={project.links?.figma}
    />
  {/each}
</div>
