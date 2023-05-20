import { useState, useEffect, ChangeEvent } from "react";

export const useCurrentColor = (colorName: string) => {
	const [currentColor, setCurrentColor] = useState<string>("");
	useEffect(() => {
		const color = getComputedStyle(document.documentElement).getPropertyValue(
			colorName
		);
		setCurrentColor(color);
	}, []);

	const handleCurrentColorChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentColor(e.target.value);
	};
	return { currentColor, handleCurrentColorChange };
};
