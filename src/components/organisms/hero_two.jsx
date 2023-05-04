import Box from "@mui/material/Box";
import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";

import HeroImage from "src/components/atoms/hero/heroimage";
import HeroDescribtion from "src/components/atoms/hero/herodescribtion";

export default function Hero_two({ content }) {
  const {
    darkBackgroundColor = true,
    title = "Außergewöhnliches Design. Herausragender Service",
    describtion = "Munich based Real Estate",
    mainImage,
    callToAction = { buttonText: "Contect us", specialAction: true, url: null },
  } = content != null ? content : {};
  return (
    <SectionWrapper fullViewHeight>
      <HeroImage mainImage={mainImage} title={title} />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zindex: 1,
          background: {
            xs: "rgba(255,255,255,0.3)",
            md: "linear-gradient(to left, rgba(231, 236, 239, 0) 0%,rgba(231, 236, 239,1) 100%)",
          },
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zindex: 2,
          align: "center",
          display: "flex" /* set display property to flex */,
          alignItems: "center" /* center the content vertically */,
          justifyContent: {
            xs: "center",
            md: "flex-start",
          } /* center the content horizontally */,
        }}
      >
        <HeroDescribtion
          title={title}
          describtion={describtion}
          callToAction={callToAction}
        />{" "}
      </Box>
    </SectionWrapper>
  );
}
{
  /*
   * Das Image geht über die Ganze section mit den Propertys "fill" aus Next7image
   * Der Overlay mit dem Gradient ist absolut und geht von top: o bis left: 0 und 100% über den Parent, also die Section.
   * D.h Paddings Links und rechts werden hier nicht applied
   * die Describtion ist auch absolut. Hier aber nur 100% des Parent, d.h der Section Wrapper. Keine Top: 0 und Left. 0
   */
}
