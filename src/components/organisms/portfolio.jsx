import * as React from "react";
import Grid from "@mui/material/Grid";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import PropertyCard from "src/components/atoms/portfolio/propertyCard";
import SectionHeading from "src/components/atoms/headings/sectionHeading";
import ActionButton from "src/components/atoms/buttons/actionButton";
//Default Images
import Property1 from "public/property1.png";
import Property2 from "public/property2.jpg";
import Property3 from "public/property3.jpg";
import Property4 from "public/property4.jpg";
//Default Propertys
const propertyArray = [
  {
    propertyImage: Property4.src,
    propertyName: "Lorem Haus am Rande Münchens",
    propertyDescribtion: "Detail Heading Lorem Ipsum",
    link: "http://www.google.ch",
  },
  {
    propertyImage: Property2.src,
    propertyName: "Lorem Ipsum Home",
    propertyDescribtion: "Detail Heading Lorem Ipsum",
    link: "http://www.google.ch",
  },
  {
    propertyImage: Property3.src,
    propertyName: "Eiusmod tempor Haus",
    propertyDescribtion: "Detail Heading Lorem Ipsum",
    link: "http://www.google.ch",
  },
];

export default function Portfolio() {
  return (
    <SectionWrapper fullDistanceTop bottomDistance>
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
        <Grid item xs={12}>
          <Grid
            container
            spacing={{ xs: 5, md: 10 }}
            columns={{ xs: 12, md: 12 }}
          >
            {propertyArray.map(
              (
                { propertyImage, propertyName, propertyDescribtion, link },
                index
              ) => {
                const propertyURL = new URL(link); //fuer TS URL

                return (
                  <Grid item xs={12} md={6} key={propertyName + index}>
                    <PropertyCard
                      propertyImage={propertyImage}
                      propertyName={propertyName}
                      propertyDescribtion={propertyDescribtion}
                      propertyURL={propertyURL}
                    />
                  </Grid>
                );
              }
            )}
            <Grid item xs={12} sx={{ width: "100%" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
              >
                <ActionButton variant="contained" text={"Say Hello"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
