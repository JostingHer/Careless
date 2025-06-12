import {defineType} from 'sanity'

export const postSections = defineType({
    name: 'postSections',
    title: 'Secciones de un blog',
    type: 'array',
    of: [
        // {
        //     type: 'reference',
        //     name: 'Seccion de referencia',
        //     title: 'Seccion en referencia (compartida)',
        //     to: [{type: 'sharedSection'}],
        //     options: {
        //         collapsible: true,
        //         collapsed: true,
        //     },
        // },
        // {
        //     type: 'sectionBasic',
        //     name: 'sectionBasic',
        //     title: 'Sección Básica',
        // },
        // {
        //     type: 'banner',
        //     name: 'banner',
        //     title: 'Banner',
        // },
        {
            type: 'sectionMarkdown',
            name: 'sectionMarkdown',
            title: 'Markdown',
        },
    ],
})
