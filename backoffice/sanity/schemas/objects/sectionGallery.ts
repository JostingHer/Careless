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
                    {title: 'Carrusel', value: 'carousel'},
                    {title: 'Rejilla', value: 'grid'},
                ],
                layout: 'radio', // Esto hace que se muestre como botones de opción (radio buttons)
            },
            initialValue: 'mosaic', // valor por defecto
        }),
    ],

    // toggle de las distintas formas de mostrar la galeria
})
