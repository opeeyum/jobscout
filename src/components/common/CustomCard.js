import {
	ArrowForwardOutlined,
	Info,
	WatchLater,
	Work,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Card,
	CardContent,
	IconButton,
	Typography,
} from "@mui/material";
import React from "react";
import OutlinedButton from "./OutlinedButton";
import CircularImage from "./CircularImage";

export default function CustomCard() {
	const handleClick = () => {
		console.log("click");
	};
	return (
		<>
			<Card
				sx={{
					maxWidth: 480,
					// minHeight:250,
					marginBottom: 2,
				}}
				onClick={() => handleClick()}
			>
				<CardContent>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							mb: 2,
						}}
					>
						<Box>
							<img
								width="70"
								height="70"
								style={{
									objectFit: "contain",
									border: "1px solid #808080",
									borderRadius: "10px",
								}}
								alt="Business Operations Analyst / jobs"
								src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6479f3e6e0f92_Screenshot_2023-01-04_at_2.00.35_PM.png?d=110x110"
							/>
						</Box>

						<Box>
							<OutlinedButton
								sx={{
									mr: 1,
								}}
							>
								View Detail
							</OutlinedButton>
							<OutlinedButton>Apply Now</OutlinedButton>
						</Box>
					</Box>

					<Box
						sx={{
							ml: 0.3,
							mb: 2,
						}}
					>
						<Typography variant="body2" color="text.secondary">
							Albert Lia
						</Typography>
						<Typography>Albert Lia</Typography>
						<Typography variant="body2" color="text.secondary">
							Albert Lia
						</Typography>
						<Typography variant="body2" color="text.secondary">
							<b>Skills : </b>
							Albert Lia
						</Typography>
					</Box>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{
								display: "flex",
							}}
						>
							<span
								style={{
									marginRight: "4px",
								}}
							>
								<WatchLater fontSize="small" />
							</span>
							Albert Lia
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{
								display: "flex",
							}}
						>
							<span
								style={{
									marginRight: "4px",
								}}
							>
								<Info fontSize="small" />
							</span>
							Albert Lia
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{
								display: "flex",
							}}
						>
							<span
								style={{
									marginRight: "4px",
								}}
							>
								<Work fontSize="small" />
							</span>
							Albert Lia
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</>
	);
}
