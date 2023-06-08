import React from "react";
import AccentButton from "../toolbar/colorButtons/AccentButton";
import BackgroundButton from "../toolbar/colorButtons/BackgroundButton";
import PrimaryButton from "../toolbar/colorButtons/PrimaryButton";
import SecondaryButton from "../toolbar/colorButtons/SecondaryButton";
import TextButton from "../toolbar/colorButtons/TextButton";

const ColorsModal = () => {
	const shadow = { boxShadow: "0px 5px 0px #191A23" };

	return (
		<div className="flex items-start justify-center fixed z-30 left-0 top-0 w-[100vw] h-[100vh] bg-[#ffffff66]">
			<div
				className="relative w-[70%] h-[60%] mt-[80px] bg-secondaryButton rounded-[45px] border-[1px] border-primaryButton py-[30px] px-[30px]"
				style={shadow}
			>
				<div className="text-center grid grid-cols-2 w-full h-full gap-[5px] ">
					<TextButton />
					<BackgroundButton />
					<PrimaryButton />
					<SecondaryButton />
					<AccentButton />
				</div>
			</div>
		</div>
	);
};

export default ColorsModal;
