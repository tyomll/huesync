import React, { FC } from "react";

interface IHeading {
	title: string;
	subtitle: string;
}
const SectionHeading: FC<IHeading> = ({ title, subtitle }) => {
	return (
		<div className="flex items-center gap-[40px]">
			<div className="font-500 text-[40px] text-primary bg-secondaryButton rounded-[7px] px-[7px] w-fit">
				{title}
			</div>
			<div className="w-[50%]">
				<p className="text-primary font-400 text-[18px]">{subtitle}</p>
			</div>
		</div>
	);
};

export default SectionHeading;
