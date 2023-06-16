import { Box, Typography } from "@mui/material";
import React from "react";
import BaseCard from "../../common/BaseCard";

export default function AuthLayout({ headingTitle, children }) {
	return (
		<Box sx={{}}>
			{" "}
			{/* <Container> */}
			<Box
				sx={{
					display: "flex",
					height: "100vh",
					maxHeight: "100vh",
					overflow: "hidden",
				}}
			>
				<Box
					sx={{
						width: "40%",
						height: "100vh",
						// display: "grid",
						// placeItems: "center",
						display: "flex",
						alignItems: "center",
						flexDirection: "column",

						position: "relative",

						background:
							" #1B222C",
					}}
				>
					rgedrtgr
				</Box>

				<Box
					sx={{
						width: "60%",
						height: "100vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<BaseCard
						sx={{
							// padding: "32px",
							// borderRadius: "32px",
							minWidth: "500px",
                            boxShadow:"none"
							// minHeight: "400px",
						}}
					>
						{/* <Typography
							sx={{
								// marginBottom: "8px",
								fontSize: "32px",
								color: (theme) => theme.palette.text.auth,
							}}
						>
							{headingTitle || "Login"}{" "}
						</Typography> */}
						<Box>{children}</Box>
					</BaseCard>
				</Box>
			</Box>
			{/* </Container> */}
		</Box>
	);
}
