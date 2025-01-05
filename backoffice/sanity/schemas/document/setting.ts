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
            name: 'postalAddress',
            title: 'Dirección postal',
            type: 'string',
        }),
        defineField({
            name: 'googleMapsUrl',
            title: 'Url de Google Maps',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Teléfono',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),

        defineField({
            name: 'socialLinks',
            title: 'Links a RRSS',
            type: 'array',
            of: [{type: 'string'}],
        }),
    ],

    preview: {
        select: {
            title: 'siteUrl',
            subtitle: 'seo.title',
        },
    },
})
