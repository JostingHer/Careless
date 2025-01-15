import { postBlogInSanity } from "@/collections/sanity-blog-post-page";
import { homeBlogInSanity } from "../collections/sanity-blog-home-collection";

export const collections = {
    homeBlog: homeBlogInSanity,
    postBlog: postBlogInSanity
};

export type CollectionName = keyof typeof collections;
