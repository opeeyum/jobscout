import { CorporateFare, LocationOnTwoTone } from "@mui/icons-material";
import { Box, Typography, useScrollTrigger } from "@mui/material";
import React, { useEffect, useState } from "react";
import OutlinedButton from "../../common/OutlinedButton";

export default function JobDetailHeaderSection({
	src,
	title,
	companyName,
	locations,
	href,
}) {
	const handleApplyNow = () => {
		const link = href;
		window.open(link, "_blank");
	};

// 	const [hasShadow, setHasShadow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;

//       if (scrollTop > 100) {
//         setHasShadow(true);
//       } else {
//         setHasShadow(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
	return (
		<>
			<Box
				sx={{
					display: "flex",
					p: 2,
					// boxShadow: hasShadow
					// 	? "0px 2px 4px rgba(0, 0, 0, 0.1)"
					// 	: "none",
				}}
			>
				<img
					width="110"
					height="110"
					style={{
						objectFit: "contain",
						border: "1px solid #808080",
						borderRadius: "10px",
					}}
					alt="Business Operations Analyst / jobs"
					src={src}
					// src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6479f3e6e0f92_Screenshot_2023-01-04_at_2.00.35_PM.png?d=110x110"
				/>
				<Box
					sx={{
						display: "flex",
						flex: 1,
						flexDirection: "column",

						// alignItems: "center",
						justifyContent: "center",
						ml: 4,
					}}
				>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 600,
						}}
					>
						{" "}
						{/* Business Operations Analyst{" "} */}
						{title}
					</Typography>
					<Typography
						sx={{
							display: "flex",

							alignItems: "center",
						}}
					>
						<CorporateFare
							style={{
								marginRight: "8px",
							}}
						/>
						<a
							href="https://www.google.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							{companyName}
						</a>
					</Typography>
					<Typography
						sx={{
							display: "flex",

							alignItems: "center",
						}}
					>
						<LocationOnTwoTone
							style={{
								marginRight: "8px",
							}}
						/>
						{locations}
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",

						alignItems: "center",
					}}
				>
					<OutlinedButton onClick={() => handleApplyNow()}>
						Apply Now
					</OutlinedButton>
				</Box>
			</Box>
		</>
	);
}
