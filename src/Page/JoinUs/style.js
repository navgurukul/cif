import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  joinContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2rem",
  },
  joinContainer__title: {
    fontWeight: "bold !important",
    marginBottom: "64px !important",
  },
  needContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  needTitle: {},
  needBoxes: {
    display: "flex !important",
    flexDirection: "column",
  },
  NeedCardType1: {
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    padding: "16px !important",
    width: "300px !important",
    height: "200px !important",
  },
  NeedCardType2: {
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    padding: "16px !important",
  },
  NeedCardInRow1: {
    margin: "32px 0 !important",
    marginLeft: "0px !important",
  },
  NeedCardInRow2: {
    display: "flex !important",
    justifyContent: "SpacedEvenly !important",
  },
}));

export default useStyles;
