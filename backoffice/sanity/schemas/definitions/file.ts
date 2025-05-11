import {defineField, defineType} from 'sanity'

export const attachedInSanity = defineType({
    name: 'attachedInSanity',
    title: 'Subir fichero',
    type: 'object',
    fields: [
        defineField({
            name: 'asset',
            title: 'Fichero',
            type: 'file',
            options: {
                collapsible: true,
                collapsed: false,
            },
            fields: [
                defineField({
                    title: 'Nombre del archivo',
                    name: 'caption',
                    type: 'string',
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'asset.caption',
        },
        prepare(selection) {
            const {title} = selection
            return {
                title: title || 'Sin texto alternativo',
            }
        },
    },
})

export const attachedInOtherCloud = defineType({
    name: 'attachedInOtherCloud',
    title: 'Adjunto externo',
    type: 'object',
    fields: [
        defineField({
            name: 'url',
            title: 'Enlace',
            type: 'url',
        }),
        defineField({
            name: 'name',
            title: 'Nombre del archivo',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'url',
        },
    },
})
