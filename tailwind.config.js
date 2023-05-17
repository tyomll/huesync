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
				primary: "var(--primary-color)", //#000000
				secondary: "var(--secondary-color)", //#ffffff
				primaryButton: "var(--primary-button-color)", //#191a23
				secondaryButton: "var(--secondary-button-color)", //#b9ff66
				accent: "var(--accent-color)", //#f3f3f3
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
	},
};
