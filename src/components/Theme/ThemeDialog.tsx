import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";

interface ThemeDialogProps {
	open: boolean;
	onClose: () => void;
	onThemeChoice: (choice: "light" | "dark") => void;
	rememberPreference: boolean;
	setRememberPreference: (remember: boolean) => void;
}

export const ThemeDialog: React.FC<ThemeDialogProps> = ({
	open,
	onClose,
	onThemeChoice,
	rememberPreference,
	setRememberPreference,
}) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Choose Your Preferred Theme</DialogTitle>
			<DialogContent>
				<FormControlLabel
					control={
						<Checkbox
							checked={rememberPreference}
							onChange={e => setRememberPreference(e.target.checked)}
						/>
					}
					label="Remember my preference"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => onThemeChoice("light")}>Light Mode</Button>
				<Button onClick={() => onThemeChoice("dark")}>Dark Mode</Button>
			</DialogActions>
		</Dialog>
	);
};
