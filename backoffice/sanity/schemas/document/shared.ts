import {defineField, defineType} from 'sanity'

import {Languages} from '../../../../company/translations'

export const shared = defineType({
    name: 'sharedSection',
    title: 'Partes Compartidas',
    type: 'document',
    groups: [
        {name: 'content', title: 'Contenido'},
        {name: 'settings', title: 'Configuración'},
    ],
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre',
            type: 'string',
        }),
        defineField({
            name: 'language',
            title: 'Idioma',
            group: 'settings',
            type: 'string',
            options: {
                list: Languages,
            },
            initialValue: Languages[0].value,
        }),
        defineField({
            name: 'pageSections',
            title: 'Secciones de la Página',
            type: 'sections',
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
