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
    defineField({
      name: 'ctaButton',
      type: 'boolean',
      title: 'Call to action - Button',
      initialValue: false,
      description: 'Füge einen Button hinzu, über den Du auf eine von Dir bestimmte Seite kommst.',
    }),
    defineField({
      name: 'callToAction',
      type: 'callToAction',
      title: 'Call to Action',
      hidden: ({parent}) => !parent?.ctaButton,
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
