import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'employeesSection',
  title: 'Employees Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'sectionHeading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'employeeArray',
      title: 'Employees',
      type: 'array',
      of: [{type: 'employeeComponent'}],
      description:
        'Hier kannst Du für jeden Eurer Angestellten ein Bild, den Namen und die Position hinterlegen.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'contactButton',
      type: 'boolean',
      title: 'Contect Button',
      initialValue: false,
      description:
        'Soll am Ende ein Button angezeigt werden, worüber der User das Kontaktformular aufrufen kann?',
    }),
  ],
  preview: {
    select: {
      title: 'heading.heading',
      media: 'mainImage',
    },
  },
})
