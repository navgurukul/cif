import React, { useState } from "react";
import theme from "../../Theme/theme";
// import { Link, NavLink,useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Typography,
  Button,
  IconButton,
  Toolbar,
  Container,
  ThemeProvider,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Link,
} from "@mui/material";

// interface Props {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window?: () => Window;
// }

// function Header(props: Props) {
function Header() {
  // const { window } = props;
  //   const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Join Us", path: "/join-us" },
    { name: "Partners", path: "/partner" },
    { name: "FAQs", path: "/faq" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" color="background">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
            {/* <Link to="/partner">MUI</Link> */}
            {/* <NavLink to="/" end>
              MUI
            </NavLink> */}
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img
              src={require("../../assets/logo.svg")}
              loading="lazy"
              alt="logo"
            />
          </Box> */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              //   <Link to={item.path}>
              //   <Link href={item.path}>
              <Button
                key={item.name}
                color="dark"
                sx={{
                  pl: "16px",
                  pr: "16px",
                  mr: "8px",
                  ml: "8px",
                  //   color: item.path !== location.pathname && "#2E2E2E",
                }}
              >
                {console.log("item.path", item.path)}
                {item.name}
              </Button>
              //   </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
    </ThemeProvider>
  );
}

export default Header;
