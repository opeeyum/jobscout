import { Container, Grid, Pagination } from "@mui/material";
import React, { useState } from "react";
import CustomCard from "../../common/CustomCard";
import PageLoader from "../../common/LoadingIndicators/PageLoader";

export default function CardSection({loading, allJobs}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Calculate index of the first and last item to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = allJobs?.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      {loading && <PageLoader />}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {currentJobs?.map((e) => (
            <CustomCard key={e.key} jobData={e.value} />
          ))}
        </Grid>
        <Grid item xs={12} mt={2}>
          <Container maxWidth="sm" align="center">
            <Pagination
              count={Math.ceil(allJobs?.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
