<script lang="ts">
	import { TESTIMONIAL_DATA } from "~/data/testimonial";
	import ArrowLeft from "~icons/ph/arrow-left";
	import ArrowRight from "~icons/ph/arrow-right";
	import TestimonialCard from "./testimonial-card.svelte";
	import type { SwiperContainer } from "swiper/element/bundle";
	import { onMount } from "svelte";
	import type { SwiperOptions } from "swiper/types";

	let swiperElement: SwiperContainer;

	onMount(() => {
		const swiperParams: SwiperOptions = {
			slidesPerView: 1,
			slidesPerGroup: 2,
			loop: true,
			spaceBetween: 28,
			breakpoints: {
				640: {
					slidesPerView: 2,
				},
				860: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		};
		Object.assign(swiperElement, swiperParams);
		swiperElement.initialize();
	});
</script>

<div class="relative overflow-hidden">
	<div class="carousel-container">
		<div class="carousel-controls flex items-center justify-end mb-4">
			<button
				class="w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:text-primary-600 hover:bg-slate-200 transition-colors duration-300"
				on:click={() => swiperElement.swiper.slidePrev()}
			>
				<ArrowLeft />
			</button>

			<button
				class="w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 hover:text-primary-600 hover:bg-slate-200 transition-colors duration-300"
				on:click={() => swiperElement.swiper.slideNext()}
			>
				<ArrowRight />
			</button>
		</div>
		<swiper-container bind:this={swiperElement} init={false}>
			{#each TESTIMONIAL_DATA.testimonials as testimonial}
				<swiper-slide>
					<TestimonialCard {...testimonial} />
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
</div>
