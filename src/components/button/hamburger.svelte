<script lang="ts">
	export let className = "";
</script>

<button class="flex relative justify-center items-center w-10 h-10 focus:outline-none lg:hidden scale-90 {className}">
	<div class="block top-1/2 left-6 w-4 -translate-x-1/2 -translate-y-1/2">
		<div class="block absolute w-7 h-0.5 bg-current transition duration-500 ease-in-out" />
		<div class="block absolute w-5 h-0.5 bg-current transition duration-500 ease-in-out" />
		<div class="block absolute w-7 h-0.5 bg-current transition duration-500 ease-in-out" />
	</div>
</button>
