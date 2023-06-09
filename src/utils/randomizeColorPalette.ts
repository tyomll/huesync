import { colorPalette } from "../palettes/colorPallet";

export const randomizeColorPalette = () => {
	const labels = [
		{ colorName: "--primary-color" },
		{ colorName: "--secondary-color" },
		{ colorName: "--primary-button-color" },
		{ colorName: "--secondary-button-color" },
		{ colorName: "--accent-color" },
	];
	const randomPalette = Math.floor(Math.random() * colorPalette.length) + 1;
	const palette = colorPalette[randomPalette].colors;

	for (let i = 0; i < palette.length; i++) {
		document.documentElement.style.setProperty(labels[i].colorName, palette[i]);
	}
};
