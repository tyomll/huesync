import React, { FC } from "react";

const cases: string[] = [
	"Browse through an extensive library of color palettes and schemes, carefully curated to inspire your creativity. Discover a wide range of harmonious color combinations designed to elevate your website's visual appeal.",
	"Experience the power of real-time color palette preview. As you explore different color options, witness instant updates and visualize how each palette transforms your website's appearance.",
	"Tailor your color palette to perfection. With intuitive customization options, effortlessly adjust individual colors or tweak the entire palette to suit your unique style and branding.",
];
const CaseStudies: FC = () => {
	return (
		<div className="flex items-center mt-[80px] bg-primaryButton rounded-[45px] px-[60px] py-[70px] gap-[100px]">
			{cases.map((descritption: string, i: number) => {
				return (
					<div className="flex">
						<p className="text-secondary">{descritption}</p>
						{i !== cases.length - 1 && (
							<div className="w-[2px] bg-secondary ml-[50px]"></div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default CaseStudies;
