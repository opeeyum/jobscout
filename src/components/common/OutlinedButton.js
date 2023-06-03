import { Button, styled } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)(({ theme, ...props }) => ({
  textTransform: "initial",
  paddingRight: "16px",
  paddingLeft: "16px",
  height: "32px",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "19px",
  background: "white",

  borderRadius: "5px",
  color: "#808000",

  border: "1px solid",
  borderColor: "#808000",

  "&:hover": {
    background: "white",
    borderColor: "#808000",
  },
}));

const OutlinedButton = ({ children, ...props }) => {
  return (
    <StyledButton
      // variant="outlined"
      sx={{
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default OutlinedButton;
