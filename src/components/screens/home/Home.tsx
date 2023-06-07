import Layout from "@/components/layout/Layout";
import React from "react";
import Hero from "./sections/hero/Hero";
import Why from "./sections/why/Why";
import HowItWorks from "./sections/howItWorks/HowItWorks";
import Faq from "./sections/faq/Faq";
import Footer from "./sections/footer/Footer";
import Toolbar from "@/components/toolbar/Toolbar";

const Home = () => {
	return (
		<Layout title="Home" description="poxeq indz">
			<div className="flex flex-col gap-[130px]">
				<Hero />
				<Why />
				<HowItWorks />
				<Faq />
				<Footer />
			</div>
			<div className="flex justify-center items-center w-full fixed left-0 bottom-[50px]">
				<Toolbar />
			</div>
		</Layout>
	);
};

export default Home;
