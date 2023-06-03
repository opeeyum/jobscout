import React from "react";
import BodyHeaderSection from "./BodyHeaderSection";
import CardSection from "./CardSection";
import FilterSection from "./FilterSection";
import { Box, Container } from "@mui/material";

export default function BodySection() {
	return (
		<div>
			<BodyHeaderSection />
			<Container
				maxWidth="md"
				sx={{
					// border: "1px solid red",
					display: "flex",
				}}
			>
				<Box
					sx={{
						width: "40%",
					}}
				>
					<FilterSection />
				</Box>
				<Box
					sx={{
						width: "60%",
						ml:10
					}}
				>
					
					<CardSection />
				</Box>
			</Container>
		</div>
	);
}
