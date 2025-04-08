import { authorInSanity } from "@/contexts/Blog/infraestructure/sanity-author-blog-collection";
import { categoryInSanity } from "@/contexts/Blog/infraestructure/sanity-category-blog-collection";
import { homeBlogInSanity } from "@/contexts/Blog/infraestructure/sanity-home-blog-collection";
import { postInSanity } from "@/contexts/Blog/infraestructure/sanity-post-blog-collection";

export const collections = {
    HomeBlog: homeBlogInSanity,
    Post: postInSanity,
    Category: categoryInSanity,
    Author: authorInSanity,
};
