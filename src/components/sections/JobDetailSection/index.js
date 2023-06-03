import React from "react";
import JobDetailHeaderSection from "./JobDetailHeaderSection";
import { Box, Container } from "@mui/material";

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
						borderRadius: "10px",
						backgroundColor: "white",
					}}
				>
					<JobDetailHeaderSection />
				</Container>
			</Box>
		</>
	);
}
