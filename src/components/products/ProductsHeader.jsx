import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import FilterListIcon from "@mui/icons-material/FilterList";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import CustomButton from "../../common/buttons/CustomButton";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f1f5f9",
  "&:hover": {
    backgroundColor: "#f1f5f9",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const ProductsHeader = ({
  onSearchChange,
  onHightoLow,
  onLowtoHigh,
  checkedCategories,
  setCheckedCategories,
  selectedRating,
  setSelectedRating,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleSortChange = (value) => {
    setAnchorEl(null);
    if (value === "highToLow") {
      onHightoLow();
    } else if (value === "lowToHigh") {
      onLowtoHigh();
    }
  };

  const handleSortIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterIconClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryChange = (event) => {
    const currentIndex = checkedCategories.indexOf(event.target.name);
    const newChecked = [...checkedCategories];

    if (currentIndex === -1) {
      newChecked.push(event.target.name);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedCategories(newChecked);
  };

  const handleRatingChange = (value) => {
    setSelectedRating(value);
  };

  const handleClearFilters = () => {
    setCheckedCategories([]);
    setSelectedRating(0);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#ffffff",
          fontSize: "1.25rem",
          color: "#0d0d0d",
          boxShadow: "none",
          marginTop: { xs: "3rem", md: "4rem" },
        }}
      >
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearchChange}
            />
          </Search>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            All Products
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Box
              onClick={handleSortIconClick}
              sx={{
                display: "flex",
                flexDirection: "row",
                cursor: "pointer",
              }}
            >
              <IconButton
                size="large"
                aria-label="sort products"
                aria-controls="sort-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <SortIcon />
              </IconButton>
              <Typography sx={{ marginRight: "3rem", paddingY: "1rem" }}>
                Sort by
              </Typography>
            </Box>
            <Box
              onClick={handleFilterIconClick}
              sx={{
                display: "flex",
                flexDirection: "row",
                cursor: "pointer",
              }}
            >
              <IconButton
                size="large"
                aria-label="filter products"
                aria-controls="filter-menu"
                aria-haspopup="true"
                color="inherit"
              >
                <FilterListIcon />
              </IconButton>
              <Typography sx={{ marginRight: "3rem", paddingY: "1rem" }}>
                Filter by
              </Typography>
            </Box>
            <Menu
              id="sort-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={() => handleSortChange("lowToHigh")}>
                Price (Low to High)
              </MenuItem>
              <MenuItem onClick={() => handleSortChange("highToLow")}>
                Price (High to Low)
              </MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="sort products"
              aria-controls="sort-menu-mobile"
              aria-haspopup="true"
              onClick={handleSortIconClick}
              color="inherit"
            >
              <SortIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="filter products"
              aria-controls="filter-menu-mobile"
              aria-haspopup="true"
              onClick={handleFilterIconClick}
              color="inherit"
            >
              <FilterListIcon />
            </IconButton>
            <Menu
              id="sort-menu-mobile"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={() => handleSortChange("lowToHigh")}>
                Price (Low to High)
              </MenuItem>
              <MenuItem onClick={() => handleSortChange("highToLow")}>
                Price (High to Low)
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListSubheader>Category</ListSubheader>
            <ListItem button onClick={handleCategoryChange}>
              <label
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Checkbox
                  name="men's clothing"
                  checked={checkedCategories.includes("men's clothing")}
                />
                <ListItemText
                  primary="men's clothing"
                  sx={{ textTransform: "capitalize" }}
                />
              </label>
            </ListItem>
            <ListItem button onClick={handleCategoryChange}>
              <label
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Checkbox
                  name="jewelery"
                  checked={checkedCategories.includes("jewelery")}
                />
                <ListItemText
                  primary="jewelery"
                  sx={{ textTransform: "capitalize" }}
                />
              </label>
            </ListItem>
            <ListItem button onClick={handleCategoryChange}>
              <label
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Checkbox
                  name="electronics"
                  checked={checkedCategories.includes("electronics")}
                />
                <ListItemText
                  primary="electronics"
                  sx={{ textTransform: "capitalize" }}
                />
              </label>
            </ListItem>
            <ListItem button onClick={handleCategoryChange}>
              <label
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Checkbox
                  name="women's clothing"
                  checked={checkedCategories.includes("women's clothing")}
                />
                <ListItemText
                  primary="women's clothing"
                  sx={{ textTransform: "capitalize" }}
                />
              </label>
            </ListItem>
          </List>
          <List>
            <ListSubheader>Ratings</ListSubheader>
            {Array.from({ length: 4 }, (_, index) => (
              <ListItem
                button
                key={index + 1}
                onClick={() => handleRatingChange(4 - index)}
                sx={{
                  cursor: "pointer",
                }}
              >
                {Array.from({ length: 4 - index }, (_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    style={{
                      color:
                        selectedRating === 4 - index ? "#ffc107" : "#e0e0e0",
                    }}
                  />
                ))}
                <Typography component="span" variant="body2" sx={{ ml: 1 }}>
                  & up
                </Typography>
              </ListItem>
            ))}
          </List>
          <CustomButton
            label="Clear Filters"
            variant="Outlined"
            width="8rem"
            onClick={handleClearFilters}
            buttonSx={{ margin: "1rem" }}
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default ProductsHeader;
