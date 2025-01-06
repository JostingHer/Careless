import {defineField, defineType} from 'sanity'

import {sectionBaseMediaList} from '../base'

export const sectionPublicationsCarousel = defineType({
    name: 'sectionPublicationsCarousel',
    title: 'Sección publicaciones de redes sociales carousel',
    type: 'object',
    fields: [...sectionBaseMediaList],
    // puede que camnie com landign de infojobs
})
