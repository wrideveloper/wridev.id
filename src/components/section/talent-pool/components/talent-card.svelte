<script lang="ts">
	import LinkedInIcon from "~icons/ph/linkedin-logo-duotone";
	import GithubIcon from "~icons/ph/github-logo-duotone";
	import EmailIcon from "~icons/ph/envelope-duotone";
	import DribbbleIcon from "~icons/ph/dribbble-logo-duotone";
	import StarIcon from "~icons/ph/shooting-star-duotone";

	export let name: string;
	export let position: string;
	export let about: string;
	export let profileImage: string;
	export let yearsOfExperience: number;

	type Contact = {
		type: "github" | "email" | "dribbble" | "linkedin";
		url: string;
	};
	export let contacts: Contact[] = [];
</script>

<div
	class="relative grid grid-rows-[15rem,3.5rem,4rem,3rem] rounded-lg border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-900 transition-all duration-300 p-4"
>
	<div class="relative w-full h-60 rounded-lg bg-muted-200 dark:bg-muted-800 border border-muted-200 overflow-hidden">
		<img class="absolute bottom-0 inset-x-0 mx-auto w-full object-cover" src={profileImage} alt="Doctor" />
	</div>
	<div class="font-sans mt-3">
		<h4 class="font-semibold text-muted-800 dark:text-muted-100">{name}</h4>
		<p class="text-sm text-muted-400">{position}</p>
	</div>
	<div class="mt-2 flex-1">
		<p class="text-sm text-muted-500 dark:text-muted-400">
			{about}
		</p>
	</div>
	<div class="flex items-center justify-between font-sans mt-3">
		<div class="flex items-center gap-2">
			{#each contacts as contact}
				<button
					class="h-8 w-8 rounded-full text-muted-400 hover:text-primary-500 hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-800 flex items-center justify-center tw-accessiblity transition-colors duration-300"
				>
					{#if contact.type === "linkedin"}
						<LinkedInIcon class="w-4 h-4" />
					{:else if contact.type === "github"}
						<GithubIcon class="w-4 h-4" />
					{:else if contact.type === "dribbble"}
						<DribbbleIcon class="w-4 h-4" />
					{:else if contact.type === "email"}
						<EmailIcon class="w-4 h-4" />
					{/if}
				</button>
			{/each}
		</div>
		<div class="flex items-center justify-end gap-2">
			<StarIcon class="w-4 h-4 text-amber-600" />
			<span class="font-semibold text-xs text-muted-500 dark:text-muted-400">
				{#if yearsOfExperience > 5}
					+5 yrs exp
				{:else if yearsOfExperience > 0}
					+{yearsOfExperience} yrs exp
				{:else}
					&lt;1 yr exp
				{/if}
			</span>
		</div>
	</div>
</div>
