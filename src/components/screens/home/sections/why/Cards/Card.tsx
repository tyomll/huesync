import React, { FC } from "react";

interface ICard {
	bg: string;
	highlight: string;
	text: string;
}
const Card: FC<ICard> = ({ bg, highlight, text }) => {
	const shadow = { boxShadow: "0px 5px 0px #191A23" };
	return (
		<div
			className={`flex items-center justify-center w-[45%] bg-${bg} px-[150px] py-[50px] rounded-[45px] border-[1px] border-primaryButton`}
			style={shadow}
		>
			<h2
				className={`text-center bg-${highlight} text-[20px] font-500 rounded-[7px] px-[7px]`}
			>
				{text}
			</h2>
		</div>
	);
};

export default Card;
