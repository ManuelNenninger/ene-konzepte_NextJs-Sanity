import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Image',
  name: 'costumeImage',
  type: 'image',
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Title',
      description:
        'Title des Bild. Der Title entspricht auch dem Alt-Text, welcher für SEO wichtig ist.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      // Editing this field will be hidden behind an "Edit"-button
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    }),
  ],
})
