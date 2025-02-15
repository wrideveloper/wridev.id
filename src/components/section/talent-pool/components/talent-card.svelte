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
	export let smallerImage = false;
	export let isVerified: boolean;

	type Contact = {
		type: "github" | "email" | "dribbble" | "linkedin";
		url: string;
	};
	export let contacts: Contact[] = [];
</script>

<div
	class="relative grid grid-cols-2 md:grid-cols-1 gap-x-4
	{smallerImage
		? 'grid-rows-[auto,auto,1.5rem] md:grid-rows-[13rem,3.5rem,4rem,3rem]'
		: 'grid-rows-[auto,auto,1.5rem] md:grid-rows-[15rem,3.5rem,4rem,3rem]'}
	rounded-lg border border-slate-200 bg-white transition-all duration-300 p-4"
>
	<div
		class="col-start-1 col-end-2 row-start-1 row-end-4 md:row-end-2 self-start justify-self-center relative rounded-lg bg-slate-200 border border-slate-200 overflow-hidden
		{smallerImage ? 'w-[8rem] h-[8rem] md:w-[13rem] md:h-[13rem]' : 'w-[9.8rem] h-[9.8rem] md:w-[15rem] md:h-[15rem]'}"
	>
		<img class="absolute bottom-0 inset-x-0 mx-auto w-full object-cover" src={profileImage} alt={name} />
	</div>
	<div
		class="col-start-2 col-end-3 md:col-start-1 md:col-end-2 row-start-1 row-end-2 md:row-start-2 md:row-end-3 self-start font-sans md:mt-3"
	>
		<h4 class="font-semibold text-slate-800">{name}</h4>
		<p class="text-sm text-slate-400">{position}</p>
	</div>
	<div
		class="col-start-2 col-end-3 md:col-start-1 md:col-end-2 row-start-2 row-end-3 md:row-start-3 md:row-end-4 md:mt-2 flex-1"
	>
		<p class="text-sm text-slate-500 truncate line-clamp-3 text-wrap">
			{about}
		</p>
	</div>
	<div
		class="col-start-2 col-end-3 md:col-start-1 md:col-end-2 row-start-3 row-end-4 md:row-start-4 md:row-end-5 flex items-start md:items-center justify-between font-sans mt-2"
	>
		<div class="flex items-center gap-2">
			{#each contacts as contact}
				<a
					aria-label="Contact"
					href={contact.url}
					target="_blank"
					class="h-4 w-4 md:w-8 md:h-8 rounded-full text-slate-400 hover:text-primary-500 hover:enabled:bg-slate-100 flex items-center justify-center tw-accessiblity transition-colors duration-300"
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
				</a>
			{/each}
		</div>
		<div class="flex items-center justify-end gap-2">
			{#if isVerified}
				<div class="group relative">
					<span
						class="opacity-0 group-hover:opacity-100 absolute bg-gray-800 text-white cursor-default px-2 py-1 rounded-md transition-opacity duration-300 delay-200 group-hover:delay-700 -top-8"
					>
						verified!
					</span>

					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0,0,256,256">
						<g fill="none">
							<g transform="scale(5.33333,5.33333)">
								<circle cx="24" cy="24" r="20" fill="#4287f5"></circle>
								<path
									d="M22.491,30.69c-0.576,0 -1.152,-0.22 -1.591,-0.659l-6.083,-6.084c-0.879,-0.878 -0.879,-2.303 0,-3.182c0.878,-0.879 2.304,-0.879 3.182,0l6.083,6.084c0.879,0.878 0.879,2.303 0,3.182c-0.439,0.439 -1.015,0.659 -1.591,0.659z"
									fill="#ffffff"
								></path>
								<path
									d="M22.491,30.69c-0.576,0 -1.152,-0.22 -1.591,-0.659c-0.879,-0.878 -0.879,-2.303 0,-3.182l9.539,-9.539c0.878,-0.879 2.304,-0.879 3.182,0c0.879,0.878 0.879,2.303 0,3.182l-9.539,9.539c-0.439,0.439 -1.015,0.659 -1.591,0.659z"
									fill="#ffffff"
								></path>
							</g>
						</g>
					</svg>
				</div>
			{/if}
			<StarIcon class="w-4 h-4 text-amber-600" />
			<span class="font-semibold text-xs text-slate-500">
				{#if yearsOfExperience > 5}
					+5y
				{:else if yearsOfExperience > 0}
					+{yearsOfExperience}y
				{:else}
					&lt;1y
				{/if}
			</span>
		</div>
	</div>
</div>
