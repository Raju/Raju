import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DownloadIcon from "@mui/icons-material/Download";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import GradientText from "../GradientText/GradientText";
import { ThemeDialog } from "../Theme/ThemeDialog";
import "./Header.scss";

interface HeaderProps {
	activeSection: string;
	onSectionChange: (section: string) => void;
	toggleTheme: () => void;
	isDarkMode: boolean;
	setIsDarkMode: (isDark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
	activeSection,
	onSectionChange,
	toggleTheme,
	isDarkMode,
	setIsDarkMode,
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [rememberPreference, setRememberPreference] = useState(false);

	const sections = ["{ raju }", "resume"];

	const handleResetTheme = () => setIsDialogOpen(true);

	const handleThemeChoice = (choice: "light" | "dark") => {
		const newIsDarkMode = choice === "dark";

		if (newIsDarkMode !== isDarkMode) setIsDarkMode(newIsDarkMode);

		rememberPreference
			? localStorage.setItem("themePreference", choice)
			: localStorage.removeItem("themePreference");

		setIsDialogOpen(false);
	};

	const handleDownload = async () => {
		try {
			const currentDate = new Date();
			const getDate = currentDate.getDate().toString().padStart(2, '0')
			const getMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0')
			const getYear = currentDate.getFullYear()
			const formattedDate = `${getDate}_${getMonth}_${getYear}`;
			const fileName = `Raju_D_Resume_${formattedDate}.pdf`;
		
			const response = await fetch("assets/files/Resume.pdf");
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			
			const link = document.createElement('a');
			link.href = url;
			link.download = fileName;
			link.click();
		
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error('Error downloading resume:', error);
		}
	};

	return (
		<>
			<Stack direction="row" justifyContent="space-around" alignItems="center" pt={3} pb={3}>
				<Stack direction="row" gap={5}>
					{sections.map(section =>
						section !== "resume" ? (
							<Tooltip key={section} title="Welcome to my portfolio :)">
								<Typography
									key={section}
									variant="h6"
									component="div"
									sx={{
										cursor: "pointer",
										fontWeight: activeSection === section ? "bold" : "normal",
									}}
									onClick={() => onSectionChange(section)}
								>
									{activeSection === section ? (
										<GradientText>{section}</GradientText>
									) : (
										section
									)}
								</Typography>
							</Tooltip>
						) : (
							<Tooltip key={section} title="Download Resume">
								<Button
									key={section}
									variant="contained"
									color="info"
									startIcon={<DownloadIcon />}
									onClick={handleDownload}
									className="resume-button"
								>
									Resume
								</Button>
							</Tooltip>
						),
					)}
				</Stack>

				<Stack direction="row">
					<Tooltip title="Toggle light/dark theme">
						<IconButton color="warning" onClick={toggleTheme}>
							{isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
						</IconButton>
					</Tooltip>

					<Tooltip title="Reset Theme Preference">
						<IconButton onClick={handleResetTheme} color="error">
							<RestartAltIcon />
						</IconButton>
					</Tooltip>
				</Stack>
			</Stack>

			<ThemeDialog
				open={isDialogOpen}
				onClose={() => setIsDialogOpen(false)}
				onThemeChoice={handleThemeChoice}
				rememberPreference={rememberPreference}
				setRememberPreference={setRememberPreference}
			/>
		</>
	);
};

export default Header;
