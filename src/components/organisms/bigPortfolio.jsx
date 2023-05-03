import * as React from "react";
import Grid from "@mui/material/Grid";
import { useGetAllInserate } from "src/components/atoms/fetcher/fetch";

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
    slug: "test",
  },
  {
    propertyImage: Property2.src,
    propertyName: "Lorem Ipsum Home",
    propertyDescribtion: "Detail Heading Lorem Ipsum",
    slug: "test",
  },
  {
    propertyImage: Property3.src,
    propertyName: "Eiusmod tempor Haus",
    propertyDescribtion: "Detail Heading Lorem Ipsum",
    slug: "test",
  },
];

export default function BigPortfolio({ content }) {
  const { portfolio, showPortfolioButton = true } =
    content != null ? content : {};

  const { data, isValidating, size, setSize, hitEnd } = useGetAllInserate({
    initialData: [portfolio],
    preview: false,
  });
  console.log(data);
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
            spacing={{ xs: 5, md: 5 }}
            //columns={{ xs: 12, md: 12 }}
          >
            {data &&
              data.map((parentArray, i) =>
                parentArray.map(
                  ({ title, describtion, mainImage, slug }, index) => {
                    //const propertyURL = new URL(link); //fuer TS URL

                    return (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={"Tour_" + index + i + title}
                      >
                        <PropertyCard
                          propertyImage={mainImage}
                          propertyName={title}
                          propertyDescribtion={describtion}
                          propertyURL={slug}
                        />
                      </Grid>
                    );
                  }
                )
              )}
            <Grid item xs={12} sx={{ width: "100%" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
              >
                <ActionButton
                  disabled={hitEnd}
                  //disabled={true}
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
