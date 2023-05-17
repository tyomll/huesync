import React, { FC } from "react";

const Heading: FC = () => {
	return (
		<div className="flex items-center gap-[40px]">
			<div className="font-500 text-[40px] text-primary bg-secondaryButton rounded-[7px] px-[7px] w-fit">
				WHY?
			</div>
			<div className="w-[50%]">
				<p className="text-primary font-400 text-[18px]">
					Unlock the Power of Visual Harmony. Explore the Advantages of HueSync.
				</p>
			</div>
		</div>
	);
};

export default Heading;
