import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Grid";
import useStyles from "./style";
import FaqSection from "./components/FaqSection";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useState } from "react";

function Faq() {
  const classes = useStyles();
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("/assets/data/faq.json")
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data.Faq);
      });
  }, []);

  return (
    <>
      <Container maxWidth="lg" className={classes.faqContainer}>
        <Typography className={classes.faqHeader}>
          {" "}
          Have Questions? Let Us Guide You
        </Typography>
        <Container className={classes.faqsContainer} maxWidth="md">
          {faqs.map((faq, index) => {
            return <FaqSection key={index} faq={faq} />;
          })}
        </Container>
      </Container>
    </>
  );
}

export default Faq;
