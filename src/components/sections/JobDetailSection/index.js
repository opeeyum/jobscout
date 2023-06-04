import React, { useEffect, useState } from "react";
import JobDetailHeaderSection from "./JobDetailHeaderSection";
import { Box, Container } from "@mui/material";
import JobDetailDescriptionSection from "./JobDetailDescriptionSection";
import AdditionalInfoSection from "./AdditionalInfoSection";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function JobDetailSection() {
	let { jobId } = useParams();
	console.log(jobId);

	const apiUrl = "http://localhost";
	const [loading, setLoading] = useState(true);
	const [allJobs, setAllJobs] = useState([]);

	// http://localhost/data/jobDetail/3600839407
	useEffect(() => {
		(async function getAllJobsData() {
			const resp = await axios.get(`${apiUrl}/data/jobDetail/${jobId}`);
			setAllJobs(resp.data);
			console.log(resp.data);

			setLoading(false);
		})();
	}, []);

	console.log(allJobs, "detail page data");

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
						// position: "sticky",
						// top: "62.5px",
					}}
				>
					<JobDetailHeaderSection
						src={allJobs?.value?.logoUrl}
						title={allJobs?.value?.title}
						companyName={allJobs?.value?.companyName}
						locations={allJobs?.value?.locations}
						href={allJobs?.value?.applyLink}
					/>
				</Container>
				<Container
					maxWidth="md"
					sx={{
						// border: "1px solid blue",
						borderRadius: "5px",
						backgroundColor: "white",
						mb: 2,
					}}
				>
					<JobDetailDescriptionSection description={allJobs?.value?.description}/>
				</Container>
				<Container
					maxWidth="md"
					sx={{
						// border: "1px solid blue",
						borderRadius: "5px",
						backgroundColor: "white",
					}}
				>
					<AdditionalInfoSection />
				</Container>
			</Box>
		</>
	);
}
