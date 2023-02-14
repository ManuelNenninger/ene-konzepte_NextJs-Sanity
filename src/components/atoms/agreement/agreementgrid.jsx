import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";

//Default Data
const AgreementArray = [
  {
    icon: "front_hand",
    heading: "Trust Us - You're In Good Hands",
    describtion:
      "Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed nec lorem. Duis blandit lorem.",
  },
  {
    icon: "tips_and_updates",
    heading: "Innovative Agency",
    describtion:
      "Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed nec lorem. Duis blandit lorem quis tincidunt rhoncus. Duis eu finibus velit.",
  },
  {
    icon: "new_releases",
    heading: "Professionalism at it´s finest",
    describtion:
      "Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed nec lorem. Duis blandit lorem.",
  },
  {
    icon: "diversity_3",
    heading: "Network",
    describtion:
      "Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed nec lorem. Duis blandit lorem quis tincidunt rhoncus.",
  },
];

export default function AgreementGrid() {
  const AgreementCell = ({ icon, heading, describtion }) => {
    return (
      <>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          sx={{ px: { xs: 10, md: 15 } }}
        >
          <Grid item xs={12}>
            <Icon sx={{ fontSize: 60 }}>{icon}</Icon>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              color="text.main"
              sx={{ fontWeight: 300 }}
            >
              {heading}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body1"
              component="h2"
              align="center"
              color="text.main"
              gutterBottom
            >
              {describtion}
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={10}
      >
        {AgreementArray.map((obj, index) => {
          return (
            <Grid xs={12} md={6} item key={"agreement_" + index}>
              <AgreementCell {...obj} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
