import React from "react";
import { Container, Box, Typography, Divider, SvgIcon } from "@mui/material";
import useStyles from "../style";
function SelectionProcess() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.selectionContainer} maxWidth="md">
        <Typography variant="h5">Selection Process</Typography>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Typography className={classes.processTitle}>
            Fill in the Application Form
          </Typography>
          <img src="/assets/images/down.svg" className={classes.downSvg} />
          <Typography className={classes.processTitle}>
            Technical Round
          </Typography>
          <Typography align="center">
            Test score from a coding competition on our partner community
          </Typography>
          <img src="/assets/images/down.svg" className={classes.downSvg} />

          <Typography className={classes.processTitle}>
            Teaching Round
          </Typography>
          <Typography align="center">
            Recorded or Live Teaching Session(s)
          </Typography>
          <img src="/assets/images/down.svg" className={classes.downSvg} />
          <Typography className={classes.processTitle}>
            Panel Interview(s)
          </Typography>
        </Container>
      </Container>
      <Container
        maxWidth="lg"
        style={{
          margin: "2rem 0",
          border: "1px solid grey",
        }}
      />
    </>
  );
}

export default SelectionProcess;
