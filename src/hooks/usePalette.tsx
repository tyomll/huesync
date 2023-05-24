import { useEffect, useState } from "react";

export const usePalette = () => {
	interface IPalette {
		[key: string]: string;
	}

	const labels = [
		{ colorName: "--primary-color", label: "primary" },
		{ colorName: "--secondary-color", label: "secondary" },
		{ colorName: "--primary-button-color", label: "primaryButton" },
		{ colorName: "--secondary-button-color", label: "secondaryButton" },
		{ colorName: "--accent-color", label: "accent" },
	];
	const palette: IPalette = {
		primary: "",
		secondary: "",
		primaryButton: "",
		secondaryButton: "",
		accent: "",
	};

	const createPalette = () => {
		labels.map((item) => {
			const label = item.label;
			if (typeof document !== "undefined") {
				const color = getComputedStyle(
					document.documentElement
				).getPropertyValue(item.colorName);
				palette[label] = color;
			}
		});
	};

	return { createPalette, palette };
};
