import {defineField, defineType} from 'sanity'

import {prototype} from '../base/prototype'
import {heroPost} from '../objects'

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
            name: 'theme',
            title: 'Tema',
            type: 'reference',
            to: [{type: 'theme'}],
        }),
        {
            type: 'heroPost',
            name: 'hero',
            title: 'Hero',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
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
