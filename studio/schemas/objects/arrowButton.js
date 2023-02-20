import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Arrow Button',
  name: 'arrowButton',
  type: 'object',
  fields: [
    defineField({
      title: 'Button text',
      name: 'buttonText',
      type: 'string',
      description: 'Was ist der Text des Buttons',
      validation: (Rule) => (
        Rule.required(), Rule.max(12).warning('Lange Texte auf den Button sehen nicht gut aus.')
      ),
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
      description: 'What is the URL for the button? (e.g /preis; https://www.example.com)',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'buttonText',
      describtion: 'url',
    },
  },
})
