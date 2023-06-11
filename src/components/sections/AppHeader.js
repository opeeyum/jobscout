import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";

import Logo from "../common/Icons/Logo";
import { Login } from "@mui/icons-material";

function AppHeader() {
	return (
		<>
			<AppBar position="sticky" sx={{ backgroundColor: "#537188" }}>
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
							justifyContent: "flex-end",

							alignItems: "center",
						}}
					>
						<Button
							variant="contained"
							sx={{
								backgroundColor: "#DDE6ED",
								color: "#000",
								textTransform: "capitalize",
								transition: "background-color 0.5s ease",
								"&:hover": {
									backgroundColor: "#abc1d3",
								},
							}}
							endIcon={<Login />}
						>
							Login
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default AppHeader;
