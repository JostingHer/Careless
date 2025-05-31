import { authorInSanity } from "@/contexts/Blog/infraestructure/sanity-author-blog-collection";
import { categoryInSanity } from "@/contexts/Blog/infraestructure/sanity-category-blog-collection";
import { homeBlogInSanity } from "@/contexts/Blog/infraestructure/sanity-home-blog-collection";
import { postInSanity } from "@/contexts/Blog/infraestructure/sanity-post-blog-collection";
import { productInPrestashop } from "@/contexts/Shop/infraestructure/ps-product-shop-collection";

export const collections = {
    HomeBlog: homeBlogInSanity,
    Post: postInSanity,
    Category: categoryInSanity,
    Author: authorInSanity,
    Product: productInPrestashop,
};
