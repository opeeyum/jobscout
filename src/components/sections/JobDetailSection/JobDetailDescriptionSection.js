import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function JobDetailDescriptionSection({ description }) {
	return (
		<>
			<Box
				sx={{
					// display: "flex",
					p: 2,
				}}
			>
				<Typography
					sx={{
						fontSize: "22px",
						fontWeight: 600,
					}}
				>
					Job Description{" "}
				</Typography>

				<Box
					sx={{
						mt: 1.5,
					}}
				>
					{/* <Typography
						sx={{
							mb: 1,

							fontSize: "18px",
							fontWeight: 600,
						}}
					>
						Responsibilities of the Candidate:
					</Typography> */}
					<Typography sx={{
						mb:1
					}}>
						<div
							className="description"
							dangerouslySetInnerHTML={{ __html: description }}
						></div>
					</Typography>
				</Box>
				
			</Box>
		</>
	);
}
