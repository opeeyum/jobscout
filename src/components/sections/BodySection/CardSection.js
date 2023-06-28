import { Container, Grid, Pagination } from "@mui/material";
import React  from "react";
import CustomCard from "../../common/CustomCard";
import PageLoader from "../../common/LoadingIndicators/PageLoader";

export default function CardSection({loading, allJobs, handlePageChange, currentPage, itemsPerPage, jobCount}) {


  return (
    <>
      {loading && <PageLoader />}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {allJobs?.map((e) => (
            <CustomCard key={e.key} jobData={e.value} />
          ))}
        </Grid>
        <Grid item xs={12} mt={2}>
          <Container maxWidth="sm" align="center">
            <Pagination
              count={Math.ceil(jobCount / itemsPerPage)}
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
