import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    marginBottom: "16px",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    marginTop: "81px",
    manrginBotton: "64px",
  },
  mobileCard: {
    width: "300px",
    border: "1px dashed #7743DB",
    borderRadius: "8px",
    background: "#FFFFFF",
    padding: !isActive && "32px",
  },
  desktopCard: {
    width: "590px",
    border: "1px dashed #7743DB",
    borderRadius: "8px",
    background: "#FFFFFF",
    padding: !isActive && "32px",
  },
}));

export default useStyles;
