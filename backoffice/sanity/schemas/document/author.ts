import {defineField, defineType} from 'sanity'

import {Languages} from '../../../../company/translations'

export const author = defineType({
    name: 'Author',
    title: 'Autores del blog',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre',
            type: 'string',
        }),
        defineField({
            name: 'lastName',
            title: 'Apellidos',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Pequeña biografía',
            type: 'markdown',
        }),
        defineField({
            name: 'email',
            title: 'email',
            type: 'string',
        }),
        defineField({
            name: 'post',
            title: 'Puesto',
            type: 'string',
        }),
        defineField({
            name: 'socialLinkList',
            title: 'Redes sociales',
            type: 'array',
            of: [{type: 'url'}],
        }),
        defineField({
            name: 'image',
            title: 'Foto',
            type: 'image',
        }),
        defineField({
            name: 'ref',
            title: 'Referencia',
            description: 'La misma landing en castellano e inglés debe tener la misma referencia',
            type: 'string',
        }),
        defineField({
            name: 'language',
            title: 'Idioma',
            type: 'string',
            options: {
                list: Languages,
            },
            initialValue: Languages[0].value,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
