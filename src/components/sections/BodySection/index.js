import React, { useCallback, useContext, useEffect, useState } from "react";
import BodyHeaderSection from "./BodyHeaderSection";
import CardSection from "./CardSection";
import FilterSection from "./FilterSection";
import { Box, Container, useMediaQuery } from "@mui/material";
import FilterContext from "../../contexts/FilterContext";
import SubFilterContext from "../../contexts/SubFilterContext";
import makeApiCall from "../../../utils/makeApiCall";
import { applyFilter } from "../../filters/applyFilters";

export default function BodySection() {
	const {filters, setFilters} = useContext(FilterContext);
	const {subFilters, setSubFilters} = useContext(SubFilterContext);
	const [loading, setLoading] = useState(false);
	const [allJobs, setAllJobs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [jobCount, setJobCount] = useState(1000);
	const [itemsPerPage] = useState(10);

	// Change page
	const handlePageChange = (event, value) => {
		setCurrentPage(value);
		const skip = (value - 1) * itemsPerPage;
		getAllJobsData(skip, itemsPerPage);
	};

	async function getAllJobsData(skip, itemsPerPage) {
		try {
			setLoading(true);
			const payLoad = applyFilter({filters, subFilters});
			const resp = await makeApiCall('POST', `/data/v1?offset=${skip}&count=${itemsPerPage}`, payLoad);
			setAllJobs(resp?.data?.data || []);
			setJobCount(resp?.data?.totalCount || 0);
			setLoading(false);
		} catch (error) {
			console.log("Error fetching jobs data:", error);
		}
	};

	const onApplyFilterHandler = () => {
		setCurrentPage(1);
		getAllJobsData(0, itemsPerPage);
	}

	useEffect(() => {
		getAllJobsData(0, itemsPerPage);
	}, []);

	useEffect(() => {
		onApplyFilterHandler();
	}, [subFilters]);

	const maxWidth = useMediaQuery("(max-width:650px)")

	return (
		<div>
			<BodyHeaderSection {...{filters, setFilters, onApplyFilterHandler}}/>

			<Container
				maxWidth="md"
				sx={{
					display: "flex",
				}}
			>
				{
					!maxWidth && <Box
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
				}
				
				<Box sx={{ width: "60%" }}>
					<CardSection {...{loading, allJobs, handlePageChange, currentPage, itemsPerPage, jobCount}}/>
				</Box>
			</Container>
		</div>
	);
}
