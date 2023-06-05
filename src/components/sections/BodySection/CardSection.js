import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCard from "../../common/CustomCard";
import axios from "axios";

export default function CardSection() {
	const apiUrl = 'http://13.126.41.77';
	const [loading, setLoading] = useState(true);
	const [allJobs, setAllJobs] = useState([]);

	useEffect(() => {
		(async function getAllJobsData() {
			const resp = await axios.get(`${apiUrl}/data/v1/1`);
			setAllJobs(resp.data);
			console.log(resp.data);

			setLoading(false);
		})();
	}, []);

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					{allJobs.map((e) => {
						return <CustomCard key={e.key} jobData={e.value} />;
					})}
				</Grid>
		
			</Grid>
		</>
	);
}
