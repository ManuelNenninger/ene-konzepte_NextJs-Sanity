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
  _type == 'herosection' => {
    "hero": {
      _type,
      _key,
      heroTitle,
      heroDescribtion,
      mainImage,
      "primaryCallToAction": primaryCallToAction->{url,linkText},
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
