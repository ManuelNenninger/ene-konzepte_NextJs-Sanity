import Grid from "@mui/material/Grid";
import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";

import HeroImage from "src/components/atoms/hero/heroimage";
import HeroDescribtion from "src/components/atoms/hero/herodescribtion";

export default function Hero({ content }) {
  const {
    darkBackgroundColor = true,
    title = "Außergewöhnliches Design. Herausragender Service",
    describtion = "Munich based Real Estate",
    mainImage,
  } = content != null ? content : {};
  return (
    <SectionWrapper
      topDistance
      secondaryBackgroundColor={darkBackgroundColor ? true : undefined}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <HeroDescribtion
            darkBackgroundColor={darkBackgroundColor}
            title={title}
            describtion={describtion}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <HeroImage mainImage={mainImage} title={title} />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
