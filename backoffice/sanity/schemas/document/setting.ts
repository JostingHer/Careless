import {defineField, defineType} from 'sanity'

export const setting = defineType({
    name: 'setting',
    title: 'Configuración',
    type: 'document',
    groups: [{name: 'settings', title: 'Configuración'}],
    fields: [
        defineField({
            name: 'siteUrl',
            title: 'URL',
            type: 'url',
        }),
        defineField({
            name: 'legalName',
            title: 'Nombre Legal',
            type: 'string',
        }),
        defineField({
            name: 'comercialName',
            title: 'Nombre Comercial',
            type: 'string',
        }),
        defineField({
            name: 'foundingDate',
            title: 'Fecha de Fundación',
            type: 'string',
        }),
        defineField({
            name: 'googleMapsUrl',
            title: 'Url de Google Maps',
            type: 'string',
        }),
    ],

    preview: {
        select: {
            title: 'siteUrl',
        },
    },
})
