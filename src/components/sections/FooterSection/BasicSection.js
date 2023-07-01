import { Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import Logo from "../../common/Icons/Logo";
import { LinkedIn, MailOutline } from "@mui/icons-material";

export default function BasicSection() {
	const email = "xyz@gmail.com";
	return (
		<>
			<Box
				sx={{
					p: 1,
				}}
			>
				<Logo />
				<Typography
					sx={{
						ml: 2,
						mt: 2,
                        color: "#F6F1E9",
					}}
				>
					Unlock Your Dream Career with JobScout: Your Ultimate Job
					Search Companion!
				</Typography>
				<Divider
					style={{  marginTop: "16px" }}
				/>
				<Box
					sx={{
						ml: 2,
						mt: 2,
						color: "#F6F1E9",
					}}
				>
					<Typography
						sx={{
							fontSize: "24px",
							fontWeight: 600,
							mb: 1,
						}}
					>
						Stay Connected
					</Typography>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						
							<IconButton sx={{
								color:"white",
								ml:-1
							}}
					onClick={() => {
						window.open(
							"https://mail.google.com/mail/?view=cm&fs=1&to=support@jobscout.work",
						);
					}}
				><MailOutline
				sx={{
					mr: 1,
				}}
			/><Typography sx={{
				fontSize:"16px"
			}}>
				support@jobscout.work
				</Typography></IconButton>
							
					</Box>
				</Box>
			</Box>
		</>
	);
}
