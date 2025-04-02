import {defineType} from 'sanity'

export const sections = defineType({
    name: 'sections',
    title: 'Secciones de la página',
    type: 'array',
    of: [
        {
            type: 'reference',
            name: 'Seccion de referencia',
            title: 'Seccion en referencia (compartida)',
            to: [{type: 'sharedSection'}],
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            type: 'heroHome',
            name: 'hero',
            title: 'Hero',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            type: 'heroBasic',
            name: 'heroBasic',
            title: 'heroBasic',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            type: 'banner',
            name: 'banner',
            title: 'Banner',
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
        {
            type: 'sectionPublicationsCarousel',
            name: 'sectionPublicationsCarousel',
            title: 'Carrusel de Publicaciones',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            type: 'sectionGallery',
            name: 'sectionGallery',
            title: 'Seccion de la galleria esitilo bento',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            type: 'stories',
            name: 'sectionStories',
            title: 'Seccion de stories',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
        {
            type: 'sectionBasic',
            name: 'sectionBasic',
            title: 'Sección Básica',
            options: {
                collapsible: true,
                collapsed: true,
            },
        },
    ],
})
