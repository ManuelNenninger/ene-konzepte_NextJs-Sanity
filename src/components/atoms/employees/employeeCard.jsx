import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import Propertie_one from "public/person1.jpg";

// interface Props {
//   name: string;
//   position: string;
//   imageSrc: string;
// }

export default function MediaCard({
  name = "Test Name",
  position = "Test position",
  imageSrc = Propertie_one.src,
}) {
  const theme = useTheme();

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
        sx={{ height: 300 }}
        image={imageSrc}
        title={name}
      />
      <CardContent sx={{ pt: 5 }}>
        <Typography gutterBottom variant="h5" align="center" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary">
          {position}
        </Typography>
      </CardContent>
    </Card>
  );
}
