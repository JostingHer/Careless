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
        ...MEDIALIST,
    ],
    preview: {
        select: {
            title: 'title',
            media: 'photo',
        },
    },
})
