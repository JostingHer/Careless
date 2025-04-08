import {defineField, defineType} from 'sanity'

import {Languages} from '../../../../shared/translations/domain/languages'

export const popups = defineType({
    name: 'popup',
    title: 'Popups',
    type: 'document',
    groups: [
        {name: 'content', title: 'Contenido'},
        {name: 'settings', title: 'Configuración'},
    ],
    fields: [
        defineField({
            name: 'language',
            title: 'Idioma',
            group: 'settings',
            type: 'string',
            options: {
                list: Languages,
                layout: 'radio',
            },
            initialValue: Languages[0].value,
        }),
        defineField({
            name: 'copy',
            title: 'Contenido',
            group: 'content',
            type: 'markdown',
        }),
        defineField({
            name: 'image',
            title: 'Imagen',
            type: 'photo',
            group: 'content',
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: 'ref',
            subtitle: 'language',
            media: 'image',
        },
    },
})
