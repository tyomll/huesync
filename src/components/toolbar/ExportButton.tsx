import { useCreateFile } from "@/hooks/useCreateFile";
import React from "react";

const ExportButton = () => {
	const { createFile } = useCreateFile();
	return (
		<div
			className="flex flex-col justify-center items-center h-full px-[15px] bg-[#ffffff] rounded-[5px] gap-[5px] cursor-pointer duration-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
			onClick={() => createFile()}
		>
			<div className="group relative">
				<div className="duration-200 flex flex-col items-center break-keep w-fit absolute left-[-15px] bottom-[45px] opacity-0 group-hover:opacity-100">
					<span className="text-center font-500 backdrop-blur-md bg-[#000000cc] text-[14px] text-white rounded-[6px] py-[5px] px-[10px]">
						Export
					</span>
					<div className="w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-[#000000cc] border-r-[6px] border-r-transparent"></div>
				</div>
				<div className="w-fit h-fit border-[2px] border-[#000000] rounded-[5px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 33 32"
						fill="none"
					>
						<path
							d="M17.3248 17.8251V10.2169C17.3248 9.98865 17.2335 9.78186 17.0831 9.63415C16.9328 9.48376 16.726 9.39246 16.5004 9.39246C16.2721 9.39246 16.0653 9.48376 15.9176 9.63415C15.7672 9.78455 15.6759 9.98865 15.6759 10.2169V17.8251L12.7433 15.2657C12.5741 15.118 12.3593 15.0509 12.1498 15.0616C11.9376 15.0751 11.7335 15.1664 11.5805 15.3356C11.4301 15.5048 11.3629 15.7196 11.3737 15.9291C11.3871 16.1386 11.4784 16.3427 11.6476 16.493L15.9552 20.2528C16.1137 20.3925 16.3124 20.4596 16.5084 20.4596C16.7045 20.4596 16.9005 20.3844 17.0509 20.2448L21.3558 16.485C21.5197 16.3346 21.611 16.1332 21.6244 15.9264C21.6378 15.7169 21.568 15.5048 21.4176 15.3356L21.4122 15.3302C21.2619 15.1637 21.0578 15.0751 20.851 15.0616H20.8483C20.6388 15.0509 20.424 15.118 20.2548 15.2684L17.3248 17.8251Z"
							fill="#0F0F0F"
						></path>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default ExportButton;
