import {defineField, defineType} from 'sanity'
import {CopyIcon} from '@sanity/icons'

export default defineType({
  title: 'Pop up -  Call to action',
  name: 'callToActionPopUp',
  type: 'document',
  icon: CopyIcon,
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
