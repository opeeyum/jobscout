import { Circle, PlayCircleFilledTwoTone } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OutlinedButton from "../../common/OutlinedButton";
import axios from "axios";
import PageLoader from "../../common/LoadingIndicators/PageLoader";
import SalaryTable from "../../common/SalaryTable";

export default function CompanyInfoSection() {
	let { companyHref } = useParams();
	console.log(companyHref);
	const apiUrl = "http://localhost";
	const [loading, setLoading] = useState(true);
	const [company, setCompany] = useState([]);

	
	useEffect(() => {
		(async function getAllJobsData() {
			const resp = await axios.get(
				`${apiUrl}/data/CompanyDetail/${companyHref}`,
			);
			setCompany(resp.data[0]);
			console.log(resp.data[0]);
			await new Promise((resolve) => setTimeout(resolve, 500));
			setLoading(false);
		})();
	}, []);

	// console.log(company?.linkedin?.bannerURl, "detail page data");

	const handleVisitWebsite = () => {
		const link = company?.value?.linkedin?.website;
		window.open(link, "_blank");
	};


const salaryData = company?.value?.ambitionBox?.salaryData || [];
	// console.log(salaryData)
	

	return (
		<>
			{loading ? (
				<PageLoader />
			) : (
				<Box
					sx={{
						backgroundColor: "#F6F8FA",
						// p: 2,
					}}
				>
					<Container
						maxWidth="md"
						sx={{
							// border: "1px solid red",
							mb: 2,
							backgroundColor: "white",
							p: 2,
							borderRadius: "5px",
						}}
					>
						<Box
							sx={{
								position: "relative",
								// top: 0,
								// left: 0,
							}}
						>
							<img
								width="100%"
								height="160"
								style={{
									objectFit: "fit",
									// border: "4px solid #808080",
									borderRadius: "5px",
									position: "relative",
									top: 0,
									left: 0,
								}}
								alt="Business Operations Analyst / jobs"
								// src={src}
								src={
									company?.value?.linkedin?.bannerURl ||
									"https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6479f3e6e0f92_Screenshot_2023-01-04_at_2.00.35_PM.png?d=110x110"
								}
							/>
							<img
								width="110"
								height="110"
								style={{
									objectFit: "fit",
									border: "1px solid #808080",
									borderRadius: "5px",
									position: "absolute",
									top: 120,
									left: 26,
									// bottom: 0,
								}}
								alt="Business Operations Analyst / jobs"
								// src={src}
								src={
									company?.value?.linkedin?.logoUrl ||
									company?.value?.crawlerData?.logoUrl ||
									"https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6479f3e6e0f92_Screenshot_2023-01-04_at_2.00.35_PM.png?d=110x110"
								}
							/>
						</Box>
						<Box
							sx={{
								mt: 10,
								ml: 3,
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Box
								sx={{
									width: "82%",
								}}
							>
								<Typography
									sx={{
										fontSize: "32px",
										fontWeight: "semi-bold",
										lineHeight: "38px",
									}}
								>
									{company?.value?.linkedin?.nameText ||
										company?.value?.crawlerData
											?.companyName}
								</Typography>
								<Box
									sx={{
										display: "flex",
									}}
								>
									<Typography
										variant="body1"
										color="text.secondary"
									>
										{company?.value?.linkedin?.sectorText ||
											company?.value?.crawlerData
												?.industry}
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										sx={{
											ml: 2,
											display: "flex",
											alignItems: "center",
										}}
									>
										<Circle
											sx={{
												width: "6px",
												mr: 1,
												height: "6px",
											}}
										/>{" "}
										{company?.value?.linkedin
											?.companySizeText ||
											company?.value?.crawlerData
												?.location}
									</Typography>
								</Box>
								<Typography
									sx={{
										mt: 2,
									}}
									variant="body1"
									color="text.secondary"
								>
									{company?.value?.linkedin?.addressText ||
										company?.value?.crawlerData?.location}
								</Typography>
							</Box>
							<Box
								sx={{
									width: "18%",
								}}
							>
								<OutlinedButton
									sx={{
										borderRadius: "20px",
									}}
									onClick={() => handleVisitWebsite()}
								>
									Visit Website
								</OutlinedButton>
							</Box>
						</Box>
					</Container>
					<Container
						maxWidth="md"
						sx={{
							// border: "1px solid red",

							backgroundColor: "white",
							p: 2,
							borderRadius: "5px",
						}}
					>
						<Typography
							sx={{
								fontSize: "24px",
								fontWeight: "semi-bold",
							}}
						>
							About
						</Typography>
						<Typography sx={{ mt: 1 }}>
							{company?.value?.linkedin?.aboutText}
						</Typography>
					</Container>
					<Container
						maxWidth="md"
						sx={{
							// border: "1px solid red",

							backgroundColor: "white",
							 p: 2,
							borderRadius: "5px",
							mt:4,
						}}
					>
						<SalaryTable salaryData={salaryData} />
					</Container>
				</Box>
			)}
		</>
	);
}
