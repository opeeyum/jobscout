import { Circle, PlayCircleFilledTwoTone } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OutlinedButton from "../../common/OutlinedButton";
import PageLoader from "../../common/LoadingIndicators/PageLoader";
import SalaryTable from "../../common/SalaryTable";
import makeApiCall from "../../../utils/makeApiCall";

export default function CompanyInfoSection() {
	let { companyHref } = useParams();
	console.log(companyHref);
	const [loading, setLoading] = useState(true);
	const [company, setCompany] = useState([]);

	
	useEffect(() => {
		(async function getAllJobsData() {
			const resp = await makeApiCall('GET',`/data/CompanyDetail/${companyHref}`);
			setCompany(resp.data[0]);
			console.log(resp.data[0]);
			await new Promise((resolve) => setTimeout(resolve, 500));
			setLoading(false);
		})();
	}, []);

	// console.log(company?.linkedin?.bannerURl, "detail page data");

	const handleVisitWebsite = () => {
		const link = company?.value?.jsonData?.aboutSectionViewModel?.aboutCompany?.websiteUrl?.url || company?.value?.jsonData?.value?.linkedin?.website;
		window.open(link, "_blank");
	};


const salaryData = company?.value?.ambitionBox?.salaryData || company?.value?.value?.ambitionBox?.salaryData || [];
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
									company?.value?.jsonData?.companyPageHeader?.headerImage?.headerImageUrl || company?.value?.value?.linkedin?.bannerURl ||
									"/Image_not_available.png"
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
									company?.value?.jsonData?.companyPageHeader?.logoUrl || company?.value?.value?.linkedin?.logoUrl ||
									company?.value?.crawlerData?.logoUrl ||
									"/no-img.png"
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
									{company?.value?.jsonData?.companyName || company?.value?.value?.linkedin?.nameText ||
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
										{company?.value?.jsonData?.aboutSectionViewModel?.aboutCompany?.sectorNames[0] || company?.value?.value?.linkedin?.sectorText ||
											company?.value?.crawlerData
												?.industry}
									</Typography>
									{
										company?.value?.linkedin
										?.companySizeText && 
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
											?.companySizeText  || company?.value?.value?.linkedin
											?.companySizeText ||
											company?.value?.crawlerData
												?.location}
									</Typography>
									}
									
								</Box>
								<Typography
									sx={{
										mt: 2,
									}}
									variant="body1"
									color="text.secondary"
								>
									{company?.value?.jsonData?.aboutSectionViewModel?.aboutCompany?.headquartersLocation?.address || company?.value?.value?.linkedin?.addressText ||
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

					{
						company?.value?.linkedin?.aboutText  && 
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
							{company?.value?.jsonData?.aboutSectionViewModel?.aboutCompany?.description || company?.value?.value?.linkedin?.aboutText}
						</Typography>
					</Container>
					}
					{
						salaryData.length>1 && 
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
					}
					
				
				</Box>
			)}
		</>
	);
}
