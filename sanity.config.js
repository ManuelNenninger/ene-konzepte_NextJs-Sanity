import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "studio/schemas";
//import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

{
  /*
It is important to note that these variables are statically replaced during production. 
It is therefore necessary to always reference them using the full static string. 
For example, dynamic key access like process.env[key] will not work (they might be accessible this way in development, 
but will fail in production).
 */
}
// const SANITY_STUDIO_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID
// const SANITY_STUDIO_PREVIEW_SECRET = process.env.NEXT_PUBLIC_SANITY_STUDIO_PREVIEW_SECRET
const SANITY_STUDIO_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const SANITY_STUDIO_PREVIEW_SECRET =
  process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET;
const PROJECT_URL = process.env.NEXT_PUBLIC_PROJECT_URL;

export default defineConfig({
  name: "default",
  title: "ExpandedTemplate",
  basePath: "/studio",
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: "production",
  //https://www.sanity.io/docs/migrating-production-url-resolver
  document: {
    // prev is the result from previous plugins and can be composed
    productionUrl: async (prev, context) => {
      // context includes the client an other details
      const { client, dataset, document } = context;
      if (document._type === "page" || document._type === "page") {
        // you can now use async/await 🎉

        const params = new URLSearchParams();
        params.set("preview", "true");
        params.set("secret", SANITY_STUDIO_PREVIEW_SECRET);
        params.set("type", document._type);
        params.set("slug", document?.slug?.current);
        // return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
        // return `http://localhost:3000/api/preview?secret=rheufufhg&slug=${document.slug.current}`
        //return `http://localhost:3000/posts/${slug}?${params}`
        return `${PROJECT_URL}/api/preview?${params}`;
      }
      if (document._type === "touren" || document._type === "page") {
        // you can now use async/await 🎉

        const params = new URLSearchParams();
        params.set("preview", "true");
        params.set("secret", SANITY_STUDIO_PREVIEW_SECRET);
        params.set("type", document._type);
        params.set("slug", document?.slug?.current);
        // return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
        // return `http://localhost:3000/api/preview?secret=rheufufhg&slug=${document.slug.current}`
        //return `http://localhost:3000/posts/${slug}?${params}`
        return `${PROJECT_URL}/api/preview?${params}`;
      }

      return prev;
    },
  },

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
