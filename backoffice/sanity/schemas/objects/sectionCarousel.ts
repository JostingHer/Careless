import {defineField, defineType} from 'sanity'

import {MEDIALIST} from '../definitions/media'

export const seccionCarousel = defineType({
    name: 'seccionCarousel',
    title: 'Sección con carrusel de post el filtro que le pongas',
    type: 'object',
    fields: [
        defineField({
            name: 'copy',
            title: 'title',
            type: 'markdown',
        }),
        // PONER UN FILTRO - TIPO CAROUSEL DE TODOS LOS POSTS DE MODA HOMBRES

        ...MEDIALIST,
    ],
})
