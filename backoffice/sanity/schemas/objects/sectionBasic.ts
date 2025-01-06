import {defineField, defineType} from 'sanity'

import {sectionBase} from '../base'

export const sectionBasic = defineType({
    name: 'sectionBasic',
    title: 'Sección básica con imagen y texto',
    type: 'object',
    fields: [
        ...sectionBase,
        defineField({
            name: 'reverse',
            title: 'En lugar de imagen a la derecha, ponerla a la izquierda',
            type: 'boolean',
        }),
    ],
})
