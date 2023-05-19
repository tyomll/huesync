import React from "react";

const BackgroundButton = () => {
	return (
		<div className="flex flex-col items-center h-full px-[25px] bg-secondary rounded-[5px] gap-[5px]">
			<div className="w-[60px] h-[10px]">
				<input
					className="w-full h-full text-[13px] outline-none text-center bg-accent"
					type="text"
					maxLength={7}
				/>
			</div>
			<div className="mt-[5px]">Background</div>
		</div>
	);
};

export default BackgroundButton;
