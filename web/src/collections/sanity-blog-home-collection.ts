import { defineCollection } from "astro:content";
import sanityClient from "@/shared/sanity/client";
import type { HomeBlog } from "@/shared/sanity/sanity.types";

export const homeBlogInSanity = defineCollection({
    loader: async () => {
        const homeList = await sanityClient.fetch<Array<HomeBlog>>(
            `*[_type == "homeBlog" ]`,
        );
        return homeList.map((home) => ({
            ...home,
            id: home._id,
            slug: home.slug?.current,
            ref: home.ref,
            lang: home.language,
        }));
    },
});
