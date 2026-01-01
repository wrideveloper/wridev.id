<script lang="ts">
  import Card from "./card.svelte";

  export let testimonials: {
    name: string;
    title: string;
    description: string;
  }[];

  export let direction: "left" | "right" = "left";

  while (testimonials.length < 8) {
    testimonials = [...testimonials, ...testimonials];
  }

  testimonials = testimonials.sort(() => Math.random() - 0.5);
</script>

<div class="w-full overflow-hidden">
  <div
      class={`flex w-max animate-walk-${direction} gap-6`}
      style="animation-duration: 60s;"
  >
    {#each testimonials as testimonial, index}
      <Card
        title={testimonial.title}
        description={testimonial.description}
        name={testimonial.name}
        color={index % 2 === 0 ? "wri-blue" : "wri-yellow"}
      />
    {/each}
    {#each testimonials as testimonial, index}
      <Card
        title={testimonial.title}
        description={testimonial.description}
        name={testimonial.name}
        color={index % 2 === 0 ? "wri-blue" : "wri-yellow"}
      />
    {/each}
  </div>
</div>
