import React from "react";

const Newsletter = () => {
	return (
		<div className="flex max-md:flex-col max-md:py-[30px] max-md:gap-[30px] items-center bg-[#292A32] px-[30px] py-[50px] rounded-[14px] gap-[20px]">
			<div className="border-[1px] border-secondary rounded-[14px] px-[25px] py-[17px]">
				<input
					type="text"
					className="bg-inherit outline-none text-secondary"
					placeholder="Email"
				/>
			</div>
			<div className="max-md:w-full text-center bg-secondaryButton rounded-[14px] px-[25px] py-[17px]">
				<p>Subscribe to news</p>
			</div>
		</div>
	);
};

export default Newsletter;
