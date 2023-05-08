import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infoBande',
  title: 'Infobande',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      description: 'Was ist der Title?',
    }),
    defineField({
      name: 'describtion',
      type: 'text',
      title: 'Describtion',
      description:
        'Was ist Eure Beschreibung? Das könnte beispielsweise ein überzeugender Text sein, eine beschreibung deines Angebots, Produktes, ...',
    }),
    defineField({
      name: 'arrowButton',
      type: 'boolean',
      title: 'Button',
      initialValue: false,
      description:
        'Füge einen Button hinzu, der auf eine urL verweist. Zum Beispiel eine Unterseite deiner Webseite, ein Blogartikel, etc.',
    }),
    {
      name: 'button',
      type: 'arrowButton',
      title: 'Button Text',
      hidden: ({parent}) => !parent?.arrowButton,
    },
  ],
  preview: {
    select: {
      title: 'title',
      describtion: 'describtion',
    },
  },
})
