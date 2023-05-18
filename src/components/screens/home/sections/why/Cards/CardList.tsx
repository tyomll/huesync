import React, { FC } from "react";
import Card from "./Card";

interface ICard {
	bg: string;
	highlight: string;
	text: string;
}
const cards: ICard[] = [
	{
		bg: "accent",
		highlight: "secondaryButton",
		text: "Visualize Color Combinations",
	},
	{
		bg: "secondaryButton",
		highlight: "secondary",
		text: "User-Friendly Interface",
	},
	{
		bg: "primaryButton",
		highlight: "secondary",
		text: "Inspiration",
	},
	{
		bg: "accent",
		highlight: "secondaryButton",
		text: "Accessibility Considerations",
	},
	{
		bg: "secondaryButton",
		highlight: "secondary",
		text: "Time-saving",
	},
	{
		bg: "primaryButton",
		highlight: "secondaryButton",
		text: "Consistency",
	},
];
const CardList: FC = () => {
	return (
		<div className="flex flex-wrap justify-between gap-[40px] mt-[80px]">
			{cards.map((card: ICard, idx: number) => {
				return (
					<Card
						key={idx}
						bg={card.bg}
						highlight={card.highlight}
						text={card.text}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
