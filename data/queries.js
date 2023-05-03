// Construct our "blocks" GROQ
export const blocksgrid = `
  _type == 'agreementcard' => {
    _type,
    _key,
    iconname,
    title,
    body,
  },
`;

export const corporateValue = `
  _type == 'corporateValue' => {
    _type,
    _key,
    title,
    describtion,
  },
`;
export const mainTourValues = `
  _type == 'touren' => {
    _type,
    _key,
    title,
  },
`;

export const employeeComponent = `
  _type == 'employeeComponent' => {
    _type,
    _key,
    name,
    position,
    mainImage,
  },
`;

export const portfolio =
  '{"title": basicTourInformation.title, "describtion": basicTourInformation.describtion, mainImage, "slug": slug.current}';

// Construct our content "modules" GROQ
export const modules = `
  _type == 'grid' => {
    "grid": {
        _type,
        _key,
        sectionsettings,
        sectionTitle,
        size,
        columns[]{
          sizes[]{
            breakpoint,
            width,
            justify,
            align,
            start
          },
          blocks[]{
            ${blocksgrid}
          }
        }
      }
    },
  _type == 'heroSection' => {
    "hero": {
      _type,
      _key,
      title,
      describtion,
      mainImage,

    }
  },
  _type == 'infoBande' => {
    "infoBande": {
      _type,
      _key,
      title,
      describtion,
      arrowButton,
      button->,
    }
  },
  _type == 'specificationbanner' => {
    "specification": {
      _type,
      _key,
      corporateValueArray[]{
        _type == 'tourInformation' => {
          _type,
          _key,
          title,
          describtion,
        },
      }
    }
  },
  _type == 'portfolioSection' => {
    "portfolio": {
      _type,
      _key,
      heading,
      "touren": mainTours[]->{"title": basicTourInformation.title, "describtion": basicTourInformation.describtion, mainImage, "slug": slug.current},
      mainImage,
    }
  },
  _type == 'aboutSection' => {
    "about": {
      _type,
      _key,
      title,
      describtion,
      mainImage,
    }
  },
  _type == 'corporateValueSection' => {
    "corporatevalues": {
      _type,
      _key,
      heading,
      corporateValueArray[]{
        ${corporateValue}
      },
      mainImage,
    }
  },
  _type == 'employeesSection' => {
    "employees": {
      _type,
      _key,
      heading,
      employeeArray[]{
        ${employeeComponent}
      },
      contactButton,
    }
  },
  _type == 'bigPortfolioSection' => {
    "bigPortfolio": {
      _type,
      _key,
      showPortfolioButton,
      "portfolio": *[_type == "touren" && publishedAt < now()][0...4]${portfolio},
    }
  },
  _type == 'convictionSection' => {
    "conviction": {
      _type,
      _key,
      heading,
      callToAction,
      mainImage,
    }
  },
  _type == 'imageCarouselSection' => {
    "imageCarousel": {
      _type,
      _key,
      heading,
      inseratImageArray[],
      test,
    }
  },
  _type == 'blockSection' => {
    "detailedDescribtion": {
      _type,
      _key,
      title,
      body, 
    }
  },
`;

export const footermodule = `
brandName,
"dialogPopUp": *[_type == "callToActionPopUp"][0]{title,describtion},
footersocial,
footerrowbuilder[]{
  _type == 'footerrow' => {
    _type,
    _key,
    metaTitle,
    linkbuilder[]{
      _type == 'footerlink' =>{
        linkname,
        url,
      }
    },
},
},
`;
