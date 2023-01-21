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
    padding: "32px !important",
    maxWidth: "300px !important",
    textAlign: "left !important",
  },
  NeedCardType2: {
    display: "flex !important",
    flexDirection: "column !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    padding: "32px !important",
  },
  NeedCardInRow1: {
    margin: "32px 0 !important",
    marginLeft: "0px !important",
  },
  NeedCardInRow2: {
    marginTop: "16px !important",
  },
  selectionContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  downSvg: {
    margin: "32px 0 !important",
  },
  processTitle: {
    fontWeight: "600 !important",
    marginBottom: "16px !important",
  },
}));

export default useStyles;
