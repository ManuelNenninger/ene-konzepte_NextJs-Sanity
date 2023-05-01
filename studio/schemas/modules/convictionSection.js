import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'convictionSection',
  title: 'Conviction Section',
  type: 'object',
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
      title: 'heading.heading',
      media: 'mainImage',
    },
  },
})
