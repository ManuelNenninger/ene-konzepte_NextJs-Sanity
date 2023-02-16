import * as React from "react";
import Grid from "@mui/material/Grid";

import Carousel from "src/components/atoms/testimonial/carousel";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import SectionHeading from "src/components/atoms/headings/sectionHeading";

export default function Testimonial() {
  return (
    <SectionWrapper topDistance bottomDistance tertiaryBackgroundColor>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={{ xs: 5, md: 10 }}
      >
        <Grid item xs={12}>
          <SectionHeading
            heading={"Our best offers"}
            subHeading={"Luxury at its bext"}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Carousel />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
