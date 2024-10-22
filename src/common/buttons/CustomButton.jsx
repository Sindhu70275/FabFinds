import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CustomButton = ({
  label,
  variant,
  onClick,
  href,
  target,
  width,
  buttonSx,
}) => {
  return (
    <Button
      sx={{
        backgroundColor: variant === "Contained" ? "#0967d2" : "white",
        color: variant === "Contained" ? "white" : "#0967d2",
        border: variant === "Contained" ? "none" : "2px solid #0967d2",
        borderRadius: "0.4rem",
        "&.MuiButtonBase-root:hover": {
          background: variant === "Contained" ? "#0967d2" : "",
          color: variant === "Contained" ? "white" : "#0967d2",
          borderColor: "inherit",
        },
        width: { width },
        ...buttonSx,
      }}
      onClick={onClick}
      target={target}
      href={href}
    >
      <Typography sx={{ textTransform: "capitalize" }}>{label}</Typography>
    </Button>
  );
};

export default CustomButton;
