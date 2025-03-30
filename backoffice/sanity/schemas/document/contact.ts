import {defineType} from 'sanity'

import {prototype} from '../base'

export default defineType({
    name: 'contact',
    title: 'Contacto',
    type: 'document',
    groups: [
        {name: 'seo', title: 'Metas'},
        {name: 'content', title: 'Contenido'},
        {name: 'settings', title: 'Configuración'},
    ],
    fields: [...prototype],

    preview: {
        select: {
            title: 'name',
            subtitle: 'language',
        },
    },
})
