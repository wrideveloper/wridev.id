module.exports = {
	plugins: [require.resolve("prettier-plugin-astro"), require.resolve("prettier-plugin-svelte")],
	pluginSearchDirs: ["."],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
	arrowParens: "always",
	bracketSpacing: true,
	endOfLine: "auto",
	printWidth: 120,
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "all",
	useTabs: true,
};
