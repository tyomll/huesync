import React, { FC } from "react";
import SectionHeading from "@/shared/SectionHeading";
import QACard from "./QACard";
import QACardList from "./QACardList";

const Faq: FC = () => {
	return (
		<div>
			<SectionHeading
				title="FAQ"
				subtitle="Answers to some questions you might have."
			/>
			<QACardList />
		</div>
	);
};

export default Faq;
