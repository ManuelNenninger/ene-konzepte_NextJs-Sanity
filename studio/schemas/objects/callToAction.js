import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Call to Action',
  name: 'callToAction',
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
      name: 'specialAction',
      type: 'boolean',
      title: 'Button',
      initialValue: false,
      description:
        'Soll der Call-to-Action Button zu einem PopUp Formularführen? Wenn deaktiviert, kannst Du den Button auf z.B einen internen oder externen Link verweisen lassen.',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
      description: 'What is the URL for the button? (e.g /preis; https://www.example.com)',
      validation: (Rule) => {
        if (!parent?.specialAction) {
          return Rule.required()
        }
      },
      hidden: ({parent}) => parent?.specialAction,
    }),
    defineField({
      title: 'Pop-Up Text',
      name: 'popUpDialog',
      type: 'reference',
      to: {type: 'callToActionPopUp'},
      validation: (Rule) => {
        if (parent?.specialAction) {
          return Rule.required()
        }
      },
      hidden: ({parent}) => !parent?.specialAction,
    }),
  ],
  preview: {
    select: {
      title: 'buttonText',
      describtion: 'url',
    },
  },
})
