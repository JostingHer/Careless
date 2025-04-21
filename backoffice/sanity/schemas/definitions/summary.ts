import {defineField, defineType} from 'sanity'

import {MEDIALIST} from './media'
import {photo} from './photo'

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
            name: 'theme',
            title: 'Tema',
            type: 'reference',
            to: [{type: 'theme'}],
        }),
        ...MEDIALIST,
    ],
    preview: {
        select: {
            title: 'title',
            media: 'photo',
        },
    },
})
