import * as React from "react";
import Grid from "@mui/material/Grid";
import { useGetAllPosts } from "src/components/atoms/fetcher/fetch";

import PropertyCard from "src/components/atoms/portfolio/propertyCard";
import ActionButton from "src/components/atoms/buttons/actionButton";
import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";

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
    link: "/immobilien/test",
  },
  {
    propertyImage: Property2.src,
    propertyName: "Lorem Ipsum Home",
    propertyDescribtion: "Detail Heading Lorem Ipsum",
    link: "/immobilien/test",
  },
  {
    propertyImage: Property3.src,
    propertyName: "Eiusmod tempor Haus",
    propertyDescribtion: "Detail Heading Lorem Ipsum",
    link: "/immobilien/test",
  },
];

export default function BigPortfolio({ content }) {
  const { portfolio = propertyArray, showPortfolioButton = true } =
    content != null ? content : {};
  //   const { data, isValidating, size, setSize, hitEnd } = useGetAllPosts({
  //     initialData: [portfolio],
  //     preview: false,
  //   });

  {
    /* 
   * Um die pagination Data zu laden, verwende folgende syntax:
   * Die pagination data sieht aus wie: [[1,2,3], [3,4,5]]
        {data &&
          data.map((parentArray) =>
            parentArray.map((post) => {
              return <h1>{post.title}</h1>;
            })
          )} 
        */
  }

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
                  <Grid item xs={12} md={6} key={index}>
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
                <ActionButton
                  //disabled={hitEnd}
                  disabled={true}
                  variant="contained"
                  text={"Load More"}
                  onClick={() => setSize(size + 1)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* {data &&
          data.map((parentArray) =>
            parentArray.map((post) => {
              return <h1>{post.title}</h1>;
            })
          )} */}
      </Grid>
    </SectionWrapper>
  );
}
