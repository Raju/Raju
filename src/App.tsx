import React, { useState } from "react";
import Header from "./components/Header/Header";
import { ThemeToggle } from "./components/Theme/ThemeToggle";
import Home from "./pages/Home";

interface AppProps {
	toggleTheme: () => void;
	isDarkMode: boolean;
	setIsDarkMode: (isDark: boolean) => void;
}

const App: React.FC<AppProps> = () => {
	const [activeSection, setActiveSection] = useState("{ raju }");

	return (
		<ThemeToggle>
			{({ toggleTheme, isDarkMode, setIsDarkMode }) => (
				<Home
					render={() => (
						<Header
							activeSection={activeSection}
							onSectionChange={setActiveSection}
							toggleTheme={toggleTheme}
							isDarkMode={isDarkMode}
							setIsDarkMode={setIsDarkMode}
						/>
					)}
				/>
			)}
		</ThemeToggle>
	);
};

export default App;
