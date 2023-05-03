import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { urlFor } from "lib/sanity";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";

import person_portrait from "public/person_portrait.jpg";

export default function BoxSx({ content }) {
  const {
    title = "Erzähl etwas über dich",
    describtion = "Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed nec lorem. Duis blandit lorem quis tincidunt rhoncus. Duis eu finibus velit. Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed nec lorem. Duis blandit lorem quis tincidunt rhoncus. Duis eu finibus velit.      ",
    mainImage,
  } = content != null ? content : {};

  const ContentGrid = () => {
    return (
      <>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          sx={{ pr: { xs: 10, md: 20 } }}
        >
          <Grid item>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            {" "}
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 300 }}
            >
              {describtion}
            </Typography>
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
            pr: { xs: 0, md: 10 },
            height: { xs: 500, md: 600, lg: 720 },
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              position: "relative",
            }}
          >
            <Box
              component={Image}
              src={
                mainImage != null
                  ? urlFor(mainImage).url()
                  : person_portrait.src
              }
              alt={title}
              fill
              sx={{ objectFit: "cover" }}
            />
          </Box>
        </Box>
      </>
    );
  };
  return (
    <SectionWrapper topDistance bottomDistance>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={{ xs: 5, md: 0 }}
      >
        <Grid item xs={12} md={6}>
          <ImageCoontent />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContentGrid />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
