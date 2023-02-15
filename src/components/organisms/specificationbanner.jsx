import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";

const defaultContent = [
  { title: "Preis", value: "500.000 EUR" },
  { title: "Wohnfläche", value: "626 m^2" },
  { title: "Zimmer", value: "6" },
  { title: "Grundstück", value: "1024 m^2" },
];

export default function BoxSx() {
  const GridItem = ({ title, value, index }) => {
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
              <Typography variant="h4" gutterBottom>
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Typography variant="subtitle1" gutterBottom>
                {value}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper topDistance bottomDistance>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={{ xs: 4, md: 5, lg: 0 }}
      >
        {defaultContent.map((item, index) => {
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
