<script lang="ts">
	import Hamburger from "~/components/button/hamburger.svelte";
	import NavbarItem from "./navbar-item.svelte";

	export let path: string;

	type NavigationItem = {
		href: string;
		text: string;
	};

	const navigationItems: NavigationItem[] = [
		{ href: "/miniclass", text: "Miniclass" },
		{ href: "/articles", text: "Articles" },
		{ href: "/projects", text: "Projects" },
		{ href: "/talents", text: "Talents" },
	];

	let windowScrollY = 0;
	$: isWindowAtTop = windowScrollY <= 100;
</script>

<svelte:window bind:scrollY={windowScrollY} />

<div
	class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {isWindowAtTop
		? 'bg-transparent'
		: 'bg-white drop-shadow-md'}"
>
	<div class="w-full max-w-7xl mx-auto flex items-center justify-between pl-4 pr-0 lg:pr-4 font-sans py-4">
		<div class="w-full lg:w-auto flex items-center gap-6">
			<a href="/" class="flex items-center gap-3">
				<img alt="WRI Logo" src="https://elianiva.my.id/wri/light.png" class="w-auto h-12" />
			</a>
			<div class="flex items-center justify-center h-20 w-20 lg:hidden ml-auto">
				<Hamburger />
			</div>
		</div>
		<div class="flex items-center lg:justify-end gap-x-6">
			<div class="flex flex-col lg:flex-row items-center gap-x-6 font-heading font-medium">
				{#each navigationItems as item}
					<NavbarItem isActive={path === item.href} href={item.href} text={item.text} />
				{/each}
				<!-- TODO(elianiva): fix dark theme toggler -->
				<!-- <div class="py-3 lg:py-5">
					<ThemeToggler />
				</div> -->
			</div>
			<!-- <div class="w-full md:w-auto font-heading font-medium">
				<Button variant="main" to="#" className="w-full md:w-[240px] lg:w-[110px]">Join</Button>
			</div> -->
		</div>
	</div>
</div>
