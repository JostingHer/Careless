import {defineField, defineType} from 'sanity'

import {prototype} from '../base/prototype'

export const post = defineType({
    name: 'Post',
    title: 'Artículos',
    type: 'document',
    groups: [
        {name: 'seo', title: 'Metas'},
        {name: 'content', title: 'Contenido'},
        {name: 'settings', title: 'Configuración'},
    ],
    fields: [
        ...prototype,
        defineField({
            name: 'description',
            description: 'resumen breve del artículo',
            title: 'Descripción',
            type: 'markdown',
        }),
        defineField({
            name: 'pageSections',
            title: 'Secciones de la Página',
            type: 'postSections',
            group: 'content',
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
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
})
