import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioSection',
  title: 'Deine Touren - Portfolio',
  type: 'object',
  description:
    'Hier werden die Touren auf deiner Hauptseite angezeigt. Nur maximal 4 Touren. Alle weiteren werden auf einer extra Seite dargestellt.',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'sectionHeading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainTours',
      title: 'Touren',
      type: 'array',
      of: [{type: 'reference', to: {type: 'touren'}}],
      description:
        'Wäre am besten 4 Touren aus, die auf deiner Hauptseite dargestellt werden. Was sind z.B deine beliebtesten Touren? ',
    }),
  ],
  preview: {
    select: {
      title: 'heading.heading',
    },
  },
})
