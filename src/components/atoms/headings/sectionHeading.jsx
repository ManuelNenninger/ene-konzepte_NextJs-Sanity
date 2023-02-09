import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// interface props {
//   heading: string;
//   subHeading: string;
// }

export default function SectionHeading({ heading, subHeading }) {
  const Heading = (props) => {
    return (
      <>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ display: { xs: "none", md: "block" }, fontWeight: 400 }}
        >
          {props.children}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {props.children}
        </Typography>
      </>
    );
  };
  const Subheading = (props) => {
    return (
      <>
        <Typography
          variant="subtitle1"
          component="h2"
          color="text.secondary"
          gutterBottom
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          {props.children}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          color="text.secondary"
          gutterBottom
          sx={{
            display: { xs: "block", md: "none" },
            //color: theme.palette.secondary.light,
          }}
        >
          {props.children}
        </Typography>
      </>
    );
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Subheading>{subHeading}</Subheading>
        </Grid>
        <Grid item xs={12}>
          <Heading>{heading}</Heading>
        </Grid>
      </Grid>
    </>
  );
}
