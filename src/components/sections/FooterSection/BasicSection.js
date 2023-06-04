import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Logo from "../../common/Icons/Logo";
import { LinkedIn, MailOutline } from "@mui/icons-material";

export default function BasicSection() {
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
						<Typography
							sx={{
								display: "flex",
								alignItems: "center",
								mr: 4,
							}}
						>
							<MailOutline
								sx={{
									mr: 1,
								}}
							/>
							xyz@gmail.com
						</Typography>
						<Typography
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<LinkedIn
								sx={{
									mr: 1,
								}}
							/>
							xyz@gmail.com
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
}
