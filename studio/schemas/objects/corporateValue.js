import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Corporate Value',
  name: 'corporateValue',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Nenne ein Unternehmenswert oder KPI (z.B Erfahrung im Markt, Loyalität)',
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
