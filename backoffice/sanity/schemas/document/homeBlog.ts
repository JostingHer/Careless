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
        defineField({
            name: 'pageSections',
            title: 'Secciones de la Página',
            type: 'sections', // Reutilizando el esquema anterior
            group: 'content',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'language',
        },
    },
})
