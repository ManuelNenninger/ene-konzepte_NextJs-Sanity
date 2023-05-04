import Typography from "@mui/material/Typography";
import SectionWrapper from "../src/components/atoms/wrapperElements/sectionWrapper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import ErrorImage from "../public/404.svg";
import WartungImage from "../public/WebsiteCreator-cuate.svg";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <SectionWrapper fullViewHeight>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ minHeight: "100%" }}
        >
          <Grid item sx={{ pt: 5 }}>
            <Box sx={{ p: 1 }}>
              <Box>
                <Image
                  src={WartungImage}
                  width={500}
                  height={500}
                  layout="responsive"
                  alt="404 - Diese Seite exestiert nicht"
                />
              </Box>
            </Box>
          </Grid>
          {/* <Grid item>
            <Link href="/">
              <Typography variant="h2" gutterBottom>
                Zurück zur HomePage
              </Typography>
            </Link>
          </Grid> */}
          <Grid item>
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
        </Grid>
      </SectionWrapper>
    </>
  );
}
