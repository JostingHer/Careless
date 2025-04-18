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
        },
        prepare({title, bgColor, textColor}) {
            return {
                title,
                subtitle: `${bgColor || '#ccc'} / ${textColor || '#000'} }`,
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
