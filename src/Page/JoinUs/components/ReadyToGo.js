import React from "react";
import { Container, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../../Theme/constant";
function ReadyToGo() {
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2.2rem",
          paddingLeft: !isActive && "100px",
          paddingRight: !isActive && "100px",
        }}
        maxWidth="md">
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
          sx={{
            width: "352px",
            height: "48px",
            "&:hover": { backgroundColor: "#7743DB" },
          }}
          variant="contained">
          Apply Now
        </Button>
        <Typography sx={{ marginTop: "16px" }} variant="body2">
          Application Deadline: 20 March 2023.
        </Typography>
        <Typography
          sx={{ marginTop: "16px" }}
          style={{
            textAlign: "center",
          }}
          variant="body2">
          In case of any clarification on the application, please contact the
          CIF Recruiter & Manager at{" "}
          <span style={{ color: "#7743DB", fontWeight: 600 }}>
            {" "}
            ashwini.m@navgurukul.org{" "}
          </span>{" "}
          with {isActive ? <br /> : " "}
          <span style={{ color: "#7743DB", fontWeight: 600 }}>
          careers@navgurukul.org{" "}
          </span>{" "}
          in cc
        </Typography>
      </Container>
    </>
  );
}

export default ReadyToGo;
