import {defineField} from 'sanity'

import {MEDIALIST} from '../definitions/media'

export const sectionBase = [
    defineField({
        name: 'copy',
        title: 'Información',
        type: 'markdown',
    }),
    defineField({
        name: 'cta',
        title: 'Botón de llamada a la acción',
        type: 'array',
        of: [{type: 'cta'}],
    }),
    defineField({
        name: 'theme',
        title: 'Tema',
        type: 'reference',
        to: [{type: 'theme'}],
    }),
    ...MEDIALIST,
]
