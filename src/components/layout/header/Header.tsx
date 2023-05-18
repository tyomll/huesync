import Logo from "@/shared/Logo";
import React from "react";

const links = ["Why to use", "How it works", "FAQ"];
const Header = () => {
	return (
		<div className="flex items-center justify-between mt-[40px]">
			<Logo color="primary" />
			<div className="flex items-center gap-[40px]">
				{links.map((link: string) => {
					return (
						<p key={link} className="font-400 text-[20px] text-primary">
							{link}
						</p>
					);
				})}
				<button className="bg-none h-full rounded-[14px] border-[1px] px-[35px] py-[20px] border-primaryButton">
					About Us
				</button>
			</div>
		</div>
	);
};

export default Header;
