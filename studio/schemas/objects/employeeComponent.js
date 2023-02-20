import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Employee',
  name: 'employeeComponent',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'Name des Angestellten',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Position',
      name: 'position',
      type: 'string',
      description: 'Position des Angestellten (z.B CEO, Marketing Manager)',
      validation: (Rule) => Rule.required(),
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
      title: 'name',
      media: 'mainImage',
    },
  },
})
