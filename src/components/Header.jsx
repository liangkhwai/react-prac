import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WidgetsIcon from "@mui/icons-material/Widgets";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#959595" }}>
        <Toolbar>
          <WidgetsIcon sx={{ fontSize: "3rem",paddingX:"0.5rem" }} />
          <Typography
            variant="h4"
            fontWeight="bold"
            component="div"
            sx={{ flexGrow: 1, letterSpacing: 3 }}
          >
            HOMCO
          </Typography>

          <Box height={100} style={{ backgroundColor: "#757575" }}>
            <Button color="inherit" style={{ height: "100%", padding: "20px" }}>
              Home
            </Button>
          </Box>
          <Box height={100}>
            <Button color="inherit" style={{ height: "100%", padding: "20px" }}>
              ABOUT US
            </Button>
          </Box>
          <Box height={100}>
            <Button color="inherit" style={{ height: "100%", padding: "20px" }}>
              OUR SERVICES
            </Button>
          </Box>
          <Box height={100}>
            <Button color="inherit" style={{ height: "100%", padding: "20px" }}>
              OUR PROJECTS
            </Button>
          </Box>
          <Box height={100}>
            <Button color="inherit" style={{ height: "100%", padding: "20px" }}>
              PORTFOLIO
            </Button>
          </Box>
          <Box height={100}>
            <Button color="inherit" style={{ height: "100%", padding: "20px" }}>
              PAGES
            </Button>
          </Box>
          <Box height={100}>
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              style={{ height: "100%", borderRadius: "0%" }}
            >
              <MenuIcon sx={{fontSize:"3rem",fontWeight:"bold"}} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        id="menu-appbar"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={menuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem component="a" href="/">
          Home
        </MenuItem>
        <MenuItem component="a" href="/our-services">
          Our Services
        </MenuItem>
        <MenuItem component="a" href="/our-projects">
          Our Projects
        </MenuItem>
        <MenuItem component="a" href="/portfolio">
          Portfolio
        </MenuItem>
        <MenuItem component="a" href="/pages">
          Pages
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
