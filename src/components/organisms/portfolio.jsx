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
    mainImage: Property3.src,
    title: "Eiusmod tempor Haus",
    describtion: "Detail Heading Lorem Ipsum",
    link: "/touren/test",
  },
  {
    mainImage: Property3.src,
    title: "Eiusmod tempor Haus",
    describtion: "Detail Heading Lorem Ipsum",
    link: "/touren/test",
  },
  {
    mainImage: Property3.src,
    title: "Eiusmod tempor Haus",
    describtion: "Detail Heading Lorem Ipsum",
    link: "/touren/test",
  },
  {
    mainImage: Property3.src,
    title: "Eiusmod tempor Haus",
    describtion: "Detail Heading Lorem Ipsum",
    link: "/touren/test",
  },
];

export default function Portfolio({ content }) {
  const {
    heading: {
      heading: title = "Default Heading",
      subheading: describtion = "Default Describtion",
    } = {},
    touren = propertyArray,
  } = content != null ? content : {};

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
          <SectionHeading heading={title} subHeading={describtion} />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={{ xs: 5, md: 5 }}
            //columns={{ xs: 12, md: 12 }}
          >
            {touren.map(({ title, describtion, mainImage, slug }, index) => {
              //const propertyURL = new URL(link); //fuer TS URL

              return (
                <Grid item xs={12} sm={6} md={3} key={title + index}>
                  <PropertyCard
                    propertyImage={mainImage}
                    propertyName={title}
                    propertyDescribtion={describtion}
                    propertyURL={slug}
                  />
                </Grid>
              );
            })}
            <Grid item xs={12} sx={{ width: "100%" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
              >
                <ActionButton
                  variant="contained"
                  text={"Mehr"}
                  href={"/touren"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
