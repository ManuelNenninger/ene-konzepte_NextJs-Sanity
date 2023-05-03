import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'specificationbanner',
  title: 'Detailierte Tourinformationen',
  type: 'object',
  fields: [
    defineField({
      name: 'corporateValueArray',
      type: 'array',
      title: 'Tour Informationen',
      of: [{type: 'tourInformation'}],
      description:
        'Hier kannst Du informationen zu deiner Tour hinzufügen, wie Preis, Tourzeit, etc.',
      validation: (Rule) => Rule.required().min(2),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      describtion: 'describtion',
    },
  },
})
