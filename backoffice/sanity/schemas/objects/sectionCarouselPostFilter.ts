import {defineField, defineType} from 'sanity'

export const sectionCarouselPostFilter = defineType({
    name: 'sectionCarouselPostFilter',
    title: 'Carrusel de Posts Filtrados',
    type: 'object',
    fields: [
        defineField({
            name: 'copy',
            title: 'información',
            type: 'markdown',
        }),
        defineField({
            name: 'category',
            title: 'Categoría',
            type: 'reference',
            to: [{type: 'Category'}],
        }),
        defineField({
            name: 'author',
            title: 'Autor',
            type: 'reference',
            to: [{type: 'Author'}],
        }),
        defineField({
            name: 'limit',
            title: 'Cantidad máxima de posts',
            type: 'number',
            initialValue: 5,
        }),
    ],
})
