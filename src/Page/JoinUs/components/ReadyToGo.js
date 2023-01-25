import React from "react";
import { Container, Typography } from "@mui/material";

import Button from "@mui/material/Button";
function ReadyToGo() {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2.2rem",
        }}
        maxWidth="sm">
        <Typography
          style={{
            margin: "1rem 0",
            marginTop: "2rem",
          }}
          variant="h5">
          Ready to Go?
        </Typography>

        <Button
          onClick={() => {
            window.open(
              "https://recruiterflow.com/navgurukul/jobs/102",
              "_blank"
            );
          }}
          sx={{ width: "352px", "&:hover": { backgroundColor: "#7743DB" } }}
          variant="contained">
          Apply Now
        </Button>
        <Typography marginTop={1} variant="body2">
          Application Deadline: 20 March 2023.
        </Typography>
        <Typography
          marginTop={2}
          style={{
            textAlign: "center",
          }}
          variant="body2">
          In case of any clarification on the application, please contact the
          CIF Recruiter & Manager at{" "}
          <span style={{ color: "#7743DB", fontWeight: 600 }}>
            {" "}
            niyas@navgurukul.org{" "}
          </span>{" "}
          with
          <span style={{ color: "#7743DB", fontWeight: 600 }}>
            {" "}
            hr-ops@navgurukul.org{" "}
          </span>{" "}
          in cc
        </Typography>
      </Container>
    </>
  );
}

export default ReadyToGo;
