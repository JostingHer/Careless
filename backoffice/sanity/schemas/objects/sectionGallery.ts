import {defineField, defineType} from 'sanity'

import {sectionBaseMediaList} from '../base'

export const sectionGallery = defineType({
    name: 'sectionGallery',
    title: 'Sección galleria',
    type: 'object',
    fields: [
        ...sectionBaseMediaList,
        defineField({
            name: 'galleryStyles',
            title: 'Estilos de Galería',
            type: 'string',
            options: {
                list: [
                    {title: 'Mosaico', value: 'mosaic'},
                    {title: 'Rejilla', value: 'grid'},
                ],
                layout: 'radio',
            },
            initialValue: 'mosaic', // valor por defecto
        }),
    ],
})
