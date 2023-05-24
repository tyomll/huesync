import React, { FC } from "react";
import TextButton from "./TextButton";
import BackgroundButton from "./BackgroundButton";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import AccentButton from "./AccentButton";
import ExportButton from "./ExportButton";

const Toolbar: FC = () => {
	const shadow = { boxShadow: "0px 3px 0px #191A23" };

	return (
		<div
			className="flex items-center justify-between h-[80px] w-fit bg-[#f3f3f3] px-[30px] py-[10px] rounded-[15px] border-[1px] border-[#000000] gap-[20px]"
			style={shadow}
		>
			<TextButton />
			<BackgroundButton />
			<PrimaryButton />
			<SecondaryButton />
			<AccentButton />
			<ExportButton />
		</div>
	);
};

export default Toolbar;
