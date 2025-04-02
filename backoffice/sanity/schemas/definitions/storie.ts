import {defineField, defineType} from 'sanity'

export const storie = defineType({
    name: 'storie',
    title: 'Stories de redes sociales',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Información',
            type: 'markdown',
        }),
        defineField({
            name: 'videoId',
            title: 'ID del video',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Imagen que se cargara de manera predeterminada',
            type: 'photo',
        }),
    ],
})
