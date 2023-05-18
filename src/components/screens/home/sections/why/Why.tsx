import React, { FC } from "react";
import SectionHeading from "../../../../../shared/SectionHeading";
import CardList from "./Cards/CardList";

const Why: FC = () => {
	return (
		<div>
			<SectionHeading
				title="WHY?"
				subtitle="Unlock the Power of Visual Harmony. Explore the Advantages of HueSync."
			/>
			<CardList />
		</div>
	);
};

export default Why;
