import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Loader from "../components/Loader/Loader";
import Skills from "../components/Skills/Skills";

const Home = props => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) return <Loader />

	return (
		<Box
			sx={{
				minHeight: "100vh",
				bgcolor: "background.default",
				color: "text.primary",
			}}
		>
			{props.render()}
			<Hero />
			<About />
			<Skills />
			<Experience />
		</Box>
	);
};

export default Home;
