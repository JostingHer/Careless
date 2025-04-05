import {defineField, defineType} from 'sanity'

import {prototype} from '../base/prototype'

export const category = defineType({
    name: 'Category',
    title: 'Categorías blog',
    type: 'document',
    groups: [
        {name: 'seo', title: 'Metas'},
        {name: 'content', title: 'Contenido'},
        {name: 'settings', title: 'Configuración'},
    ],
    fields: [
        ...prototype,
        {
            type: 'heroBasic',
            name: 'heroBasic',
            title: 'heroBasic',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
})
