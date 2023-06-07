import React, { FC, PropsWithChildren } from "react";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";
import Header from "./header/Header";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const Layout: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<Meta title={title} description={description}>
			<div
				className={`max-md:px-[15px] px-[100px] ${spaceGrotesk.className} bg-secondary`}
			>
				<Header />
				<main className="mt-[50px]">{children}</main>
			</div>
		</Meta>
	);
};

export default Layout;
