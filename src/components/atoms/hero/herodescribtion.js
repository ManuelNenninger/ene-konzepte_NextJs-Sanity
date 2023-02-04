import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export default function HeroDescribtion(props) {
  const theme = useTheme();

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
          gutterBottom
          sx={{
            display: { xs: "none", md: "block" },
            color: theme.palette.secondary.light,
          }}
        >
          {props.children}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          gutterBottom
          sx={{
            display: { xs: "block", md: "none" },
            color: theme.palette.secondary.light,
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
        alignItems="flex-start"
        sx={{ pb: { xs: 5, mb: 10 }, width: { xs: "100%", md: "50%" } }}
      >
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Subheading>Munich based Real Estate</Subheading>
        </Grid>
        <Grid item xs={12}>
          <Heading>Außergewöhnliches Design. Herausragender Service.</Heading>
        </Grid>{" "}
      </Grid>
    </>
  );
}
