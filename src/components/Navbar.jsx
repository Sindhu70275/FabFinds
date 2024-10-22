import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../common/Context/cartContext";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;
const pages = [
  { text: "Home", to: "/" },
  { text: "Products", to: "/products" },
  { text: "Cart", to: "/cart" },
];

const Navbar = (props) => {
  const { cartList } = useContext(CartContext);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FabFinds
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            <NavLink
              to={item.to}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const activeStyle = {
    textDecoration: "underline",
  };

  const inactiveStyle = {
    textDecoration: "none",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#ffffff",
          fontSize: "1.25rem",
          color: "#0d0d0d",
          boxShadow: "none",
          paddingX: { md: "1.8rem" },
        }}
      >
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
            FabFinds
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              color: "#0d0d0d",
            }}
          >
            {pages.map((item) => (
              <NavLink
                key={item.text}
                to={item.to}
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                <Typography
                  sx={{
                    color: "#0d0d0d",
                    textTransform: "capitalize",
                    margin: "0 1rem",
                  }}
                >
                  {item.text}
                </Typography>
              </NavLink>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              backgroundColor: "#abdbe3",
              height: "1.5rem",
              width: "1.5rem",
              borderRadius: "3rem",
              paddingX: "0.5rem",
            }}
          >
            <Typography
              sx={{
                color: "#0b69ff",
              }}
            >
              {cartList.length}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
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
      </nav>
    </Box>
  );
};

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
