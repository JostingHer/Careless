import {defineType} from 'sanity'

import {sectionBase} from '../base'

export const heroPost = defineType({
    name: 'heroPost',
    title: 'Hero Post',
    description: 'Hero para post, con imagen y texto',
    type: 'object',
    fields: [...sectionBase],
})
