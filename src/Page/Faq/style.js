import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  faqContainer: {
    // fontFamily: theme.typography.fontFamily,
    // fontStyle: "normal",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  faqHeader: {
    color: theme.palette.text,
    "text-shadow": " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    "font-weight": 600,
    "text-align": "center",
    "font-size": theme.typography.h3.fontSize,
  },
  faqsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "margin-top": "64px",
  },
  IndFaq: {
    marginBottom: "64px",
  },
  faqTitle: {
    fontSize: theme.typography.h6.fontSize,
    "font-weight": 600,
    marginBottom: "32px ",
  },
  faqQues: {
    display: "flex",
    justifyContent: "space-between",
    "font-weight": "650 !important",
    marginBottom: "16px !important",
  },
  bulletPoints: {
    marginLeft: "15px !important",
    fontSize: theme.typography.body2.fontSize,
  },
  divider: {
    margin: "32px 0px !important",
  },
}));

export default useStyles;
