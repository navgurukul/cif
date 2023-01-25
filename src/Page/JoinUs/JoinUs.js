import React from "react";
import ReadyToGo from "./components/ReadyToGo";
import SelectionProcess from "./components/SelectionProcess";
import WhatWeNeed from "./components/WhatWeNeed";
import useStyles from "./style";
import { Container, Box, Typography, Divider, SvgIcon } from "@mui/material";
function JoinUs() {
  const classes = useStyles();
  return (
    <Container className={classes.joinContainer} maxWidth="xl">
      <Typography
        align="center"
        className={classes.joinContainer__title}
        variant="h3"
      >
        Up For The Challenge?
      </Typography>
      <WhatWeNeed />
      <SelectionProcess />
      <ReadyToGo />
    </Container>
  );
}
export default JoinUs;
