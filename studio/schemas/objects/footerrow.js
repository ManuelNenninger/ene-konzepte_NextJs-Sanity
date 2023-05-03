import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Footer Reihe',
  name: 'footerrow',
  type: 'object',
  fields: [
    defineField({
      title: 'Reihen Title',
      name: 'metaTitle',
      type: 'string',
      description: 'For Example: Services, Impressum',
      validation: (Rule) => Rule.max(20).warning('Longer titles may be unattraktiv'),
    }),
    defineField({
      title: 'Link Builder',
      name: 'linkbuilder',
      type: 'array',
      of: [{type: 'footerlink'}],
      description: 'Here you can add the Links',
    }),
  ],
  preview: {
    select: {
      title: 'metaTitle',
    },
  },
})
