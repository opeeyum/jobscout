import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import CustomTextField from "../../common/CustomTextField";
import { Send } from "@mui/icons-material";
import OutlinedButton from "../../common/OutlinedButton";

export default function NewsLetterSection() {
	return (
		<>
			<Box
				sx={{
					p: 1,
					color: "#F6F1E9",
					ml: 4,
				}}
			>
				<Typography
					sx={{
						fontSize: "24px",
						fontWeight: 600,
						mb: 2,
                       
					}}
				>
					Stay Updated
				</Typography>
				<Typography>
					We'll send you updates on the latest opportunities to
					showcase your talent and get hired and rewarded regularly.
				</Typography>

				<OutlinedButton
					sx={{
						color: "black",
						p: 3,
						fontSize: "16px",
						mt: 3,
					}}
					endIcon={<Send sx={{
                        ml:2
                    }} />}
				>
					Sign Up for our newsletter
				</OutlinedButton>
			</Box>
		</>
	);
}
