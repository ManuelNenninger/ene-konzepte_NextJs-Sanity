import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        '(required) Der Title ergibt soäter deine URL (z.B About für die About Page, Pricing für die pricing page, etc...). Die Homepage heißt immer "Index".',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: '(required) Click on generate after choosing a Page Title',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Content',
      type: 'array',
      of: [
        {type: 'heroSection'},
        {type: 'infoBande'},
        {type: 'corporateValueSection'},
        {type: 'employeesSection'},
        {type: 'bigPortfolioSection'},
        // {
        //   title: 'Reusable Section',
        //   type: 'reference',
        //   to: [{type: 'section'}],
        // },
      ],
    }),
    defineField({
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
