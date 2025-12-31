const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				topography: "url('/patterns/topography.svg')",
				paper: "url('/patterns/graph-paper.svg')",
			},
			screens: {
				xs: { max: "639px" },
				sm: "640px",
				md: "768px",
				lg: "1025px",
				xl: "1280px",
				xxl: "1536px",
			},
			colors: {
				primary: colors.indigo,
				info: colors.sky,
				success: colors.teal,
				warning: colors.amber,
				danger: colors.rose,
				slate: {
					1000: "#0a101f",
				},
				gray: {
					1000: "#080c14",
				},
				zinc: {
					1000: "#101012",
				},
				neutral: {
					1000: "#080808",
				},
				stone: {
					1000: "#0f0d0c",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				heading: ["Urbanist", "sans-serif"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		//Expose Tailwind colors
		function ({ addBase, theme }) {
			function extractColorVars(colorObj, colorGroup = "") {
				return Object.keys(colorObj).reduce((vars, colorKey) => {
					const value = colorObj[colorKey];

					const newVars =
						typeof value === "string"
							? { [`--color${colorGroup}-${colorKey}`]: value }
							: extractColorVars(value, `-${colorKey}`);

					return { ...vars, ...newVars };
				}, {});
			}

			addBase({
				":root": extractColorVars(theme("colors")),
			});
		},
	],
};
