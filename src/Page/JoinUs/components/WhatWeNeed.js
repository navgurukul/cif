import React from "react";
import {
  Container,
  Card,
  Box,
  Typography,
  Divider,
  SvgIcon,
} from "@mui/material";
import useStyles from "../style";

function WhatWeNeed() {
  const classes = useStyles();
  return (
    <Container className={classes.needContainer} maxWidth="lg">
      <Typography className={classes.needTitle} variant="h5">
        What You Need
      </Typography>
      <Box className={classes.needBoxes}>
        <Container
          className={classes.NeedCardInRow1}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Card className={classes.NeedCardType1}>
            Have a tech degree (Computer Science, Information Technology, etc.);
            also apply if you aren’t a tech graduate but are good at tech
          </Card>
          <Card className={classes.NeedCardType1}>
            Believe in the Code India Fellowship's mission of using education to
            provide young women an opportunity to attain agency & financial
            independence
          </Card>
          <Card className={classes.NeedCardType1}>
            Find the idea of utilizing a year facilitating learning for young
            women and girls in a low-income rural school while becoming a better
            version of yourselves exciting
          </Card>
        </Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          className={classes.NeedCardInRow2}
        >
          <Card className={classes.NeedCardType2}>
            Have an aptitude for critical thinking and problem solving
          </Card>
          <Card className={classes.NeedCardType2}>
            Are fluent in English and have a working knowledge of Hindi
          </Card>
        </Container>
      </Box>
    </Container>
  );
}

export default WhatWeNeed;
