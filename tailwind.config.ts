import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"bg-1": "#00c4cc",
				"bg-2": "#0a1a44",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
