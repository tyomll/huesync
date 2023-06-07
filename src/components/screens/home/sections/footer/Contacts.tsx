import React from "react";
import Info from "./Info";
import Newsletter from "./Newsletter";

const Contacts = () => {
	return (
		<div className="flex flex-col mt-[65px]">
			<div className="flex max-lg:flex-col max-lg:items-center justify-between max-lg:gap-[30px]">
				<div className="max-lg:flex max-lg:flex-col max-lg:w-full max-lg:items-center w-[40%]">
					<Info />
				</div>
				<div className="w-[60 %]">
					<Newsletter />
				</div>
			</div>
			<div className="mt-[30px] w-full h-[1px] bg-secondary"></div>
		</div>
	);
};

export default Contacts;
