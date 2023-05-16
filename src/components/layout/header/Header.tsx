import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";

const links = ["Why to use", "How it works", "FAQ"];
const Header = () => {
	return (
		<div className="flex items-center justify-between mt-[40px]">
			<div className="flex items-center gap-[8px]">
				<Image src={logo} alt="logo" className="fill-white-500" />
				<h1 className="font-500 text-[40px]">Huesync</h1>
			</div>
			<div className="flex items-center gap-[40px]">
				{links.map((link: string) => {
					return <p className="font-400 text-[20px] text-primary">{link}</p>;
				})}
				<button className="bg-none h-full rounded-[14px] border-[1px] px-[35px] py-[20px] border-primaryButton">
					About Us
				</button>
			</div>
		</div>
	);
};

export default Header;
