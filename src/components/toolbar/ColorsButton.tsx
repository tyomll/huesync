import React, { useState } from "react";
import ColorsModal from "../colorsModal/ColorsModal";

const ColorsButton = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};
	return (
		<>
			{isModalOpen && <ColorsModal />}
			<div
				className="z-50 flex items-center h-full px-[25px] bg-[#ffffff] rounded-[5px] gap-[5px] cursor-pointer duration-300 hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
				onClick={toggleModal}
			>
				<div className="flex items-center cursor-pointer">
					<span className="cursor-pointer font-500 text-[20px]">Colors</span>
				</div>
			</div>
		</>
	);
};

export default ColorsButton;
