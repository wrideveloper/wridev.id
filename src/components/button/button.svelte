<script lang="ts">
	type Variant = "main" | "sub";
	export let to: string | undefined;
	export let className = "";
	export let variant: Variant = "main";

	const baseClasses =
		"relative font-sans font-normal inline-flex items-center justify-center tw-accessibility transition-all duration-300 h-12 px-5 py-3 text-sm";
	const variantClassName =
		variant === "main"
			? "leading-5 no-underline space-x-1 text-white bg-primary-600 rounded-xl hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/20"
			: "gap-x-1 rounded-xl leading-5 no-underline text-slate-700 bg-white border dark:text-white dark:bg-slate-700 dark:border-slate-600 hover:enabled:bg-slate-50 dark:hover:enabled:bg-slate-600 active:enabled:bg-slate-200 dark:active:enabled:bg-slate-700";
	const selectedClassName = baseClasses + " " + variantClassName + " " + className;
</script>

<a href={to} class={selectedClassName}>
	<slot />
</a>
