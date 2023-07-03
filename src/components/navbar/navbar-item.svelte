<script lang="ts">
	export let href: string;
	export let text: string;
	export let isActive: boolean;
</script>

<div
	class="{isActive
		? 'after:w-full'
		: ''} relative py-2 hover:after:w-full after:bg-primary-500 after:content-[''] after:absolute after:-bottom-0 after:left-0 after:h-[3px] after:rounded-t-full after:transition-all after:duration-300 transition-colors duration-300"
>
	<a {href}>{text}</a>
</div>
