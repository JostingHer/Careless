import {defineField, defineType} from 'sanity'

import {sectionBaseMediaList} from '../base'

export const stories = defineType({
    name: 'stories',
    title: 'Sección stories de redes sociales',
    type: 'object',
    fields: [...sectionBaseMediaList],
})
