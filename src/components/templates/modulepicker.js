import React from "react";

import HeroSection from "src/components/organisms/hero";
import PortfolioSection from "src/components/organisms/portfolio";
import InfoBande from "src/components/organisms/infobande";
import AgreementSection from "src/components/organisms/agreement";
import TestimonialSection from "src/components/organisms/testimonial";
import ConvictionSection from "src/components/organisms/conviction";
import SpecificationsBanner from "src/components/organisms/specificationbanner";
import ImageCarousel from "src/components/organisms/imagecarousel";
import DetailedDescribtion from "src/components/organisms/detailedDescribtion";
import EmployeesSection from "src/components/organisms/employees";
import CorporateValuesSection from "src/components/organisms/corporatevalues";
import BigPortfolioSection from "src/components/organisms/bigPortfolio";

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
      testimonial: TestimonialSection,
      conviction: ConvictionSection,
      specification: SpecificationsBanner,
      imageCarousel: ImageCarousel,
      detailedDescribtion: DetailedDescribtion,
      employees: EmployeesSection,
      corporatevalues: CorporateValuesSection,
      bigPortfolio: BigPortfolioSection,
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
