import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ActionButton from "src/components/atoms/buttons/actionButton";
import { useAppContext } from "src/appContext";

export default function HeroDescribtion({
  darkBackgroundColor,
  title,
  describtion,
  callToAction,
}) {
  const theme = useTheme();
  const { setStates } = useAppContext();
  const handleClickOpen = () => {
    setStates.dialogComponente(true);
  };

  const Heading = (props) => {
    return (
      <>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          color={darkBackgroundColor && "text.tertiary"}
          sx={{ display: { xs: "none", md: "block" }, fontWeight: 400 }}
        >
          {props.children}
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          color={darkBackgroundColor && "text.tertiary"}
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
          component="h2"
          gutterBottom
          color={darkBackgroundColor ? "text.quaternary" : "text.secondary"}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          {props.children}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h2"
          gutterBottom
          color={darkBackgroundColor ? "text.quaternary" : "text.secondary"}
          align="center"
          sx={{
            display: { xs: "block", md: "none" },
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
        sx={{
          pb: { xs: 5, mb: 10 },
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Grid item xs={12} sx={{ width: "100%" }}>
          <Subheading>{describtion}</Subheading>
        </Grid>
        <Grid item xs={12}>
          <Heading>{title}</Heading>
        </Grid>{" "}
        <Grid item xs={12} sx={{ width: { xs: "100%", md: "fit-content" } }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <ActionButton
              variant="contained"
              text={callToAction.buttonText}
              onClick={callToAction?.specialAction ? handleClickOpen : null}
              href={callToAction?.specialAction ? null : callToAction?.url}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
