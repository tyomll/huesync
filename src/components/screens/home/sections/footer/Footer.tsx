import Logo from "@/shared/Logo";
import Facebook from "@/shared/icons/Facebook";
import Instagram from "@/shared/icons/Instagram";
import Linkedin from "@/shared/icons/Linkedin";
import React, { FC } from "react";
import Heading from "./Heading";
import Contacts from "./Contacts";
import Copyright from "./Copyright";

const Footer: FC = () => {
	return (
		<div className="flex flex-col w-full justify-between bg-primaryButton py-[60px] px-[55px] rounded-t-[45px]">
			<Heading />
			<Contacts />
			<Copyright />
		</div>
	);
};

export default Footer;
