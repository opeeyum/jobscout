import { Circle, PlayCircleFilledTwoTone } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import OutlinedButton from "../../common/OutlinedButton";

export default function CompanyInfoSection() {
	return (
		<>
			<Box
				sx={{
					backgroundColor: "#F6F8FA",
					// p: 2,
				}}
			>
				<Container
					maxWidth="md"
					sx={{
						border: "1px solid red",
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
							height="180"
							style={{
								objectFit: "contain",
								border: "1px solid #808080",
								borderRadius: "5px",
								position: "relative",
								top: 0,
								left: 0,
							}}
							alt="Business Operations Analyst / jobs"
							// src={src}
							src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6479f3e6e0f92_Screenshot_2023-01-04_at_2.00.35_PM.png?d=110x110"
						/>
						<img
							width="110"
							height="110"
							style={{
								objectFit: "contain",
								border: "1px solid #808080",
								// borderRadius: "10px",
								position: "absolute",
								top: 120,
								left: 26,
								// bottom: 0,
							}}
							alt="Business Operations Analyst / jobs"
							// src={src}
							src="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/6479f3e6e0f92_Screenshot_2023-01-04_at_2.00.35_PM.png?d=110x110"
						/>
					</Box>
					<Box
						sx={{
							mt: 8,
							ml: 3,
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Box>
							<Typography
								sx={{
									fontSize: "32px",
									fontWeight: "semi-bold",
									lineHeight: "38px",
								}}
							>
								Paytm
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
									Financial Sevices
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
									Noida, UttarPradesh
								</Typography>
							</Box>
						</Box>
						<Box>
							<OutlinedButton
								sx={{
									borderRadius: "20px",
								}}
							>
								Visit Website
							</OutlinedButton>
						</Box>
					</Box>
				</Container>
				<Container
					maxWidth="md"
					sx={{
						border: "1px solid red",

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
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Neque dolorum consectetur quas animi molestiae explicabo
						ea perferendis sit praesentium. Delectus facere at
						fugiat nam eum necessitatibus id fugit? Sapiente sunt
						quas laudantium eum vero excepturi ex, quos iure
						perspiciatis pariatur possimus a accusamus. Hic totam
						alias tenetur quos veniam reprehenderit praesentium
						asperiores cumque exercitationem, earum, sint ipsam nemo
						fugit. Rerum temporibus nisi vitae dolor deleniti. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Eum
						corrupti earum ipsa animi itaque eaque consectetur!
						Doloribus nihil quo earum consequatur, officia eum a
						fugiat itaque hic iure voluptatem, nam culpa vitae
						debitis repudiandae ad soluta, ratione fuga dolorem
						voluptatibus illo nulla obcaecati possimus vero! Cum ad
						assumenda facere obcaecati molestias nihil impedit aut
						ipsa! Harum quo libero adipisci sunt architecto quos
						unde assumenda iusto?
					</Typography>
				</Container>
			</Box>
		</>
	);
}
