import Grid from "@mui/material/Grid";
import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";

import HeroImage from "src/components/atoms/hero/heroimage";
import HeroDescribtion from "src/components/atoms/hero/herodescribtion";

export default function Hero({ content }) {
  return (
    <SectionWrapper topDistance>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <HeroDescribtion />
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <HeroImage />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
