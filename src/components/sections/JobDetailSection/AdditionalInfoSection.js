import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import JobTiming from "../../common/Icons/JobTiming";
import SalaryIcon from "../../common/Icons/SalaryIcon";
import WorkDetailIcon from "../../common/Icons/WorkDetailIcon";
import LocationIcon from "../../common/Icons/LocationIcon";
import BaseCard from "../../common/BaseCard";

export default function AdditionalInfoSection() {
	const cardsData = [
		{
			title: "Job Location(s)",
			description: "Bangalore",
			icon: <LocationIcon />,
		},
		{
			title: "Salary",
			description: "Salary : Not Disclosed",
			icon: <SalaryIcon />,
		},
		{
			title: "Work Detail",
			description: "Working Days: 5 Days",
			icon: <WorkDetailIcon />,
		},
		{
			title: "Job Type",
			description: "Job Type: On Field",
			icon: <JobTiming />,
		},
	];

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
					Additional Information
				</Typography>
				<Box
					sx={{
						mt: 1.5,
					}}
				>
					<Grid container spacing={2}>
						{cardsData.map((card, index) => (
							<Grid item xs={6} key={index}>
								<BaseCard
									sx={{
										borderRadius: "10px",
									}}
								>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",

											height: "120px",
											flexDirection: "row",

											pl: 2,

											backgroundColor: "#F5F5F5",
										}}
									>
										<Box
											sx={{
												display: "flex",

												flexDirection: "column",
											}}
										>
											<Typography
												sx={{
													fontSize: "18px",
													fontWeight: "600",
												}}
											>
												{card.title}
											</Typography>
											<Typography
												sx={{
													fontSize: "18px",
													// fontWeight: "700",
													paddingTop: "2px",
												}}
											>
												{card.description}
											</Typography>
										</Box>
										<Box
											sx={{
												display: "flex",
												mr: 2,
											}}
										>
											{card.icon}
										</Box>
									</Box>
								</BaseCard>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</>
	);
}
