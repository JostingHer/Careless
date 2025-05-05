import {cta, metadata, photo, summary, video} from './definitions'
import {author, category, homeBlog, legal, popups, post, setting, shared, theme} from './document'
import {
    banner,
    heroBasic,
    heroHome,
    heroPost,
    postSections,
    sectionBasic,
    sectionCarouselPostFilter,
    sectionMarkdown,
    sections,
} from './objects'

export const schemaTypes = [
    // sort exports schemas definitios, objects, document. FROM LESS TO MORE

    // definitions
    summary,
    metadata,
    photo,
    video,
    cta,

    // objects
    heroHome,
    heroBasic,
    heroPost,
    sectionBasic,
    sectionMarkdown,
    banner,
    sectionCarouselPostFilter,

    // sectionGallery,

    sections,
    postSections,

    // documents
    theme,
    homeBlog,
    post,
    author,
    category,

    legal,
    popups,
    shared,
    setting,
]
