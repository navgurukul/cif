import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./constant";

let theme = createTheme();
const shadows = theme.shadows;
shadows[2] =
  "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 2px 1px rgba(0, 0, 0, 0.04), 0px 1px 5px rgba(0, 0, 0, 0.08)";
shadows[8] =
  "0px 4px 4px rgba(0, 0, 0, 0.06), 0px 8px 12px rgba(0, 0, 0, 0.04), 0px 4px 24px rgba(0, 0, 0, 0.08)";
shadows[16] =
  "0px 16px 24px rgba(0, 0, 0, 0.06), 0px 6px 30px rgba(0, 0, 0, 0.04), 0px 8px 10px rgba(0, 0, 0, 0.08)";
// Removing shadow[9], use shadow[8] for hadder scrollup
shadows[24] =
  "0px 24px 38px rgba(0, 0, 0, 0.06), 0px 9px 46px rgba(0, 0, 0, 0.04), 0px 11px 15px rgba(0, 0, 0, 0.08)";

theme = createTheme(theme, {
  breakpoints,
  palette: {
    mode: "light",
    default: {
      // main: "#FFFFFF",
      // contrastText: "#000000",
      light: "#0066FF",
      main: "#fff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#FFCC00",
    },
    primary: {
      //Green
      main: "#f05f40",
      light: "#E9F5E9",
      dark: "#3A8137",
    },

    grey: {
      main: "#BDBDBD",
      // main: "rgba(0, 0, 0, 0.12)",
    },
    text: {
      primary: "#2E2E2E",
      secondary: "#6D6D6D",
      disabled: "#949494",
      hint: "#949494",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    dark: {
      main: "#2E2E2E",
      contrastText: "#FFFFFF",
    },
    divider: "#DEDEDE",
  },
  typography: {
    fontFamily: "Noto Sans",
    fontSize: 18,
    h1: {
      letterSpacing: "-1px",
      fontWeight: 600,
      fontSize: "6rem",
      lineHeight: "130%",
      fontFamily: "Noto Sans",
      [theme.breakpoints.down("sm")]: {
        fontSize: "4rem",
      },
    },
    h2: {
      letterSpacing: "-0.6px",
      fontSize: "4.2rem",
      lineHeight: "130%",
      fontFamily: "Noto Sans",
      [theme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
      fontWeight: 600,
    },
    h3: {
      fontSize: "3.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      fontWeight: 600,
      fontFamily: "Noto Sans",
      lineHeight: "130%",
    },
    h4: {
      fontWeight: 600,
      fontSize: "2.625rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: " 2rem",
      },
      fontFamily: "Noto Sans",
      lineHeight: "130%",
    },
    h5: {
      fontWeight: 600,
      fontSize: "2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: " 1.5rem",
      },
      lineHeight: "150%",
      fontFamily: "Noto Sans",
    },
    h6: {
      fontSize: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: " 1.25rem",
      },
      lineHeight: "150%",
      fontWeight: 600,
      fontFamily: "Noto Sans",
    },
    subtitle1: {
      fontSize: "1.125rem",
      fontFamily: "Noto Sans",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      lineHeight: "170%",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontFamily: "Noto Sans",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
      fontWeight: 700,
      lineHeight: "170%",
    },
    body1: {
      fontSize: "1.125rem",
      fontFamily: "Noto Sans",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      lineHeight: "170%",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem", //1rem
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
      fontFamily: "Noto Sans ",
      lineHeight: "170%",
      fontWeight: 400,
    },
    body3: {
      fontSize: "0.875rem", //0.875rem
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.875rem",
      },
      fontFamily: "Noto Sans ",
      lineHeight: "170%",
      fontWeight: 400,
    },
    button: {
      fontSize: "1.125rem",
      fontFamily: "Noto Sans",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      lineHeight: "170%",
      fontWeight: 700,
      textTransform: "none",
    },
    caption: {
      fontSize: "0.75rem",
      fontFamily: "Noto Sans",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
      },
      lineHeight: "150%",
      fontWeight: 400,
    },
    overline: {
      fontFamily: "Noto Sans",
      fontSize: "0.75rem",
      lineHeight: "150%",
      fontWeight: 400,
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
      },
    },
    code: {
      fontFamily: "IBM Plex Mono",
      fontSize: "1.125rem",
      lineHeight: "170%",
      fontWeight: 400,
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
  },
  shadows,
});

theme.components = {
  //   MuiCardMedia: {
  //     defaultProps: {
  //       disableRipple: true,
  //     },
  //     styleOverrides: {
  //       root: { width: 64 },
  //     },
  //   },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        height: "48px",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        height: "48px",
        // margin: "10px 16px 10px 16px",
        "&:hover": {
          backgroundColor: "#E9F5E9",
          borderRadius: "8px",
        },
      },
    },
  },
};
export default theme;
