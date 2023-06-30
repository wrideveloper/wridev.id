module.exports = {
	plugins: [require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
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
