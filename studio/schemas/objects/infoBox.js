import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Info Box',
  name: 'infoBox',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'describtion',
      type: 'string',
      title: 'Describtion',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      describtion: 'describtion',
    },
  },
})
