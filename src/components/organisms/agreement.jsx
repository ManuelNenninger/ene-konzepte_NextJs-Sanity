import * as React from "react";
import Grid from "@mui/material/Grid";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import SectionHeading from "src/components/atoms/headings/sectionHeading";
import AgreementGrid from "src/components/atoms/agreement/agreementgrid";

export default function Agreement() {
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
            heading={"You are in good hands"}
            subHeading={"Our values"}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: "100%" }}>
          <AgreementGrid />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
