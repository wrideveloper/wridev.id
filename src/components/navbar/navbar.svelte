<script lang="ts">
	import Hamburger from "~/components/button/hamburger.svelte";
	import NavbarItem from "./navbar-item.svelte";
	import { NAVBAR_DATA } from "~/data/navbar";
	import MobileNavbar from "./mobile-navbar.svelte";

	export let path: string;

	let isOpen = false;
	function toggleMobileNavbar() {
		isOpen = !isOpen;
	}

	let windowScrollY = 0;
	$: hasScrolled = windowScrollY <= 100;
</script>

<svelte:window bind:scrollY={windowScrollY} />

{#if isOpen}
	<MobileNavbar {path} />
{/if}

<div
	class="fixed top-0 left-0 w-full z-50 transition-all duration-100
			{hasScrolled ? 'bg-transparent' : isOpen ? 'bg-white' : 'bg-white drop-shadow-md'}"
>
	<div class="w-full max-w-7xl mx-auto flex items-center justify-between pl-4 pr-0 lg:pr-4 font-sans py-2 lg:py-4">
		<div class="w-full lg:w-auto flex items-center gap-6">
			<a href="/" class="flex items-center gap-3">
				<img alt="WRI Logo Light" src={NAVBAR_DATA.logo.light.src} class="block w-auto h-12" />
				<img alt="WRI Logo Dark" src={NAVBAR_DATA.logo.dark.src} class="hidden w-auto h-12" />
			</a>
			<div class="flex items-center justify-center h-20 w-20 lg:hidden ml-auto">
				<Hamburger onClick={toggleMobileNavbar} {isOpen} />
			</div>
		</div>
		<div class="hidden lg:flex items-center lg:justify-end gap-x-6">
			<div class="flex flex-col lg:flex-row items-center gap-x-6 font-medium">
				{#each NAVBAR_DATA.navigationItems as item}
					<NavbarItem isActive={path === item.href} href={item.href} text={item.text} />
				{/each}
			</div>
			<!-- TODO(elianiva): probably still needed when we add dark mode later on -->
			<!-- <div class="w-full md:w-auto font-heading font-medium">
				<Button variant="main" to="#" className="w-full md:w-[240px] lg:w-[110px]">Join</Button>
			</div> -->
		</div>
	</div>
</div>
