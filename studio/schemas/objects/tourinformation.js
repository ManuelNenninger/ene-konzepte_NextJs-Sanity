import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'tourinformation',
  name: 'tourInformation',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Seitze den Title zu: z.B Preis, Teilnehmeranzahl, Tourzeit,...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'describtion',
      type: 'string',
      title: 'Describtion',
      description: 'Preis in Euro, Teinnehmeranzahl in Personen, Zeit in Stunden / Minuten ',
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
