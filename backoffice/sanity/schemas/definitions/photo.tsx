import {defineField, defineType} from 'sanity'

export const photo = defineType({
    name: 'photo',
    title: 'Foto',
    type: 'object',
    fields: [
        defineField({
            name: 'photo',
            title: 'Imagen',
            type: 'image',
            options: {
                collapsible: true,
                collapsed: false,
                hotspot: true,
            },
            fields: [
                defineField({
                    title: 'Texto alternativo',
                    name: 'caption',
                    type: 'string',
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'photo.caption',
            asset: 'photo',
        },
        prepare(selection) {
            const {title, asset} = selection
            return {
                title: title || 'Sin texto alternativo',
                media: asset,
            }
        },
    },
})
