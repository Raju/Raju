import { useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState, useEffect } from "react";

interface ThemeToggleProps {
	children: (props: {
		toggleTheme: () => void;
		isDarkMode: boolean;
		setIsDarkMode: (isDark: boolean) => void;
	}) => React.ReactNode;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ children }) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedPreference = localStorage.getItem("themePreference");

		savedPreference ? savedPreference === "dark" : prefersDarkMode;
	});

	useEffect(() => {
		!localStorage.getItem("themePreference") && setIsDarkMode(prefersDarkMode);
	}, [prefersDarkMode]);

	const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

	const theme = createTheme({
		palette: {
			mode: isDarkMode ? "dark" : "light",
		},
		typography: {
			fontFamily: '"Open Sans", sans-serif',
		},
	});

	return (
		<ThemeProvider theme={theme}>
			{children({ toggleTheme, isDarkMode, setIsDarkMode })}
		</ThemeProvider>
	);
};
