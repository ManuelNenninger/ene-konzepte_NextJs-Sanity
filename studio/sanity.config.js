import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
//https://www.sanity.io/docs/migrating-environment-variables
// const projectUrl = import.meta.env.SANITY_STUDIO_PROJECT_ID
// const previewSecret = import.meta.env.SANITY_STUDIO_DATASET,

export default defineConfig({
  name: 'default',
  title: 'ExpandedTemplate',

  projectId: '7e0e9gy4',
  dataset: 'production',
  //https://www.sanity.io/docs/migrating-production-url-resolver
  document: {
    // prev is the result from previous plugins and can be composed
    productionUrl: async (prev, context) => {
      // context includes the client an other details
      const {client, dataset, document} = context
      if (document._type === 'post') {
        // you can now use async/await 🎉

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('secret', 'rheufufhg')
        params.set('type', document._type)
        params.set('slug', document?.slug?.current)
        // return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
        // return `http://localhost:3000/api/preview?secret=rheufufhg&slug=${document.slug.current}`
        //return `http://localhost:3000/posts/${slug}?${params}`
        return `http://localhost:3000/api/preview?${params}`
      }

      return prev
    },
  },

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
