import {defineField, defineType} from 'sanity'

export const stories = defineType({
    name: 'stories',
    title: 'Sección stories de redes sociales',
    type: 'object',
    fields: [
        defineField({
            name: 'copy',
            title: 'Información',
            type: 'markdown',
        }),
        defineField({
            name: 'theme',
            title: 'Tema',
            type: 'reference',
            to: [{type: 'theme'}],
        }),
        defineField({
            name: 'stories',
            title: 'Historias',
            type: 'array',
            of: [{type: 'string'}],
        }),
    ],
})
