import React from "react";
import { Box, Typography, Divider, SvgIcon } from "@mui/material";
import useStyles from "../style";
function IndFaqs({ question, divider }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(question.turnOn);

  return (
    <>
      <Typography className={classes.faqQues}>
        {question.question}

        <img
          onClick={() => setOpen(!open)}
          style={{
            cursor: "pointer",
          }}
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
      {divider && <Divider className={classes.divider} />}
    </>
  );
}

export default IndFaqs;
