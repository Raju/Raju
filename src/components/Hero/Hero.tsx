import { Stack, Typography, keyframes } from "@mui/material";
import React from "react";
import useTypewriter from "../../hooks/useTypewriter";
import GradientText from "../GradientText/GradientText";
import Image from "./Image";
import Social from "./Social";

const waveAnimation = keyframes`
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
`;

const cursorAnimation = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`;

const Hero: React.FC = () => {
	const { text: displayedGreeting, isTyping } = useTypewriter([
		"Hello!",
		"Namaste!",
		"Bonjour!",
		"Hola!",
		"Ciao!",
		"Konnichiwa!",
		"Salaam!",
	]);

	return (
		<Stack
			direction={{ xs: "column", md: "row" }}
			alignItems="center"
			justifyContent="center"
			gap={4}
			sx={{
				minHeight: "100vh",
			}}
		>
			<Image />

			<Stack>
				<Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }} gutterBottom>
					{displayedGreeting}
					<Typography
						component="span"
						sx={{
							display: "inline-block",
							width: "0.3rem",
							height: "3.6rem",
							marginLeft: "0.1rem",
							backgroundColor: "text.primary",
							verticalAlign: "text-bottom",
							animation: isTyping
								? `1s ease 0s infinite normal none running ${cursorAnimation}`
								: "none",
						}}
					/>
				</Typography>

				<Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }} gutterBottom>
					I'm <GradientText>Raju Dhami</GradientText>
					<Typography
						variant="h4"
						component="span"
						sx={{
							display: "inline-block",
							animation: `${waveAnimation} 2.5s infinite`,
							transformOrigin: "70% 70%",
						}}
					>
						👋
					</Typography>
				</Typography>

				<Stack spacing={0.5}>
					<Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
						I'm a Senior Software Engineer.
					</Typography>
					<Typography>🍵 fueled by caffeine</Typography>
					<Typography>🌏 from India</Typography>
					<Typography>💼 creating impact at Nous</Typography>
					<Typography>📧 raju@rajudhami.com</Typography>
				</Stack>

				<Social />
			</Stack>
		</Stack>
	);
};

export default Hero;
