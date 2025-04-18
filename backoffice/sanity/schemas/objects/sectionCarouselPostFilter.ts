import {defineField, defineType} from 'sanity'

import {sectionBase} from '../base'

export const sectionCarouselPostFilter = defineType({
    name: 'sectionCarouselPostFilter',
    title: 'Carrusel de Posts Filtrados',
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
        defineField({
            name: 'category',
            title: 'Categoría',
            type: 'reference',
            to: [{type: 'Category'}],
        }),
    ],
})
