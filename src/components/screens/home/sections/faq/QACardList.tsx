import React from "react";
import QACard from "./QACard";

const questions = [
	{
		number: "01",
		question: "Consultation",
		answer:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
	{
		number: "02",
		question: "Research and Strategy Development",
		answer:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
	{
		number: "03",
		question: "Implementation",
		answer:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
	{
		number: "04",
		question: "Monitoring and Optimization",
		answer:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
];
const QACardList = () => {
	return (
		<div className="flex flex-col gap-[30px] mt-[60px]">
			{questions.map((question, i: number) => {
				return (
					<QACard
						key={i}
						number={question.number}
						question={question.question}
						answer={question.answer}
					/>
				);
			})}
		</div>
	);
};

export default QACardList;
