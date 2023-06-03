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
import React from "react";
import CustomTextField from "../../common/CustomTextField";
import CustomSelectInput from "../../common/CustomSelectInput";

const FilterSection = () => {
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

				<CustomSelectInput title="Date Posted" />
				<CustomSelectInput title="Salary Estimate" />
				<CustomSelectInput title="Job Type" />
				<CustomTextField title="Company Name" />
			</Box>
		</>
	);
};

export default FilterSection;
