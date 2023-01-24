import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "60px",
  },
  pra: {
    margin: "7px",
  },
  heading: {
    margin: "9px",
  },
  spacing: {
    margin: "32px",
  },
  spacing16: {
    margin: "16px",
  },

  spacing64: {
    margin: "64px",
  },

  cardGrid: {
    padding: "10px 16px 10px 16px",
    // marginTop: "20px",
  },

  cards: {
    height: "100%",
    backgroundColor: "#FFFFFF !important",
  },
  card: {
    height: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "32px",
    "&:hover": {
      boxShadow:
        "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 6px 30px rgba(0, 0, 0, 0.04), 0px 8px 10px rgba(0, 0, 0, 0.08)",
    },
  },
  image: {
    height: "100%",
    // borderRadius: "10px",
  },
}));

export default useStyles;
