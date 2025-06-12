import {defineField} from 'sanity'

import {Languages} from '../../../../shared/translations/domain/languages'
import {summary} from '../definitions'

const prototype = [
    defineField({
        name: 'name',
        title: 'Nombre',
        type: 'string',
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        group: 'seo',
        options: {
            source: 'name',
            maxLength: 96,
        },
    }),
    defineField({
        name: 'language',
        title: 'Idioma',
        group: 'settings',
        type: 'string',
        options: {
            list: Languages,
            layout: 'dropdown',
        },
        initialValue: Languages[0].value,
    }),
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
]
export {prototype}
