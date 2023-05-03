import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Pop up -  Call to action',
  name: 'callToActionPopUp',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'describtion',
      type: 'text',
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
