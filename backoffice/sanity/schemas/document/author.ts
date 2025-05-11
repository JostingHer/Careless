import {defineField, defineType} from 'sanity'

import {prototype} from '../base/prototype'

export const author = defineType({
    name: 'Author',
    title: 'Autores del blog',
    type: 'document',
    groups: [
        {name: 'seo', title: 'Metas'},
        {name: 'content', title: 'Contenido'},
        {name: 'settings', title: 'Configuración'},
    ],
    fields: [
        ...prototype,
        defineField({
            name: 'author',
            title: 'Nombre',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Pequeña biografía',
            type: 'markdown',
        }),
        defineField({
            name: 'job',
            title: 'Puesto de trabajo',
            type: 'string',
        }),
        defineField({
            name: 'keywords',
            title: 'Palabras clave',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'cv',
            title: 'Currículum vitae .pdf',
            type: 'file',
            options: {
                collapsible: true,
                collapsed: false,
            },
        }),
        defineField({
            name: 'image',
            title: 'Foto',
            type: 'photo',
        }),
        defineField({
            name: 'theme',
            title: 'Tema',
            type: 'reference',
            to: [{type: 'theme'}],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
