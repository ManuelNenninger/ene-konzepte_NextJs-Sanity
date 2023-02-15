import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";

export default function DetailedDescribtion({ content }) {
  const { aboutTitle = "Details", body = [] } = content == null ? {} : content;

  const DefaultBlockContent = () => {
    return (
      <>
        <Typography variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Typography>
      </>
    );
  };

  return (
    <SectionWrapper fullDistanceTop>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
        sx={{ pr: { xs: 0, md: 20 } }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            {aboutTitle}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <DefaultBlockContent />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
