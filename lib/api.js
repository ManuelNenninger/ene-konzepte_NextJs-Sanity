import client, { previewClient } from "client";
import groq from "groq";
import { modules, footermodule, portfolio } from "data/queries";

const getClient = async (preview) => (preview ? previewClient : client);
//You can delete getTestData after testing
export async function getTestData() {
  const testData = await client.fetch(groq`
        *[_type == "post" && publishedAt < now()] | order(publishedAt desc)  
    `);
  return testData;
}

//--------------------------------------------- Page Data ---------------------------------------------

export async function getIndexPageData() {
  const pages = await client.fetch(groq`
      *[_type == "page" && slug.current == "index"][0]{
        pageBuilder[]{
          defined(_ref) => { ...@->content[0] {
            ${modules}

          }},
          !defined(_ref) => {
            ${modules}
          }
        },
        title,
        "slug": slug.current,
        seo,
      }
    `);
  return pages;
}

export async function getPageData(slug, preview) {
  const currentClient = await getClient(preview);
  //console.log("Now, there is a request to get Page Data lib/api!");
  const pages = await currentClient
    .fetch(
      groq`
    *[_type == "page" && slug.current == $slug]{
      pageBuilder[]{
        defined(_ref) => { ...@->content[0] {
          ${modules}
        }},
        !defined(_ref) => {
          ${modules}
        }
      },
      title,
      "slug": slug.current,
      seo,
    }
  `,
      { slug }
    )
    .then((res) => {
      if (res.length === 0) {
        console.log("Keine Daten von lib/api");
        return {};
      }
      return preview ? (res?.[1] ? res[1] : res[0]) : res?.[0];
    });
  //console.log("Die Daten in lib/api sind: ", pages);
  return Promise.resolve(pages);
}

//--------------------------------------------- Post Data ---------------------------------------------

export async function getPostData(slug, preview) {
  const currentClient = await getClient(preview);
  const post = await currentClient
    .fetch(
      groq`*[_type == "post" && slug.current == $slug]{
    title,
    "name": author->name,
    "namensliste":  *[_type == "author"][0...4]{name, slug},
    "categories": categories[]->title,
    "authorImage": author->image,
    body, 
    "slug": slug.current,
  }`,
      { slug }
    )
    .then((res) => {
      if (res.length === 0) {
        console.log("Keine Daten von lib/api");
        return {};
      }
      return preview ? (res?.[1] ? res[1] : res[0]) : res?.[0];
    });

  return post;
}

export async function getAllPosts(preview, offset = 0) {
  const currentClient = await getClient(preview);
  const post = await currentClient.fetch(
    groq`
        *[_type == "post" && publishedAt < now()][${offset}...${offset + 2}]
    `
  );
  return post;
}

//--------------------------------------------- Inserat Data ---------------------------------------------

export async function getInseratData(slug, preview) {
  const currentClient = await getClient(preview);
  //console.log("Now, there is a request to get Page Data lib/api!");
  const inserat = await currentClient
    .fetch(
      groq`
    *[_type == "inserat" && slug.current == $slug]{
      pageBuilder[]{
        defined(_ref) => { ...@->content[0] {
          ${modules}
        }},
        !defined(_ref) => {
          ${modules}
        }
      },
      title,
      heroSection,
      specification[]{
        _type == 'infoBox' => {
          _type,
          _key,
          title,
          describtion,
        },
      },
      publishedAt,
      "slug": slug.current,
    }
  `,
      { slug }
    )
    .then((res) => {
      if (res.length === 0) {
        console.log("Keine Daten von lib/api");
        return null;
      }
      return preview ? (res?.[1] ? res[1] : res[0]) : res?.[0];
    });
  //console.log("Die Daten in lib/api sind: ", pages);
  return inserat;
}

export async function getAllInserats(preview, offset = 0) {
  const currentClient = await getClient(preview);
  const inserate = await currentClient.fetch(
    groq`
        *[_type == "inserat" && publishedAt < now()][${offset}...${
      offset + 2
    }]${portfolio}
    `
  );
  return inserate;
}

//--------------------------------------------- Footer Data ---------------------------------------------

export async function getFooterData() {
  const footer = await client.fetch(groq`
      *[_type == "footer"][0]{
        ${footermodule}
      }
    `);
  return footer;
}
