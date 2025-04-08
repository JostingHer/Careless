import {defineField} from 'sanity'

import {photo} from './photo'

export const metadata = {
    title: 'Metadata',
    name: 'metadata',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Titulo',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Descripcion',
            type: 'string',
        },
        {
            name: 'canonical',
            description: 'Sí se deja vacia se autoreferencia',
            title: 'Canonical',
            type: 'string',
        },
        {
            title: 'Robots',
            name: 'robots',
            type: 'string',
            options: {
                list: [
                    {title: 'index, follow', value: 'index, follow'},
                    {title: 'index, nofollow', value: 'index, nofollow'},
                    {title: 'noindex, follow', value: 'noindex, follow'},
                    {title: 'noindex, nofollow', value: 'noindex, nofollow'},
                ], // <-- predefined values
                layout: 'dropdown', // <-- defaults to 'dropdown'
            },
        },
        ...photo.fields,
    ],
}
