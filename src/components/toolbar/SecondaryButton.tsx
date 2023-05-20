import React from "react";
import { useCurrentColor } from "../hooks/useCurrentColor";

const SecondaryButton = () => {
	const { currentColor, handleCurrentColorChange } =
		useCurrentColor("--secondary-color");
	return (
		<div className="flex flex-col items-center h-full px-[25px] bg-secondary rounded-[5px] gap-[5px] cursor-pointer">
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
					Secondary
				</label>
				<input
					className="invisible"
					type="color"
					id="secondary"
					value={currentColor}
					onChange={(e) => handleCurrentColorChange(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default SecondaryButton;
