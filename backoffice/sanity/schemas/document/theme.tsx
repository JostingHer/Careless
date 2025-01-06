import {defineField, defineType} from 'sanity'

export const theme = defineType({
    name: 'theme',
    title: 'Temas de la web',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nombre del tema (bgColor/textColor)',
            type: 'string',
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Color de Fondo (Hexadecimal)',
            type: 'string',
            initialValue: '#fff',
            validation: (Rule) =>
                Rule.regex(/^#([0-9A-F]{3}){1,2}$/i, {
                    name: 'hex color',
                    message: 'Debe ser un color hexadecimal. Ejemplo: #FFFFFF',
                }),
        }),
        defineField({
            name: 'secondColor',
            title: 'Color secundario (Hexadecimal)',
            type: 'string',
            initialValue: '#3954C6',
            validation: (Rule) =>
                Rule.regex(/^#([0-9A-F]{3}){1,2}$/i, {
                    name: 'hex color',
                    message: 'Debe ser un color hexadecimal. Ejemplo: #3954C6',
                }),
        }),
        defineField({
            name: 'textColor',
            title: 'Color del Texto (Hexadecimal)',
            type: 'string',
            initialValue: '#000000',
            validation: (Rule) =>
                Rule.regex(/^#([0-9A-F]{3}){1,2}$/i, {
                    name: 'hex color',
                    message: 'Debe ser un color hexadecimal. Ejemplo: #000000',
                }),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            bgColor: 'backgroundColor',
            textColor: 'textColor',
            secondColor: 'secondColor',
        },
        prepare({title, bgColor, textColor, secondColor}) {
            return {
                title,
                subtitle: `${bgColor || '#ccc'} / ${textColor || '#000'} / ${secondColor || '#3954C6'}`,
                media: (
                    <div
                        style={{
                            backgroundColor: bgColor || '#ccc',
                            color: textColor || '#000',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                            position: 'relative',
                        }}
                    >
                        <span
                            style={{
                                backgroundColor: secondColor || '#3954C6',
                                color: textColor || '#000',
                                padding: '2px',
                            }}
                        >
                            A
                        </span>
                    </div>
                ),
            }
        },
    },
})
