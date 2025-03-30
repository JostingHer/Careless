import {defineField, defineType} from 'sanity'

import {Languages} from '../../../../company/settings/translations'

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
        defineField({
            name: 'ref',
            title: 'Referencia',
            description: 'La misma landing en castellano e inglés debe tener la misma referencia',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'language',
        },
    },
})
