import { homeBlogInSanity } from "../_collections/sanity-blog-home-collection";

export const collections = {
    homeBlog: homeBlogInSanity,
};

export type CollectionName = keyof typeof collections;
