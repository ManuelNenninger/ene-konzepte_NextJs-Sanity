import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Testimonial({
  name,
  location,
  describtion,
  imgPath,
  index,
}) {
  const Person = () => {
    return (
      <>
        <Grid
          key={"Person_" + index}
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ px: { xs: 2, md: 5, lg: 20 } }}
          spacing={1}
        >
          {" "}
          <Grid item xs={12}>
            <Box
              component="img"
              sx={{
                height: 120,
                width: 120,
                borderRadius: "100%",
                display: "block",
                overflow: "hidden",
              }}
              src={imgPath}
              alt={name}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h4">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ mb: 2, fontWeight: "400" }}
            >
              {location}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              sx={{ fontWeight: "300" }}
            >
              “{describtion}”
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Person />
    </>
  );
}
