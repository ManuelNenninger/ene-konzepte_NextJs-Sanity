import Typography from "@mui/material/Typography";
import SectionWrapper from "../src/components/atoms/wrapperElements/sectionWrapper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import ErrorImage from "../public/404.svg";
import WartungImage from "../public/WebsiteCreator-cuate.svg";
import Link from "next/link";

export default function NotFoundPage() {
  const ResponsiveText = () => {
    return (
      <>
        <Grid item sx={{ display: { xs: "none", md: "block" } }}>
          <Typography variant="h2" gutterBottom>
            Die Seite ist derzeit in bearbeitung.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Bei Anfragen für Segwaytouren bitte Mail an
          </Typography>
          <Typography variant="h4" gutterBottom>
            info@ene-konzepte.de
          </Typography>
          <Typography variant="h4" gutterBottom>
            +49 173 8420261
          </Typography>
        </Grid>
        <Grid item sx={{ display: { xs: "block", md: "none" } }}>
          <Typography variant="h4" gutterBottom>
            Die Seite ist derzeit in bearbeitung.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Bei Anfragen für Segwaytouren bitte Mail an
          </Typography>
          <Typography variant="h6" gutterBottom>
            info@ene-konzepte.de
          </Typography>
          <Typography variant="h6" gutterBottom>
            +49 173 8420261
          </Typography>
        </Grid>
      </>
    );
  };

  return (
    <>
      <SectionWrapper fullViewHeight>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ position: "relative" }}
          >
            <Grid item xs={12} sx={{ width: "100%" }}>
              <Box
                component={Image}
                src={WartungImage}
                height={500}
                width="100%"
                layout="responsive"
                alt="404 - Diese Seite exestiert nicht"
              />{" "}
            </Grid>
          </Grid>
          {/* <Grid item>
            <Link href="/">
              <Typography variant="h2" gutterBottom>
                Zurück zur HomePage
              </Typography>
            </Link>
          </Grid> */}
          <ResponsiveText />
        </Grid>
      </SectionWrapper>
    </>
  );
}
