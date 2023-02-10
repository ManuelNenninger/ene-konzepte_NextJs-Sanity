import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import ArrowButton from "src/components/atoms/buttons/arrowButton";

export default function BoxSx() {
  const Heading = (props) => {
    return (
      <>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 400,
            pr: { xs: 0, md: 30 },
            display: { xs: "none", md: "block" },
          }}
        >
          {props.children}
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 400,
            pr: { xs: 0, md: 30 },
            display: { xs: "block", md: "none" },
          }}
        >
          {props.children}
        </Typography>
      </>
    );
  };

  const Describtion = ({ children }) => {
    return (
      <>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={2}
        >
          {" "}
          <Grid item xs={12}>
            <Typography variant="subtitle1" component="h1" gutterBottom>
              {children}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ArrowButton buttonURL={"/"} /> {/*change URL*/}
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper fullDistanceTop>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={{ xs: 2, md: 2 }}
      >
        <Grid item xs={12} md={6}>
          <Heading>Let's Go On A Journey And Find Your Dream Home</Heading>
        </Grid>
        <Grid item xs={12} md={6}>
          <Describtion>
            Lorem ipsum dolor sit amet, cons ectetur adip cing ellit, selad do
            eiusmod tempor tolos dolor the old she roltoy incid idunt labore
            ellt dolore magna the alora aliqua.Lorem ipsum dolor sit amet, cons
            ectetur adip cing ellit, selad do eiusmod tempor tolos dolor the old
            she roltoy incid idunt labore ellt dolore magna the alora aliqua.
          </Describtion>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
