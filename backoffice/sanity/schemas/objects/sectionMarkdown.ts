// schemas/sections/sectionMarkdown.ts
import {defineField, defineType} from 'sanity'

export const sectionMarkdown = defineType({
    name: 'sectionMarkdown',
    title: 'Sección Markdown',
    type: 'object',
    fields: [
        defineField({
            name: 'content',
            title: 'Contenido Markdown',
            type: 'markdown',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})
