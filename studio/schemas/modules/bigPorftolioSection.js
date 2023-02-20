import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bigPortfolioSection',
  title: 'Big Portfolio',
  type: 'object',
  fields: [
    defineField({
      name: 'showPortfolioButton',
      type: 'boolean',
      title: 'Show Portfolio Button',
      initialValue: true,
      description: 'Wenn der Button aktiviert ist, wird das geamte Portfolio angezeigt',
    }),
  ],
  preview: {
    select: {
      title: 'arrowButton',
    },
  },
})
