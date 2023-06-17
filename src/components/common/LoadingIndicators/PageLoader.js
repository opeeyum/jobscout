import React from "react";
import Lottie from "lottie-react";
import LoadingSpinner from "../LoadingIndicators/LoadingSpinner.json";
import { Box } from "@mui/material";

const PageLoader = ({ spinnerStyles = {} }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        ...spinnerStyles,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Lottie
          animationData={LoadingSpinner}
          style={{ width: "250px", height: "250px" }}
        />
      </Box>
    </Box>
  );
};

export default PageLoader;
