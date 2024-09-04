import { Avatar } from "@mui/material";
import React from "react";

const Image: React.FC = () => (
	<Avatar
		src="/assets/images/profile.jpeg"
		alt="Raju D"
		sx={{
			width: { xs: 280, sm: 320, md: 400 },
			height: "auto",
			aspectRatio: "1 / 1",
			border: "0.3rem solid white",
			boxShadow: 3,
			background: "linear-gradient(45deg, #8b5cf6, #3b82f6)",
		}}
	/>
);

export default Image;
