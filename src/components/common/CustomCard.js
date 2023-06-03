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
						<Avatar>
							{/* <img src={jobData.logoUrl} alt="company logo" /> */}
							R
						</Avatar>
						{/* <CircularImage src="path/to/image.jpg" alt="Example" /> */}

						{/* <IconButton aria-label="settings">
							<ArrowForwardOutlined
								onClick={() => handleClick()}
							/>
						</IconButton> */}
						<OutlinedButton>View Detail</OutlinedButton>
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
