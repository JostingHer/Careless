import {defineType} from 'sanity'

import {sectionBase} from '../base'

export const heroHome = defineType({
    name: 'heroHome',
    title: 'Hero Home',
    type: 'object',
    fields: [...sectionBase],
})
