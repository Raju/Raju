import { Box } from "@mui/material";
import React from "react";

const GradientText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<Box
		component="span"
		sx={{
			background: "linear-gradient(135deg, #00FFA4, #DA3726, #A668FF)",
			textFillColor: "transparent",
			backgroundClip: "text",
		}}
	>
		{children}
	</Box>
);

export default GradientText;
