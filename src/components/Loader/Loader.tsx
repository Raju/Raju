import Typography from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/Typography";
import React from "react";

const Loader = () => {
	return (
		<Stack
			justifyContent="center"
			alignItems="center"
			sx={{
				height: "100vh",
			}}
		>
			<CircularProgress />
			<Typography>Loading...</Typography>
		</Stack>
	);
};

export default Loader;
