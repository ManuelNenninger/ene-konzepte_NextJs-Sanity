import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import SectionHeading from "src/components/atoms/headings/sectionHeading";

import PropertyDefault from "public/detailExample.jpg";

const DefaultContent = [
  {
    title: "Experience in the Market",
    describtion:
      "Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed nec lorem. Duis blandit lorem quis tincidunt rhoncus. Duis eu finibus velit.",
  },
  {
    title: "Driven for excellence",
    describtion:
      "ignissim vitae ultrices et, luctus id urna. spendisse mollis tincidunt tortor vel malesuada. In nec dapibus sapien. Aliquam et lacus eget quam dignissim fringilla sed vitae sapien.",
  },
  {
    title: "Banking Network",
    describtion:
      "ignissim vitae ultrices et, luctus id urna. spendisse mollis tincidunt.",
  },
];

export default function BoxSx() {
  const ContentGrid = () => {
    return (
      <>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={10}
          sx={{ pr: { xs: 10, md: 20 } }}
        >
          {DefaultContent.map(({ title, describtion }, index) => {
            return (
              <>
                <Grid item xs={12} key={title + index}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={0}
                  >
                    <Grid item>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ fontWeight: 500 }}
                      >
                        {title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      {" "}
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{ fontWeight: 300 }}
                      >
                        {describtion}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Grid>
      </>
    );
  };

  const ImageCoontent = () => {
    return (
      <>
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            pr: { xs: 0, md: 10 },
            height: { xs: 500, md: 600, lg: 720 },
          }}
        >
          <Box
            component="img"
            src={PropertyDefault.src}
            alt="Unsere Unternehmenswerte"
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
      </>
    );
  };
  return (
    <SectionWrapper topDistance bottomDistance tertiaryBackgroundColor>
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
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={{ xs: 5, md: 0 }}
          >
            <Grid item xs={12} md={6}>
              <ImageCoontent />
            </Grid>
            <Grid item xs={12} md={6}>
              <ContentGrid />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
