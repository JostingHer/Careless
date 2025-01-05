import {defineField, defineType} from 'sanity'

import {MEDIACONDITIONAL} from '../definitions/media'

export const sectionBasic = defineType({
    name: 'sectionBasic',
    title: 'Sección básica con imagen y texto',
    type: 'object',
    fields: [
        defineField({
            name: 'copy',
            title: 'Información',
            type: 'markdown',
        }),
        ...MEDIACONDITIONAL,
        defineField({
            name: 'reverse',
            title: 'En lugar de imagen a la derecha, ponerla a la izquierda',
            type: 'boolean',
        }),
    ],
})
