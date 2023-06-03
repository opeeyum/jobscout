import { Container, Grid } from "@mui/material";
import React from "react";
import CustomCard from "../../common/CustomCard";

export default function CardSection() {
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<CustomCard />
				</Grid>
				<Grid item xs={12}>
					<CustomCard />
				</Grid>
				<Grid item xs={12}>
					<CustomCard />
				</Grid>
				<Grid item xs={12}>
					<CustomCard />
				</Grid>
			</Grid>
		</>
	);
}
