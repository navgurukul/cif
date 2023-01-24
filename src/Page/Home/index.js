import React from "react";
import {
  Container,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Grid,
  Box,
  Stack,
  Button,
} from "@mui/material";
import Divider from "@mui/material/Divider";

import useStyles from "./styles";
import ReadyToGo from "../JoinUs/components/ReadyToGo";

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container} maxWidth="lg">
        <Container maxWidth="md">
          <Stack className={classes.heading} alignItems="center">
            <Typography variant="h3" align="center" gutterBottom>
              Help Change Lives by Teaching to Code
            </Typography>
          </Stack>
        </Container>

        <Container maxWidth="md">
          <Stack className={classes.pra} alignItems="center">
            {" "}
            <Typography variant="body1" align="center" gutterBottom>
              For girls in their final years of schooling in India’s heartland,
              learning coding can be the difference between a life where choices
              are thrust upon them and an opportunity to make choices, achieve
              financial independence for their families, and control their
              destinies
            </Typography>
          </Stack>
        </Container>
        <Box className={classes.spacing}>
          <Grid container spacing={4}>
            <Grid item xs={12} ms={6} md={6}>
              <Card
                elevation={2}
                sx={{
                  borderRadius: "8px",
                  height: "100%",
                }}>
                <img
                  className={classes.image}
                  src={require("../../assets/image2.png")}
                />
              </Card>
            </Grid>
            <Grid item xs={12} ms={6} md={6}>
              <Typography variant="h6" gutterBottom>
                Learn real-world skills through classroom leadership
              </Typography>
              <Typography variant="body1" gutterBottom>
                Learn leadership, m aster management skills, accumulate
                life-defining experiences, and build your tribe for a purposeful
                life and career by facilitating learning and managing classrooms
                at a rural low-income school
              </Typography>
              <Typography sx={{ mt: 2 }} variant="h6" gutterBottom>
                Build (an education movement) for Bharat
              </Typography>
              <Typography variant="body1" gutterBottom>
                The Code India Fellowship is an opportunity to understand
                grassroots challenges in rural India (with a focus on education)
                and to be a part of and build a movement to make education
                meaningful and rewarding for India’s children.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Container sx={{ mt: 5 }} maxWidth="lg">
          <Divider color="divider" />
        </Container>
        <Typography
          sx={{ mt: 5 }}
          className={classes.spacing}
          variant="h5"
          align="center"
          gutterBottom>
          All About CIF
        </Typography>

        <Box className={classes.spacing}>
          <Grid container spacing={4}>
            <Grid item xs={12} ms={6} md={6}>
              <Typography variant="h6" gutterBottom>
                The Problem
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our education system is fundamentally unequal, and it does not
                provide students from marginalized communities access to
                possibilities that students from the top of the pyramid take for
                granted. The school education system catering to most parts of
                rural India does not even try to empower the recipient with an
                opportunity to access aspirational careers. With the current
                schooling they can access, girls from underprivileged
                backgrounds cannot dream of financial independence or agency
                over their own lives and often have stifling life decisions made
                for them.
              </Typography>
              <Typography sx={{ mt: 3 }} variant="body1" gutterBottom>
                We need a profound transformation of the education system for
                our students so they can aspire to hold the same jobs and live a
                life of similar possibilities as students from the top of the
                pyramid. An equitable higher education alternative where
                students learn the right skills, mindsets, and the ability to
                learn on their own to thrive in the world can be built.
              </Typography>
            </Grid>
            <Grid item xs={12} ms={6} md={6}>
              <Card
                elevation={2}
                sx={{
                  borderRadius: "8px",
                  height: "100%",
                }}>
                <img
                  className={classes.image}
                  src={require("../../assets/image.png")}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Container sx={{ mt: 5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} ms={6} md={6}>
              <Card
                elevation={2}
                sx={{
                  borderRadius: "8px",
                  height: "100%",
                }}>
                <img
                  className={classes.image}
                  src={require("../../assets/image1.png")}
                />
              </Card>
            </Grid>
            <Grid item xs={12} ms={6} md={6}>
              <Typography variant="h6" gutterBottom>
                What’s Code India Fellowship
              </Typography>
              <Typography variant="body1" gutterBottom>
                Code India Fellowship is a high-impact ambitious program to
                onboard high-aptitude and mission-aligned young tech graduates
                for a one-year fellowship. The fellows will be placed in
                government high schools to transform the learning and life
                outcomes of students from classes 8 to 12 in these schools.
              </Typography>
              <Typography sx={{ mt: 3 }} variant="body1">
                The core responsibility of the fellows would be to facilitate
                learning for the students (focused on young women) at their
                schools. Additionally, the fellows can take up other
                responsibilities, including coding projects & program
                management.
              </Typography>
              <Typography sx={{ mt: 3 }} variant="body1">
                In India, where girls are married as soon as they are 18, Code
                India Fellowship aims to enable young women to have jobs or
                admission to advanced training opportunities by the time they
                finish their school education.
              </Typography>
              <Typography sx={{ mt: 3 }} variant="body1">
                Post-program, the fellows will join a cadre of young,
                high-aptitude technology leaders solving for education access
                and other social issues through technology & other mediums.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mt: 5 }} maxWidth="lg">
          <Divider color="divider" />
        </Container>

        <Typography
          sx={{ mt: 5 }}
          className={classes.spacing}
          variant="h5"
          align="center"
          gutterBottom>
          Programme Design and Deliverables
        </Typography>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid
            container
            spacing={2}
            // spacing={isActive ? 2 : 4}
          >
            <Grid item xs={12} ms={6} md={4}>
              <Card className={classes.cards} elevation={2}>
                <CardContent>
                  <Typography variant="subtitle1">
                    Facilitate Learning (Teaching, Workshops, Lesson Planning) –
                    approximately 70% of their time
                  </Typography>

                  <Typography variant="body1">
                    <ul>
                      <li> Development of Lesson Plans</li>
                      <li>
                        Design & support in the delivery of classroom sessions
                        (Technical & Non-Technical)
                      </li>
                      <li>Design & delivery of workshops</li>
                      <li> Mentorship for students,</li>
                      <li>Placement training</li>
                      <li>Monitoring & Evaluation (Student Learning)</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} ms={6} md={4}>
              <Card elevation={2} className={classes.cards}>
                <CardContent>
                  <Typography variant="subtitle1">
                    Program Management (Operations, Local Partnerships,
                    Stakeholder Management) – approximately 30% of their time
                  </Typography>

                  <Typography variant="body1">
                    <ul>
                      <li>Management of placement processes & activities</li>
                      <li>Reporting</li>
                      <li>Partner Management</li>
                      <li>
                        {" "}
                        Stakeholder Management (including local community)
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} ms={6} md={4}>
              <Card elevation={2} className={classes.cards}>
                <CardContent>
                  <Typography variant="subtitle1">
                    Special Projects – Optional ( but highly encouraged)
                  </Typography>
                  <Typography variant="body1">
                    <ul>
                      <li>
                        {" "}
                        Pilot an idea for improving impact in their school
                        (across Operations or Learning)
                      </li>
                      <li>
                        Design and implement a project impacting the whole
                        program (e.g., a data management system)
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mt: 5 }} maxWidth="lg">
          <Divider color="divider" />
        </Container>
        <Typography
          sx={{ mt: 5 }}
          className={classes.spacing}
          variant="h5"
          align="center"
          gutterBottom>
          Fellow Learning
        </Typography>
        <Box className={classes.spacing}>
          <Grid container spacing={2}>
            <Grid item xs={12} ms={6} md={6}>
              <Card className={classes.cards} elevation={2}>
                <CardContent>
                  <Typography variant="subtitle1">
                    The learning and development objectives
                  </Typography>
                  <Typography variant="body1">
                    <ul>
                      <li>
                        {" "}
                        Prepare the fellows for a classroom facilitator’s role &
                        support them in excelling at it
                      </li>
                      <li>
                        Train the fellows in the tools required throughout their
                        fellowship
                      </li>
                      <li>
                        Help the fellows acquire project/program management &
                        stakeholder management skills
                      </li>
                      <li>
                        Develop the fellows into leaders beyond the classroom
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} ms={6} md={6}>
              <Card className={classes.cards} elevation={2}>
                <CardContent>
                  <Typography variant="subtitle1">
                    The learning tools across the elements
                  </Typography>
                  <Typography variant="body1">
                    <ul>
                      <li>
                        {" "}
                        Lectures on pedagogy & other topics related to student
                        learning
                      </li>
                      <li>Case studies from classrooms</li>
                      <li>
                        Training on tools, rubrics & software (communication,
                        project management)
                      </li>
                      <li>Online courses across the year</li>
                      <li>
                        Online sessions by industry experts, entrepreneurs, etc.
                      </li>
                      <li>
                        Peer Learning in workshops (shared fellowship
                        experiences)
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Container maxWidth="md">
          <Stack className={classes.pra} alignItems="center">
            {" "}
            <Typography variant="body1" align="center" gutterBottom>
              NavGurukul will deliver fellow learning through an orientation
              session, multiple boot camps, online sessions & reviews by the
              NavGurukul team.
            </Typography>
          </Stack>
        </Container>

        <Container sx={{ mt: 5 }} maxWidth="lg">
          <Divider color="divider" />
        </Container>
        {/* last--------------------------------------------------------------------------- */}
        <Typography
          sx={{ mt: 5 }}
          className={classes.spacing}
          variant="h5"
          align="center"
          gutterBottom>
          Post Programme
        </Typography>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid
            container
            spacing={2}
            // spacing={isActive ? 2 : 4}
          >
            <Grid item xs={12} ms={6} md={4}>
              <Card className={classes.cards} elevation={2}>
                <CardContent>
                  <Typography variant="subtitle1">
                    Facilitate Learning (Teaching, Workshops, Lesson Planning) –
                    approximately 70% of their time
                  </Typography>

                  <Typography variant="body1">
                    <ul>
                      <li> Development of Lesson Plans</li>
                      <li>
                        Design & support in the delivery of classroom sessions
                        (Technical & Non-Technical)
                      </li>
                      <li>Design & delivery of workshops</li>
                      <li> Mentorship for students,</li>
                      <li>Placement training</li>
                      <li>Monitoring & Evaluation (Student Learning)</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} ms={6} md={4}>
              <Card className={classes.cards} elevation={2}>
                <CardContent>
                  <Typography variant="subtitle1">
                    Program Management (Operations, Local Partnerships,
                    Stakeholder Management) – approximately 30% of their time
                  </Typography>

                  <Typography variant="body1">
                    <ul>
                      <li>Management of placement processes & activities</li>
                      <li>Reporting</li>
                      <li>Partner Management</li>
                      <li>
                        {" "}
                        Stakeholder Management (including local community)
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} ms={6} md={4}>
              <Card className={classes.cards} elevation={2}>
                <CardContent>
                  <Typography variant="subtitle1">
                    Special Projects – Optional ( but highly encouraged)
                  </Typography>
                  <Typography variant="body1">
                    <ul>
                      <li>
                        {" "}
                        Pilot an idea for improving impact in their school
                        (across Operations or Learning)
                      </li>
                      <li>
                        Design and implement a project impacting the whole
                        program (e.g., a data management system)
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mt: 5 }} maxWidth="lg">
          <Divider color="divider" />
        </Container>
        <ReadyToGo />
      </Container>
    </div>
  );
}

export default Home;
