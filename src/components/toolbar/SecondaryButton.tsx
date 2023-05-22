import React from "react";
import { useCurrentColor } from "../hooks/useCurrentColor";

const SecondaryButton = () => {
	const { currentColor, handleCurrentColorChange } = useCurrentColor(
		"--secondary-button-color"
	);
	return (
		<label
			className="flex flex-col items-center h-full px-[25px] bg-secondary rounded-[5px] gap-[5px] cursor-pointer"
			htmlFor="secondary"
		>
			<div className="w-[60px] h-[10px]">
				<input
					className="w-full h-full text-[13px] outline-none text-center bg-accent"
					type="text"
					maxLength={7}
					value={currentColor}
					onChange={(e) => handleCurrentColorChange(e)}
				/>
			</div>
			<div className="flex flex-col items-center cursor-pointer">
				<label className="mt-[5px] cursor-pointer" htmlFor="secondary">
					Secondary Button
				</label>
				<input
					className="invisible h-0 w-0"
					type="color"
					id="secondary"
					value={currentColor}
					onChange={(e) => handleCurrentColorChange(e.target.value)}
				/>
			</div>
		</label>
	);
};

export default SecondaryButton;
