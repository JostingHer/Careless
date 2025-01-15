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
            name: 'refDoc',
            title: 'ReferenciaDoc',
            type: 'reference',
            to: [{type: 'legal'}],
        }),
        defineField({
            name: 'contentList',
            description: 'Hace referencia al contenido',
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
