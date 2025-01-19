import {defineField, defineType} from 'sanity'

import {Languages} from '../../../../company/settings/translations'
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
            name: 'nameAuthor',
            title: 'Nombre',
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
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'language',
        },
    },
})
