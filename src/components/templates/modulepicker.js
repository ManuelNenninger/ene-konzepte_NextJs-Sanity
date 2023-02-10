import React from "react";

import HeroSection from "src/components/organisms/hero";
import PortfolioSection from "src/components/organisms/portfolio";
import InfoBande from "src/components/organisms/infobande";
import AgreementSection from "src/components/organisms/agreement";
// import AgreementSection from "../organisms/agreementsection";
// import ProcessTimeline from "../organisms/processtimeline";
// import AboutSection from "../organisms/aboutsection";
// import OfferSection from "../organisms/offersection";
// import BlockSite from "../organisms/blocksite";
// import PortfolioSection from "../organisms/portfoliosection";
// import VisionSection from "../organisms/visionsection";

const Fallback = (props) => {
  return <h1>Ups. No Data found.</h1>;
};

export const Module = ({ content, moduleName }) => {
  const ModuleType =
    {
      // grid: AgreementSection,
      hero: HeroSection,
      infoBande: InfoBande,
      agreement: AgreementSection,
      // process: ProcessTimeline,
      // about: AboutSection,
      portfolio: PortfolioSection,
      // offer: OfferSection,
      // block: BlockSite,
      // vision: VisionSection,
      default: Fallback,
    }[moduleName] ?? Fallback;

  return <ModuleType content={content} />;
};
