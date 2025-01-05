import {defineField, defineType} from 'sanity'

import {MEDIACONDITIONAL} from '../definitions/media'

export const heroHomeBlog = defineType({
    name: 'heroHomeBlog',
    title: 'Hero Home Blog',
    type: 'object',
    fields: [
        defineField({
            name: 'copy',
            title: 'Información',
            type: 'markdown',
        }),
        ...MEDIACONDITIONAL,
    ],
})
