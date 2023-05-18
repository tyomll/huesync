import React, { FC } from "react";
import Heading from "./Heading";
import Contacts from "./Contacts";
import Copyright from "./Copyright";

const Footer: FC = () => {
	return (
		<div
			id="footer"
			className="flex flex-col w-full justify-between bg-primaryButton py-[60px] px-[55px] rounded-t-[45px]"
		>
			<Heading />
			<Contacts />
			<Copyright />
		</div>
	);
};

export default Footer;
