import {defineField, defineType} from 'sanity'

export const sectionReference = defineType({
    name: 'sectionReference',
    title: 'Section Reference',
    type: 'object',
    fields: [
        defineField({
            name: 'sharedRef',
            title: 'Referencia a una sección compartida',
            type: 'reference',
            to: [{type: 'sharedSection'}],
        }),
    ],
})
