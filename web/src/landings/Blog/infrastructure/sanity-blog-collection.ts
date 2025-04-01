import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { HomeBlog } from "@/common/sanity/sanity.types.ts";
import type { LandingPage } from "@/common/types";

export const homeBlogInSanity = defineCollection({
    loader: async () => {
        const homeList = await sanityClient.fetch<Array<HomeBlog>>(
            `*[_type == "homeBlog" ]`,
        );
        // const homeLists = await sanityClient.fetch<Array<HomeBlog>>(
        //     `*[_type == "homeBlog" ]{
        //             ...,
        //             pageSections[]{
        //                 ...,
        //                 sharedRef->,
        //                 category->,
        //                 author->,
        //                 media{
        //                     ...,
        //                     photo{
        //                         ...,
        //                         asset->
        //                     }
        //                 },
        //                 theme->
        //             }
        //                 }
        //     `,
        // );

        return homeList.map((home) => ({
            ...home,
            _id: home._id,
            id: home._id,
            slug: home.slug?.current || "/",
            ref: home.ref,
        }));
    },
});

type CleanHomeBlog = Omit<HomeBlog, keyof LandingPage>;

export type HomeBlogEntry = CleanHomeBlog & LandingPage;
