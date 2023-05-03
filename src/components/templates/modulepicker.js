import React from "react";

import HeroSection from "src/components/organisms/hero_two";
import PortfolioSection from "src/components/organisms/portfolio";
import InfoBande from "src/components/organisms/infobande";
import AgreementSection from "src/components/organisms/agreement";
import TestimonialSection from "src/components/organisms/testimonial";
import ConvictionSection from "src/components/organisms/conviction";
import SpecificationsBanner from "src/components/organisms/specificationbanner";
import ImageCarousel from "src/components/organisms/imagecarousel";
import DetailedDescribtion from "src/components/organisms/detailedDescribtion";
import EmployeesSection from "src/components/organisms/employees";
import AboutSection from "src/components/organisms/about";
import BigPortfolioSection from "src/components/organisms/bigPortfolio";

const Fallback = (props) => {
  return (
    <div>
      <h1>
        Ups. No Data found. Es sieht so aus, als wäre kein Module hinterlegt...
      </h1>
    </div>
  );
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
      about: AboutSection,
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
