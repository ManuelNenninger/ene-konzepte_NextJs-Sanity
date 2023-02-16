import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import SectionWrapper from "../atoms/wrapperElements/sectionWrapper";

export default function Footer({ content = {} }) {
  let {
    brandname = "",
    brandSlogan = "Your agency with values ",
    footerrowbuilder = [
      {
        metaTitle: "Service",
        linkbuilder: [
          { linkname: "Versand", url: "/versand" },
          { linkname: "FAQ", url: "/faq" },
        ],
      },
      {
        metaTitle: "Rechtliches",
        linkbuilder: [
          { linkname: "Impressum", url: "/impressum" },
          { linkname: "Darenschutzerklärung", url: "/datenschutz" },
        ],
      },
    ],
    footersocial = {
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      twitter: "https://twitter.com/",
    },
  } = content;

  const columnsNumber =
    footersocial !== null
      ? footerrowbuilder.length + 1
      : footerrowbuilder.length;

  const SocialGrid = (props) => {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent={{ md: "flex-start", xs: "space-around" }}
          alignItems="flex-start"
          spacing={2}
        >
          {footersocial?.instagram && (
            <Grid item>
              <IconButton
                color="primary"
                aria-label="add an alarm"
                href={footersocial.instagram}
              >
                <InstagramIcon />
              </IconButton>
            </Grid>
          )}
          {footersocial?.facebook && (
            <Grid item>
              <IconButton
                color="primary"
                aria-label="add an alarm"
                href={footersocial.facebook}
              >
                <FacebookRoundedIcon />
              </IconButton>
            </Grid>
          )}
          {footersocial?.twitter && (
            <Grid item>
              <IconButton
                color="primary"
                aria-label="add an alarm"
                href={footersocial.twitter}
              >
                <TwitterIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </>
    );
  };

  const GridSocial = () => {
    return (
      <>
        <Grid item xs={12} md={parseInt(12 / columnsNumber)}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom color="text.tertiary">
                Socials
              </Typography>
            </Grid>
            <SocialGrid />
          </Grid>
        </Grid>
      </>
    );
  };
  const GridLinks = () => {
    return (
      <>
        {footerrowbuilder.map(function (obj, index) {
          return (
            <>
              <Grid
                key={"Footerrot_" + obj.metaTitle + index}
                item
                xs={12}
                md={parseInt(12 / columnsNumber)}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems={{ xs: "center", md: "flex-start" }}
                  spacing={1}
                >
                  <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom color="text.tertiary">
                      {obj.metaTitle}
                    </Typography>
                  </Grid>
                  {obj.linkbuilder.map(function (linkObj, linkIndex) {
                    return (
                      <>
                        <Grid item key={linkObj.linkname + linkIndex}>
                          <Link href={linkObj.url}>
                            <Typography
                              variant="h6"
                              color="text.quaternary"
                              sx={{ fontWeight: 300 }}
                              gutterBottom
                            >
                              {linkObj.linkname}
                            </Typography>
                          </Link>
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
              </Grid>
            </>
          );
        })}
      </>
    );
  };

  const InfoGrid = (props) => {
    return (
      <>
        <Grid
          container
          direction="row"
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          spacing={3}
          // sx={{
          //   float: "right",
          //   "& > div": {
          //     pr: 5,
          //     borderRight: 1,
          //   },
          // }}
        >
          <GridLinks />
          {footersocial != null && <GridSocial />}
        </Grid>
      </>
    );
  };

  const BrandGrid = () => {
    return (
      <>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems={{ xs: "center", md: "flex-start" }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h3"
              gutterBottom
              align="center"
              color="text.tertiary"
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {Object.keys(content).length !== 0 ? brandname : "Brandnamé"}
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              color="text.tertiary"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              {Object.keys(content).length !== 0 ? brandname : "Brandnamé"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              gutterBottom
              color="text.quaternary"
              align="center"
              sx={{ fontWeight: 400 }}
            >
              {brandSlogan != null && brandSlogan}
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <SectionWrapper footer topDistance bottomDistance secondaryBackgroundColor>
      <Grid
        container
        direction="row"
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems="flex-start"
        spacing={6}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            width: "100%",
          }}
        >
          <BrandGrid />
        </Grid>
        <Grid item xs={12} md={7} sx={{ width: "100%" }}>
          <InfoGrid />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
