import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { HomeBlog } from "@/common/sanity/sanity.types.ts";
import type { LandingPage } from "@/common/types";

export const homeBlogInSanity = defineCollection({
    loader: async () => {
        const homeList = await sanityClient.fetch<Array<HomeBlog>>(
            `*[_type == "homeBlog" ]`,
        );

        return homeList.map((home) => ({
            ...home,
            id: home._id,
            _id: home._id,
            slug: home.slug?.current || "/",
        }));
    },
});

type CleanHomeBlog = Omit<HomeBlog, keyof LandingPage>;

export type homeBlogEntry = CleanHomeBlog & LandingPage;
