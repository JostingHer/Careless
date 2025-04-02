import {defineField, defineType} from 'sanity'

import {sectionBase} from '../base'

export const sectionPublicationsCarousel = defineType({
    name: 'sectionPublicationsCarousel',
    title: 'Sección publicaciones de redes sociales carousel',
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
    ],
})
