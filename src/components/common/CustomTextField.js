import { InputLabel, styled, TextField } from "@mui/material";
import React from "react";

const StyledContainer = styled("div")(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-evenly",
	maxWidth: "600px",
	height: "100%",
	width: "100%",
	margin: "auto",
	marginTop: "24px",
}));

const StyledLabel = styled(InputLabel)(({ theme }) => ({
	color: theme.palette.text.primary,
	margin: theme.spacing(1),
	marginLeft: 0,
	marginBottom: "8px",
	fontSize: "16px",
	// fontWeight: 600,
	lineHeight: "17px",
	// letterSpacing: "-3%",
}));
const CustomTextField = ({
	title,
	required,
	containerStyles,
	value,
	onChange,
	inputStyles,
	labelStyles,
	inputRef,
	borderRadius,
	...props
}) => {
	return (
		<StyledContainer style={containerStyles}>
			{title && (
				<StyledLabel sx={labelStyles} required={required}>
					{title}
				</StyledLabel>
			)}
			<TextField
				ref={inputRef}
				inputProps={{
					sx: {
						paddingTop: "15px",
						paddingBottom: "14px",
						borderRadius: "8px",
						fontWeight: 500,
						fontSize: "16px",
						// height:"26px"
						...inputStyles,
					},
				}}
				sx={{
					"& .MuiOutlinedInput-root": {
						borderRadius: "8px",
					},
				}}
				fullWidth
				variant="outlined"
				value={value}
				onChange={onChange}
				placeholder={`Enter ${title}`}
				{...props}
			/>
		</StyledContainer>
	);
};

export default CustomTextField;
