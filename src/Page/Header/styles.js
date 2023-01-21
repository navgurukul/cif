import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#2E2E2E",
  },
  mobileDivider: {
    width: "85%",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  desktopDivider: {
    width: "96%",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
}));

export default useStyles;
