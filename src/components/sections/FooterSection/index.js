import { Box } from "@mui/material";
import React from "react";
import BasicSection from "./BasicSection";
import NewsLetterSection from "./NewsLetterSection";

export default function FooterSection() {
	return (
		<>

			<Box
				sx={{
					backgroundColor: "#1B222C",
					display: "flex",
					p: 2,
                    pb:4
                 
				}}
			>
                
				<Box
					sx={{
						// border: "1px solid white",
						width: "50%",
					}}
				>
					<BasicSection />
				</Box>
				<Box
					sx={{
						// border: "1px solid yellow",
						width: "50%",
					}}
				>
					<NewsLetterSection />
				</Box>
			</Box>
		</>
	);
}
