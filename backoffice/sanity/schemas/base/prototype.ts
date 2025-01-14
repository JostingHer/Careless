import {defineField} from 'sanity'

import {summary} from '../objects'
import {landing} from './landing'

const prototype = [
    ...landing,
    defineField({
        name: 'summary',
        title: 'Sumario',
        description: 'Datos para montar las tarjetas cuando se llaman desde fuera de su landing',
        type: summary.name,
        options: {
            collapsible: true,
            collapsed: true,
        },
    }),
    defineField({
        name: 'ref',
        title: 'Referencia',
        description: 'La misma landing en castellano e inglés debe tener la misma referencia',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'refDoc',
        title: 'ReferenciaDoc',
        type: 'reference',
        to: [{type: 'homeBlog'}],
    }),
]
export {prototype}
