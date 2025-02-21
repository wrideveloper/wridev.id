<script lang="ts">
	import LinkedInIcon from "~icons/ph/linkedin-logo-duotone";
	import GithubIcon from "~icons/ph/github-logo-duotone";
	import EmailIcon from "~icons/ph/envelope-duotone";
	import DribbbleIcon from "~icons/ph/dribbble-logo-duotone";
	import StarIcon from "~icons/ph/shooting-star-duotone";
	import PhSealCheckFill from "~icons/ph/seal-check-fill";
	import WebIcon from "~icons/ph/globe-duotone";
	import { selectedTalent } from "../stores/selected-talent.ts";

	function closeModalTalent() {
		const modal = document.getElementById("modal-talent-detail");
		if (modal) {
			modal.style.display = "none";
			selectedTalent.set(null);
		}
	}
</script>

{#if $selectedTalent}
	<div
		class="relative z-10 hidden"
		style="z-index: 101;"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
		id="modal-talent-detail"
	>
		<!--
	  Background backdrop, show/hide based on modal state.
  
	  Entering: "ease-out duration-300"
		From: "opacity-0"
		To: "opacity-100"
	  Leaving: "ease-in duration-200"
		From: "opacity-100"
		To: "opacity-0"
	-->
		<div class="fixed inset-0 bg-gray-500/25 transition-opacity" aria-hidden="true"></div>

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<divh
					class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"
				>
					<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
						<div class="sm:flex sm:items-start">
							<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
								<div
									class="prose prose-slate prose-headings:text-slate-800 prose-headings:font-heading prose-img:mx-auto prose-img:rounded-lg prose-img:shadow-lg pt-18 pb-3 max-w-[80ch] mx-auto"
								>
									<img
										src={$selectedTalent.profileImage}
										class="object-cover mt-3 sm:max-w-sm rounded-xl sm:w-full mx-auto"
										alt="Rakai"
									/>
									<h1 class="text-2xl text-center font-bold leading-tight font-heading my-0">{$selectedTalent.name}</h1>
									<p class="text-center my-1">Fullstack Developer</p>
									<div class="flex divide-x-2 mt-2">
										<div class="flex justify-center w-[50%] items-center"> 
											{#if $selectedTalent.isVerified}
												<div class="group relative overflow-visible">
													<span
														class="opacity-0 group-hover:opacity-100 absolute bg-gray-500 text-sm text-white cursor-default px-2 py-1 rounded-md transition-opacity -left-2 -top-8 max-w-[15rem] z-50 whitespace-nowrap overflow-hidden pointer-events-none"
													>
														WRI Verified
													</span>

													<PhSealCheckFill class="w-4 h-4 text-blue-500 hover:text-blue-800" />
												</div>
											{/if}
											<StarIcon class="w-5 h-5 text-amber-600" />
											<span class="font-semibold text-xs text-slate-500">
												{#if $selectedTalent.yearsOfExperience > 5}
													+5y
												{/if}
												{#if $selectedTalent.yearsOfExperience > 0 && $selectedTalent.yearsOfExperience < 5}
													+{$selectedTalent.yearsOfExperience}y
												{/if}
												{#if $selectedTalent.yearsOfExperience < 1}
													&lt;1y
												{/if}
											</span>
										</div>
										<div class="flex items-center justify-center mt-2 w-[50%]">
											{#if $selectedTalent.contacts.some((contact) => contact.type === "dribbble")}
												<a
													href={$selectedTalent.contacts.find((contact) => contact.type === "dribbble")?.url}
													target="_blank"
													rel="noopener noreferrer"
												>
													<DribbbleIcon class="w-5 h-5 text-slate-500" />
												</a>
											{/if}
											{#if $selectedTalent.contacts.some((contact) => contact.type === "github")}
												<a
													href={$selectedTalent.contacts.find((contact) => contact.type === "github")?.url}
													target="_blank"
													rel="noopener noreferrer"
												>
													<GithubIcon class="w-5 h-5 text-slate-500" />
												</a>
											{/if}

											{#if $selectedTalent.contacts.some((contact) => contact.type === "linkedin")}
												<a
													href={$selectedTalent.contacts.find((contact) => contact.type === "linkedin")?.url}
													target="_blank"
													rel="noopener noreferrer"
												>
													<LinkedInIcon class="w-5 h-5 text-slate-500" />
												</a>
											{/if}

											{#if $selectedTalent.contacts.some((contact) => contact.type === "email")}
												<a
													href={$selectedTalent.contacts.find((contact) => contact.type === "email")?.url}
													target="_blank"
													rel="noopener noreferrer"
												>
													<EmailIcon class="w-5 h-5 text-slate-500" />
												</a>
											{/if}
											{#if $selectedTalent.contacts.some((contact) => contact.type === "web")}
												<a
													href={$selectedTalent.contacts.find((contact) => contact.type === "web")?.url}
													target="_blank"
													rel="noopener noreferrer"
												>
													<WebIcon class="w-5 h-5 text-slate-500" />
												</a>
											{/if}
										</div>
									</div>
								</div>
								<hr />
								<div class="flex divide-x-2">
									<div class="my-3 w-[50%]">
										<p class="text-md text-center text-slate-800 font-semibold">Proficiencies</p>
										<p class="text-sm text-center text-slate-500">
											{#if $selectedTalent.proficiencies.length > 0}
												{#each $selectedTalent.proficiencies as prof, i}
													<span class="text-sm text-center text-slate-500">{prof}</span>
													{#if i !== $selectedTalent.proficiencies.length - 1}
														<span class="text-sm text-center text-slate-500"> | </span>
													{/if}
												{/each}
											{/if}
										</p>
									</div>
									<div class="my-3 w-[50%]">
										<p class="text-md text-center text-slate-800 font-semibold">Availabilities</p>
										<p class="text-sm text-center text-slate-500">
											{#if $selectedTalent.availabilities.length > 0}
												{#each $selectedTalent.availabilities as avail, i}
													<span class="text-sm text-center text-slate-500">{avail}</span>
													{#if i !== $selectedTalent.availabilities.length - 1}
														<span class="text-sm text-center text-slate-500"> | </span>
													{/if}
												{/each}
											{/if}
										</p>
									</div>
								</div>
								<div class="my-3">
									<p class="text-sm text-justify text-slate-500">
										{$selectedTalent.about}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
						<button
							type="button"
							class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
							on:click={closeModalTalent}>Close</button
						>
					</div>
				</divh>
			</div>
		</div>
	</div>
{/if}
