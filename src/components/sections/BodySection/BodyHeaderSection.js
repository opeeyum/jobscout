import { Box, Button, TextField} from "@mui/material";
import React from "react";

export default function BodyHeaderSection({filters, setFilters, getAllJobsData}) {
	const updateWhatContext = (e) => {
		const val = e.target.value;
		setFilters(prev => {
			return {...prev, title:val, tags:val, companyName: val};
		})
	};
	const updateWhereContext = (e) => {
		const val = e.target.value;
		setFilters(prev => {
			return {...prev, locations: val};
		})
	};
	return (
		<>
			<Box display="flex" justifyContent="center" alignItems="center">
			
				<form
					onSubmit={(e) => e.preventDefault()}
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						marginTop: "24px",
						marginBottom:"24px"
					}}
				>
					<TextField
						id="text-input-what"
						label="What"
						placeholder="Job title, or Keywords"
						value={filters?.title}
						onChange={e => updateWhatContext(e)}
						variant="outlined"
						size="small"
						style={{
							marginBottom: "8px",
							width: "300px",
							marginRight: "18px",
						}}
						InputProps={{
							endAdornment: (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="20"
									fill="#767676"
									viewBox="0 0 21 20"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M11.4038 12.3048C10.7084 12.7451 9.88397 13 9 13c-2.48528 0-4.5-2.0147-4.5-4.5C4.5 6.01472 6.51472 4 9 4c2.4853 0 4.5 2.01472 4.5 4.5 0 .87711-.2509 1.6956-.6849 2.3876l3.5089 3.5089c.1952.1953.1952.5119 0 .7071l-.7071.7072c-.1953.1952-.5119.1952-.7071 0l-3.506-3.506zM11.5 8.5c0 1.38071-1.1193 2.5-2.5 2.5-1.38071 0-2.5-1.11929-2.5-2.5S7.61929 6 9 6c1.3807 0 2.5 1.11929 2.5 2.5z"
									></path>
								</svg>
							),
						}}
					/>
					{/* <TextField
						id="text-input-what"
						name="q"
						placeholder="Job title, keywords, or company"
						variant="outlined"
						fullWidth
						InputProps={{
							endAdornment: (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="20"
									fill="#767676"
									viewBox="0 0 21 20"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M11.4038 12.3048C10.7084 12.7451 9.88397 13 9 13c-2.48528 0-4.5-2.0147-4.5-4.5C4.5 6.01472 6.51472 4 9 4c2.4853 0 4.5 2.01472 4.5 4.5 0 .87711-.2509 1.6956-.6849 2.3876l3.5089 3.5089c.1952.1953.1952.5119 0 .7071l-.7071.7072c-.1953.1952-.5119.1952-.7071 0l-3.506-3.506zM11.5 8.5c0 1.38071-1.1193 2.5-2.5 2.5-1.38071 0-2.5-1.11929-2.5-2.5S7.61929 6 9 6c1.3807 0 2.5 1.11929 2.5 2.5z"
									></path>
								</svg>
							),
						}}
					/> */}
					<TextField
						id="text-input-where"
						label="Where"
						placeholder="City, state, or pin code"
						value={filters.locations}
						onChange={e => updateWhereContext(e)}
						variant="outlined"
						size="small"
						style={{
							marginBottom: "8px",
							width: "300px",
							marginRight: "18px",
						}}
						InputProps={{
							endAdornment: (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="20"
									fill="#767676"
									viewBox="0 0 21 20"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M11.4038 12.3048C10.7084 12.7451 9.88397 13 9 13c-2.48528 0-4.5-2.0147-4.5-4.5C4.5 6.01472 6.51472 4 9 4c2.4853 0 4.5 2.01472 4.5 4.5 0 .87711-.2509 1.6956-.6849 2.3876l3.5089 3.5089c.1952.1953.1952.5119 0 .7071l-.7071.7072c-.1953.1952-.5119.1952-.7071 0l-3.506-3.506zM11.5 8.5c0 1.38071-1.1193 2.5-2.5 2.5-1.38071 0-2.5-1.11929-2.5-2.5S7.61929 6 9 6c1.3807 0 2.5 1.11929 2.5 2.5z"
									></path>
								</svg>
							),
						}}
					/>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						sx={{
							marginBottom: "8px",
							ml: 2,
						}}
						onClick={() => getAllJobsData()}
					>
						Find jobs
					</Button>
				</form>
			</Box>
		</>
	);
}
