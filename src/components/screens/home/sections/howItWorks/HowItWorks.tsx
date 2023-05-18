import SectionHeading from "@/shared/SectionHeading";
import React, { FC } from "react";
import CaseStudies from "./CaseStudies";

const HowItWorks: FC = () => {
	return (
		<div id="how">
			<SectionHeading
				title="How Does It Work?"
				subtitle="Explore Real-Life Examples of Our Proven Success through Our Case Studies"
			/>
			<CaseStudies />
		</div>
	);
};

export default HowItWorks;
