import {defineField, defineType} from 'sanity'

export const target = defineType({
    name: 'target',
    title: 'target',
    type: 'object',
    fields: [
        defineField({
            name: 'asset',
            title: 'media',
            type: 'media',
            options: {
                collapsible: true,
                collapsed: false,
            },
        }),
        defineField({
            name: 'Information',
            title: 'Texto',
            type: 'markdown',
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
