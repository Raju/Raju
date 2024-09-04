import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const About = () => (
	<Stack justifyContent="center" alignItems="center" sx={{ mb: 4, minHeight: "100vh" }}>
		<Typography variant="h5" component="h2" gutterBottom sx={{ m: 4 }}>
			ABOUT ME
		</Typography>

		<Box sx={{ border: "1px solid gainsboro", width: "50%", height: "100%" }}>
			<Stack
				direction="row"
				gap={1}
				sx={{
					background: "#F7F7F7",
					borderBottom: "1px solid gainsboro",
					padding: "10px 15px",
				}}
			>
				<Box
					sx={{
						width: "10px",
						height: "10px",
						background: "#ED4C5C",
						borderRadius: "50%",
					}}
				/>
				<Box
					sx={{
						width: "10px",
						height: "10px",
						background: "#FDCB58",
						borderRadius: "50%",
					}}
				/>
				<Box
					sx={{
						width: "10px",
						height: "10px",
						background: "#78B159",
						borderRadius: "50%",
					}}
				/>
			</Stack>
			<Stack gap={0.5} sx={{ padding: "1rem 1rem 2rem" }}>
				<Typography
					variant="p"
					component="h4"
					sx={{
						textAlign: "justify",
						lineHeight: "2",
						"&::first-letter": {
							fontSize: "3rem",
							fontWeight: "bold",
							lineHeight: "1",
							color: "#ED4C5C",
						},
					}}
				>
					Senior React Front-End Engineer with 6 years of experience, I currently live on
					a blue planet called EARTH, which circles around a red ball of fire called SUN.
					Highly skilled, dynamic and ambitious Senior Front-End Software Engineer with a
					proven track record of delivering exceptional, accessible, and mobile-first web
					applications. Leveraging over 5 years and 10 months of experience, I excel in
					crafting high-performance, user-centric interfaces using HTML5, CSS3,
					JavaScript, and TypeScript, with a deep expertise in ReactJS. Committed to
					delivering measurable business impact through rigorous test-driven development
					(TDD).
				</Typography>
			</Stack>
		</Box>
	</Stack>
);

export default About;
