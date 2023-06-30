import React from "react";
import { randomizeColorPalette } from "@/utils/randomizeColorPalette";

const RandomizerButton = () => {
	const onRandomize = () => {
		randomizeColorPalette();
	};
	return (
		<div
			className="flex flex-col justify-center items-center h-full px-[15px] bg-[#ffffff] rounded-[5px] gap-[5px] cursor-pointer duration-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
			onClick={onRandomize}
		>
			<div className="group relative">
				<div className="duration-200 flex flex-col items-center break-keep w-fit absolute left-[-30px] bottom-[45px] opacity-0 group-hover:opacity-100">
					<span className="text-center font-500 backdrop-blur-md bg-[#000000cc] text-[14px] text-white rounded-[6px] py-[5px] px-[10px]">
						Randomize
					</span>
					<div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-[#000000cc] border-r-[6px] border-r-transparent"></div>
				</div>
				<div className="flex justify-center items-center p-[7px] w-fit h-fit border-[2px] border-[#000000] rounded-[5px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15"
						height="15"
						viewBox="0 0 24 24"
					>
						<path d="M18 9v-3c-1 0-3.308-.188-4.506 2.216l-4.218 8.461c-1.015 2.036-3.094 3.323-5.37 3.323h-3.906v-2h3.906c1.517 0 2.903-.858 3.58-2.216l4.218-8.461c1.356-2.721 3.674-3.323 6.296-3.323v-3l6 4-6 4zm-9.463 1.324l1.117-2.242c-1.235-2.479-2.899-4.082-5.748-4.082h-3.906v2h3.906c2.872 0 3.644 2.343 4.631 4.324zm15.463 8.676l-6-4v3c-3.78 0-4.019-1.238-5.556-4.322l-1.118 2.241c1.021 2.049 2.1 4.081 6.674 4.081v3l6-4z" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default RandomizerButton;
