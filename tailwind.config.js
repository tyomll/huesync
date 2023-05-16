import themeColors from "@/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary-color)",
				secondary: "var(--secondary-color)",
				primaryButton: "var(--primary-button-color)",
				secondaryButton: "var(--secondary-button-color)",
				accent: "var(--accent-color)",
			},
		},
		fontWeight: {
			100: "100",
			200: "200",
			300: "300",
			400: "400",
			500: "500",
			600: "600",
			700: "700",
			800: "800",
			900: "900",
		},
	},
	plugins: [],
};
