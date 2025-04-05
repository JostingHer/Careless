import {defineField} from 'sanity'

import {Languages} from '../../../../company/settings/translations'
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
            layout: 'radio',
        },
        initialValue: Languages[0].value,
    }),
    {
        name: 'metas',
        title: 'SEO',
        type: 'metadata',
        group: 'seo',
        options: {collapsible: true, collapsed: true},
    },
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
