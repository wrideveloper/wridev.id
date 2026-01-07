<script lang="ts">
    import { derived } from "svelte/store";
    import WalkingCardStrip from "~/components/sections/testimonial/components/walking-card.svelte";

    export let testimonials: {
      name: string;
      title: string;
      description: string;
    }[];
</script>

<div class="flex flex-col gap-5">
    <WalkingCardStrip testimonials={testimonials} />
    <WalkingCardStrip testimonials={testimonials} direction="right" />
</div>
