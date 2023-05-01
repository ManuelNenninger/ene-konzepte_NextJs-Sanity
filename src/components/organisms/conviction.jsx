import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useAppContext } from "src/appContext";
import { urlFor } from "lib/sanity";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import ActionButton from "src/components/atoms/buttons/actionButton";

import PropertyDefault from "public/DefaultConviction.jpg";

export default function Conviction({ content }) {
  const { setStates } = useAppContext();
  const handleClickOpen = () => {
    setStates.dialogComponente(true);
  };
  const {
    heading = { heading: "Our best offers", subheading: "Luxury at its best" },
    mainImage = null,
    callToAction = { buttonText: "Contect us", specialAction: true, url: null },
  } = content != null ? content : {};

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
              {heading.subheading}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h3" //Ggf. h2
              gutterBottom
              sx={{ fontWeight: 400 }}
            >
              {heading.heading}{" "}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <ActionButton
                variant="contained"
                text={callToAction.buttonText}
                onClick={callToAction?.specialAction ? handleClickOpen : null}
                href={callToAction?.specialAction ? null : callToAction?.url}
              />
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
            src={
              mainImage != null ? urlFor(mainImage).url() : PropertyDefault.src
            }
            alt={heading != null ? heading?.heading : "Contact Us"}
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
