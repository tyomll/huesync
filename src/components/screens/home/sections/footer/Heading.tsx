import React from "react";
import Logo from "@/shared/Logo";
import Facebook from "@/shared/icons/Facebook";
import Linkedin from "@/shared/icons/Linkedin";

const Heading = () => {
	return (
		<div className="flex max-md:flex-col max-md:items-center w-full justify-between">
			<Logo color="secondary" />
			<div className="flex gap-[20px]">
				<Linkedin />
				<Facebook />
			</div>
		</div>
	);
};

export default Heading;
