import React, { useState } from "react";
import theme from "../../Theme/theme";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  ThemeProvider,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import Logo from "../../assets/header-logo.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../../Theme/constant";
import useStyles from "./styles";

function Header() {
  const classes = useStyles();
  const location = useLocation();
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");

  const [mobileOpen, setMobileOpen] = useState(false);

  const drawerWidth = 240;
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Join Us", path: "/join" },
    { name: "Partners", path: "/partner" },
    { name: "FAQs", path: "/faqs" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 1 }}>
        <img src={Logo} loading="lazy" alt="logo" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item.path} className={classes.link}>
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  color: item.path === location.pathname && "#7743DB",
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="background" elevation={0}>
        <hr />
        <Box
          className={isActive ? classes.mobileDivider : classes.desktopDivider}
        >
          <Divider color="divider" />
        </Box>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: "12px", display: { sm: "none" } }}
          >
            <MenuIcon sx={{ fontSize: "30px" }} />
          </IconButton>

          <Box sx={{ flexGrow: 1, mx: "10px" }}>
            <Link to="/" className={classes.link}>
              <img src={Logo} loading="lazy" alt="logo" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.path} className={classes.link}>
                <Button
                  key={item.name}
                  color={item.path === location.pathname ? "primary" : "dark"}
                  variant={item.path === location.pathname && "contained"}
                  sx={{
                    px: "16px",
                    py: "8px",
                    color: item.path === location.pathname && "default",
                    ":hover": {
                      bgcolor: item.path === location.pathname && "#7743DB",
                      color: item.path === location.pathname && "#FFFFFF",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
        <Box
          className={isActive ? classes.mobileDivider : classes.desktopDivider}
        >
          <Divider color="divider" />
        </Box>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default Header;
