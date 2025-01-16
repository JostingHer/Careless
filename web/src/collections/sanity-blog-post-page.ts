import { defineCollection } from "astro:content";
import sanityClient from "@/shared/sanity/client";
import type { Post } from "@/shared/sanity/sanity.types";

export const postBlogInSanity = defineCollection({
    loader: async () => {
        const postList =
            await sanityClient.fetch<Array<Post>>(`*[_type == "Post" ]`);

        console.log(postList);
        return postList.map((post) => ({
            ...post,
            id: post._id,
            slug: post.slug?.current,
            ref: post.ref,
            lang: post.language,
        }));
    },
});
