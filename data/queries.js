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

export const employeeComponent = `
  _type == 'employeeComponent' => {
    _type,
    _key,
    name,
    position,
    mainImage,
  },
`;

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
      "portfolio": *[_type == "post" && publishedAt < now()][0...2],
    }
  },
`;

export const footermodule = `
brandname,
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
