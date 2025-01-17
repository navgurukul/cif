import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
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
    <Container maxWidth="lg" sx={{ mb: "64px" }}>
      <Typography
        variant="h3"
        color="text.primary"
        align="center"
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "81px",
          mb: "64px",
        }}
      >
        Created by Industry Leaders
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} ms={6} md={6} sx={{ mb: "16px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                border: "1px dashed #7743DB",
                borderRadius: "8px",
                background: "#FFFFFF",
                padding: !isActive && "32px",
              }}
            >
              <CardContent>
                <img
                  src={require("../../assets/niti-aayog.svg").default}
                  loading="lazy"
                  alt="logo"
                  className={classes.image}
                />

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
              display: "flex",
              justifyContent: "center",
              marginTop: "17px",
            }}
          >
            <Card
              sx={{
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

                <Typography variant="body1" sx={{ mb: "16px" }}>
                  NavGurukul is a not-for-profit organization founded in 
                  2016 with a mission to create access to aspirational careers 
                  for students from marginalized communities.
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  NavGurukul's flagship Residential Program works with learners from 
                  underserved communities, helping them become programmers and secure 
                  guaranteed jobs upon completing the program. Currently, we have 10 
                  campuses, including the BCA program. Of these, one is a co-ed campus, 
                  one is a boys' campus, and the remaining eight are exclusively girls' 
                  campuses. NavGurukul is training over 1,000 students across these 
                  fully funded residential centers in various states of India. This 
                  focus on gender inclusion is a conscious decision, as inclusion is one 
                  of the core principles guiding NavGurukul's mission and focus areas.
                  The residential program is open to students who have completed 10th 
                  grade and are at least 17 years old. To date, NavGurukul has placed 
                  over 1100+ students in software jobs within the tech industry, working 
                  for IT giants and product startups.
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  Through Meraki, NavGurukul also engages with students and teachers 
                  from government schools and ITIs via an online platform. This initiative 
                  helps students learn essential skills such as basic English, touch 
                  typing, and programming. Additionally, the Code India Fellowship is 
                  a high-impact and ambitious program designed to onboard high-aptitude, 
                  mission-aligned young graduates for a one-year fellowship, placing them in government high schools.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} ms={6} md={6} sx={{ mb: "16px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
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

                <Typography variant="body1" sx={{ mb: "16px" }}>
                  Amazon is one of the most recognizable brands in the world and
                  is a technology company with a presence across e-commerce,
                  cloud computing, online advertising, digital streaming, and
                  artificial intelligence. In India Amazon started operations in
                  2013 and now serves 150 million Indian customers.
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  Through Amazon Future Engineer (AFE), a comprehensive
                  childhood-to-career program aimed at increasing access to
                  computer science education for children and young adults who
                  typically lack these opportunities, Amazon supports those who
                  face disproportionate barriers to education, including
                  household income and gender, to develop and learn computer
                  science skills to have equal opportunities in the future world
                  of work.
                </Typography>
                <Typography variant="body1" sx={{ mb: "16px" }}>
                  Amazon supports underprivileged and under-served students
                  learn computer science in five countries – the US, the UK,
                  France, Canada, and India. Amazon and its partners support
                  more than 900 government schools across seven states in India.
                  Amazon also supports girls from low-income backgrounds looking
                  to pursue careers in technology with scholarships, mentorship,and internships.
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
