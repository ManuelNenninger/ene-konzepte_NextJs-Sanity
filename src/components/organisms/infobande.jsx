import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import ArrowButton from "src/components/atoms/buttons/arrowButton";

export default function BoxSx({ content }) {
  const {
    darkBackgroundColor = true,
    title = "Let's Go On A Journey And Find Your Lorem Ipsum",
    describtion = "Lorem ipsum dolor sit amet, cons ectetur adip cing ellit, selad do eiusmod tempor tolos dolor the old she roltoy incid idunt labore ellt dolore magna the alora aliqua.Lorem ipsum dolor sit amet, cons ectetur adip cing ellit",
    arrowButton = false,
    button = null,
  } = content != null ? content : {};

  const Heading = (props) => {
    return (
      <>
        <Typography
          variant="h3"
          gutterBottom
          color={darkBackgroundColor && "text.tertiary"}
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
          color={darkBackgroundColor && "text.tertiary"}
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
            <Typography
              variant="subtitle1"
              component="h1"
              gutterBottom
              color={darkBackgroundColor && "text.tertiary"}
            >
              {children}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {arrowButton && <ArrowButton darkBackgroundColor buttonURL={"/"} />}
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper
      topDistance
      bottomDistance
      secondaryBackgroundColor={darkBackgroundColor}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={{ xs: 2, md: 2 }}
      >
        <Grid item xs={12} md={6}>
          <Heading>{title}</Heading>
        </Grid>
        <Grid item xs={12} md={6}>
          <Describtion>{describtion}</Describtion>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
