import {defineField} from 'sanity'

import {MEDIALIST} from '../definitions/media'

export const sectionBaseMediaList = [
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
    ...MEDIALIST,
]
