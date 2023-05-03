import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Footer Link',
  name: 'footerlink',
  type: 'object',
  fields: [
    defineField({
      name: 'linkname',
      type: 'string',
      title: 'Link name',
      description: 'Z.b Impressum, Versand, FAQ.',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
      description:
        'What is the URL for the link? (e.g /preis; https://www.example.com), /touren/TourEins',
    }),
  ],
  preview: {
    select: {
      title: 'linkname',
    },
  },
})
