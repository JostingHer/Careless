import {defineField} from 'sanity'

export const MEDIALIST = [
    defineField({
        name: 'mediaList',
        title: `Media`,
        type: 'array',
        of: [{type: 'photo'}, {type: 'video'}],
    }),
]
