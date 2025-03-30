import {defineField, defineType} from 'sanity'

export const popups = defineType({
    name: 'popup',
    title: 'Popups',
    type: 'document',
    groups: [
        {name: 'content', title: 'Contenido'},
        {name: 'settings', title: 'Configuración'},
    ],
    fields: [
        defineField({
            name: 'ref',
            title: 'Referencia',
            type: 'string',
        }),
        defineField({
            name: 'copy',
            title: 'Contenido',
            group: 'content',
            type: 'markdown',
        }),
        defineField({
            name: 'showPhone',
            title: 'Mostrar teléfono',
            group: 'content',
            type: 'boolean',
        }),
        defineField({
            name: 'description',
            description: 'Optativo. Contenido justo antes del formulario y debajo del teléfono si está activado.',
            title: 'Descripción',
            group: 'content',
            type: 'markdown',
        }),
        defineField({
            name: 'image',
            title: 'Imagen',
            type: 'image',
            group: 'content',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'details',
            description: 'Opcional. Espacio para detallar información adicional. Se muestra debajo del formulario.',
            title: 'Descripción',
            group: 'content',
            type: 'markdown',
        }),
    ],
    preview: {
        select: {
            title: 'ref',
            subtitle: 'language',
            media: 'image',
        },
    },
})
