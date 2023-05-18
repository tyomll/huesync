import React, { FC } from "react";
import HeroImage from "./HeroImage";

const Hero: FC = () => {
	return (
		<div className="flex items-center mt-[70px] gap-[50px]">
			<div className="flex flex-col w-[50%] gap-[35px]">
				<h1 className="text-primary text-[60px] font-500 leading-[77px]">
					Navigating the digital landscape for success
				</h1>
				<p className="w-[90%] text-primary text-[20px] font-400 leading-[28px]">
					Our digital marketing agency helps businesses grow and succeed online
					through a range of services including SEO, PPC, social media
					marketing, and content creation.
				</p>
				<button className="w-[45%] bg-primaryButton rounded-[14px] py-[20px] px-[35px] text-secondary">
					Book a consultation
				</button>
			</div>
			<div className="flex justify-end w-[50%]">
				<HeroImage />
			</div>
		</div>
	);
};

export default Hero;
