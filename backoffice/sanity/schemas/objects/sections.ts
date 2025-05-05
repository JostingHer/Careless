import {defineType} from 'sanity'

export const sections = defineType({
    name: 'sections',
    title: 'Secciones de la página',
    type: 'array',
    of: [
        // {
        //     type: 'reference',
        //     name: 'sectionShared',
        //     title: 'Seccion en referencia (compartida)',
        //     to: [{type: 'sharedSection'}],
        //     options: {
        //         collapsible: true,
        //         collapsed: true,
        //     },
        // },
        {
            type: 'reference',
            name: 'bannerPost',
            title: 'Banner de un artículo',
            to: [{type: 'Post'}],
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            type: 'sectionCarouselPostFilter',
            name: 'sectionCarouselPostFilter',
            title: 'Carrusel Filtrado de Posts',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],
})
