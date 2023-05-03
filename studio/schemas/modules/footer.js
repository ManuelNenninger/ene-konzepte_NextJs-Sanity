import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Unternehmensname',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brandSlogan',
      title: 'Unternehmens Slogan',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerrowbuilder',
      type: 'array',
      title: 'Footer Links',
      of: [{type: 'footerrow'}],
      description:
        'Hier werden Links und Themen zu deinem Footer hinzugefügt, wie Impressum, FAQ, oder Versand.',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'brandName',
    },
  },
})
