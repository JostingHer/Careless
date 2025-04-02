import {Summary} from '../../../web/src/common/sanity/sanity.types'
import {cta, metadata, photo, storie, video} from './definitions'
import {author, category, homeBlog, legal, popups, post, setting, shared, theme} from './document'
import {
    banner,
    heroBasic,
    heroHome,
    sectionBasic,
    sectionCarouselPostFilter,
    sectionGallery,
    sectionPublicationsCarousel,
    sections,
    stories,
    summary,
} from './objects'

export const schemaTypes = [
    // sort exports schemas definitios, objects, document. FROM LESS TO MORE

    // definitions
    summary,
    photo,
    video,
    cta,
    metadata,
    storie,

    // objects
    heroBasic,
    heroHome,

    sectionBasic,
    sections,
    sectionGallery,
    sectionPublicationsCarousel,
    sectionCarouselPostFilter,
    stories,
    banner,

    // documents
    homeBlog,
    author,
    category,
    post,

    legal,
    popups,
    shared,
    setting,
    theme,
]
