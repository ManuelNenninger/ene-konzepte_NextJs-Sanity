import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

import ArrowButton from "src/components/atoms/buttons/arrowButton";

import Property1 from "public/property1.png";

// interface Props {
//   propertyImage: string;
//   propertyName: string;
//   propertyDescribtion: string;
//   propertyURL: URL;
// }

export default function PropertyCard({
  propertyImage,
  propertyName = "Lorem Ipsum Haus",
  propertyDescribtion = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  propertyURL,
}) {
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
    <Card
      sx={{
        maxWidth: "100%",
        backgroundColor: theme.palette.tertiary.main,
        borderRadius: 0,
        boxShadow: "none",
        pb: 5,
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: { xs: 300, md: 500 } }}
        image={propertyImage ? propertyImage : Property1.src}
        title={"Bild für" + propertyName}
      />
      <CardContent sx={{ pt: 5 }}>
        <Typography gutterBottom variant="h4" component="div">
          {propertyName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {propertyDescribtion}
        </Typography>
      </CardContent>
      <CardActions>
        <ArrowButton buttonURL={propertyURL} />
      </CardActions>
    </Card>
  );
}
