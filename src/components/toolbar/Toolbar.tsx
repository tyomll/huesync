import React, { FC } from "react";
import TextButton from "./colorButtons/TextButton";
import BackgroundButton from "./colorButtons/BackgroundButton";
import PrimaryButton from "./colorButtons/PrimaryButton";
import SecondaryButton from "./colorButtons/SecondaryButton";
import AccentButton from "./colorButtons/AccentButton";
import ExportButton from "./ExportButton";
import ColorsButton from "./ColorsButton";
import RandomizerButton from "./RandomizerButton";

const Toolbar: FC = () => {
	const shadow = { boxShadow: "0px 3px 0px #191A23" };

	return (
		<div
			className="z-[4444] flex h-[80px] w-fit bg-[#f3f3f3] px-[30px] py-[10px] rounded-[15px] border-[1px] border-[#000000] "
			style={shadow}
		>
			<div className="flex max-lg:hidden text-center break-all items-center justify-between gap-[20px]">
				<TextButton />
				<BackgroundButton />
				<PrimaryButton />
				<SecondaryButton />
				<AccentButton />
				<ExportButton />
				<RandomizerButton />
			</div>
			<div className="flex lg:hidden items-center justify-between gap-[20px] ">
				<ColorsButton />
				<ExportButton />
			</div>
		</div>
	);
};

export default Toolbar;
