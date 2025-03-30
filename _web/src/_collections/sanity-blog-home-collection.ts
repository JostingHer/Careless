import { defineCollection } from "astro:content";
import sanityClient from "@/_shared/sanity/client";

export const homeBlogInSanity = defineCollection({
    loader: async () => {
        const homeList = await sanityClient.fetch<Array<any>>(
            `*[_type == "homeBlog" ]`,
        );
        return homeList.map((home) => ({
            ...home,
            id: home._id,
            slug: home.slug?.current,
        }));
    },
});
