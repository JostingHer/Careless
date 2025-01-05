import {photo, video} from './definitions'
import {author, category, homeBlog, legal, post, setting} from './document'
import {heroHomeBlog, summary} from './objects'

export const schemaTypes = [
    // sort exports schemas definitios, objects, document. FROM LESS TO MORE

    // definitions
    photo,
    video,

    // objects
    heroHomeBlog,
    summary,

    // sections

    // documents
    homeBlog,
    author,
    post,
    category,
    legal,
    setting,
]
