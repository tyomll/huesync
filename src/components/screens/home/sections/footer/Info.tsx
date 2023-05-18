import Link from "next/link";
import React, { FC } from "react";

const Info: FC = () => {
	return (
		<div>
			<div className="font-500 text-[20px] text-primary bg-secondaryButton rounded-[7px] px-[7px] w-fit">
				<p>Contact Us:</p>
			</div>
			<div className="flex flex-col mt-[30px] text-secondary gap-[20px]">
				<Link
					href="#"
					onClick={(e) => {
						window.location.href = "mailto:artyom.hovsepyann@gmail.com";
						e.preventDefault();
					}}
				>
					Email: artyom.hovsepyann@gmail.com
				</Link>
				<Link
					href="https://github.com/tyommmm"
					rel="noopener noreferrer"
					target="_blank"
				>
					Github: tyommmm
				</Link>
			</div>
		</div>
	);
};

export default Info;
