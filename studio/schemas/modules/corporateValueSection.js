import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'corporateValueSection',
  title: 'Corporate Value Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'sectionHeading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'corporateValueArray',
      type: 'array',
      title: 'Corporate Values',
      of: [{type: 'corporateValue'}],
      description:
        'Hier kannst Du Eure Unternehmenswerte oder KPI´s hinzufügen. Nehme mind. 2 oder maximal 4 Werte.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading.heading',
      media: 'mainImage',
    },
  },
})
