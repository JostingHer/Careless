import {defineType} from 'sanity'

import {sectionBase} from '../base'

export const banner = defineType({
    name: 'banner',
    title: 'Banner básico',
    type: 'object',
    fields: [...sectionBase],
})
