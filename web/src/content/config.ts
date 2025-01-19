import { postBlogInSanity } from "@/collections/sanity-blog-post-collecion";
import { homeBlogInSanity } from "../collections/sanity-blog-home-collection";
import { sharedSectionsInSanity } from "@/collections/sanity-blog-shared-collecion";

export const collections = {
    homeBlog: homeBlogInSanity,
    postBlog: postBlogInSanity,
    sharedSections: sharedSectionsInSanity,
};

export type CollectionName = keyof typeof collections;
