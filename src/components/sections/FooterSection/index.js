import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import BasicSection from "./BasicSection";
import NewsLetterSection from "./NewsLetterSection";

export default function FooterSection() {
	const maxWidth = useMediaQuery("(max-width:650px)")

	const desktopStyles={
		backgroundColor: "#1B222C",
					display: "flex",
					p: 2,
                    pb:4,
					mt:12
		
		
	   }
	
	   const responsiveStyles={
		backgroundColor: "#1B222C",
		display:"flex",
		flexDirection:"column",
		pb:4,
					mt:16
		// justifyContent:"center",
		// alignItems:"center",
		
	   }

	   const basicSectionDesktopStyles ={
		width: "50%",
	   }
	   const basicSectionMobileStyles ={
		width: "100%",
	   }


	return (
		<>

			<Box
				// sx={{
				// 	backgroundColor: "#1B222C",
				// 	display: "flex",
				// 	p: 2,
                //     pb:4,
				// 	mt:12
                 
				// }}
				sx={
					maxWidth?responsiveStyles:desktopStyles
				}
			>
                
				<Box
					// sx={{
					// 	// border: "1px solid white",
					// 	width: "50%",

						
					// }}
					sx={
						maxWidth?basicSectionMobileStyles:basicSectionDesktopStyles
					}

				>
					<BasicSection />
				</Box>
				<Box
					// sx={{
					// 	// border: "1px solid yellow",
					// 	width: "50%",
					// }}
					sx={
						maxWidth?basicSectionMobileStyles:basicSectionDesktopStyles
					}
				>
					<NewsLetterSection />
				</Box>
			</Box>
		</>
	);
}
