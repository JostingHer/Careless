import {cta, metadata, photo, video} from './definitions'
import {author, category, homeBlog, legal, post, setting, shared, theme} from './document'
import contact from './document/contact'
import popups from './document/popups'
import {
    banner,
    heroBasic,
    heroHome,
    sectionBasic,
    sectionCarousel,
    sectionCarouselPostFilter,
    sectionGallery,
    sectionPublicationsCarousel,
    sectionReference,
    sections,
    stories,
    summary,
} from './objects'

export const schemaTypes = [
    // sort exports schemas definitios, objects, document. FROM LESS TO MORE

    // definitions
    photo,
    video,
    cta,
    metadata,

    // objects
    heroBasic,
    heroHome,

    summary,
    sectionReference,
    sectionBasic,
    sectionCarousel,
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

    theme,
    legal,
    popups,
    shared,
    contact,
    setting,
    sections,
]
