import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";

import Testimonial from "src/components/atoms/testimonial/testimonial";
// import { useWindowSize } from "src/components/atoms/actions/useWindow";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
//https://github.com/nolimits4web/swiper/issues/5574
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const defaultTestimonials = [
  {
    name: "Richard McSilu",
    location: "Munich",
    describtion:
      "Best ageny ever. Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed.",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    name: "Hannah Cosinus",
    location: "Stuttgart",
    describtion:
      "Best ageny ever. Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed.",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    name: "Shell",
    location: "Herwelze",
    describtion:
      "Best ageny ever. Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    name: "Herr  OMG",
    location: "Berlin",
    describtion:
      "Best ageny ever. Suspendisse lacinia ornare luctus. Nulla ac nulla in mi consequat vestibulum sed.",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export default function Carousel({ content }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  //   const size = useWindowSize();
  {
    /*
     *1. Bei Screenweiten bis zu 900px wird kein Mobile Stepper mit Dots & Next/Prev Button angezeigt
     *2. Bei Screenweiten >= 900px wird der Standard Next/Prev Navigation von Swiper verwendet
     *3. die maxSteps, welche als Dots im MobileStepper angezeigt werden, orientieren sich
     * an den Testimonials pro Slide (z.B 4 Testimonials sind 4 Dots bei 1 Testimonial per Slide
     * und 3 Dots bei 2 Testimonials per Slide)
     * Aufgrund eines Issues hat der MobileStepper im Scope von Swiper zu sein und seinen eigenen Hook useSwiper
     */
  }
  const maxSteps = matches
    ? defaultTestimonials.length - 1
    : defaultTestimonials.length;

  const CustomeMobileStepper = styled(MobileStepper)(({ theme }) => ({
    "& .MuiMobileStepper-dotActive": {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  const MobileStepperSwiperComponent = ({ children }) => {
    const swiper = useSwiper();
    const handleNext = () => {
      swiper.slideNext();
      //setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      swiper.slidePrev();
      //setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
      <CustomeMobileStepper
        sx={{
          mt: { xs: 5, md: 10 },
          backgroundColor: theme.palette.tertiary.main,
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            color="secondary"
            size="small"
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
            size="small"
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
        navigation={matches && true}
        modules={[Navigation]}
        slidesPerView={matches ? 2 : 1}
        className="mySwiper"
        onSlideChange={(e) => setActiveStep(e.activeIndex)}
      >
        {defaultTestimonials.map((step, index) => {
          return (
            <div key={"feedback_" + step.name}>
              <SwiperSlide>
                <Testimonial {...step} index={index} />
              </SwiperSlide>
            </div>
          );
        })}
        {!matches && <MobileStepperSwiperComponent />}
      </Swiper>
    </>
  );
}
