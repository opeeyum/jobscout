import React, { useContext, useEffect, useState } from "react";
import BodyHeaderSection from "./BodyHeaderSection";
import CardSection from "./CardSection";
import FilterSection from "./FilterSection";
import { Box, Container } from "@mui/material";
import FilterContext from "../../contexts/FilterContext";
import SubFilterContext from "../../contexts/SubFilterContext";
import makeApiCall from "../../../utils/makeApiCall";
import { applyFilter } from "../../filters/applyFilters";

export default function BodySection() {
	const {filters, setFilters} = useContext(FilterContext);
	const {subFilters, setSubFilters} = useContext(SubFilterContext);
	const [loading, setLoading] = useState(false);
  	const [allJobs, setAllJobs] = useState([]);

	async function getAllJobsData() {
		try {
			setLoading(true);
			const payLoad = applyFilter({filters, subFilters});
			const resp = await makeApiCall('POST', '/data/v1/1', payLoad);
			setAllJobs(resp.data);
			setLoading(false);
		} catch (error) {
			console.log("Error fetching jobs data:", error);
		}
	};
	useEffect(() => {getAllJobsData()}, []);
	useEffect(() => {getAllJobsData()}, [subFilters]);
	return (
		<div>
			<BodyHeaderSection {...{filters, setFilters, getAllJobsData}}/>

			<Container
				maxWidth="md"
				sx={{
					display: "flex",
				}}
			>
				<Box
					sx={{
						width: "40%",
						position: "sticky",
						top: 110,
						maxHeight: "80vh",
						// overflowY: "scroll",
						zIndex: 999,
						marginRight: 10,
					}}
				>
					<FilterSection {...{subFilters, setSubFilters}}/>
				</Box>
				<Box sx={{ width: "60%" }}>
					<CardSection {...{loading, allJobs}}/>
				</Box>
			</Container>
		</div>
	);
}
