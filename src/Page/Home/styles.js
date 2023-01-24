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
  },
  image: {
    height: "100%",
  },
}));

export default useStyles;
