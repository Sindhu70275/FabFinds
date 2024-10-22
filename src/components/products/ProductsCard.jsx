import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const { id, title, price, image, rating } = product;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{ marginTop: { xs: "3rem", md: "4rem" } }}
    >
      <Card
        sx={{
          height: 370,
          margin: "1rem",
          cursor: "pointer",
        }}
        onClick={handleCardClick}
      >
        <CardMedia
          component="img"
          image={image}
          title={title}
          sx={{
            height: 240,
            objectFit: "contain",
            width: "100%",
            padding: "1rem",
          }}
        />
        <CardContent sx={{ flex: 1, marginLeft: { xs: "0.8rem", md: 0 } }}>
          <Typography
            gutterBottom
            component="div"
            sx={{
              fontSize: "1rem",
              fontWeight: { xs: "600", md: "700" },
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: { xs: "600", md: "700" },
              color: "#64748b",
              marginY: "0.5rem",
            }}
          >
            by FabFinds
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: { xs: "600", md: "700" },
              }}
            >
              {`Rs.${price}`}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: { xs: "600", md: "700" },
                marginLeft: "auto",
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
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

ProductsCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ProductsCard;
