import {defineType} from 'sanity'

import {sectionBase} from '../base'

export const heroBasic = defineType({
    name: 'heroBasic',
    title: 'Hero básico',
    type: 'object',
    fields: [...sectionBase],
})
