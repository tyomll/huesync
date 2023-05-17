import Layout from "@/components/layout/Layout";
import React from "react";
import Hero from "./hero/Hero";
import Why from "./why/Why";

const Home = () => {
	return (
		<Layout title="Home" description="poxeq indz">
			<Hero />
			<Why />
		</Layout>
	);
};

export default Home;
