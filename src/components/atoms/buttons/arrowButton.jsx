import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

export default function ArrowButton({ buttonURL }) {
  const theme = useTheme();
  const ColorButton = styled(Button)(({ theme }) => ({
    //Für TS check Documentation in MUI
    color: theme.palette.secondary.main, // secondary main
    backgroundColor: "none",
    border: 1,
    borderColor: "black",
    "&:hover": {
      color: theme.palette.secondary.light, //Secondary light
      backgroundColor: theme.palette.primary.main,
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: theme.palette.error.main, //Error Color
    },
    "&:focus": {
      boxShadow: "none",
      backgroundColor: theme.palette.error.main, //Error Color
    },
  }));
  return (
    <>
      <ColorButton endIcon={<ArrowRightAltIcon />}>
        <Typography
          variant="body2"
          sx={{ borderBottom: 1, borderColor: theme.palette.secondary.main }}
        >
          <Link href={buttonURL ? buttonURL : "/"}>See details </Link>
        </Typography>
      </ColorButton>
    </>
  );
}
