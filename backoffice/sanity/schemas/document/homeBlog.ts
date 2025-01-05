import {defineField, defineType} from 'sanity'

import {landing} from '../base/landing'

export const homeBlog = defineType({
    name: 'homeBlog',
    title: 'Página principal del blog',
    type: 'document',
    groups: [
        {name: 'seo', title: 'Metas'},
        {name: 'content', title: 'Contenido'},
        {name: 'settings', title: 'Configuración'},
    ],
    fields: [
        ...landing,
        // Hero
        defineField({
            name: 'hero',
            title: 'Hero',
            type: 'heroHomeBlog',
            group: 'content',
            options: {
                collapsible: true,
                collapsed: true,
            },
        }),
    ],

    preview: {
        select: {
            title: 'name',
            subtitle: 'language',
        },
    },
})
