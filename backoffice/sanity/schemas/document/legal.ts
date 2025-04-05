import {defineField, defineType} from 'sanity'

import {prototype} from '../base/prototype'

export const legal = defineType({
    name: 'legal',
    title: 'Legal',
    type: 'document',
    groups: [
        {name: 'seo', title: 'Metas'},
        {title: 'Contenido', name: 'main'},
        {name: 'settings', title: 'Configuración'},
    ],
    fields: [
        ...prototype,
        defineField({
            name: 'content',
            title: 'Contenido',
            group: 'main',
            type: 'markdown',
        }),
    ],

    preview: {
        select: {
            title: 'name',
            subtitle: 'language',
        },
    },
})
