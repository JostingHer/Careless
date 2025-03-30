import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { Home } from "@/common/sanity/sanity.types.ts";
import type { LandingPage } from "@/common/types";

export const homeInSanity = defineCollection({
    loader: async () => {
        const homeList = await sanityClient.fetch<Array<Home>>(
            `*[_type == "homePage" ]`,
        );
        return homeList.map((home) => ({
            ...home,
            id: home._id,
            slug: home.slug?.current || "/",
        }));
    },
});

type CleanHome = Omit<Home, keyof LandingPage>;

export type HomeEntry = CleanHome & LandingPage;
