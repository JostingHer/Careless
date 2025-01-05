import {defineField, defineType} from 'sanity'

export const photo = defineType({
    name: 'photo',
    title: 'Foto',
    type: 'object',
    fields: [
        defineField({
            name: 'alt',
            title: 'Texto alternativo',
            type: 'string',
        }),

        defineField({
            name: 'asset',
            title: 'Imagen',
            type: 'image',
            options: {
                collapsible: true,
                collapsed: false,
            },
        }),
    ],
    preview: {
        select: {
            title: 'alt',
            asset: 'asset',
        },
        prepare(selection) {
            const {title, asset} = selection
            return {
                title,
                subtitle: 'foto',
                media: asset,
            }
        },
    },
})
