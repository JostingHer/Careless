import {defineField, defineType} from 'sanity'

import {MEDIACONDITIONAL} from '../definitions/media'

export const banner = defineType({
    name: 'banner',
    title: 'Banner básico',
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
