import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageCarouselSection',
  title: 'Bilder Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'sectionHeading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'inseratImageArray',
      title: 'Bilder',
      type: 'array',
      of: [
        {
          type: 'costumeImage',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        hotspot: true,
      },
      description: 'Füge Bilder dieses Inserats hinzu',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'heading.heading',
      media: 'inseratImageArray[0]',
    },
  },
})
