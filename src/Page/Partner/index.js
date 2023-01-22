import React from "react";
import {
  Grid,
  Box,
  Container,
  List,
  Typography,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../Theme/constant";
import useStyles from "./styles";

function Partner() {
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
  const classes = useStyles();

  return (
    <Container maxWidth="xl" sx={{ mb: "64px" }}>
      <Typography
        variant="h3"
        color="text.primary"
        align="center"
        // className={classes.heading}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "81px",
          mb: "64px",
        }}
      >
        Created by Industry Leaders
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} ms={6} md={6} sx={{ mb: "16px" }}>
          <Box
            sx={{
              // background: "red",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              className={isActive ? classes.mobileCard : classes.desktopCard}
              // sx={{
              //   width: isActive ? "300px" : "590px",
              //   border: "1px dashed #7743DB",
              //   borderRadius: "8px",
              //   background: "#FFFFFF",
              //   padding: !isActive && "32px",
              // }}
            >
              <CardContent>
                <img
                  src={require("../../assets/niti-aayog.svg").default}
                  loading="lazy"
                  alt="logo"
                  className={classes.image}
                />
                <Typography variant="subtitle1" sx={{ mb: "16px" }}>
                  NITI AAYOG
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  NITI Aayog is the Government of India’s apex public policy
                  think tank. It also functions as a state-of-the-art resource
                  center to promote research and innovation and provide
                  strategic policy vision for the government. NITI Aayog designs
                  strategic and long-term policies, programs, and initiatives to
                  support the states.
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  NITI Aayog’s Education Vertical strives to facilitate school
                  readiness, socio-emotional learning, critical and higher-order
                  thinking, and grade-level competency among children. It seeks
                  to empower youth with employability skills, research
                  temperament, and subject matter expertise through a
                  high-quality, accessible, equitable, accountable, and
                  affordable education system.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              // background: "pink",
              display: "flex",
              justifyContent: "center",
              marginTop: "32px",
            }}
          >
            <Card
              sx={{
                // maxWidth: 590,
                width: isActive ? "300px" : "590px",
                // height: "auto",
                border: "1px dashed #7743DB",
                borderRadius: "8px",
                background: "#FFFFFF",
                padding: !isActive && "32px",
              }}
            >
              <CardContent>
                <img
                  src={require("../../assets/navgurukul.svg").default}
                  loading="lazy"
                  alt="logo"
                  className={classes.image}
                />
                <Typography variant="subtitle1" sx={{ mb: "16px" }}>
                  NITI AAYOG
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  NITI Aayog is the Government of India’s apex public policy
                  think tank. It also functions as a state-of-the-art resource
                  center to promote research and innovation and provide
                  strategic policy vision for the government. NITI Aayog designs
                  strategic and long-term policies, programs, and initiatives to
                  support the states.
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  NITI Aayog’s Education Vertical strives to facilitate school
                  readiness, socio-emotional learning, critical and higher-order
                  thinking, and grade-level competency among children. It seeks
                  to empower youth with employability skills, research
                  temperament, and subject matter expertise through a
                  high-quality, accessible, equitable, accountable, and
                  affordable education system.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} ms={6} md={6} sx={{ mb: "16px" }}>
          <Box
            sx={{
              // background: "yellow",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                // maxWidth: 590,
                width: isActive ? "300px" : "590px",
                // height: "auto",
                border: "1px dashed #7743DB",
                borderRadius: "8px",
                background: "#FFFFFF",
                padding: !isActive && "32px",
              }}
            >
              <CardContent>
                <img
                  src={require("../../assets/amazon.svg").default}
                  loading="lazy"
                  alt="logo"
                  className={classes.image}
                />
                <Typography variant="subtitle1" sx={{ mb: "16px" }}>
                  NITI AAYOG
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  NITI Aayog is the Government of India’s apex public policy
                  think tank. It also functions as a state-of-the-art resource
                  center to promote research and innovation and provide
                  strategic policy vision for the government. NITI Aayog designs
                  strategic and long-term policies, programs, and initiatives to
                  support the states.
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  NITI Aayog’s Education Vertical strives to facilitate school
                  readiness, socio-emotional learning, critical and higher-order
                  thinking, and grade-level competency among children. It seeks
                  to empower youth with employability skills, research
                  temperament, and subject matter expertise through a
                  high-quality, accessible, equitable, accountable, and
                  affordable education system.
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  NITI Aayog’s Education Vertical strives to facilitate school
                  readiness, socio-emotional learning, critical and higher-order
                  thinking, and grade-level competency among children. It seeks
                  to empower youth with employability skills, research
                  temperament, and subject matter expertise through a
                  high-quality, accessible, equitable, accountable, and
                  affordable education system.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Partner;
