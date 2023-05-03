import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";

const defaultContent = [
  { title: "Preis", describtion: "500.000 EUR" },
  { title: "Wohnfläche", describtion: "626 m^2" },
  { title: "Zimmer", describtion: "6" },
  { title: "Grundstück", describtion: "1024 m^2" },
];

export default function BoxSx({ content }) {
  const { corporateValueArray = defaultContent } =
    content != null ? content : {};

  const GridItem = ({ title, describtion, index }) => {
    return (
      <>
        <Grid item xs={12} md={6} lg={3} key={title + index}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              {" "}
              <Typography variant="h4" gutterBottom color="text.tertiary">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Typography
                variant="subtitle1"
                gutterBottom
                color="text.quaternary"
              >
                {describtion}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper topDistance bottomDistance secondaryBackgroundColor>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={{ xs: 4, md: 5, lg: 0 }}
      >
        {corporateValueArray.map((item, index) => {
          return (
            <>
              <GridItem {...item} index={index} />
            </>
          );
        })}
      </Grid>
    </SectionWrapper>
  );
}
