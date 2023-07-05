import React, { useEffect, useState } from "react";
import JobDetailHeaderSection from "./JobDetailHeaderSection";
import { Box, Container } from "@mui/material";
import JobDetailDescriptionSection from "./JobDetailDescriptionSection";
import AdditionalInfoSection from "./AdditionalInfoSection";
import { useParams } from "react-router-dom";
import PageLoader from "../../common/LoadingIndicators/PageLoader";
import makeApiCall from "../../../utils/makeApiCall";

export default function JobDetailSection() {
  let { jobId } = useParams();
  console.log(jobId);
  const [loading, setLoading] = useState(true);
  const [allJobs, setAllJobs] = useState(null);

  useEffect(() => {
    (async function getJobData() {
      const resp = await makeApiCall('GET', `/data/jobDetail/${jobId}`);
      setAllJobs(resp.data.value.finalData);
      console.log(resp.data);

      // Introduce a delay of 500 milliseconds (adjust as needed)
      await new Promise(resolve => setTimeout(resolve, 500));

      setLoading(false);
    })();
  }, []);

  console.log(allJobs, "detail page data");

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <Box
          sx={{
            backgroundColor: "#F6F8FA",
            p: 2,
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              // border: "1px solid blue",
              borderRadius: "5px",
              backgroundColor: "white",
              mb: 2,
              // position: "sticky",
              // top: "62.5px",
            }}
          >
            {allJobs && (
              <JobDetailHeaderSection
                src={allJobs?.logoUrl || "/no-img.png" }
                title={allJobs?.title}
                companyName={allJobs?.companyName}
                locations={
                  allJobs?.wfhType === "0"
                    ? allJobs?.locations
                    : "Remote"
                }
                href={allJobs?.applyLink}
                companyHref={allJobs?.companyDetails[0]?.key}
              />
            )}
          </Container>
          <Container
            maxWidth="md"
            sx={{
              // border: "1px solid blue",
              borderRadius: "5px",
              backgroundColor: "white",
              mb: 2,
            }}
          >
            {allJobs && (
              <JobDetailDescriptionSection
                description={allJobs.description}
              />
            )}
          </Container>
          <Container
            maxWidth="md"
            sx={{
              // border: "1px solid blue",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          >
            {allJobs && <AdditionalInfoSection Location={ allJobs.wfhType === "0"
                    ? allJobs.locations
                    : "Remote"} Salary={allJobs.salaryDetail || "N/A"} Role={allJobs.roleCategory || "N/A"} Type={allJobs.label || "N/A"} />}
          </Container>
        </Box>
      )}
    </>
  );
}
