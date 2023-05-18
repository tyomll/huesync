import React, { FC, useState } from "react";

interface IQACard {
	number: string;
	question: string;
	answer: string;
}
const QACard: FC<IQACard> = ({ number, question, answer }) => {
	const [openCard, setOpenCard] = useState<boolean>(false);
	const shadow = { boxShadow: "0px 5px 0px #191A23" };

	const toggleCard = () => {
		setOpenCard(!openCard);
	};
	return (
		<div
			className={`flex flex-col justify-center w-full bg-${
				!openCard ? "accent" : "secondaryButton"
			} px-[60px] py-[40px] rounded-[45px] border-[1px] border-primaryButton gap-[30px] transition duartion-700`}
			style={shadow}
		>
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-[25px]">
					<h1 className="text-[60px] font-500 text-primary">{number}</h1>
					<h2 className="text-[30px] font-500 text-primary">{question}</h2>
				</div>

				{openCard ? (
					<div className="cursor-pointer" onClick={toggleCard}>
						{/* minus icon */}
						<svg
							width="58"
							height="59"
							viewBox="0 0 58 59"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="29"
								cy="29.5"
								r="28.5"
								className="fill-accent stroke-primaryButton"
							/>
							<path
								className="fill-primary"
								d="M20 32.14V26.5H37.76V32.14H20Z"
							/>
						</svg>
					</div>
				) : (
					<div className="cursor-pointer" onClick={toggleCard}>
						{/* plus icon */}
						<svg
							width="58"
							height="59"
							viewBox="0 0 58 59"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								className="fill-accent stroke-primaryButton"
								cx="29"
								cy="29.5"
								r="28.5"
							/>
							<path
								className="fill-primary"
								d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
							/>
						</svg>
					</div>
				)}
			</div>
			{openCard && (
				<>
					<div className="h-[1px] bg-primary transition duartion-500"></div>
					<h2 className={`text-[20px] font-500 rounded-[7px] px-[7px]`}>
						During the initial consultation, we will discuss your business goals
						and objectives, target audience, and current marketing efforts. This
						will allow us to understand your needs and tailor our services to
						best fit your requirements.
					</h2>
				</>
			)}
		</div>
	);
};

export default QACard;
