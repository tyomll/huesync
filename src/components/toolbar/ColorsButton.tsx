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
				className="z-50 flex items-center h-full px-[25px] bg-[#ffffff] rounded-[5px] gap-[5px] cursor-pointer"
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
