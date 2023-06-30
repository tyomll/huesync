import React, { FC, PropsWithChildren } from "react";
import { IMeta } from "./meta.interface";
import Head from "next/head";
import favico from "../../assets/logo.ico";

const getTitle = (title: string) => `${title} | Huesync`;

const Meta: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{getTitle(title)}</title>
				<link rel="shortcut icon" href={favico.src} />

				{description ? (
					<>
						<meta name="description" content={description} />
						<meta name="og:title" content={getTitle(title)} />
						<meta name="og:description" content={description} />
					</>
				) : (
					<>
						<meta name="robots" content="noindex, nofollow" />
					</>
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;
