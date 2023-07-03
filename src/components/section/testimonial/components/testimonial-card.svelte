<script lang="ts">
	import QuoteIcon from "~icons/ph/quotes-duotone";

	export let testimony: string;
	export let name = "";
	export let position: string;
	export let profileImage: string = `https://source.boringavatars.com/beam/120/${name}?colors=fca2e1,93b5ff,6be4dc,f9e3a9,4a6cb6`;
</script>

<div
	class="relative rounded-lg border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-900 transition-all duration-300 p-6"
>
	<div class="w-full flex flex-col gap-8 font-sans">
		<QuoteIcon class="w-8 h-8 text-rose-500 dark:text-primary-500" />
		<p class="text-muted-500 dark:text-muted-300">
			{testimony}
		</p>
		<div class="w-full flex items-center gap-3">
			<div class="shrink-0 inline-flex relative w-10 h-10">
				<img
					src={profileImage}
					class="object-cover max-w-full rounded-full dark:border-transparent shadow-sm"
					alt={name}
				/>
			</div>
			<div>
				<h4 class="font-medium text-sm text-muted-800 dark:text-muted-100">{name}</h4>
				<p class="text-xs text-muted-400">{position}</p>
			</div>
		</div>
	</div>
</div>
