import {defineField, defineType} from 'sanity'

export const summary = defineType({
    name: 'summary',
    title: 'Sumario',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
        }),
        defineField({
            name: 'text',
            title: 'Contenido',
            type: 'markdown',
        }),
        defineField({
            name: 'photo',
            title: 'foto',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'photo',
        },
    },
})
