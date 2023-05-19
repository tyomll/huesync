import React, { useEffect, useState } from "react";

const TextButton = () => {
	const [currentColor, setCurrentColor] = useState<string>("");
	useEffect(() => {
		const color = getComputedStyle(document.documentElement).getPropertyValue(
			"--secondary-color"
		);
		setCurrentColor(color);
	}, []);
	return (
		<div className="flex flex-col items-center h-full px-[25px] bg-secondary rounded-[5px] gap-[5px]">
			<div className="w-[60px] h-[10px]">
				<input
					className="w-full h-full text-[13px] outline-none text-center bg-accent"
					type="text"
					maxLength={7}
					value={currentColor}
				/>
			</div>
			<div className="mt-[5px]">Text</div>
		</div>
	);
};

export default TextButton;
