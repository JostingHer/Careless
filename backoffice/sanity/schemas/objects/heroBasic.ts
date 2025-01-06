import {defineField, defineType} from 'sanity'

import {sectionBase} from '../base'

export const heroBasic = defineType({
    name: 'heroBasic',
    title: 'Hero Home Blog',
    type: 'object',
    fields: [...sectionBase],
})
