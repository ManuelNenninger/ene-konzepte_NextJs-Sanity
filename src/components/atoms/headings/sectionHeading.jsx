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
          gutterBottom
          align="center"
          sx={{ display: { xs: "none", md: "block" }, fontWeight: 400 }}
        >
          {props.children}
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
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
          color="text.secondary"
          gutterBottom
          align="center"
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          {props.children}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          gutterBottom
          align="center"
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
        sx={{ px: { md: 20 } }}
      >
        <Grid item xs={12}>
          <Heading>{heading}</Heading>
        </Grid>
        <Grid item xs={12}>
          <Subheading>{subHeading}</Subheading>
        </Grid>
      </Grid>
    </>
  );
}
