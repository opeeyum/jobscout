import {
	Box,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomTextField from "../../common/CustomTextField";
import CustomSelectInput from "../../common/CustomSelectInput";
import FilterSelect from "../../filters/filterSelect";

const FilterSection = ({subFilters, setSubFilters}) => {
	const updateCreatedDate = (e) => {
		setSubFilters(prev => {
			return {...prev, createdDate: e};
		});
	};
	const updateJobType = (e) => {
		setSubFilters(prev => {
			return {...prev, label: e};
		});
	};
	const updateCompanyName = (val) => {
		setSubFilters(prev => {
			return {...prev, companyName:val}
		});
	};
	const [createdDate, setCreatedDate] = useState(subFilters?.createdDate?.label);
	const [jobType, setJobType] = useState(subFilters?.label?.label);
	return (
		<>
			<Box
				sx={{
					// border:"1px solid red",
					marginRight: "16px",
				}}
			>
				<div>
					<Typography variant="body1" gutterBottom>
						Refine your search using the following filters:
					</Typography>
				</div>
				{/* Date Posted */}
				<CustomSelectInput
					title="Date Posted"
					options={[
						{ label: "Today", value: "0" },
						{ label: "3 Days Ago", value: "3" },
						{ label: "1 Week Ago", value: "7" },
					]}
					value = {createdDate}
					onChange = {e => updateCreatedDate(e)}
				/>
				{/* Job Type i.e Label */}
				<CustomSelectInput 
					title="Job Type" 
					options={[
						{ label: "Internship", value: "Internship" },
						{ label: "Entry Level", value: "Entry level" },
						{ label: "Associate", value: "Associate" },
						{ label: "Mid-Senior Level", value: "Mid-Senior level" },
						{ label: "Executive", value: "Executive" },
						{ label: "Director", value: "Director" },
					]}
					value = {jobType}
					onChange = {e => updateJobType(e)}
				/>
				{/* Company Name i.e Employer */}
				<FilterSelect {...{name:'companyName', title:'Company Name', updateCompanyName}} />
			</Box>
		</>
	);
};

export default FilterSection;
