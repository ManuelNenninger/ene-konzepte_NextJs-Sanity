import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Überschrift',
  name: 'sectionHeading',
  type: 'object',
  fields: [
    defineField({
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => (
        Rule.required(),
        Rule.max(60).warning('Lange Texte auf den Überschriften sehen nicht gut aus.')
      ),
    }),
    defineField({
      name: 'subheading',
      type: 'string',
      title: 'Subheading',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      describtion: 'subheading',
    },
  },
})
