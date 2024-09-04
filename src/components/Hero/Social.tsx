import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { IconButton, Stack } from "@mui/material";
import React from "react";

const socialLinks = [
	{
		icon: FacebookIcon,
		color: "#1877F2",
		url: "https://facebook.com/yourprofile",
	},
	{
		icon: InstagramIcon,
		color: "#E4405F",
		url: "https://instagram.com/yourprofile",
	},
	{
		icon: GitHubIcon,
		color: "#181717",
		url: "https://github.com/Raju",
	},
	{
		icon: LinkedInIcon,
		color: "#0A66C2",
		url: "https://linkedin.com/in/yourprofile",
	},
	{
		icon: XIcon,
		color: "#000000",
		url: "https://x.com/yourhandle",
	},
];

const Social: React.FC = () => {
	return (
		<Stack direction="row" spacing={{ xs: 1, sm: 2 }} sx={{ ml: -2, mt: 2 }}>
			{socialLinks.map(({ icon: Icon, color, url }) => (
				<IconButton
					key={url}
					href={url}
					target="_blank"
					sx={{
						color,
						width: { xs: 40, sm: 48, md: 56 },
						height: { xs: 40, sm: 48, md: 56 },
						"&:hover": {
							backgroundColor: `${color}20`,
						},
					}}
				>
					<Icon sx={{ fontSize: { xs: 24, sm: 28, md: 32 } }} />
				</IconButton>
			))}
		</Stack>
	);
};

export default Social;
