import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import useStyles from "./styles";
import Logo from "../../assets/footer-logo.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../Theme/constant";

function Footer() {
  const classes = useStyles();
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");

  return (
    <Box sx={{ width: "100%" }}>
      <Stack className={classes.bottomRow}>
        {/* <Stack className={classes.bottomRow} sx={{ width: "96.5%" }}> */}
        <img src={Logo} loading="lazy" alt="logo" className={classes.image} />
        <Typography
          variant="body2"
          color="#FFFFFF"
          sx={{ mb: "8px" }}
          align="center"
        >
          An Initiative by NavGurukul Foundation of Social Welfare
        </Typography>
        <Typography variant="subtitle2" color="primary">
          hr-ops@navgurukul.org
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
