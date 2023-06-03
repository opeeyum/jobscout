import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";

import Logo from "../common/Icons/Logo";

function AppHeader() {
	return (
		<>
			<AppBar position="sticky">
				<Toolbar>
					<Box
						sx={{
							flexGrow: 1,
						}}
					>
						<Logo />
					</Box>
					<Box
						sx={{
							display: "flex",
							maxWidth: "620px",
							width: "100%",
							justifyContent: "space-between",

							alignItems: "center",
						}}
					></Box>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default AppHeader;
