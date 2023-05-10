import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'aboutSection',
  title: 'Über dich - Section',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Setze hier einen Titel, der dich kurz und bündig beschreibt.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'describtion',
      type: 'text',
      title: 'Describtion',
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
      title: 'title',
      media: 'mainImage',
    },
  },
})
