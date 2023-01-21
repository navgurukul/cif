import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  faqContainer: {
    fontFamily: theme.typography.fontFamily,
    // fontStyle: "normal",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  faqHeader: {
    "text-shadow": " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    "font-weight": 600,
    "text-align": "center",
    "font-size": theme.typography.h2.fontSize,
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
    "font-weight": 650,
    marginBottom: "38px ",
  },
  faqQues: {
    display: "flex",
    justifyContent: "space-between",
    "font-weight": "600 !important",
    marginBottom: "16px !important",
  },
  divider: {
    margin: "32px 0px !important",
  },
}));

export default useStyles;
