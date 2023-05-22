import React from "react";
import Logo from "@/shared/Logo";
import { Link } from "react-scroll";

interface ILinks {
	title: string;
	link: string;
}
const links: ILinks[] = [
	{ title: "Why to use", link: "why" },
	{ title: "How it works", link: "how" },
	{ title: "FAQ", link: "faq" },
];
const Header = () => {
	return (
		<div className="sticky top-0 z-50 bg-secondary">
			<div className="flex items-center justify-between bg-secondary py-[40px]">
				<Logo color="primary" />
				<div className="flex items-center gap-[40px]">
					{links.map((link: ILinks) => {
						return (
							<Link
								key={link.link}
								to={link.link}
								className="font-400 text-[20px] text-primary cursor-pointer"
								spy={true}
								smooth={true}
								offset={-150}
								duration={500}
							>
								{link.title}
							</Link>
						);
					})}
					<Link
						to="footer"
						spy={true}
						smooth={true}
						offset={-150}
						duration={500}
						className="text-primary bg-none h-full rounded-[14px] border-[1px] px-[35px] py-[20px] border-primaryButton cursor-pointer"
					>
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
