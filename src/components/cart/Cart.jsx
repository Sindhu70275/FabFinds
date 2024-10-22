import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../common/context/CartContext";
import NoDataFound from "../../common/NoDataFound";
import CustomButton from "../../common/buttons/CustomButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CartItem from "./CartItem";

const Cart = () => {
  const products = useContext(CartContext);
  const { cartList } = products;
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/products");
  };

  const totalAmount = cartList.reduce(
    (acc, product) => acc + product.price * product.productQuantity,
    0
  );
  const totalItems = cartList.length;

  return cartList.length === 0 ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <NoDataFound
        imageSrc="https://static.vecteezy.com/system/resources/previews/008/515/488/large_2x/empty-cart-flat-illustration-concept-vector.jpg"
        heading="Your Cart is Empty"
        subHeading="Add items to your cart to see them here."
        label="Shop Now"
        variant="Contained"
        onClick={handleShopNowClick}
      />
    </Box>
  ) : (
    <Grid
      container
      spacing={6}
      sx={{
        padding: { xs: "4rem 1rem", md: "5rem" },
      }}
    >
      <Grid item xs={12}>
        <Typography
          component="div"
          sx={{
            color: "#1e293b",
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: "700",
          }}
        >
          My Cart
        </Typography>
      </Grid>
      {cartList.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontWeight: "600",
            }}
          >
            Order Total: Rs. {totalAmount}/-
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "grey",
              marginY: "0.5rem",
            }}
          >
            {totalItems} {totalItems === 1 ? "item" : "items"} in cart
          </Typography>
          <CustomButton
            label="Checkout"
            width="15rem"
            variant="Contained"
            onClick={() => alert("Proceed to Checkout")}
            sx={{ marginTop: "1rem" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cart;
