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
            name: 'categories',
            title: 'Categorías',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'Category'}]}],
        }), 
        defineField({
            name: 'author',
            title: 'Autor',
            type: 'reference',
            to: [{type: 'Author'}],
        }),
        defineField({
            name: 'theme',
            title: 'Tema',
            type: 'reference',
            to: [{type: 'theme'}],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'language',
        },
    },
})
