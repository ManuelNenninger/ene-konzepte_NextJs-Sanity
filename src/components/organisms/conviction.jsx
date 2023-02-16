import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import ActionButton from "src/components/atoms/buttons/actionButton";

import PropertyDefault from "public/DefaultConviction.jpg";

export default function Conviction() {
  const ContentGrid = () => {
    return (
      <>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ pr: { xs: 0, md: 20, xl: 30 } }}
        >
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              gutterBottom
              sx={{}}
            >
              You are in Good Hands
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3" //Ggf. h2
              gutterBottom
              sx={{ fontWeight: 400 }}
            >
              Lorem Ipsum lacinia luctus.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <ActionButton variant="contained" text="Contect Us" />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  const ImageCoontent = () => {
    return (
      <>
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            height: { xs: 500, md: 600, lg: 720 },
          }}
        >
          <Box
            component="img"
            src={PropertyDefault.src}
            alt="Flowers in Chania" //<<<<<<------- Anpassen
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
      </>
    );
  };

  return (
    <SectionWrapper topDistance>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 5, md: 0 }}
      >
        <Grid item xs={12} md={6}>
          <ContentGrid />
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageCoontent />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
