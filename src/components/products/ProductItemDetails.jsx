import { useContext, useState, useEffect } from "react";
import CartContext from "../../common/context/cartContext";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import CustomButton from "../../common/buttons/CustomButton";

const PopImage = styled(CardMedia)(({ theme }) => ({
  maxWidth: "100%",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    animation: "pop 0.5s ease-in-out",
  },
  height: 440,
  objectFit: "contain",
  width: "100%",
}));

const ProductItemDetails = () => {
  const location = useLocation();
  const { product } = location.state;
  const { title, price, image, rating, description } = product;
  const { addCartItem, cartList } = useContext(CartContext);

  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    const itemInCart = cartList.find((item) => item.id === product.id);
    if (itemInCart) {
      setProductQuantity(itemInCart.productQuantity);
    }
  }, [cartList, product.id]);

  const incrementQuantity = () =>
    setProductQuantity((prevQuantity) => prevQuantity + 1);
  const decrementQuantity = () =>
    setProductQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : 1
    );

  const onClickAddToCart = () => {
    addCartItem({ ...product, productQuantity });
  };

  return (
    <Grid
      container
      spacing={6}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "4rem 1rem", md: "6rem" },
      }}
    >
      <Grid item xs={12} md={6}>
        <PopImage component="img" image={image} alt={title} />
      </Grid>
      <Grid item xs={12} md={6} sx={{ alignContent: "center" }}>
        <Stack spacing={2}>
          <CardContent>
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: "#12022f",
                fontSize: { xs: "1.3rem", md: "2rem" },
                fontWeight: "800",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#171f46",
                mt: 1,
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              {`Rs.${price}`}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: { xs: "600", md: "700" },
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#0967d2",
                  color: "#ffffff",
                  borderRadius: "0.3rem",
                  padding: "0.25rem 0.5rem",
                }}
              >
                {rating.rate}
                <StarIcon
                  sx={{
                    fontSize: "1rem",
                    marginLeft: "0.2rem",
                    color: "#ffffff",
                  }}
                />
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#616e7c", ml: 2, fontWeight: "600" }}
              >
                {rating.count} Reviews
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              {description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
              Available:{" "}
              <span style={{ fontWeight: "normal", color: "#4caf50" }}>
                In Stock
              </span>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, fontWeight: "bold" }}>
              Brand: <span style={{ fontWeight: "normal" }}>FabFinds</span>
            </Typography>
            <Box sx={{ mt: 3, mb: 2, borderBottom: "1px solid #e0e0e0" }} />
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <IconButton color="primary" onClick={decrementQuantity}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1" sx={{ mx: 2 }}>
                {productQuantity}
              </Typography>
              <IconButton color="primary" onClick={incrementQuantity}>
                <AddIcon />
              </IconButton>
            </Box>
            <CustomButton
              label="Add To Cart"
              variant="Contained"
              width="8rem"
              onClick={onClickAddToCart}
            />
          </CardContent>
        </Stack>
      </Grid>
      <style>{`
        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </Grid>
  );
};

export default ProductItemDetails;
