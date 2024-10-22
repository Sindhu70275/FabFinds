import { useNavigate } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActions, CardMedia, Stack } from "@mui/material";

import { fabFindsBio } from "../constants/constants";
import CustomButton from "../common/buttons/CustomButton";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/products");
  };
  return (
    <Grid
      container
      spacing={6}
      sx={{
        flexDirection: { xs: "column-reverse", md: "row" },
        marginTop: { xs: "1rem", md: "5.7rem" },
        paddingX: { xs: "1rem", md: "6rem" },
      }}
    >
      <Grid item xs={12} md={7}>
        <Stack>
          <CardContent>
            <Typography
              component="div"
              sx={{
                color: "#1e293b",
                fontSize: { xs: "1.6rem", md: "2.5rem" },
                fontWeight: "700",
              }}
            >
              {fabFindsBio.title}
            </Typography>
            <Typography
              variant="body1"
              color="#475569"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
            >
              {fabFindsBio.description}
            </Typography>
          </CardContent>
        </Stack>
        <CardActions>
          <CustomButton
            label="Shop Now"
            variant="Contained"
            width="10rem"
            onClick={handleShopNowClick}
          />
        </CardActions>
      </Grid>
      <Grid item xs={12} md={5}>
        <CardMedia
          component="img"
          image="https://burst.shopifycdn.com/photos/fashion-model-in-pink.jpg?width=1000&format=pjpg&exif=0&iptc=0"
          alt="home-profile"
          sx={{
            height: 450,
            objectFit: { xs: "cover", md: "contain" },
            width: "100%",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
