import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'convictionSection',
  title: 'Überzeugung - Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'sectionHeading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'callToAction',
      type: 'callToAction',
      title: 'Call to Action',
    }),
  ],
  preview: {
    select: {
      title: 'heading.heading',
      media: 'mainImage',
    },
  },
})
