import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Hero Title',
      type: 'text',
      description: 'Was ist Euer Hero Title? Der Title ist auch wichtig für SEO.',
    }),
    defineField({
      name: 'describtion',
      type: 'text',
      title: 'Hero Describtion',
      description:
        'Was ist Eure Beschreibung? Das könnte beispielsweise ein Slogan sein (z.B Your luxury Real Estate Agency)',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
  },
})
