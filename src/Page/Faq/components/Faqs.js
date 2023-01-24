import React from "react";
import { Box, Typography, Divider, SvgIcon } from "@mui/material";
import useStyles from "../style";
function IndFaqs({ question, divider }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(question.turnOn);

  return (
    <>
      <Typography
        style={{
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
        className={classes.faqQues}
      >
        {question.question}

        <img
          src={
            open ? "/assets/images/collapse.svg" : "/assets/images/expand.svg"
          }
        />
      </Typography>
      {open && (
        <>
          {" "}
          <Typography className={classes.faqAns}>{question.answer}</Typography>
          <ul>
            {question.bulletPoints.map((points, index) => {
              return (
                <li>
                  <Typography>{points}</Typography>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {divider && <Divider light="true" className={classes.divider} />}
    </>
  );
}

export default IndFaqs;
