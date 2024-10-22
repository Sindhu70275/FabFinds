import { Box, Typography } from "@mui/material";
import CustomButton from "./buttons/CustomButton";

const NoDataFound = ({
  imageSrc,
  heading,
  subHeading,
  label,
  variant,
  onClick,
}) => {
  return (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <Box
        component="img"
        src={imageSrc}
        alt="No Data"
        sx={{
          width: { xs: "200px", sm: "250px", md: "300px" },
          marginBottom: "1rem",
        }}
      />
      <Typography variant="h5" component="h2" gutterBottom>
        {heading}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {subHeading}
      </Typography>
      {label && (
        <Box sx={{ padding: 3 }}>
          <CustomButton label={label} variant={variant} onClick={onClick} />
        </Box>
      )}
    </Box>
  );
};

export default NoDataFound;
