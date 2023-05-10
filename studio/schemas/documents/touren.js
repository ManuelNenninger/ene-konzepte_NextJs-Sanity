import {defineField, defineType} from 'sanity'
import {OlistIcon} from '@sanity/icons'

export default defineType({
  name: 'touren',
  title: 'Touren',
  type: 'document',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'Der Title ist wichtig für SEO und sollte kurz prägnant das Inserat beschreiben.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'basicTourInformation',
      title: 'Tour',
      type: 'infoBande',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description:
        'Das bild ist auch wichtig für SEO und wird häufig angezeigt, wenn jemand deinen Link in Sozialen medien teilt.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Content',
      type: 'array',
      description:
        'Wähle aus welche Sektionen die Seite bestehen soll. Du kannst auch lediglich die Vorauswahl Editieren.',
      of: [
        {type: 'infoBande'},
        {type: 'corporateValueSection'},
        {type: 'imageCarouselSection'},
        {type: 'blockSection'},
        {type: 'convictionSection'},
        {type: 'specificationbanner'},
        {type: 'portfolioSection'},
        {type: 'heroSection'},

        // {
        //   title: 'Reusable Section',
        //   type: 'reference',
        //   to: [{type: 'section'}],
        // },
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
