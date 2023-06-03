import React from "react";
import JobDetailHeaderSection from "./JobDetailHeaderSection";
import { Box, Container } from "@mui/material";
import JobDetailDescriptionSection from "./JobDetailDescriptionSection";

export default function JobDetailSection() {
	return (
		<>
			<Box
				sx={{
					backgroundColor: "#F6F8FA",
					p: 2,
				}}
			>
				<Container
					maxWidth="md"
					sx={{
						// border: "1px solid blue",
						borderRadius: "5px",
						backgroundColor: "white",
						mb: 2,
						position: "sticky",
						top: "62.5px",
					}}
				>
					<JobDetailHeaderSection />
				</Container>
				<Container
					maxWidth="md"
					sx={{
						// border: "1px solid blue",
						borderRadius: "5px",
						backgroundColor: "white",
					}}
				>
					<JobDetailDescriptionSection />
				</Container>
			</Box>
		</>
	);
}
