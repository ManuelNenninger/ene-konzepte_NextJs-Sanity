import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import SectionHeading from "src/components/atoms/headings/sectionHeading";
import SwiperCarousel from "src/components/atoms/imageCarousel/swiperImageCarousel";

export default function BoxSx({ content }) {
  const {
    heading = { heading: "Our best offers", subheading: "Luxury at its best" },
    inseratImageArray = null,
  } = content != null ? content : {};
  return (
    <SectionWrapper topDistance bottomDistance>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={{ xs: 5, md: 10 }}
      >
        <Grid item xs={12}>
          <SectionHeading
            heading={heading.heading}
            subHeading={heading.subheading}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <SwiperCarousel content={inseratImageArray} />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
