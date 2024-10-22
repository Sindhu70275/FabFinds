import { useContext, useState } from "react";
import CartContext from "../../common/context/cartContext";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CustomButton from "../../common/buttons/CustomButton";

const CartItem = ({ product }) => {
  const { deleteCartItem, addCartItem, cartList } = useContext(CartContext);
  const { title, price, image, id, productQuantity } = product;
  const [itemQuantity, setItemQuantity] = useState(productQuantity);

  const incrementQuantity = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    addCartItem({ ...product, productQuantity: newQuantity });
  };

  const decrementQuantity = () => {
    if (itemQuantity === 1) {
      deleteCartItem(id);
    } else {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      addCartItem({ ...product, productQuantity: newQuantity });
    }
  };

  const onDeleteCartItem = () => {
    deleteCartItem(id);
  };

  return (
    <Grid item xs={12}>
      <Card
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: 60, md: 130 },
                  margin: { xs: "0.875rem", md: "1.5rem" },
                }}
                image={image}
                alt={title}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "2rem",
                  border: "1px solid grey",
                  borderRadius: "4px",
                }}
              >
                <IconButton
                  color="primary"
                  onClick={decrementQuantity}
                  sx={{
                    width: { xs: 24, md: 40 },
                    height: { xs: 24, md: 40 },
                    borderRight: "1px solid grey",
                    borderRadius: "4px 0 0 4px",
                  }}
                >
                  <RemoveIcon sx={{ fontSize: { xs: 16, md: 24 } }} />
                </IconButton>
                <Typography
                  variant="body1"
                  sx={{
                    mx: 2,
                    fontSize: { xs: "0.75rem", md: "1rem" },
                  }}
                >
                  {itemQuantity}
                </Typography>
                <IconButton
                  color="primary"
                  onClick={incrementQuantity}
                  sx={{
                    width: { xs: 24, md: 40 },
                    height: { xs: 24, md: 40 },
                    borderLeft: "1px solid grey",
                    borderRadius: "0 4px 4px 0",
                  }}
                >
                  <AddIcon sx={{ fontSize: { xs: 16, md: 24 } }} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontSize: { xs: "0.875rem", md: "1.4rem" },
                  fontWeight: "700",
                  marginBottom: { xs: "0.5rem", md: "1rem" },
                  wordWrap: "break-word",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.75rem", md: "1.2rem" },
                }}
              >
                by Fab Finds
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#171f46",
                  fontSize: { xs: "0.75rem", md: "1.3rem" },
                  fontWeight: "600",
                  marginTop: { xs: "0.5rem", md: "1rem" },
                }}
              >
                {`Rs.${price * itemQuantity}/-`}
              </Typography>
              <Box sx={{ marginTop: { xs: "0.5rem", md: "1rem" } }}>
                <CustomButton
                  label="Delete"
                  width={{ xs: "5rem", md: "7rem" }}
                  onClick={onDeleteCartItem}
                />
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CartItem;
