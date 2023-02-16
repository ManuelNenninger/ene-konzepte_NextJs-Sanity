import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
//https://github.com/nolimits4web/swiper/issues/5574
//import of costume Modules
import ImageComponent from "src/components/atoms/imageCarousel/imageComponent";

// Import Swiper styles
import "swiper/css";
//Default Images
import Property1 from "public/property1.png";
import Property2 from "public/property2.jpg";
import Property3 from "public/property3.jpg";
import Property4 from "public/property4.jpg";

const defaultContent = [
  {
    title: "Bla",
    imgPath: Property1.src,
  },
  {
    title: "Hannah Cosinus",
    imgPath: Property2.src,
  },
  {
    title: "Shell",
    imgPath: Property3.src,
  },
  {
    title: "Herr  OMG",
    imgPath: Property4.src,
  },
];

export default function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const maxSteps = matches ? defaultContent.length - 1 : defaultContent.length;

  const CustomeMobileStepper = styled(MobileStepper)(({ theme }) => ({
    "& .MuiMobileStepper-dotActive": {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  const MobileStepperSwiperComponent = () => {
    const swiper = useSwiper();
    const handleNext = () => {
      swiper.slideNext();
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      swiper.slidePrev();
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
      <CustomeMobileStepper
        sx={{
          mt: { xs: 5, md: 10 },
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            color="secondary"
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Weiter
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            color="secondary"
            size="large"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Zurück
          </Button>
        }
      />
    );
  };

  return (
    <>
      <Swiper
        slidesPerView={matches ? 2 : 1}
        onSlideChange={(e) => setActiveStep(e.activeIndex)}
        className="mySwiper"
      >
        {defaultContent.map((step, index) => {
          return (
            <div key={"Image_" + step.title}>
              <SwiperSlide>
                <ImageComponent {...step} />
              </SwiperSlide>
            </div>
          );
        })}
        <MobileStepperSwiperComponent />
      </Swiper>
    </>
  );
}
