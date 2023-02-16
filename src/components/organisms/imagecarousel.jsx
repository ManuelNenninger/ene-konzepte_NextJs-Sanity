import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import SectionHeading from "src/components/atoms/headings/sectionHeading";
import SwiperCarousel from "src/components/atoms/imageCarousel/swiperImageCarousel";

export default function BoxSx() {
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
            heading={"Our best offers"}
            subHeading={"Luxury at its bext"}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <SwiperCarousel />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
