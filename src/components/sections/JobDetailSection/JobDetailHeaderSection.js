import { CorporateFare, LocationOnTwoTone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import OutlinedButton from "../../common/OutlinedButton";

export default function JobDetailHeaderSection() {
	return (
		<>
			<Box
				sx={{
					// backgroundColor: "#F6F8FA",
					// border: "1px solid red",
					display: "flex",
					p: 2,
				}}
			>
				<img
					width="110"
					height="110"
					style={{
						objectFit: "contain",
						border: "1px solid #808080",
						borderRadius: "10px",
					}}
					alt="Business Operations Analyst / jobs"
					src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6479f3e6e0f92_Screenshot_2023-01-04_at_2.00.35_PM.png?d=110x110"
				/>
				<Box
					sx={{
						display: "flex",
						flex: 1,
						flexDirection: "column",

						// alignItems: "center",
						justifyContent: "center",
						ml: 4,
					}}
				>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 600,
						}}
					>
						{" "}
						Business Operations Analyst{" "}
					</Typography>
					<Typography
						sx={{
							display: "flex",

							alignItems: "center",
						}}
					>
						<CorporateFare
							style={{
								marginRight: "8px",
							}}
						/>
						<a
							href="https://www.google.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Open Google
						</a>
					</Typography>
					<Typography
						sx={{
							display: "flex",

							alignItems: "center",
						}}
					>
						<LocationOnTwoTone
							style={{
								marginRight: "8px",
							}}
						/>
						Banglore
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",

						alignItems: "center",
					}}
				>
					<OutlinedButton>Apply Now</OutlinedButton>
				</Box>
			</Box>
		</>
	);
}
