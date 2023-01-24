import React from "react";
import {
  Container,
  Card,
  Box,
  Grid,
  Typography,
  Divider,
  SvgIcon,
} from "@mui/material";
import useStyles from "../style";

function WhatWeNeed() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.needContainer} maxWidth="lg">
        <Typography className={classes.needTitle} variant="h5">
          What You Need
        </Typography>
        <Grid
          spacing={2}
          container
          justifyContent="space-between"
          marginTop={6}
        >
          <Grid item>
            <Card elevation={2} className={classes.NeedCardType1}>
              Have a tech degree (Computer Science, Information Technology,
              etc.); also apply if you aren’t a tech graduate but are good at
              tech
            </Card>
          </Grid>
          <Grid item>
            <Card elevation={2} className={classes.NeedCardType1}>
              Believe in the Code India Fellowship's mission of using education
              to provide young women an opportunity to attain agency & financial
              independence
            </Card>
          </Grid>
          <Grid item>
            <Card elevation={2} className={classes.NeedCardType1}>
              Find the idea of utilizing a year facilitating learning for young
              women and girls in a low-income rural school while becoming a
              better version of yourselves exciting
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          className={classes.NeedCardInRow2}
        >
          <Grid item>
            <Card elevation={2} className={classes.NeedCardType2}>
              Have an aptitude for critical thinking and problem solving
            </Card>
          </Grid>
          <Grid item>
            <Card elevation={2} className={classes.NeedCardType2}>
              Are fluent in English and have a working knowledge of Hindi
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="lg"
        style={{
          margin: "4rem 0",
          border: "1px solid grey",
        }}
      />
    </>
  );
}

export default WhatWeNeed;
