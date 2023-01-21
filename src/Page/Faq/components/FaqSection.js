import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Grid";
import useStyles from "../style";
import IndFaqs from "./Faqs";

function FaqSection({ faq }) {
  const classes = useStyles();
  return (
    <Box className={classes.IndFaq}>
      <Typography className={classes.faqTitle}>{faq.faqTitle}</Typography>
      {faq.content.map((question, index) => {
        return (
          <IndFaqs
            question={question}
            key={index + 1}
            divider={index + 1 == faq.content.length ? false : true}
          />
        );
      })}
    </Box>
  );
}

export default FaqSection;
