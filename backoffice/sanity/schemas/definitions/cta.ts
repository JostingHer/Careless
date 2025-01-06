import {defineField, defineType} from 'sanity'

export const cta = defineType({
    name: 'cta',
    title: 'Call to Action',
    type: 'object',
    fields: [
        defineField({
            name: 'type',
            title: 'Tipo de CTA',
            type: 'string',
            options: {
                list: [
                    {title: 'Enlace', value: 'link'},
                    {title: 'Popup', value: 'popup'},
                ],
                layout: 'radio',
            },
            initialValue: 'link',
        }),
        defineField({
            name: 'url',
            title: 'Enlace (URL)',
            type: 'url',
            hidden: ({parent}) => parent?.type !== 'link',
        }),
        defineField({
            name: 'popupRef',
            title: 'Selecciona un Popup',
            type: 'reference',
            to: [{type: 'popup'}],
            hidden: ({parent}) => parent?.type !== 'popup', // Se oculta si el tipo no es 'popup'
        }),
        // Agregar campo para seleccionar el estilo del botón
        defineField({
            name: 'buttonStyle',
            title: 'Estilo del Botón',
            type: 'string',
            options: {
                list: [
                    {title: 'Primario', value: 'primary'},
                    {title: 'Secundario', value: 'secondary'},
                    {title: 'Terciario', value: 'tertiary'},
                ],
                layout: 'radio',
            },
            initialValue: 'primary',
        }),
    ],
    preview: {
        select: {
            title: 'type',
            url: 'url',
            popupTitle: 'popupRef.title',
            buttonStyle: 'buttonStyle',
        },
        prepare(selection) {
            const {title, url, popupTitle, buttonStyle} = selection
            return {
                title: title === 'link' ? url : popupTitle,
                subtitle: `${title} - Estilo: ${buttonStyle}`,
            }
        },
    },
})
