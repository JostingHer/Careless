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
            name: 'refDoc',
            title: 'ReferenciaDoc',
            type: 'reference',
            to: [{type: 'Post'}],
        }),
        defineField({
            name: 'description',
            description: 'Bloque de texto que aparece entre la foto principal y el nombre del artículo',
            title: 'Descripción',
            type: 'markdown',
        }),
        defineField({
            name: 'contentCopy',
            title: 'Contenido',
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
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
})
