import { useState, useEffect, ChangeEvent } from "react";

export const useCurrentColor = (colorName: string) => {
	const [currentColor, setCurrentColor] = useState<string>("");
	useEffect(() => {
		const color = getComputedStyle(document.documentElement).getPropertyValue(
			colorName
		);
		setCurrentColor(color);
	}, []);

	const handleCurrentColorChange = (
		e: ChangeEvent<HTMLInputElement> | string
	) => {
		if (typeof e === "string") {
			document.documentElement.style.setProperty(colorName, e);
			setCurrentColor(e);
		} else {
			document.documentElement.style.setProperty(colorName, e.target.value);
			setCurrentColor(e.target.value);
		}
	};
	return { currentColor, handleCurrentColorChange };
};
